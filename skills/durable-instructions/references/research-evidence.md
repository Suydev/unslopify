# Research evidence

Funding statement: sources were collected with tinyfish search on 2026-11-24. Thirty-three sources are listed below. Numbers are reported as the sources report them; they are not replications.

## Headline findings

- Compactors retained only 17% of injected session constraints; an explicit extractor exceeded 90% (Lost in Compaction).
- Append-only plain-text log plus grep reached 95-97% recall versus at most 21% for lossy baselines (GrepMem).
- Best frontier models reached 68% accuracy at 500 simultaneous instructions, with a bias toward earlier instructions (IFScale).
- Relevance at the beginning or end of context is used well; relevance in the middle degrades sharply (Lost in the Middle).
- Verifiable instructions plus a restatement intervention improved long-context compliance by up to 79% (VerIFY paper).
- Spacing and retrieval practice produce more durable retention than massed repetition (education research).

## Agent memory and instruction following

| Source | Finding | Rules |
|---|---|---|
| Lost in the Middle, Liu et al., TACL 2023 — arxiv.org/abs/2307.03172 | U-shaped position curve; middle content under-used | 2 |
| Lost in Compaction (CompInt) — arxiv.org/html/2608.11242v1 | 17% constraint retention; extractor over 90% | 5 |
| Forget Freely, Grep Later (GrepMem) — arxiv.org/abs/2611.25123 | 95-97% vs 21% recall | 5 |
| How Many Instructions Can LLMs Follow at Once (IFScale) — arxiv.org/html/2507.11538v1 | 68% at 500 rules; early-instruction bias | 3, 6 |
| We Are What We Repeatedly Do (VerIFY) — aclanthology.org/2026.findings-eacl.254 | Verifiable criteria; up to 79% improvement | 3, 4 |
| Measuring and Controlling Instruction Instability — arxiv.org/html/2402.10962v2 | Dialogue instructions degrade with turns | 2, 4 |
| Multi-IF — arxiv.org/html/2410.15553 | Multi-turn instruction following is distinct | 2 |
| State Integrity Collapse — arxiv.org/html/2610.31314 | Agents can restate yet violate a rule | 3 |
| The Instruction Gap — arxiv.org/html/2601.03269v1 | Density and placement determine compliance | 2, 6 |
| MemGPT — arxiv.org/html/2310.08560v1 | Hierarchical memory architecture | 5 |
| A Survey of Agent Memory in the Second Half — arxiv.org/abs/2602.06052 | Memory taxonomy and open problems | 5 |
| Memory in the Age of AI Agents — arxiv.org/pdf/2512.13564v1 | Memory as a first-class research area | 5 |
| Memory for Autonomous LLM Agents — arxiv.org/html/2603.07670v1 | Mechanisms and evaluation | 5 |
| Rethinking Memory in LLM based Agents — arxiv.org/html/2505.00675 | Representation and operations | 5 |
| Agent Memory: Characterization and System Implications — arxiv.org/pdf/2606.06448v2 | Stateful workloads | 5 |
| Towards Long-Horizon Agents: A Survey — long-horizon-agents.github.io | Long-horizon failure modes | 5 |
| Quantifying Laziness, Decoding Suboptimality, Context Degradation — arxiv.org/pdf/2512.20662 | Degradation is measurable | 6 |
| Exploiting Primacy Effect — arxiv.org/html/2507.13949v1 | Placement bias is exploitable | 2 |
| LLM Position Bias — intuitionlabs.ai/articles/llm-position-bias-primacy-recency-effects | Primacy and recency in prompts | 2 |
| A Guide to Improving Long Context Instruction Following — scale.com/blog/long-context-instruction-following | Practitioner guidance on density and placement | 2, 3 |
| Why AI Agents Forget: The Stateless LLM Problem — atlan.com/know/why-ai-agents-forget/ | Statelessness as root cause | 5 |

## Psychology of retention

| Source | Finding | Rule |
|---|---|---|
| Spacing and retrieval — edresearch.edu.au/summaries-explainers/explainers/spacing-retrieval | Spacing prevents cognitive overload; retrieval strengthens memory | 4 |
| Using Spacing to Enhance Diverse Forms of Learning — pdf.retrievalpractice.org/spacing/Carpenter_etal_2012_EDPR.pdf | Spacing improves diverse learning forms | 4 |
| Spaced Retrieval Practice Imposes Desirable Difficulty — link.springer.com/article/10.1007/s10648-022-09677-2 | Desirable difficulty improves retention | 4 |
| Spacing Effect — thedecisionlab.com/biases/spacing-effect | Shortened as a general bias reference | 4 |

## Skill authoring

| Source | Finding | Rule |
|---|---|---|
| Skill authoring best practices — docs.anthropic.com/claude/docs/agents-and-tools/agent-skills/best-practices | Concision wins; metadata loads first; every token competes with context | 1, 6 |
| Equipping agents for the real world with Agent Skills — anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills | Skills are a first-class progressive-disclosure mechanism | 1 |
| skill-development SKILL.md — github.com/anthropics/claude-code/blob/main/plugins/plugin-dev/skills/skill-development/SKILL.md | Reference implementation for skill authoring | 1 |

## Positive framing and if-then planning

| Source | Finding | Rule |
|---|---|---|
| Gollwitzer, "Implementation Intentions: Strong Effects of Simple Plans" — doi.apa.org/doi/10.1037/0003-066x.54.7.493 | If-then plans specify when, where and how; strong effects on goal attainment | 7 |
| Wieber et al., "Promoting the translation of intentions into action" — pmc.ncbi.nlm.nih.gov/articles/PMC4500900/ | Situational cues become highly accessible and link directly to the planned response | 7 |
| Bieleke et al., "If-then planning" — tandfonline.com/doi/full/10.1080/10463283.2020.1808936 | Review of automatic action control by if-then plans | 7 |
| Adriaanse et al., "Planning what not to eat" — pubmed.ncbi.nlm.nih.gov/21177875/ | Negating an unwanted habit in an implementation plan can have ironic effects | 7 |
| "Implementation and recognition of novel negatively instructed stimulus-response rules" — pmc.ncbi.nlm.nih.gov/articles/PMC12664855/ | Negative instructions work better with an explicit alternative action and advance instruction-type information | 7 |

## Caveats

- These are reported results, not guarantees for every model or harness.
- Position and density effects are strongest in long contexts; short prompts need less defense.
- Restatement costs tokens; use it only at phase boundaries.
- External anchors require the agent to actually re-read them; the rule reduces reliance on recall but does not eliminate it.
