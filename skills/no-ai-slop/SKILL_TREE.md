# Skill files tree — no-ai-slop

Generated with `skillforge` (triage + lint), `skill-developer` (structure/trigger rules), and `skill-scout` (duplicate search).

## Tree

```
no-ai-slop/                         # publishable repo root
├── .claude-plugin/
│   ├── plugin.json                 # plugin manifest: name, version, keywords, MIT
│   └── marketplace.json            # marketplace manifest for /plugin marketplace add
├── evals/
│   ├── evals.json                  # 5 behavioral test prompts
│   └── fixtures/
│       └── sloppy-landing.html     # deliberately sloppy audit target for evals
├── references/
│   ├── slop-indicators.md          # 20 rules: detect / why / fix (has TOC, 258 lines)
│   ├── expanded-slop-indicators.md # secondary catalog from independent research
│   ├── rewrite-playbook.md         # positive patterns + worked before/after
│   ├── impressive-ui-patterns.md   # hero, component and 3D/scroll direction (198 lines)
│   └── reference-library.md        # galleries, exemplar sites, teardowns, repos (146 lines)
├── scripts/
│   └── scan_slop.py                # stdlib-only textual triage, --json, exits 0
├── .gitignore                      # __pycache__, .env, workspace output
├── LICENSE                         # MIT
├── README.md                       # install (plugin / skill / project), usage, limits
└── SKILL.md                        # entry point: triggers, scoring, audit format, Direction block (122 lines, 1782 words)
```

## Lint results (manual — skillforge's scripts are not installed)

- SKILL.md: 122 lines / 1782 words — under the 500-line rule; detail lives in five references.
- Frontmatter: `name`, `description` (745 chars, under 1024), `argument-hint`, `allowed-tools`, `license`.
- No `<details>` blocks, no pinned dated model IDs, references over 100 lines have a contents list, `evals/` shipped.
- Triggers live only in the description; the body has no duplicate "Triggers" section.
- `skillforge` scripts referenced by its SKILL.md (`discover_skills.py`, `triage_skill_request.py`, `validate_skill.py`, `check_docs_safety.py`) are absent from `~/.claude/skills/skillforge/scripts/` — only `tests/` exists. Checks above were done by hand.

## skill-scout: existing skills that overlap

| Skill | Overlap | Relationship to no-ai-slop |
|---|---|---|
| `design-taste-frontend` | strong — "anti-slop frontend skill" for landing pages | It generates designs; no-ai-slop audits and scores them. Complementary, but consider merging if you want one skill. |
| `stitch-design-taste` | medium — anti-generic design rules for Google Stitch | Different target (Stitch DESIGN.md files). |
| `web-artifacts-builder`, `landing-page-design`, `redesign-existing-projects` | weak/medium — adjacent UI work | Different jobs; no duplicate. |

No exact duplicate of the scored 20-indicator audit + scanner was found locally.

## Next actions if you want them

- Keep both: no-ai-slop for audit/rewrite, design-taste-frontend for generation.
- Merge: port the 20-indicator table into design-taste-frontend's audit phase and retire the separate repo.
- Wire activation: add a `skill-rules.json` entry if you want the hook-based `suggest` reminder from skill-developer.
