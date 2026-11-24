# The 20 indicators

Each entry: what it looks like, how to spot it, why it reads as generated, and what to do instead. The severity weights match `SKILL.md` (high 7 / medium 5 / low 3). Count an indicator once per audit; note repetition as evidence.

## Contents

1. [Arrows on every button](#1-arrows-on-every-button) · 2. [Little dots between words](#2-little-dots-between-words) · 3. [Overusing eyebrows](#3-overusing-eyebrows) · 4. [Cream backgrounds](#4-cream-backgrounds) · 5. [One italic word in the headline](#5-one-italic-word-in-the-headline) · 6. [Sparkle icons](#6-sparkle-icons) · 7. [Everything in a card](#7-everything-in-a-card) · 8. [The word "quiet"](#8-the-word-quiet) · 9. [Numbered sections](#9-numbered-sections) · 10. [Pulsing green dots](#10-pulsing-green-dots)
11. [Blurry glows behind the hero](#11-blurry-glows-behind-the-hero) · 12. [Instrument Serif](#12-instrument-serif) · 13. [Colored left borders](#13-colored-left-borders) · 14. [Three icon cards in a row](#14-three-icon-cards-in-a-row) · 15. [Pills above the headline](#15-pills-above-the-headline) · 16. [The word "real"](#16-the-word-real) · 17. [Made-up stats](#17-made-up-stats) · 18. [Two-word sentences](#18-two-word-sentences) · 19. [Sections fading on scroll](#19-sections-fading-on-scroll) · 20. [Dithering](#20-dithering)

---

## 1. Arrows on every button

**Severity:** medium (5)

**What it looks like:** Every call to action ends in `→`, `↗`, a chevron, or an ArrowRight icon — "Learn more →", "Get started →", "See how it works →". Even buttons whose label already implies action.

**Detect:** `→`, `↗`, `ArrowRight`, `arrow-right`, `chevron-right`, `fa-arrow`, repeated across multiple CTAs. Two or more on a page is a signal; five is a tell.

**Why it reads as AI:** A model reaches for an arrow to make a flat label look like a designed button. Real products use arrows for *navigation direction* (next, external link) and let label + hierarchy carry the rest. Uniform arrows make every action feel equally weighted.

**Fix:** Strip arrows from labels that already say what happens ("Start free trial", "View pricing"). Keep one arrow only where direction is genuinely informative — a next-step control or an external link. Vary CTA weight instead: primary filled, secondary text-only.

## 2. Little dots between words

**Severity:** low (3)

**What it looks like:** `Design · Build · Ship`, `Fast • Simple • Free`, middots or bullets used as inline separators in nav, footers, and hero copy.

**Detect:** `\w\s*·\s*\w`, `&middot;`, ` • ` in text nodes and headings.

**Why it reads as AI:** Middots are a shortcut for rhythm when a writer has no real hierarchy to express. They make a sentence out of three unrelated fragments and flatten the difference between a brand name, a feature, and a value proposition.

**Fix:** Use spacing, punctuation, or actual structure. Separate nav items with layout, not glyphs. In prose, write a sentence. If the items are genuinely a list, make it a list with real hierarchy.

## 3. Overusing eyebrows

**Severity:** low (3)

**What it looks like:** Tiny uppercase kicker labels above nearly every heading — "WHY CHOOSE US", "THE PROCESS", "BUILT FOR TEAMS" — often letter-spaced and in an accent color.

**Detect:** `.eyebrow`, `.overline`, `.kicker`, `uppercase tracking-wider` on short text directly above headings; a kicker before every section.

**Why it reads as AI:** Eyebrow text is a legitimate device for framing a single section. Repeating it on every section is a template's way of manufacturing hierarchy without actual content differentiation. It adds scanning noise and makes the page feel like a deck.

**Fix:** Keep at most one or two where they add real context (e.g. a category on an article page). Elsewhere, let the heading itself carry the meaning, and use spacing to separate sections.

## 4. Cream backgrounds

**Severity:** medium (5)

**What it looks like:** The entire page is a warm off-white — `#FAF6EF`, `#FDFBF7`, `#F5F0E6` — usually paired with near-black text and a thin border around everything.

**Detect:** Known cream hexes, `cream`/`ivory`/`bone`/`parchment` in class or variable names, or a large-area background in the `#f6f0e6`–`#fffdf7` band.

**Why it reads as AI:** Warm paper backgrounds became a visual shortcut for "editorial, premium, human" after models over-sampled a few fashionable landing pages. Without a reason — a print product, a heritage brand, a reading surface — the warmth reads as borrowed taste rather than a decision.

**Fix:** Start from the product's own context. Use white with strong typographic contrast for dense tools; use dark for focus or media; use a warm tone only when it serves reading comfort or a real brand identity. If you keep cream, pair it with one confident accent and enough contrast that it feels intentional.

**False-positive guard:** A single cream panel inside a otherwise neutral interface is a fine accent. Flag the *global* wash, not any cream pixel.

## 5. One italic word in the headline

**Severity:** medium (5)

**What it looks like:** "A better kind of *everyday*." · "Build something *real*." · "Work that *matters*." Exactly one word in an otherwise roman headline is italicized, usually in a serif or accent color.

**Detect:** `<em>` or `italic` inside a heading element; a single italic word in a large text run.

**Why it reads as AI:** It is a model's favorite trick for manufacturing emphasis without rewriting the sentence. The italic word carries no new meaning — it just gestures at one. The result is a headline that feels focus-grouped.

**Fix:** Rewrite the line so the important idea is the whole line. If emphasis is genuinely needed, change the word order, use a subordinate clause, or make the contrast explicit: "Ship the thing. Skip the theater." Drop the italic.

## 6. Sparkle icons

**Severity:** medium (5)

**What it looks like:** ✨ / sparkles glyphs scattered in headings, buttons, and feature lists — often next to words like "magic", "AI-powered", or "seamless".

**Detect:** `✨`, `Sparkles`, `sparkles`, `ai-sparkle`, `magic-wand` icon names.

**Why it reads as AI:** The sparkle is the literal emoji of generative AI. It signals "a model did this" faster than any other single glyph, and it substitutes decoration for information about what the feature actually does.

**Fix:** Remove it. Replace with an icon that denotes the real object or action, or with no icon at all. Describe the mechanism instead of calling it magic.

## 7. Everything in a card

**Severity:** high (7)

**What it looks like:** Every block of content — intro, features, quote, stats, FAQ, CTA — sits in a rounded rectangle with a border or shadow, floating on a tinted page.

**Detect:** High density of `card`, `rounded-xl/2xl`, `shadow`, `border`, `bg-white` containers; near-total absence of bare text sections.

**Why it reads as AI:** Cards are a model's universal container because they are safe: content inside a box can't collide. But a page of equal boxes has no hierarchy. Nothing is foregrounded, the eye has nowhere to rest, and the layout looks like a component library demo.

**Fix:** Let at least the hero and one narrative section live directly on the page background with generous whitespace. Reserve cards for things that are genuinely discrete objects — a ticket, a product, a code sample. Vary size and treatment so the primary content is unmistakable.

## 8. The word "quiet"

**Severity:** low (3)

**What it looks like:** "A quieter way to work." · "Quiet confidence." · "The quiet tool for serious teams." Used as a stand-in for a benefit.

**Detect:** `quiet`/`quieter`/`quietly` in hero copy, headings, or feature blurbs.

**Why it reads as AI:** "Quiet" is one of a small vocabulary of abstract virtues models reach for when they lack specifics: quiet, seamless, effortless, intuitive. It sounds refined and says nothing verifiable.

**Fix:** Say what the product actually does that others don't: "No notifications unless someone mentions you", "Runs locally; nothing leaves your machine". Specific behavior beats a mood.

## 9. Numbered sections

**Severity:** medium (5)

**What it looks like:** "01 / The problem", "02 / Our approach", "03 / Results" — every section labeled with a two-digit number and a leading zero.

**Detect:** `01`, `02`, `0[1-9] /`, `section-01` in headings or kicker labels, repeated down the page.

**Why it reads as AI:** Numbering implies a sequence or process, but most landing pages are not a procedure. The leading zero is decorative precision that makes the page feel like a template with slots filled in.

**Fix:** Use descriptive headings in a meaningful order. If the content really is a sequence (onboarding steps, a build process), number it and make each step concrete — otherwise drop the numbers.

## 10. Pulsing green dots

**Severity:** medium (5)

**What it looks like:** A green circle with a soft pulse animation next to "All systems operational", "48/48 nominal", "Live", or an agent status readout.

**Detect:** `animate-pulse` adjacent to `bg-green-*`, `pulse` + green color, repeated status pills with glowing dots.

**Why it reads as AI:** A pulsing green dot is the default way to fake liveness. When it is hard-coded into a static marketing page with no real status behind it, it is pure theater — the visual equivalent of a made-up stat.

**Fix:** Only animate real state changes. For static copy, state the fact in words ("Open-source since 2021"). If you do have live data, bind the indicator to it and give the pulse a semantic purpose (attention vs. steady state).

## 11. Blurry glows behind the hero

**Severity:** high (7)

**What it looks like:** A large, heavily blurred radial gradient — purple, blue, or green — bleeding behind the hero headline, often with a second blurred blob in a corner.

**Detect:** `blur-3xl`, `filter: blur(...)`, `radial-gradient`, `glow`, `backdrop-blur` on large decorative layers.

**Why it reads as AI:** It is an instant, effortless way to make a plain hero feel "designed" — and therefore instantly recognizable as a default. It also usually hurts readability and adds paint cost for no information.

**Fix:** Build interest from layout and typography instead: an asymmetric grid, a strong rule, a real image or diagram of the product, a confident negative-space composition. If you use a gradient, make it structural (a sharp edge, a defined band), not a fog.

## 12. Instrument Serif

**Severity:** medium (5)

**What it looks like:** The headline — or the entire site — set in Instrument Serif, usually with an italic accent (see #5), because it is the current model-default "elegant" font.

**Detect:** `Instrument Serif`, `instrument-serif`, `@import` from Google Fonts for that family.

**Why it reads as AI:** Typeface choices are one of the strongest tells of model provenance. Instrument Serif became a stock signal of taste in generated designs; using it without a reason makes a site look like every other generated site. The issue is the unconsidered default, not the font itself.

**Fix:** Choose type from the product's character and the medium's constraints. Pair a workhorse sans with one distinctive display face you can justify in one sentence. Check licensing and loading weight. If the product is technical, a grotesque with good numerals may do more than a fashionable serif.

## 13. Colored left borders

**Severity:** medium (5)

**What it looks like:** Blocks of text — quotes, callouts, feature blurbs — marked by a 2-4px colored vertical rule on the left, often inside a card.

**Detect:** `border-l-2`, `border-l-4`, `border-left: 4px solid`, `border-l-[...]` with a color utility.

**Why it reads as AI:** The left border is a model's generic "this is important" device. Applied to every callout and quote, it creates a rhythm of identical stripes and substitutes a decorative rule for actual hierarchy.

**Fix:** Use indentation, a change in type size/weight, or a genuine quotation structure. Reserve a colored rule for a single deliberate element — e.g. a user's quote in a testimonial — and vary the treatment elsewhere.

## 14. Three icon cards in a row

**Severity:** high (7)

**What it looks like:** The feature section is exactly three equal columns, each with a line icon in a tinted square, a bold title, and two lines of copy.

**Detect:** `grid-cols-3` / `md:grid-cols-3` combined with `icon` / `card` / repeated `rounded-*` blocks; visually, three identically sized boxes.

**Why it reads as AI:** Three is the model's favorite number and the icon-card row is its favorite layout. The symmetry is the tell: real products rarely have exactly three equally important features, and the format hides that by making everything the same size.

**Fix:** Pick the structure that matches the content: one hero feature with supporting detail, a numbered workflow if it really is sequential, a two-column comparison, or an annotated screenshot. If there really are three features, break the symmetry — give one a demo, one a short list, one a single striking number.

## 15. Pills above the headline

**Severity:** medium (5)

**What it looks like:** A rounded-full badge with a tiny icon and label — "NEW", "FOR TEAMS", "INTRODUCING V2" — sitting directly above the hero heading.

**Detect:** `rounded-full` / `badge` / `pill` on a short label immediately preceding `h1` / `h2`; visually, a capsule above a headline.

**Why it reads as AI:** The pill is a stock announcement device. Combined with a kicker, a serif headline, and an italic word, it completes the recognizable generated-hero recipe.

**Fix:** Put announcement information in the headline itself, in the nav, or in a real banner if it is time-sensitive. If you must have a label, make it plain text with a deliberate typographic treatment rather than a default capsule.

## 16. The word "real"

**Severity:** low (3)

**What it looks like:** "Real results." · "Built for real work." · "For people who do the work." · "Real-time, real results, real teams."

**Detect:** `real`/`really` in headings and hero copy; especially repeated.

**Why it reads as AI:** Like "quiet", "real" is a claim of authenticity that costs nothing. It appears when a writer cannot name the actual differentiator. Repetition makes it worse.

**Fix:** Replace the assertion with evidence: a named customer, a concrete workflow, an actual number with a source, or a product behavior that can be verified.

## 17. Made-up stats

**Severity:** high (7)

**What it looks like:** "10x faster", "98% satisfaction", "50,000+ teams", "Saves 12 hours/week" — precise numbers with no methodology or source, often in a stats strip above the fold.

**Detect:** `[\d,]+\+?\s*(%|x\b|users|teams|customers|faster|hours)` in marketing copy; check whether a source or denominator exists.

**Why it reads as AI:** Plausible precision is a model's most convincing bluff. These numbers are chosen for sound, not truth, and a reader who asks "compared to what?" gets no answer. Unverifiable stats destroy trust faster than no stats.

**Fix:** Remove any number you cannot source. Replace with a verifiable fact ("Used by the engineering teams at X and Y"), a reproducible benchmark with conditions, or a concrete qualitative outcome. If the number is real, say what it measures and over what period.

## 18. Two-word sentences

**Severity:** high (7)

**What it looks like:** "Ship from the shell." · "Own the outcome." · "Less work." · "Done right." · A page built from short, evenly punchy fragments.

**Detect:** Text runs or string literals matching `^[A-Z][a-z]+\s+[a-z]+\.$`; visually, many lines of near-identical length under large headings.

**Why it reads as AI:** Short fragments are a model's default way to simulate confidence. Used once, they can be sharp. Used throughout, they flatten rhythm — every claim lands with the same weight, and nothing is explained.

**Fix:** Vary sentence length according to what needs saying. Give the important claim a full sentence with a subject, a verb, and a consequence; keep one short line only where the brevity itself is the point.

## 19. Sections fading on scroll

**Severity:** medium (5)

**What it looks like:** Every section starts invisible and fades or slides in as it enters the viewport, so a static screenshot looks fine but the page performs a continuous reveal animation while scrolling.

**Detect:** `opacity-0`, `fade-in`, `IntersectionObserver`, `whileInView`, `reveal`, scroll-linked animation libraries applied to whole sections.

**Why it reads as AI:** It is a default "polish" layer added without a purpose. It slows reading, makes content feel performative, and is one of the most recognizable signatures of template-generated sites.

**Fix:** Remove entrance animations from body content. Reserve motion for state changes that mean something: a menu opening, a step completing, data updating. If a subtle transition is genuinely warranted, keep it under 200ms and respect `prefers-reduced-motion`.

## 20. Dithering

**Severity:** low (3)

**What it looks like:** A fine noise/dither texture overlaid on the whole page or baked into gradients, sometimes called "grain" — applied as a general aesthetic filter rather than for a rendering reason.

**Detect:** `dither`, `feTurbulence`, noise/grain SVG data URIs, `background-image: url(noise.png)` over large areas.

**Why it reads as AI:** Grain was a fashionable antidote to sterile flat design, so models absorbed it as a universal finishing touch. On a product UI it mostly adds visual noise and can hurt text legibility.

**Fix:** Remove it unless there is a concrete rendering reason (banding in a large gradient, a deliberate print-inspired editorial treatment). If you keep it, confine it to a decorative area and keep it subtle enough that body text stays crisp.

---

## Applying the list with judgment

A single indicator is rarely damning. Three or more from different categories — say, a cream background, an italic headline word, and three icon cards — form a recognizable cluster, and that is when the score should drop sharply. Score the *pattern*, note the individual tells as evidence, and always give the user a concrete next action.
