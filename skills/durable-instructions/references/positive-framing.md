# Positive framing

A prohibition tells an agent what to avoid. It does not tell the agent what to do when the moment arrives. This reference is the seventh durable-instructions rule: **name the replacement, and name the cue that calls for it.**

## Why this rule exists

If-then planning ("when situation X arises, then I will do Y") creates a direct associative link between a situational cue and an action. Reviews of implementation intentions find reliable effects on goal attainment, with the situation becoming highly accessible and the response partially automated (Gollwitzer, 1999; Wieber et al., 2015; Bieleke et al., 2021). Research on negated plans shows the catch: planning what *not* to do can produce ironic effects, strengthening the unwanted response under some conditions (Adriaanse et al., 2011). Recent work on negatively instructed stimulus-response rules finds that negative instructions can work, but they need an explicit alternative action and advance information about the instruction type to be implemented reliably (PMC12664855, 2025).

For agents the same asymmetry shows up in a simpler form. "Do not use a gradient hero" leaves no default; the agent may substitute its own statistical default. "When choosing a hero surface, use the product's real artifact on the page background" gives a cue, an action, and a checkable result. When context is compacted, the prohibition often survives as a vague constraint while the replacement never existed to be recalled.

## Rule form

Write each behavioral rule as:

```text
When <cue or decision point>, do <specific action>. Pass when <observable check>.
```

Three parts, all short:

1. **Cue** — the moment the rule applies: a phase boundary, a file type, a kind of decision. "When scoring a candidate finding."
2. **Action** — the behavior to perform, stated positively and specifically: "confirm it against file:line or screenshot region."
3. **Pass check** — what compliance looks like: "unconfirmed candidates are absent from the table."

If a rule cannot be written in this form, it is a preference, not a durable constraint. Cut it to protect the rule budget.

## Before and after

| Context | Prohibition only | Cue → action → check |
|---|---|---|
| Skill | "Do not count scanner hits blindly." | "When scoring, confirm each hit against source. Pass when every counted hit has file:line or screenshot evidence." |
| CLAUDE.md | "Never guess file paths." | "Before any file operation, list the target path and confirm it exists. Pass when the path was read or listed." |
| Prompt | "Don't make the hero generic." | "When choosing a hero, show the product artifact making the headline's claim. Pass when a visitor could name the product from the visual alone." |
| Code review | "Avoid vague findings." | "When writing a finding, cite path:line. Pass when every finding has a locatable anchor." |
| Long session | "Don't forget the evidence rule." | "When the scoring phase begins, re-read the CONTRACT anchor. Pass when the evidence rule appears in the restated contract." |

Notice that the right column still forbids the failure implicitly. The difference is that it gives the agent something to *do* at the decision point, which is the part that survives drift.

## Authoring checklist

- Does every "don't" in the document have a paired "when X, do Y"?
- Is the cue a real moment in the workflow, not a mood?
- Can a reader tell whether the action happened without asking the agent?
- Did the replacement stay at the decision point rather than moving to a preamble?
- Did the rule displace a soft preference rather than adding to an already crowded set?
- On rewrite, is the new action re-stated at the phase boundary where it will be used?

## Limits

A positively framed rule is still an instruction, not an enforcement mechanism. It improves the odds that the behavior appears; it cannot force compliance. Use hooks, tests, or linters when the behavior must be guaranteed. Keep the total rule set short: seven observable rules beat twenty mixed prohibitions and preferences.

## Sources

Collected with TinyFish search and fetch on 2026-11-24.

- Gollwitzer, "Implementation Intentions: Strong Effects of Simple Plans" — https://doi.apa.org/doi/10.1037/0003-066x.54.7.493
- Wieber et al., "Promoting the translation of intentions into action by implementation intentions" — https://pmc.ncbi.nlm.nih.gov/articles/PMC4500900/
- Bieleke et al., "If-then planning" — https://www.tandfonline.com/doi/full/10.1080/10463283.2020.1808936
- Adriaanse et al., "Planning what not to eat: ironic effects of implementation intentions negating unhealthy habits" — https://pubmed.ncbi.nlm.nih.gov/21177875/
- "Implementation and recognition of novel negatively instructed stimulus-response rules" — https://pmc.ncbi.nlm.nih.gov/articles/PMC12664855/
