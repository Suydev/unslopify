import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export function expandHome(value, home = os.homedir()) {
  return value === '~' || value.startsWith('~/')
    ? path.join(home, value.slice(2))
    : value;
}

export const AGENTS = [
  {
    id: 'universal',
    name: 'Shared Agent Skills (.agents)',
    personal: ['~/.agents/skills'],
    project: ['.agents/skills'],
    markers: ['~/.agents'],
  },
  {
    id: 'claude',
    name: 'Claude Code',
    personal: ['~/.claude/skills'],
    project: ['.claude/skills'],
    markers: ['~/.claude'],
  },
  {
    id: 'codex',
    name: 'OpenAI Codex',
    personal: ['~/.agents/skills', '~/.codex/skills'],
    project: ['.agents/skills', '.codex/skills'],
    markers: ['~/.codex', '~/.agents'],
  },
  {
    id: 'cursor',
    name: 'Cursor',
    personal: ['~/.agents/skills', '~/.cursor/skills', '~/.claude/skills', '~/.codex/skills'],
    project: ['.agents/skills', '.cursor/skills', '.claude/skills', '.codex/skills'],
    markers: ['~/.cursor'],
  },
  {
    id: 'gemini',
    name: 'Gemini CLI',
    personal: ['~/.agents/skills', '~/.gemini/skills'],
    project: ['.agents/skills', '.gemini/skills'],
    markers: ['~/.gemini'],
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot / VS Code',
    personal: ['~/.agents/skills', '~/.copilot/skills'],
    project: ['.agents/skills', '.github/skills'],
    markers: ['~/.copilot', '~/.vscode', '~/.config/Code', '~/.config/Code - OSS'],
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    personal: ['~/.agents/skills', '~/.config/opencode/skills', '~/.claude/skills'],
    project: ['.agents/skills', '.opencode/skills', '.claude/skills'],
    markers: ['~/.config/opencode', '~/.opencode'],
  },
  {
    id: 'amp',
    name: 'Amp',
    personal: ['~/.config/agents/skills', '~/.agents/skills', '~/.config/amp/skills'],
    project: ['.agents/skills'],
    markers: ['~/.config/amp', '~/.config/agents', '~/.amp'],
  },
  {
    id: 'windsurf',
    name: 'Windsurf / Devin',
    personal: ['~/.agents/skills', '~/.config/devin/skills'],
    project: ['.agents/skills', '.devin/skills', '.windsurf/skills'],
    markers: ['~/.windsurf', '~/.config/devin', '~/.devin'],
  },
];

export function agentById(id) {
  return AGENTS.find((entry) => entry.id === id);
}

export function detectAgents({ home = os.homedir() } = {}) {
  return AGENTS.filter((entry) =>
    entry.markers.some((marker) => existsSync(expandHome(marker, home)))
  ).map((entry) => entry.id);
}

export function resolveTargets({
  home = os.homedir(),
  projectDir = process.cwd(),
  all = false,
  agents = [],
  project = false,
  includeUniversal = true,
} = {}) {
  let selected;
  if (agents.length > 0) {
    const unknown = agents.filter((id) => !agentById(id));
    if (unknown.length > 0) {
      throw new Error(`unknown agent(s): ${unknown.join(', ')}. Known: ${AGENTS.map((a) => a.id).join(', ')}`);
    }
    selected = [...agents];
  } else if (all) {
    selected = AGENTS.map((entry) => entry.id);
  } else {
    selected = detectAgents({ home });
  }

  if (includeUniversal && !selected.includes('universal')) {
    selected.push('universal');
  }

  const map = new Map();
  for (const id of selected) {
    const entry = agentById(id);
    if (!entry) continue;
    const paths = [...entry.personal];
    if (project) paths.push(...entry.project);
    for (const raw of paths) {
      const absolute = raw.startsWith('~')
        ? expandHome(raw, home)
        : path.resolve(projectDir, raw);
      const existing = map.get(absolute) ?? { path: absolute, agents: [], scope: raw.startsWith('~') ? 'personal' : 'project' };
      if (!existing.agents.includes(id)) existing.agents.push(id);
      map.set(absolute, existing);
    }
  }
  return [...map.values()].sort((a, b) => a.path.localeCompare(b.path));
}
