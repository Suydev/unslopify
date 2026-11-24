# no-ai-slop

![No AI Slop mark](assets/no-ai-slop-logo.svg)

A Claude Code skill that catches the visual tells of generic AI-generated design — and tells you exactly how to replace them with a specific, researched direction.

Written and maintained with Claude Code. Born from Charles Liu's 26-second video ["20 More AI Design Slop Indicators"](https://youtube.com/shorts/E7JrEO7L5rQ). It turns "this looks generic" into a scored, evidence-backed audit with concrete fixes. It is a taste check, not style police: deliberate choices are allowed, and every finding explains *why* it reads as generated.

## Install

**Plugin (recommended)**

```bash
/plugin marketplace add Suydev/no-ai-slop
/plugin install no-ai-slop@no-ai-slop
```

Restart Claude Code and confirm `no-ai-slop` appears in `/skills`.

**Single skill**

```bash
git clone https://github.com/Suydev/no-ai-slop.git ~/.claude/skills/no-ai-slop
```

**Project only**

```bash
git clone https://github.com/Suydev/no-ai-slop.git .claude/skills/no-ai-slop
```

## Use

The skill activates when Claude is about to write or review UI. Invoke it directly when you want:

```
/no-ai-slop src/app/page.tsx
/no-ai-slop src/components/Hero.tsx --rewrite
/no-ai-slop this landing page looks generic, what's wrong with it?
/no-ai-slop make this landing page feel premium — what should I build instead?
/no-ai-slop should this hero use a 3D scroll scene?
/no-ai-slop redesign this page using real sites worth studying, not the usual templates
```

Without Claude, run the triage scanner directly:

```bash
python3 scripts/scan_slop.py src/          # table
python3 scripts/scan_slop.py src/ --json   # machine-readable
```

The scanner is stdlib-only and exits 0, so findings never break CI. It is a triage aid: Claude (or you) confirms each hit against the rendered design before scoring. It prints its caveats and all 20 indicators must be walked manually. Its score now also includes expanded-catalog penalties, so that stdout caveat refers to the primary catalog only.

## What it catches

Twenty indicators in four groups:

- **Type & words** — Instrument Serif, one italic headline word, dots between words, eyebrow labels, "quiet", "real", two-word sentences
- **Layout** — everything in a card, three icon cards, numbered sections, colored left borders, pills above the headline
- **Color & surface** — cream backgrounds, blurry hero glows, pulsing green dots, dithering
- **Motion & affordances** — arrows on every button, fade-on-scroll, sparkle icons, made-up stats

Each is weighted high (7), medium (5), or low (3); the score is `100 - penalties`. **90+** ships, **70-89** needs polish, **below 70** reads as generated. One indicator rarely matters; a cluster across categories does.

Those 20 are the primary catalog. An [expanded secondary catalog](references/expanded-slop-indicators.md) gathers further tells from independent research — type defaults, gradients, glass, section rhythm, and stock copy. Each confirmed expanded tell adds 2 (total penalties cap at 100), and five or more on one page means structural slop even if the primary score is high. None is conclusive alone; the value is in counting them.

## What it builds instead

A clean audit is a floor, not a target. The skill ships a researched positive catalog in [references/impressive-ui-patterns.md](references/impressive-ui-patterns.md):

- Eight hero patterns matched to visitor temperature and product type, with load risk and failure modes
- Page composition rules: claim, proof artifact, one CTA, CTA ladder, minimum fields, performance budget
- Component recipes for bento grids, proof blocks, comparisons, and real sequences, plus rules for using premade shadcn/animation blocks without importing their defaults
- A 3D/scroll decision matrix (CSS → Lottie → Three.js reveal → pin-and-scrub → shaders), when to use and when not to, the input/state/render architecture, video-on-scroll recipe, and the reduced-motion/SEO/performance checklist

[references/reference-library.md](references/reference-library.md) adds the diverse source pack: a gallery map by question (Awwwards, Godly/Recent, One Page Love, Land-book, Saaspo, Mobbin, Refero, Page Flows, The Component Gallery, A1), exemplar sites with one decision worth stealing from each, concept-first award teardowns, and trending UI repos/registries. The skill requires 3–6 references from at least three families, with the principle taken from each — never copied assets, copy, or layout.

The [rewrite playbook](references/rewrite-playbook.md) covers typography, copy, color, and motion. Every rewrite must state a **Direction** block naming the hero pattern, proof artifact, component composition, motion tier, and references used — so the page changes because of a choice, not because of a mood board.

## Output

```markdown
## Slop audit — Hero.tsx

**Score: 23/100** (reads as generated)

| # | Indicator | Severity | Evidence | Why it reads as AI | Fix |
|---|---|---|---|---|---|
| 1 | Everything in a card | high | Hero.tsx:12 | Equal boxes flatten hierarchy | Let the hero sit on the page background |
| 2 | One italic word in the headline | medium | Hero.tsx:18 | Manufactured emphasis | Rewrite the line so the whole claim lands |
```

With `--rewrite`, the audit is followed by corrected code and a re-score.

## Repository layout

```
.claude-plugin/              plugin.json + marketplace.json (for /plugin marketplace add)
SKILL.md                     entry point: triggers, scoring, output format
assets/no-ai-slop-logo.svg   repository mark
references/slop-indicators.md   20 rules: detection, rationale, replacement
references/expanded-slop-indicators.md  secondary catalog from independent research
references/rewrite-playbook.md  positive patterns + worked before/after
references/impressive-ui-patterns.md  researched hero, component, and 3D/scroll direction
references/reference-library.md       galleries, exemplar sites, award teardowns, UI repos
scripts/scan_slop.py            stdlib textual triage
evals/                          test prompts + sloppy fixture
durable-instructions/           companion skill: durable instruction authoring
SKILL_TREE.md                   annotated tree, lint results, overlap check
```

## Validation

Developed with an evidence-driven loop: a baseline audit without the skill produced prose alone; with the skill it produced a 23/100 score with 15 located, explainable findings. The scanner was then fixed to catch every tell in the fixture (16, with one judged a false positive by manual review). `SKILL.md` is 122 lines / 1782 words; the positive catalogs are separate references so the entry point stays short. See [SKILL_TREE.md](SKILL_TREE.md) for details.

## Limits

Source scanning cannot see rendered layout, animation, or color in context. It over-flags common utilities and under-flags custom CSS. Use a screenshot when possible; when one is unavailable, say so and score from source only. Inert scaffolding (dead observers, undefined classes, unsized glow divs) should be disclosed as source-level tells.

The list is a 2026 snapshot. When defaults change, edit `references/slop-indicators.md`.

## License

MIT — see [LICENSE](LICENSE). Indicator list credited to Charles Liu; extended rules and tooling are original to this repo.
