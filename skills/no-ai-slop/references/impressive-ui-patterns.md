# Impressive UI patterns

Removing tells sets a floor, not a target. A page can score 100/100 and still be forgettable. This file is the positive half of the skill: the researched patterns to build with once the slop is gone. Read it **before** writing or rewriting a screen, alongside `rewrite-playbook.md`.

The rule that governs everything here: **pick the pattern that fits the product truth**. A 3D hero on a text-first product is slop with a higher frame budget. A static screenshot on a product whose value is motion is a missed argument. Every pattern below names when it fits and when it breaks.

For where to find real examples of these patterns, see `reference-library.md`.

## Contents

- Decide in this order
- Hero patterns, matched to the visitor
- Page composition that converts
- Component recipes
- Using premade components without importing slop
- 3D and scroll-driven pages
- Before you ship, answer these
- Sources

## Decide in this order

1. **What is true about the product?** One sentence, no adjectives. If the product is invisible (API, infra, internal tool), do not borrow a hardware product-shot hero.
2. **What does the visitor already believe?** Cold visitors need proof, warm visitors need clarity, hot visitors need no friction. The hero pattern follows from this, not from a mood board.
3. **What artifact proves the claim?** A real interface fragment, a benchmark with conditions, a named customer result, or a working interaction. Not an abstract illustration.
4. **What is the one action?** One primary CTA. Every other link is secondary and looks secondary.
5. **What motion tier earns its cost?** CSS → Lottie/SVG → 3D reveal → pin-and-scrub 3D → custom shaders. Choose the cheapest tier that communicates the idea.
6. **What is the budget?** First paint, mid-range phone frame rate, reduced-motion frame, keyboard path, and DOM text that crawlers can read.

## Hero patterns, matched to the visitor

Adapted from Brainy's eight production hero patterns (2026). The "load risk" column is part of the decision: the wrong pattern loaded fast still fails, but the right pattern loaded slow fails too.

| Pattern | Fits when | Mechanism | Load risk | Breaks when |
|---|---|---|---|---|
| Product-shot centered | The product is physical and beautiful | Visual confidence | Low | Used for invisible SaaS or a metaphor image |
| Split-screen | The UI explains itself in two seconds | Claim left, proof right | Low | The screenshot needs a caption to make sense |
| Interactive demo | First objection is "can I do this?" | Hands-on conviction | Medium | The demo is too simplified or confusing |
| Video-first | The product *is* moving image | Medium and message match | High | The video is generic B-roll or slow on mobile |
| Big typographic statement | Type-led or cultural brand | Brand conviction | Low | The headline carries no actual claim |
| Animated headline | Crisp value proposition | Attention with restraint | Low | The animation repeats or delays the point |
| Live collaborative demo | Real-time collaboration is the product | Social proof via product | Medium | Fake activity or no visible other person |
| Brutalist minimal | Developer tools, anti-marketing trust | Honesty through restraint | Low | Used as an excuse to ship no hierarchy |

An interactive hero is the right choice for a tool whose value is tactile: put the interaction above the CTA, not below it. If the demo needs a tutorial, it is not a hero.

## Page composition that converts

From Brainy's 12 landing-page principles (2026), compressed to the moves that change the page:

- **The hero earns the click in one sentence.** A visitor should be able to say what the product is after reading the headline aloud. Subheads add context; they do not rescue a broken headline. 72–96px display type on desktop is normal, with a real jump to body size.
- **The visual anchors the claim.** Show the product doing the thing the headline promised. Real rows, real terminal output, real editor. If a feature cannot be shown, rewrite the feature.
- **One primary CTA.** Two or three words, one verb, high contrast. The accent color appears three or four times on the whole page, not ten.
- **Specific proof beats decorative proof.** One named customer with a measurable result, then two short supporting quotes, then a logo strip if at all, then a case-study link. Twelve gray logos at 40% opacity prove nothing.
- **Hierarchy does the selling.** Break dense sections with whitespace. Use weight and scale before color.
- **CTA ladder, not CTA pile.** Primary hero action; contextual secondary action inside the relevant feature; case-study link inside proof; newsletter or guide in the footer. Each has one job.
- **Sticky CTA only on long pages.** A thin bar after the hero exits, primary action plus one secondary link. No popup, no scroll-blocking.
- **Micro-copy removes the last objection.** "No credit card required." "Free up to 10 users." Not "Limited time offer!"
- **Minimum viable form.** One to three fields on first contact. Everything else happens inside the product.
- **Progressive disclosure.** Three to five hero features in a bento or prioritized stack; the rest behind a link. Headline price on the landing page, full table on the pricing page.
- **Performance is a design decision.** One variable-font subset, static hero image or deferred scene, one primary script, no third-party tracking in the critical path. Target a sub-second readable hero on mid-tier mobile.

The 2026 kill list is a useful negative check: marquee logos without names, equal-weight three-column feature rows, four hero CTAs, "trusted by" without names, autoplay hero video, gated content as primary CTA, low-contrast buttons, "AI-powered" in the headline, consent walls over the hero.

