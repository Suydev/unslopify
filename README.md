# suydev-agent-skills

One npm package that installs the `no-ai-slop` and `durable-instructions` skills into every agent on this machine. Both skills are bundled, so no network access is needed at install time.

## Install

```bash
npm install -g suydev-agent-skills
```

Or run it once without installing:

```bash
npx suydev-agent-skills --dry-run
npx suydev-agent-skills
```

After installing, restart your agents so they re-scan their skill directories.

## What it does

By default the CLI detects agents by looking for their config directories, then installs into their personal skill folders. It always includes the vendor-neutral shared folder `~/.agents/skills/`, which most modern agents read.

| Agent | Personal folders written |
|---|---|
| Shared (Codex, Gemini, Cursor, Copilot, OpenCode, Amp, Windsurf) | `~/.agents/skills/` |
| Claude Code | `~/.claude/skills/` |
| OpenAI Codex | `~/.codex/skills/` |
| Cursor | `~/.cursor/skills/` |
| Gemini CLI | `~/.gemini/skills/` |
| GitHub Copilot / VS Code | `~/.copilot/skills/` |
| OpenCode | `~/.config/opencode/skills/` |
| Amp | `~/.config/agents/skills/`, `~/.config/amp/skills/` |
| Windsurf / Devin | `~/.config/devin/skills/` |

One physical copy per path: targets are de-duplicated. For example `~/.agents/skills/` is written once even though seven agents read it.

## Commands

```bash
suydev-agent-skills list                 # detected agents and resolved paths
suydev-agent-skills --dry-run            # preview without writing
suydev-agent-skills --all                # every known folder, detected or not
suydev-agent-skills --agents claude,cursor,opencode
suydev-agent-skills --project            # also write .agents/skills, .claude/skills, etc. in cwd
suydev-agent-skills --force              # overwrite files that differ
suydev-agent-skills --json               # machine-readable report
suydev-agent-skills uninstall --dry-run  # preview removal
suydev-agent-skills uninstall            # remove bundled files only
suydev-agent-skills uninstall --all      # from every known folder
```

`uninstall` removes only files that are byte-identical to the bundled skill. Any local edit or extra file in a skill folder stops removal for that folder, so your changes survive.

## Safety

- Existing files with the same content are left alone.
- Existing files with different content are **skipped** with a warning; nothing is overwritten without `--force`. That protects local edits such as a project-specific plugin manifest.
- Symlinked skill directories are skipped, never written through.
- No dependencies, no telemetry, no network calls during install. Node 18+ required.

## Development

```bash
npm test                  # node:test suite
npm run sync              # recopy skills from ~/no-ai-slop and ~/durable-instructions
npm pack                  # sync + test + tarball
```

`npm run sync` reads the two sibling repositories in your home directory; published tarballs already contain the synced skills. Source is at `https://github.com/Suydev/universal-agent-skills`.

Publishing happens two ways:

- Locally: `npm login && npm publish` from the package directory.
- Automatically: push to `main`; `.github/workflows/publish.yml` runs the tests and `npm publish --provenance`. This needs a repository secret named `NPM_TOKEN`, and each push must bump `version` in `package.json` or npm rejects the duplicate version.

## Why these paths

SKILL.md is an open format used by many agents; the standard defines the file, not the folder. Vendor-documented personal/project folders were checked on 2026-11-24: [Claude Code](https://code.claude.com/docs/en/skills), [OpenCode](https://docs.dev.opencode.ai/docs/skills), [Gemini CLI](https://geminicli.com/docs/cli/skills/), [Cursor](https://cursor.com/docs/skills), [GitHub Copilot](https://docs.github.com/en/copilot/concepts/customizations/agent-skills), [Windsurf](https://docs.windsurf.com/windsurf/cascade/skills), [Amp](https://ampcode.com/docs/customize/skills), and [this cross-agent path guide](https://claudeskills.page/guides/agent-skills-in-other-tools).

## License

MIT — the bundled skills keep their own MIT licenses.
