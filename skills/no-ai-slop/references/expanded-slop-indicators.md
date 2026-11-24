# Expanded slop indicators (secondary catalog)

This is a **secondary catalog** assembled from independent design research, not from the original short video. None of these tells is conclusive on its own: each is a pattern that exists for a reason and can be used well, and the signal is the *pile*, not any single item. The original 20 indicators from Charles Liu's video remain the **primary catalog** in `references/slop-indicators.md`; their weights are unchanged. Use this file as an expansion of observation and wording, with a penalty of 2 per confirmed tell — never as a replacement for the primary 20.

Note on coverage: the task brief labels this list "35 tells" but the exact ordered list it supplies contains 43 semicolon-separated items (typography 8, color and surface 12, layout 12, components and copy 11). Every supplied item is documented below, in the supplied order, and no unlisted tell has been added.

Severity is descriptive only: `medium (structural)` labels layout-level tells, but every confirmed expanded tell carries a flat penalty of 2.

## Sources

Primary sources used for the prose of these entries:

- Paralect, "Signs of AI slop in design: 21 patterns that make your site look AI-generated" — https://paralect.com/blog/signs-of-ai-slop-in-design
- unslop-ui, `TELLS.md` — https://github.com/claudiusararu/unslop-ui-skill/blob/main/TELLS.md
- `signs-of-ai-design` field guide — https://github.com/febbhav/signs-of-ai-design
- `signs-of-ai-design` sources — `febbhav/signs-of-ai-design/SOURCES.md` in the same repository (read with `gh api repos/febbhav/signs-of-ai-design/contents/SOURCES.md --jq .content | base64 -d`)
- 925studios, "AI Slop Fonts and Gradients: The Tells That Give Away AI Design" — https://www.925studios.co/blog/ai-slop-design-tells
- Carlo D'Agnolo, "30 AI Design Slop Indicators" — https://carlodagnolo.com/resources/posts/ai-design-tells

Corroborating reading (search results; no new tells were taken from these):

- `JCarterJohnson/vibecoded-design-tells`, `skill/references/tells.md` — https://github.com/JCarterJohnson/vibecoded-design-tells/blob/main/skill/references/tells.md
- `funboy322/avoid-ai-design` — https://github.com/funboy322/avoid-ai-design
- design.how, "AI slop UI" — https://design.how/ai-slop-ui
- developersdigest, "AI Design Slop: 16 Patterns That Mark a Site as Vibe-Coded" — https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it

## Contents

