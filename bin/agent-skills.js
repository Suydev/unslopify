#!/bin/sh
':' //; exec node "$0" "$@"
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { AGENTS, detectAgents, resolveTargets } from '../lib/targets.mjs';
import { findSkills, installAll } from '../lib/install.mjs';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const DEFAULT_SKILLS = path.join(ROOT, 'skills');

const HELP = `suydev-agent-skills — install portable skills into every agent on this machine

Usage:
  suydev-agent-skills [install] [options]
  suydev-agent-skills list

Options:
  --all                 target every known agent directory
  --agents a,b,c        target specific agents: ${AGENTS.map((a) => a.id).join(',')}
  --project             also write project-local directories in the current folder
  --force               overwrite files that differ from the bundled skill
  --dry-run             show what would happen without writing
  --no-universal        skip the shared ~/.agents/skills directory
  --json                machine-readable report
  --home DIR            override home directory (testing)
  --skills DIR          override bundled skills directory (testing)
  -h, --help            show this help

Default: detected agents + the shared ~/.agents/skills directory, personal scope only.
Existing files that differ are skipped; never overwritten without --force.
Symlinked skill directories are left untouched.
`;

function parse(args) {
  const options = {
    command: 'install',
    all: false,
    agents: [],
    project: false,
    force: false,
    dryRun: false,
    universal: true,
    json: false,
    home: os.homedir(),
    skillsDir: DEFAULT_SKILLS,
  };
  const rest = [];
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === 'install' || arg === 'list') {
      options.command = arg;
    } else if (arg === '--all') options.all = true;
    else if (arg === '--agents') options.agents = (args[++i] ?? '').split(',').map((s) => s.trim()).filter(Boolean);
    else if (arg === '--project') options.project = true;
    else if (arg === '--force') options.force = true;
    else if (arg === '--dry-run') options.dryRun = true;
    else if (arg === '--no-universal') options.universal = false;
    else if (arg === '--json') options.json = true;
    else if (arg === '--home') options.home = args[++i];
    else if (arg === '--skills') options.skillsDir = args[++i];
    else if (arg === '-h' || arg === '--help') options.command = 'help';
    else rest.push(arg);
  }
  if (rest.length > 0) throw new Error(`unknown arguments: ${rest.join(', ')}`);
  return options;
}

function printReport(results, json) {
  if (json) {
    process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
    return;
  }
  const icons = {
    installed: '+',
    updated: '~',
    unchanged: '=',
    skipped: '!',
    'would-write': '?',
  };
  for (const result of results) {
    const agents = result.agents.join(', ');
    const suffix = result.reason ? ` — ${result.reason}` : '';
    process.stdout.write(`${icons[result.status] ?? '?'} ${result.skill} -> ${result.path} [${agents}] ${result.status}${suffix}\n`);
  }
  const summary = results.reduce((acc, result) => {
    acc[result.status] = (acc[result.status] ?? 0) + 1;
    return acc;
  }, {});
  process.stdout.write(`\n${Object.entries(summary).map(([key, value]) => `${value} ${key}`).join(', ')}\n`);
}

try {
  const options = parse(process.argv.slice(2));
  if (options.command === 'help') {
    process.stdout.write(HELP);
  } else {
    const detected = detectAgents({ home: options.home });
    const targets = resolveTargets({
      home: options.home,
      all: options.all,
      agents: options.agents,
      project: options.project,
      includeUniversal: options.universal,
    });

    if (options.command === 'list') {
      const payload = { detected, targets };
      process.stdout.write(options.json ? `${JSON.stringify(payload, null, 2)}\n` : `${detected.join(', ') || 'none'}\n${targets.map((t) => `${t.path} [${t.agents.join(', ')}]`).join('\n')}\n`);
    } else {
      if (!options.json) {
        process.stdout.write(`Detected agents: ${detected.join(', ') || 'none'}\n`);
        process.stdout.write(`Targets: ${targets.length}\n\n`);
      }
      const results = await installAll({
        skillsDir: options.skillsDir,
        targets,
        force: options.force,
        dryRun: options.dryRun,
      });
      printReport(results, options.json);
    }
  }
} catch (error) {
  process.stderr.write(`error: ${error.message}\n`);
  process.exitCode = 1;
}
