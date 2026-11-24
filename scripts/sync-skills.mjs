import { cp, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { fileURLToPath } from 'node:url';

const HOME = os.homedir();
const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const SKILLS = [
  { name: 'no-ai-slop', source: path.join(HOME, 'no-ai-slop') },
  { name: 'durable-instructions', source: path.join(HOME, 'durable-instructions') },
];

const excluded = new Set([
  '.git',
  '.superpowers',
  '.worktrees',
  '.claude-plugin',
  'docs',
  'node_modules',
  '.DS_Store',
]);

function filter(source) {
  if (source.split(path.sep).slice(-2).join('/') === 'no-ai-slop/durable-instructions') return false;
  return !excluded.has(path.basename(source));
}

for (const skill of SKILLS) {
  if (!existsSync(path.join(skill.source, 'SKILL.md'))) {
    throw new Error(`missing source skill: ${skill.source}`);
  }
  const destination = path.join(ROOT, 'skills', skill.name);
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  await cp(skill.source, destination, { recursive: true, filter });
  console.log(`synced ${skill.name} -> skills/${skill.name}`);
}
