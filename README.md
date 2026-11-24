# unslopify

One npm package that installs the `no-ai-slop` and `durable-instructions` skills into every agent on this machine. Both skills are bundled, so no network access is needed at install time.

## Install

```bash
npm install -g unslopify
```

Or run it once without installing:

```bash
npx unslopify --dry-run
npx unslopify
```

After installing, restart your agents so they re-scan their skill directories.

## Troubleshooting

If `unslopify: command not found` after a successful global install:

1. Check the global bin is on your PATH: `npm prefix -g`, then look for `bin/unslopify` there.
2. Older installs of `suydev-agent-skills` left an `install-agent-skills` symlink. Remove it with `rm "$(npm prefix -g)/bin/install-agent-skills"` and reinstall.
3. Reinstall cleanly with `npm uninstall -g unslopify && npm install -g unslopify`.

## Guided setup

For an interactive walkthrough — detected agents, choice of targets, confirmation, and overwrite policy — run:

```bash
unslopify setup
```

It asks which agents to target, whether to include project-local folders, whether to use the shared folder, and which locations to write to before anything changes. For scripts and CI, use the non-interactive `install` command instead. `setup` is unavailable when stdin is not a terminal; the CLI will tell you to use `install` in that case.

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
unslopify list                 # detected agents and resolved paths
unslopify --dry-run            # preview without writing
unslopify --all                # every known folder, detected or not
unslopify --agents claude,cursor,opencode
unslopify --project            # also write .agents/skills, .claude/skills, etc. in cwd
unslopify --force              # overwrite files that differ
unslopify --json               # machine-readable report
unslopify uninstall --dry-run  # preview removal
unslopify uninstall            # remove bundled files only
unslopify uninstall --all      # from every known folder
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

`npm run sync` reads the two sibling repositories in your home directory; published tarballs already contain the synced skills. Source is at `https://github.com/Suydev/unslopify`.

Publishing happens two ways:

- Locally: `npm login && npm publish` from the package directory.
- Automatically: push to `main`; `.github/workflows/publish.yml` runs the tests and `npm publish --provenance`. This needs a repository secret named `NPM_TOKEN`, and each push must bump `version` in `package.json` or npm rejects the duplicate version.

## Why these paths

SKILL.md is an open format used by many agents; the standard defines the file, not the folder. Vendor-documented personal/project folders were checked on 2026-11-24: [Claude Code](https://code.claude.com/docs/en/skills), [OpenCode](https://docs.dev.opencode.ai/docs/skills), [Gemini CLI](https://geminicli.com/docs/cli/skills/), [Cursor](https://cursor.com/docs/skills), [GitHub Copilot](https://docs.github.com/en/copilot/concepts/customizations/agent-skills), [Windsurf](https://docs.windsurf.com/windsurf/cascade/skills), [Amp](https://ampcode.com/docs/customize/skills), and [this cross-agent path guide](https://claudeskills.page/guides/agent-skills-in-other-tools).

## License

MIT — the bundled skills keep their own MIT licenses.