Typography: 1. [Inter/Geist default stack](#1-intergeist-default-stack) · 2. [Trending font trio](#2-trending-font-trio) · 3. [600 as heaviest weight](#3-600-as-heaviest-weight) · 4. [tracking-tight on every heading](#4-tracking-tight-on-every-heading) · 5. [Gradient-clipped heading text](#5-gradient-clipped-heading-text) · 6. [Monospace for non-code chrome](#6-monospace-for-non-code-chrome) · 7. [Narrow paragraph column with 16px leading-7 everywhere](#7-narrow-paragraph-column-with-16px-leading-7-everywhere) · 8. [Overlong headline with one-word orphan](#8-overlong-headline-with-one-word-orphan)

Color and surface: 9. [Indigo/violet default accent](#9-indigoviolet-default-accent) · 10. [Forced dark-only or pure black background](#10-forced-dark-only-or-pure-black-background) · 11. [Unmodified shadcn default dark stack](#11-unmodified-shadcn-default-dark-stack) · 12. [Low-contrast gray body text](#12-low-contrast-gray-body-text) · 13. [Timid evenly distributed palette](#13-timid-evenly-distributed-palette) · 14. [Purple-to-blue or amber-to-pink hero gradient](#14-purple-to-blue-or-amber-to-pink-hero-gradient) · 15. [Aurora mesh blobs](#15-aurora-mesh-blobs) · 16. [Glassmorphism](#16-glassmorphism) · 17. [Gradient borders](#17-gradient-borders) · 18. [Uniform soft shadows](#18-uniform-soft-shadows) · 19. [Faint dotted grid on dark hero](#19-faint-dotted-grid-on-dark-hero) · 20. [Full-bleed black scrim over hero images](#20-full-bleed-black-scrim-over-hero-images)

Layout: 21. [Default centered hero recipe](#21-default-centered-hero-recipe) · 22. [Codified landing-page section order](#22-codified-landing-page-section-order) · 23. [One global container width](#23-one-global-container-width) · 24. [Sticky frosted nav](#24-sticky-frosted-nav) · 25. [Fat four-column footer](#25-fat-four-column-footer) · 26. [Final CTA mirroring hero](#26-final-cta-mirroring-hero) · 27. [Uniform py-20 rhythm](#27-uniform-py-20-rhythm) · 28. [Equal-column stat band and 3-up testimonials](#28-equal-column-stat-band-and-3-up-testimonials) · 29. [Cards nested in cards](#29-cards-nested-in-cards) · 30. [Symmetric 50/50 zigzag](#30-symmetric-5050-zigzag) · 31. [Perfectly tessellated grid](#31-perfectly-tessellated-grid) · 32. [Mobile collapses everything to one column](#32-mobile-collapses-everything-to-one-column)

Components and copy: 33. [shadcn Card for every content type](#33-shadcn-card-for-every-content-type) · 34. [Pastel icon-feature card](#34-pastel-icon-feature-card) · 35. [3-tier pricing with middle scale-105](#35-3-tier-pricing-with-middle-scale-105) · 36. [Hero pill with sparkle and dot](#36-hero-pill-with-sparkle-and-dot) · 37. [Gradient primary button](#37-gradient-primary-button) · 38. [Primary plus ghost Get Started / Learn More duo](#38-primary-plus-ghost-get-started--learn-more-duo) · 39. [Newsletter input with No spam](#39-newsletter-input-with-no-spam) · 40. [Comparison rows of green checks and red Xs](#40-comparison-rows-of-green-checks-and-red-xs) · 41. [Numbers written as words and long noun-stack titles](#41-numbers-written-as-words-and-long-noun-stack-titles) · 42. [Visual metaphor explained with labels and demos made of text](#42-visual-metaphor-explained-with-labels-and-demos-made-of-text) · 43. [Placeholder avatars, logos, and images](#43-placeholder-avatars-logos-and-images)

---

## Typography

## 1. Inter/Geist default stack

**Severity:** low

**How to spot:** `font-family: Inter`, `font-[Inter]`, `Inter, sans-serif`, `Geist`, `font-geist`, or a Google Fonts import for either face, with no other typographic decision on the page.

**Why it reads as generated:** Inter is an excellent typeface, which is exactly why it became the model default — it is the most-used interface font in the training data. As 925studios notes, the tell is not that Inter is bad but that unchosen Inter signals nobody made a typography decision; Geist is the same reflex in a newer wrapper.

**Replacement action:** Pick a face you can justify in one sentence from the product's character, or pair the workhorse with one distinctive display face. State the reason in the design notes so the choice can survive the next prompt.

## 2. Trending font trio

**Severity:** low

**How to spot:** The same three families recurring together across unrelated sites — a geometric sans for UI, a fashionable serif for a single italic word, and a mono for labels — loaded together on every page.

**Why it reads as generated:** A trio that appears unchanged on a hundred products is a statistical cluster, not a type system. Signs-of-ai-design and the search results both flag that models average their training data toward a small set of "tasteful" pairings, so the combination reads as borrowed rather than chosen.

**Replacement action:** Reduce to one workhorse plus, at most, one intentional contrast face. If you keep a trio, assign each family a real job (reading, display, data) and make sure the job is visible in the content.

## 3. 600 as heaviest weight

**Severity:** low

**How to spot:** Every heading and label tops out at `font-weight: 600` / `font-semibold`; no true bold, no light display cut, no weight contrast inside a heading.

**Why it reads as generated:** 600 is the safe midpoint a model reaches for when it wants emphasis without committing. Because nothing is heavier or lighter, the page has a flat typographic dynamic range and every element claims the same importance.

**Replacement action:** Establish a deliberate weight scale — e.g. a light or regular display cut for headlines, a real bold for the one critical word, regular for body. Make the heaviest weight mean something specific.

## 4. tracking-tight on every heading

**Severity:** low

**How to spot:** `tracking-tight`, `tracking-tighter`, or negative `letter-spacing` applied to all headings and often to the body as well, with no size-dependent adjustment.

**Why it reads as generated:** Carlo D'Agnolo's "negative kerning" tell: tight tracking looks sharp on a large headline, but pulling every line until letters touch is a template habit. It is a generic sophistication signal rather than a response to the typeface or size.

**Replacement action:** Set tracking per size: tighter only on large display lines, normal on body and small labels. Check the rendered result at the actual font and check for collisions.

## 5. Gradient-clipped heading text

**Severity:** low

**How to spot:** `bg-clip-text` + `text-transparent` + a `bg-gradient-to-*` utility on `h1`/`h2`; visually, the word or phrase shades from one hue to another.

**Why it reads as generated:** Carlo lists gradient text among the tells that show up first, and 925studios calls the gradient the loudest AI tell in 2026. When the treatment lands on the most important words, it substitutes color motion for a claim the copy should be making.

**Replacement action:** Set headings in a solid, deliberate color. If a gradient is genuinely part of the brand, keep it on a non-text surface and let the words stay legible.

## 6. Monospace for non-code chrome

**Severity:** low

**How to spot:** A code face used for nav links, buttons, dates, body copy, or section labels; `font-mono` on anything that is not code, data, or a numeral.

**Why it reads as generated:** "Excessive mono fonts" is one of Carlo's tells: a little mono says technical, all of it says template. The effect is a page that performs engineering credibility instead of presenting its actual work.

**Replacement action:** Reserve mono for code blocks, numeric data, and the occasional label where it carries meaning. Set the rest in the product's text face.

## 7. Narrow paragraph column with 16px leading-7 everywhere

**Severity:** low

**How to spot:** Every paragraph forced into a narrow `max-w-*` measure with `text-base leading-7`, regardless of whether it is body copy, a caption, or a feature blurb.

**Why it reads as generated:** The values are copied from a tutorial rather than chosen for the content. Uniform measure and leading flatten the difference between a long explanation and a one-line caption, which is the same "everything gets the same box" habit as the card tell in the primary catalog.

**Replacement action:** Set measure and leading per role: a comfortable reading measure for prose, tighter spacing for captions and labels. Let a few lines run long where the content calls for it.

## 8. Overlong headline with one-word orphan

**Severity:** low

**How to spot:** An `h1` that wraps so the final word or short phrase sits alone on its own line; often combined with a deliberate `<br>` or a forced narrow heading width.

**Why it reads as generated:** The orphan is a side effect of optimizing the headline for a screenshot rather than for reading at multiple widths. The signs-of-ai-design field guide's patterns repeatedly flag lines that are shaped for the composition, not the sentence.

**Replacement action:** Rewrite the headline so it breaks naturally: shorten it, change the word order, or widen the heading container. Check the result at tablet and phone widths too.

---

## Color and surface

## 9. Indigo/violet default accent

**Severity:** low

**How to spot:** `indigo-500`, `violet-600`, `#8b5cf6`, or the same lavender hue on buttons, focus rings, chart series, and links, with no stated brand reason.

**Why it reads as generated:** 925studios traces this directly to Tailwind shipping `indigo-500` as its default in 2019: tutorials copied it, the training data absorbed it, and models now reach for it as the statistically normal choice. Adam Wathan's public apology about "every button in Tailwind UI bg-indigo-500" describes the feedback loop precisely. The color is not ugly; it is anonymous.

**Replacement action:** Derive a palette from something true about the product — a material, a logo, a domain convention — and use one confident accent. If you keep indigo, write down why it is yours rather than the default.

## 10. Forced dark-only or pure black background

**Severity:** low

**How to spot:** `bg-black`, `background: #000`, or a `dark` class locked at the root with no theme option and no content reason; pure black rather than a considered near-black.

**Why it reads as generated:** A dark hero is one of the four opens 925studios names in the AI fingerprint, and the scanner signature `bg-black` captures the unmodified extreme. Pure black with no tonal relationship to the type and surfaces is the model's "looks premium" shortcut.

**Replacement action:** Choose a background that serves the content: a near-black with a hue, a light reading surface, or a theme that follows the user. If the product is genuinely dark-first, tune the black and the surrounding grays as a system.

## 11. Unmodified shadcn default dark stack

**Severity:** low

**How to spot:** Stock shadcn/Tailwind dark tokens (`background`, `foreground`, `muted`, `border`, `ring`) untouched, or a `dark/` palette copied verbatim, with charts and pages all using the same preset.

**Why it reads as generated:** The unslop-ui and vibecoded-design-tells notes both make the same point: the defaults are the tell, not the tools. A themed shadcn site is invisible to this complaint; an untouched one carries the framework's averaged taste.

**Replacement action:** Theme the tokens deliberately — foreground/background contrast, accent hue, radii, and shadow — and remove the preset values that have no relation to the product.

## 12. Low-contrast gray body text

**Severity:** low

**How to spot:** Body copy in `text-gray-400`/`text-gray-500` or a low-alpha white on a light or mid-tone surface; secondary text that fails to read at normal viewing distance.

**Why it reads as generated:** Carlo's "color shades & opacities" tell describes text at 90, 70, 55, 40, 30 and 20 percent — a spread chosen to look layered rather than to preserve legibility. It signals a design that values the screenshot's softness over the reader.

**Replacement action:** Pick two or three text tones with verified contrast and assign them roles: primary, secondary, disabled. Raise the body tone until it reads comfortably, then use size and weight for hierarchy instead of opacity.

## 13. Timid evenly distributed palette

**Severity:** low

**How to spot:** Every color used at roughly the same saturation and area — a pastel accent here, a pastel accent there, no dominant neutral, no single strong hue.

**Why it reads as generated:** Paralect's 21 patterns and the field guide both flag decoration that is evenly sprinkled to make plain content look designed. When no color is dominant, the eye has no entry point and the page reads as a sample sheet.

**Replacement action:** Give one hue the job of carrying identity and let neutrals dominate the rest. Remove accents that cannot explain what they mark.

## 14. Purple-to-blue or amber-to-pink hero gradient

**Severity:** low

**How to spot:** `from-purple-*`/`from-violet-*` to blue, or an amber-to-pink wash, behind the hero; `bg-gradient-to-br` with the default Tailwind hues; the same two hues repeated on the CTA.

**Why it reads as generated:** This is the single loudest tell in 925studios' account and also appears in Carlo's "gradient backgrounds" (blurred purple and blue blobs) and in the developersdigest 16-pattern list. It is the median of the training data, not a decision.

**Replacement action:** Use a flat surface or a structurally defined band in a color you can justify. If a gradient is essential, derive its stops from the brand and keep it off the primary reading area.

## 15. Aurora mesh blobs

**Severity:** low

**How to spot:** Several large, soft, multicolored radial gradients overlapping behind the hero — often described in source as `aurora`, `mesh`, `blob`, or stacked `radial-gradient` layers.

**Why it reads as generated:** It is the glow tell from the primary catalog scaled into a full background. The field guide and unslop-ui both treat generic atmospheric blur as decoration that fills space without saying anything about the product.

**Replacement action:** Replace atmosphere with content: a real screenshot, a diagram, or a confident negative-space composition. If you keep a gradient, make it one sharp shape, not a fog of blobs.

## 16. Glassmorphism

**Severity:** low

**How to spot:** `backdrop-blur`, `bg-white/10`, translucent cards with hairline borders, and blurred content behind them used across most sections rather than for one layered context.

**Why it reads as generated:** Carlo's "frosted glass" and the funboy322 result both name it as a default the tools reach for unprompted. Applied everywhere, it makes every surface feel provisional and adds paint cost for a look that means nothing.

**Replacement action:** Use translucency only where it communicates layering — a menu over content, a modal, a sticky header with a real reason. Make ordinary content opaque and quiet.

## 17. Gradient borders

**Severity:** low

**How to spot:** A 1px border whose color shifts along the edge, usually via `border-image`, a padding-wrapper trick, or a `bg-gradient` + inner mask utility, applied to most cards.

**Why it reads as generated:** It is the "colored stripe on rounded cards" instinct from Paralect's 21 patterns in a more expensive form: a decorative edge added to make plain content feel designed. It makes every card announce itself.

**Replacement action:** Use a solid border or no border, and let spacing and type group the content. Reserve a colored edge for a single state that means something, such as a selected item.

## 18. Uniform soft shadows

**Severity:** low

**How to spot:** Every card carries the same `shadow-md`/`shadow-lg` with the same offset and blur; the shadow repeats mechanically instead of describing height or focus.

**Why it reads as generated:** Uniform soft shadows are part of the "three rounded cards with soft shadows" fingerprint 925studios describes. When all elevations are equal, the shadow conveys no hierarchy and just adds weight to the page.

**Replacement action:** Use separation by spacing first. If elevation is meaningful, define two or three shadow levels and apply them only to things that actually sit above the page.

## 19. Faint dotted grid on dark hero

**Severity:** low

**How to spot:** A dark hero overlaid with a tiny repeating dot pattern that fades out from the center; radial-gradient mask plus a dotted `background-image`.

**Why it reads as generated:** Carlo lists "dot grid backgrounds" as a decoration whose job is to keep the page from looking empty. It is a preset that fills space with texture rather than information.

**Replacement action:** Remove the grid and let the hero's typography and whitespace carry the composition. If you need a texture, make it one that belongs to the product — a graph paper for a CAD tool, for example.

## 20. Full-bleed black scrim over hero images

**Severity:** low

**How to spot:** A `bg-black/70`-style overlay spanning the entire hero image so any photograph is flattened into a dark, uniform backdrop for white text.

**Why it reads as generated:** It is the dark-only default applied to photography: the image is present but neutralized, which is the same anonymous treatment 925studios warns about. The scrim hides the very content the image was chosen to provide.

**Replacement action:** Choose an image with a naturally quiet region and place the text there, or use a partial gradient only where it preserves legibility. Let the photograph keep its contrast and color.

---

## Layout

## 21. Default centered hero recipe

**Severity:** medium (structural)

**How to spot:** Centered text, pill badge, a verb-first headline ("supercharge", "build faster"), one gray subhead, a white button and an outline button, all in a symmetric column.

**Why it reads as generated:** Carlo's "hero formula" and 925studios' "hero that could belong to any product" describe the same page. It is the most copied opening in generated design: structurally identical across ten thousand products, and therefore invisible.

**Replacement action:** Lead with the product's own proof — a real screenshot, a specific claim, an asymmetric composition. Decide what the visitor should look at first and make the layout say it.

## 22. Codified landing-page section order

**Severity:** medium (structural)

**How to spot:** The same sequence every time — hero, logo strip, three features, "how it works", testimonials, pricing, FAQ, final CTA — with the same labels regardless of the product.

**Why it reads as generated:** The field guide and Paralect both flag section order as a template reflex. The order encodes a generic SaaS sales funnel rather than an answer to what this visitor needs to believe, so the structure itself is generic.

**Replacement action:** Build the page from the questions a real buyer asks. Keep only the sections that answer one, and order them by the decision they unblock. A short page with four honest sections beats the full template.

## 23. One global container width

**Severity:** medium (structural)

**How to spot:** A single `max-w-*` wrapper applied to every section, so hero, prose, cards, footer, and images all share one measure.

**Why it reads as generated:** One width for everything is a framework default, not a reading decision. It prevents the purposeful contrast between a wide product image and a narrow paragraph, which is one of the main ways a page expresses hierarchy.

**Replacement action:** Define a small set of measures — narrow for prose, wide for media, full-bleed for a deliberate break — and assign them by content role.

## 24. Sticky frosted nav

**Severity:** low

**How to spot:** A header pinned to the top with `sticky top-0`, semi-transparent background, and `backdrop-blur` that stays over every section.

**Why it reads as generated:** It combines two defaults — frosted glass and persistent chrome — into a component that appears on nearly every generated landing page. The blur is decorative and the persistence is rarely justified by the page's length.

**Replacement action:** Use a normal header, or make it sticky only when the page is long enough to need it. Give it an opaque background with a single boundary line and remove the blur unless it solves a real layering problem.

## 25. Fat four-column footer

**Severity:** medium (structural)

**How to spot:** A tall footer with four equal link columns, a logo, a tagline, and a fine-print row, occupying as much vertical space as a content section.

**Why it reads as generated:** Equal columns of near-identical links are the symmetry tell at the bottom of the page. The footer is sized to the template rather than to the number of real destinations.

**Replacement action:** Keep only links that exist and matter. Use two columns or a single row, let it be short, and stop when the information is done.

## 26. Final CTA mirroring hero

**Severity:** medium (structural)

**How to spot:** The closing section repeats the hero's badge, headline structure, subhead, and button pair almost verbatim.

**Why it reads as generated:** Carlo's "verbose, redundant text" and the field guide's repetition pattern show up structurally here: the page begins and ends with the same unspecific pitch, so nothing has been learned in between.

**Replacement action:** Make the close a consequence of the page — a concrete next step, an answer to the remaining objection, or a single direct invitation. Do not restate the hero.

## 27. Uniform py-20 rhythm

**Severity:** medium (structural)

**How to spot:** Every section uses the same `py-20` (or the same `py-16`/`py-24`) vertical padding, producing evenly spaced bands down the page.

**Why it reads as generated:** Uniform rhythm is the spacing equivalent of equal cards: it says the sections are equally important when they are not. The field guide treats this evenness as a signature of generated layout.

**Replacement action:** Vary vertical space by role — tight between related blocks, generous between distinct chapters. Let one section break the rhythm to mark the main event.

## 28. Equal-column stat band and 3-up testimonials

**Severity:** medium (structural)

**How to spot:** A row of three or four big numbers with tiny captions, immediately followed by three equal quote cards with circular avatars and five stars.

**Why it reads as generated:** Carlo's "stat strips" ("a number without a source is decoration") and the "three feature cards" reflex in a different costume. The symmetry makes unverifiable numbers and interchangeable quotes look like evidence.

**Replacement action:** Use one number you can source and explain its method, or replace the strip with a concrete result. For quotes, show fewer, longer, attributed testimonials with the context that makes them credible.

## 29. Cards nested in cards

**Severity:** medium (structural)

**How to spot:** A `card` containing a grid of smaller bordered boxes, each with its own heading and icon — sometimes three levels deep.

**Why it reads as generated:** Carlo's "containers with borders": boxes inside boxes inside boxes. When everything is in a box, nothing is grouped, and the page becomes a component-library demo.

**Replacement action:** Flatten one level. Use whitespace, a rule, or a change of type scale to group the inner items, and reserve the outer card for something that is genuinely one object.

## 30. Symmetric 50/50 zigzag

**Severity:** medium (structural)

**How to spot:** Section after section of two equal columns — image left/text right, then text left/image right — with identical padding and alternating order.

**Why it reads as generated:** Perfect alternation is a template's way of producing rhythm without emphasis. Every feature gets the same amount of space and the same treatment, which is the opposite of a real editorial decision.

**Replacement action:** Let the content choose the proportion: one wide image with a short caption, one narrow list beside a large statement, an occasional full-width break. Break the alternation at least once.

## 31. Perfectly tessellated grid

**Severity:** medium (structural)

**How to spot:** A gapless or uniformly gapped grid where every tile is exactly the same size and shape, with no cell spanning two columns or standing apart.

**Why it reads as generated:** Carlo's "bento grids" and the field guide's tessellated pattern both describe a layout that looks busy and says little. The perfection is the point: the model can produce a neat grid but not a reason for one tile to be larger.

**Replacement action:** Give one cell a different span or treatment to express priority. If the items truly are equal, consider a list or a single featured example instead of a grid.

## 32. Mobile collapses everything to one column

**Severity:** medium (structural)

**How to spot:** A `grid-cols-3` desktop layout that becomes a single stacked column at the `md`/`lg` breakpoint with no intermediate step, so three cards become three full-width blocks.

**Why it reads as generated:** The collapse is the default Tailwind responsive recipe, not a mobile design. It produces enormous vertical pages and discards every hierarchy decision made at desktop width.

**Replacement action:** Design the small-screen order deliberately: keep a two-column pair where it fits, promote the most important item, and compress rather than merely stack. Check at 375px, not just in the responsive inspector.

---

## Components and copy

## 33. shadcn Card for every content type

**Severity:** medium (structural)

**How to spot:** The same Card primitive wraps the feature, the quote, the stat, the pricing tier, the FAQ item, and the CTA, with only the inner content changing.

**Why it reads as generated:** Paralect's first pattern — a thick colored stripe on rounded cards — is one instance of the broader habit: AI puts the same container on every kind of content to make it look designed. A component used for everything stops carrying meaning.

**Replacement action:** Match the container to the content: a list for steps, a blockquote for a quote, a table for comparison, bare text for a statement. Keep cards for discrete objects and vary their treatment.

## 34. Pastel icon-feature card

**Severity:** low

**How to spot:** A tinted square with a thin-line icon in a pastel hue (violet, sky, emerald), a bold title, and two gray lines, repeated three or more times.

**Why it reads as generated:** 925studios names the "thin, interchangeable line icons" that complete the AI effect, and Carlo calls the three-card row the most generated layout there is. The icon is decoration standing in for a description of what the feature does.

**Replacement action:** Replace the icon with the real artifact — a screenshot fragment, a short code sample, a specific number with a source — and vary the layout so the three items are not identical.

## 35. 3-tier pricing with middle scale-105

**Severity:** medium (structural)

**How to spot:** Three equal pricing cards, the middle one enlarged with `scale-105` and a `Most popular` ribbon; identical feature lists with green checks and a gray missing-feature row.

**Why it reads as generated:** The `scale-105` middle tier is a UI cliche that models reproduce because tutorials use it to show emphasis. It creates emphasis by size alone rather than by explaining why that tier is right for whom.

**Replacement action:** Present the pricing that fits the product — one clear plan, two contrasting options, or a table. If three tiers are real, say who each is for and drop the scale trick.

## 36. Hero pill with sparkle and dot

**Severity:** low

**How to spot:** A `rounded-full` badge above the headline containing a sparkle glyph or icon plus a small colored dot and copy like "NEW · NOW WITH AI".

**Why it reads as generated:** This stacks two primary-catalog tells (pills above the headline, sparkle icons) with Carlo's "sparkles, live dots and ⌘K" — small signals that each mean something until they are used everywhere.

**Replacement action:** Put the announcement in the headline itself, the nav, or a real time-bound banner. Remove the sparkle unless it denotes something specific.

## 37. Gradient primary button

**Severity:** low

**How to spot:** The main CTA uses `bg-gradient-to-r` with brand-adjacent stops and a soft shadow; often the only saturated element on the page.

**Why it reads as generated:** 925studios explicitly names "a gradient button that says Get Started" as part of the fingerprint. The gradient is there to make the button feel important because the copy and hierarchy do not.

**Replacement action:** Use a solid brand color with a clear hover and focus state. Make the label say what happens; let contrast, not a gradient, carry the emphasis.

## 38. Primary plus ghost Get Started / Learn More duo

**Severity:** low

**How to spot:** Every CTA area repeats the same pair: a filled "Get Started" button and an outline or ghost "Learn More" link, in the same order, in the hero, mid-page, and footer.

**Why it reads as generated:** Carlo's "hero formula" includes the white button and outline button, and 925studios notes the pair travels with weightless copy like "Build faster. Ship smarter." Identical pairs at every decision point flatten the difference between buying and reading.

**Replacement action:** Give each location one action appropriate to it: a concrete trial CTA here, a documentation link there. Label buttons with the outcome ("Create a workspace", "Read the setup guide").

## 39. Newsletter input with No spam

**Severity:** low

**How to spot:** An email field beside a button, with a reassurance line underneath reading "No spam", "Unsubscribe anytime", or "We'll never share your email".

**Why it reads as generated:** It is a copy filler that appears wherever the template has a signup slot. It answers no real question the visitor has and consumes space that could state what they would actually receive.

**Replacement action:** Say what arrives and how often: "One monthly email with release notes." If there is no real newsletter, remove the component.

## 40. Comparison rows of green checks and red Xs

**Severity:** low

**How to spot:** A feature matrix where every row has a green check for the product and a red X for the competitor, often with no sources and obvious bias.

**Why it reads as generated:** It is the comparison equivalent of the stat strip: visual certainty without evidence. The field guide's field notes flag rows that exist to produce a pattern rather than to convey verified differences.

**Replacement action:** Compare a small number of things that genuinely differ, cite where the competitor data comes from, and use text ("Includes", "Not included") rather than triumphant icons.

## 41. Numbers written as words and long noun-stack titles

**Severity:** low

**How to spot:** "Three times faster" instead of a sourced figure; headings like "The enterprise workflow automation platform for modern teams" — a stack of nouns with no verb and no subject.

**Why it reads as generated:** Carlo's "verbose, redundant text" covers long sentences that say little and the habit of writing everything in threes; the long noun-stack title is the headline form of the same averaging. Numbers in words remove the possibility of verification.

**Replacement action:** Write the number with its unit and source, and shorten the title to a claim someone could dispute: "Deployments finish in 40 seconds" beats "The fast deployment platform".

## 42. Visual metaphor explained with labels and demos made of text

**Severity:** low

**How to spot:** An illustration of nested boxes, arrows, or orbiting circles, with each part labeled, followed by a "demo" that is another paragraph of text rather than something interactive.

**Why it reads as generated:** Carlo's "overly detailed diagrams" — nine boxes and fifteen dashed arrows — describes the pattern: if it takes a minute to read, it is not helping. Explaining a metaphor in words means the visual is not doing the work.

**Replacement action:** Show the real product doing the real thing, or drop the diagram and write the explanation plainly. If a diagram is needed, reduce it to three parts and one arrow.

## 43. Placeholder avatars, logos, and images

**Severity:** low

**How to spot:** Generic circular gradient avatars, fake company wordmarks in gray, stock photos of teams at laptops, or `placeholder.svg`/`via.placeholder.com` URLs left in the page.

**Why it reads as generated:** Carlo's "logo rows" note that the device works when the logos are real and known; most are not. Unreal placeholders are the clearest possible signal that nobody supplied the real evidence, so the design is performing credibility.

**Replacement action:** Use real customer logos with permission, real portraits, and real product images. If you have none yet, remove the row and say what you do have.

---

## Applying the secondary catalog

Count these tells, do not ban them. One or two on a page is a choice; five on one screen is a template. Confirm each against source or a render before counting it, assign a penalty of 2 to each confirmed tell, and cap total penalties at 100 across the primary and secondary catalogs combined. A page showing five or more confirmed expanded tells should be treated as structural slop even when its primary score is high — rewrite the structure rather than polishing the colors.