## Component recipes

These are compositions, not libraries. Build them from your own tokens or from vetted blocks (see below), then remove everything the content does not need.

### Bento grid

Use for **four to eight related capabilities of uneven importance**. Not for one message (use a hero) and not for twenty features (use a list).

- Size tiles by importance. The largest tile carries the capability that sells the product; equal tiles claim equal importance, which is rarely true.
- Every tile contains a **real UI fragment plus a one- or two-line caption**. Test: the tile still makes sense with its caption hidden.
- One visual language across all tiles: same background, radius, padding, type scale. Variety comes from content, not from styling.
- Explicit placement, not masonry: e.g. areas `"a a b c" / "a a d d" / "e e f f"`. Under 900px go to two columns; under 560px one column in reading order.
- Mobile stacks by importance in the markup order. No tile's meaning may depend on its neighbor.
- Mistakes: decorative icons or gradients instead of product, too many tiles, captions over two lines, every tile animating at once, using a grid where one feature block would say more.

Source: SaaSFrame's bento guide (55 sections from 46 SaaS products, as of November 2026) and design.dev's annotated prompt template.

### Proof block

One dominant named quote with a real outcome and a link to the case study. Two shorter supporting quotes with role and company. A compact logo strip at the bottom with a caption. Never start with the logo strip.

### Comparison

Two columns with real differences and an explicit recommendation. Green-check/red-X tables read as sales collateral unless every row is a verifiable fact. Prefer a short "old way / new way" table with concrete behavior.

### Walkthrough

Numbering is only allowed when the content is genuinely a sequence. Each step gets a concrete outcome, not an icon. If steps can be reordered freely, use a catalog with hierarchy instead.

## Using premade components without importing slop

The block ecosystem is real and large. Reported 2026 catalogs include Velora UI (64 animated blocks plus a finished MIT site, with gzipped size and dependency counts published per component), Magic UI (150+ animated components), Aceternity UI (200+ motion-rich blocks), Tailark (300+ marketing blocks), shadcn.io (6,000+ blocks), Shadcnblocks (1,557 blocks plus Figma), 21st.dev, Origin UI, and Cult UI. `threecn` offers shadcn-style React Three Fiber scenes; BSMNT Scrollytelling componentizes GSAP ScrollTrigger in React. See the sources at the end.

A block is raw material, not a design. Use this sequence:

1. **Choose by need, not by catalog.** Name the job first: proof block, feature visual, pricing, hero. Search for that job.
2. **Pick one block, not a bundle.** Do not install an effects pack into a page that needs one effect.
3. **Restyle with your tokens.** Replace the library's colors, radii, type scale, and spacing with the product's own. If the block only works with its default palette, reject it.
4. **Check the receipts.** Prefer components that publish gzipped size and dependency count; pick by weight. Delete unused imports and dead variants.
5. **Check motion.** Global `prefers-reduced-motion` support is mandatory. Remove hover effects that do not explain state.
6. **Check the copy.** Replace every placeholder headline, metric, avatar, and logo with a real artifact or delete the element.
7. **Re-run the slop audit on the result.** A premium block library is not evidence of intent.

## 3D and scroll-driven pages

Scroll-driven 3D went mainstream by 2026 (WebGL 2 baseline, Three.js 170+, React Three Fiber, GSAP ScrollTrigger). It is a specialist tool for a small number of high-impact moments, not a default hero treatment. The central test from the researched case studies: **name what the third dimension communicates**. "Be impressed" is not an answer.

### Choose the cheapest tier that carries the idea

| Approach | Control | Cost | Use for |
|---|---|---|---|
| CSS scroll animation | Low: transforms, opacity | Very low | Reveals, parallax, simple depth |
| Lottie / SVG on scroll | Medium: 2D vector | Low | Illustrated storytelling, icons |
| Three.js reveal | Medium: one fire-once object | Medium | A single 3D object entering view |
| Three.js pin + scrub | High: full reversible scene | High | Hero teardowns, product configurators |
| WebGPU / custom shaders | Very high | High to very high | Bespoke effects at the platform edge |

### Use it when

- A hero moment must carry the whole pitch.
- The product benefits from being inspected in space: rotation, teardown, material response.
- Copy and geometry share one timeline and explain each other.
- The brand expects a cinematic feel and the team can commit to a mobile performance budget.

### Use something else when

- The content is text-first: docs, blog, most B2B. Use fast flat HTML and CSS.
- One clip conveys the whole idea. Use a muted, lazy-loaded video with a poster.
- The audience is on constrained devices or networks. Use a static hero image.
- The team cannot maintain a WebGL codebase. Use CSS or Lottie.
- You cannot say what the 3D adds. Spend no frames on it.

### Architecture: input, state, render

Scroll is **input**, not the animation engine. Three parts, never collapsed:

```
scroll position → normalized progress (0..1) → scene state → one requestAnimationFrame loop
```

