import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, symlink, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { detectAgents, resolveTargets } from '../lib/targets.mjs';
import { installAll, uninstallAll } from '../lib/install.mjs';

async function fixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'agent-skills-test-'));
  const home = path.join(root, 'home');
  const skills = path.join(root, 'skills');
  const demo = path.join(skills, 'demo');
  await mkdir(path.join(home, '.claude'), { recursive: true });
  await mkdir(path.join(home, '.config', 'opencode'), { recursive: true });
  await mkdir(path.join(home, '.agents'), { recursive: true });
  await mkdir(path.join(demo, 'references'), { recursive: true });
  await writeFile(path.join(demo, 'SKILL.md'), '---\nname: demo\ndescription: test skill\n---\n# Demo\n');
  await writeFile(path.join(demo, 'references', 'one.md'), 'reference\n');
  return { root, home, skills, demo };
}

test('detects installed agents and includes the shared directory', async () => {
  const { root, home } = await fixture();
  try {
    const detected = detectAgents({ home });
    assert.deepEqual(detected.sort(), ['claude', 'codex', 'opencode', 'universal']);
    const targets = resolveTargets({ home, projectDir: root });
    const paths = targets.map((target) => target.path);
    assert.ok(paths.includes(path.join(home, '.claude', 'skills')));
    assert.ok(paths.includes(path.join(home, '.config', 'opencode', 'skills')));
    assert.ok(paths.includes(path.join(home, '.agents', 'skills')));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('installs, is idempotent, and protects modified files', async () => {
  const { root, home, skills } = await fixture();
  try {
    const targets = resolveTargets({ home, agents: ['claude'], includeUniversal: false });
    const first = await installAll({ skillsDir: skills, targets });
    assert.equal(first.length, 1);
    assert.equal(first[0].status, 'installed');
    const skillFile = path.join(home, '.claude', 'skills', 'demo', 'SKILL.md');
    assert.equal(await readFile(skillFile, 'utf8'), '---\nname: demo\ndescription: test skill\n---\n# Demo\n');
    assert.ok(existsSync(path.join(home, '.claude', 'skills', 'demo', 'references', 'one.md')));

    const second = await installAll({ skillsDir: skills, targets });
    assert.equal(second[0].status, 'unchanged');

    await writeFile(skillFile, 'locally edited\n');
    const protectedRun = await installAll({ skillsDir: skills, targets });
    assert.equal(protectedRun[0].status, 'skipped');
    assert.match(protectedRun[0].reason, /--force/);
    assert.equal(await readFile(skillFile, 'utf8'), 'locally edited\n');

    const forced = await installAll({ skillsDir: skills, targets, force: true });
    assert.equal(forced[0].status, 'updated');
    assert.equal(await readFile(skillFile, 'utf8'), '---\nname: demo\ndescription: test skill\n---\n# Demo\n');
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('dry run writes nothing and symlinked targets are skipped', async () => {
  const { root, home, skills } = await fixture();
  try {
    const targets = resolveTargets({ home, agents: ['claude'], includeUniversal: false });
    const dry = await installAll({ skillsDir: skills, targets, dryRun: true });
    assert.equal(dry[0].status, 'would-write');
    assert.equal(existsSync(path.join(home, '.claude', 'skills', 'demo', 'SKILL.md')), false);

    const linked = path.join(root, 'linked-skills');
    await mkdir(linked, { recursive: true });
    await mkdir(path.join(home, '.claude', 'skills'), { recursive: true });
    await symlink(linked, path.join(home, '.claude', 'skills', 'demo'));
    const symlinkRun = await installAll({ skillsDir: skills, targets });
    assert.equal(symlinkRun[0].status, 'skipped');
    assert.match(symlinkRun[0].reason, /symlink/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('uninstall removes only bundled files and protects local edits', async () => {
  const { root, home, skills } = await fixture();
  try {
    const targets = resolveTargets({ home, agents: ['claude'], includeUniversal: false });
    await installAll({ skillsDir: skills, targets });

    const dry = await uninstallAll({ skillsDir: skills, targets, dryRun: true });
    assert.equal(dry[0].status, 'would-remove');
    assert.ok(existsSync(path.join(home, '.claude', 'skills', 'demo', 'SKILL.md')));

    await writeFile(path.join(home, '.claude', 'skills', 'demo', 'notes.md'), 'mine\n');
    const protectedRun = await uninstallAll({ skillsDir: skills, targets });
    assert.equal(protectedRun[0].status, 'skipped');
    assert.match(protectedRun[0].reason, /not in bundle/);
    assert.ok(existsSync(path.join(home, '.claude', 'skills', 'demo', 'SKILL.md')));

    await rm(path.join(home, '.claude', 'skills', 'demo', 'notes.md'));
    const removed = await uninstallAll({ skillsDir: skills, targets });
    assert.equal(removed[0].status, 'removed');
    assert.equal(existsSync(path.join(home, '.claude', 'skills', 'demo')), false);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
