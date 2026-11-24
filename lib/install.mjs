import { createHash } from 'node:crypto';
import { copyFile, lstat, mkdir, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

async function listFiles(dir, base = dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFiles(absolute, base));
    } else if (entry.isFile()) {
      files.push({ absolute, relative: path.relative(base, absolute) });
    }
  }
  return files;
}

async function hash(absolute) {
  return createHash('sha256').update(await readFile(absolute)).digest('hex');
}

async function pathExists(absolute) {
  try {
    await lstat(absolute);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
}

async function isDirectory(absolute) {
  try {
    return (await lstat(absolute)).isDirectory();
  } catch {
    return false;
  }
}

async function isSymlink(absolute) {
  try {
    return (await lstat(absolute)).isSymbolicLink();
  } catch {
    return false;
  }
}

export async function installSkill({ source, destination, force = false, dryRun = false }) {
  const name = path.basename(source);
  const result = { skill: name, path: destination, status: 'unchanged', written: [], conflicts: [] };
  const existedBefore = await pathExists(destination);

  if (await pathExists(destination)) {
    if (await isSymlink(destination)) {
      return { ...result, status: 'skipped', reason: 'destination is a symlink' };
    }
    if (!await isDirectory(destination)) {
      return { ...result, status: 'skipped', reason: 'destination is not a directory' };
    }
  }

  const files = await listFiles(source);
  for (const file of files) {
    const target = path.join(destination, file.relative);
    let differs = true;
    if (await pathExists(target)) {
      differs = await hash(target) !== await hash(file.absolute);
      if (differs && !force) {
        result.conflicts.push(file.relative);
        continue;
      }
    }
    if (!differs) continue;
    if (!dryRun) {
      await mkdir(path.dirname(target), { recursive: true });
      await copyFile(file.absolute, target);
    }
    result.written.push(file.relative);
  }

  if (result.conflicts.length > 0 && !force) {
    result.status = 'skipped';
    result.reason = `existing files differ (${result.conflicts.join(', ')}); use --force`;
  } else if (result.written.length > 0) {
    result.status = dryRun ? 'would-write' : (existedBefore ? 'updated' : 'installed');
  }
  return result;
}

export async function findSkills(skillsDir) {
  const entries = await readdir(skillsDir, { withFileTypes: true });
  const skills = [];
  for (const entry of entries) {
    if (entry.isDirectory() && await pathExists(path.join(skillsDir, entry.name, 'SKILL.md'))) {
      skills.push(path.join(skillsDir, entry.name));
    }
  }
  return skills.sort();
}

export async function installAll({ skillsDir, targets, force = false, dryRun = false }) {
  const sources = await findSkills(skillsDir);
  if (sources.length === 0) throw new Error(`no bundled skills found in ${skillsDir}`);
  const results = [];
  for (const target of targets) {
    for (const source of sources) {
      const destination = path.join(target.path, path.basename(source));
      const result = await installSkill({ source, destination, force, dryRun });
      results.push({ ...result, target, agents: target.agents });
    }
  }
  return results;
}