- Measure progress relative to a page or pinned section; clamp and normalize it.
- Write progress into a small state object. Scroll listeners never call `renderer.render()`.
- One rAF loop eases current progress toward the target and writes camera, rotation, and material each frame.
- Scene state must be a pure function of progress. If rotation accumulates with `+=` across frames, the frame at 40% scroll depends on how the visitor got there. That is a bug.
- Prefer **one** pinned scrub section near the top. Use reveal animations below. Pinning every section feels like a hijacked scroll.
- Scroll-driven, not scroll-jacked: scrolling up rewinds the scene, stopping holds the frame, and the visitor stays in control.

### Video-on-scroll

When the source is a video rather than a 3D scene: probe with `ffprobe`, extract 40–160 evenly spaced frames (default 80; fewer than 40 is choppy, more than 160 is heavy), and build a sticky `100vh` stage inside a `600vh` scroller. Compute clamped progress, map it to `floor(progress * (N - 1))`, and swap the active frame inside `requestAnimationFrame`. Serve a poster immediately, compress to WebM or AV1, lazy-load on mobile, and keep the headline as real DOM text over a subtle vignette. This is reader-controlled scrub, not an autoplay hero; the two are different patterns with different budgets.

### Performance, accessibility, SEO checklist

- Cap pixel ratio (`Math.min(devicePixelRatio, 2)`).
- Pause the rAF loop offscreen with `IntersectionObserver`; resume on re-entry.
- Compress models (Draco) and textures (KTX2/Basis); decimate what the camera never approaches.
- Dispose geometries, materials, and renderer on unmount.
- Build the **reduced-motion static frame first**. Render one frame when `prefers-reduced-motion: reduce` matches; treat motion as interpolation between frames.
- Keep headings, body copy, links, and CTAs in semantic HTML. A canvas is invisible to crawlers and screen readers.
- Lazy-mount the scene after first paint so it does not block LCP.
- Never hijack or trap scroll. Layered controls need visible focus and contrast against the moving scene.
- Profile on a mid-range phone. If the scene stutters, simplify it or ship a still image instead.

### What the best sites actually steal

From the 2026 case-study sources: one object rendered with real weight and inertia (Oryzo), a single understandable interaction concept (Bruno Simon), shader-based dimensional surfaces without a full scene (Stripe), a 3D configurator with a measurable business case (Nike), scroll-sequenced rooms or chapters (Cartier, Shopify Editions), and a chapter rail so returning visitors can skip ahead in a long scroll. The recurring lesson is constraint: they do one hard idea cleanly rather than stacking effects.

## Before you ship, answer these

- Could the headline appear on any other product with a find-and-replace?
- Does the hero visual prove the headline, or decorate it?
- How many primary CTAs are there? (One.)
- Is every number sourced or demonstrable?
- Is any component present because it was in a library, not because the content needed it?
- What motion tier did you choose, and what does it communicate?
- What does the page show with `prefers-reduced-motion: reduce`, JavaScript disabled, and on a mid-range phone?
- Does the audit score still hold after the impressive additions?

## Sources

All fetched with `tinyfish fetch content get` on 2026-11-24. Claims are reported as the sources report them; they are not independent replications.

- Brainy, "Landing Page Design: 12 Principles That Convert in 2026" — https://brainy.ink/paper/landing-page-design-principles
- Brainy, "Hero Section Design: 8 Patterns That Convert in 2026" — https://brainy.ink/paper/hero-section-design-patterns
- SaaSFrame, "Bento Grid Design: A Practical Guide With Examples" — https://saasframe.io/blog/designing-bento-grids-that-actually-work-a-2026-practical-guide
- design.dev, "Bento Grid" prompt template — https://design.dev/templates/components/bento-grid
- AdminLTE, "13 Best shadcn/ui Block Libraries 2026" — https://adminlte.io/blog/shadcn-ui-block-libraries/
- AETumi, "Three.js Scroll Animation: How to Build Scroll-Driven 3D" — https://aetumi.app/news/3d-scroll-animation-websites/
- AETumi, threejs-scroll-animation README — https://github.com/AETumiApp/threejs-scroll-animation
- Utsubo, "Best Three.js Websites 2026: 8 Sites + Techniques" — https://www.utsubo.com/blog/best-threejs-websites-2026
- MDX.SO, "Best 3D Websites of 2026" — https://mdx.so/blog/best-3d-websites-2026-examples
- scrollytelling.ai, "Best Scrollytelling Examples & Websites (2026)" — https://scrollytelling.ai/examples/
- BSMNT Scrollytelling docs — https://scrollytelling.basement.studio/docs
- hoodini/ai-agents-skills, "video-to-landing-page" SKILL.md — https://github.com/hoodini/ai-agents-skills/blob/master/skills/video-to-landing-page/SKILL.md
- Awwwards, typography collection — https://www.awwwards.com/awwwards/collections/typography-in-web-design/
