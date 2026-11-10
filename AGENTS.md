# Star Therapy Solutions — working instructions for coding agents

## Project and state
- Repository: `https://github.com/aperez2313/StarTherapyV3`
- Live website: `https://aperez2313.github.io/StarTherapyV3/`
- CURRENT WORKING BRANCH: `feature/brand-v3-redesign` (already created and checked out in VS Code). DO NOT make another branch or modify `main` without explicit user approval.
- Pages are generated: edit `tools/build-pages.mjs` (shared header, footer, call bar and every page's content) and run `node tools/build-pages.mjs .` from the repo root. Do not hand-edit the generated HTML, or the next run will overwrite it. Preview locally with `node tools/serve.mjs . 8123` at http://localhost:8123/StarTherapyV3/.
- Site structure (Direction A, November 2026): static pages at `index.html` plus folder pages `speech-therapy/`, `occupational-therapy/`, `physical-therapy/`, `locations/`, `getting-started/`, `insurance-funding/`, `about/`, `contact/`, and `404.html`. Header, footer and mobile call bar are repeated in every page: change all of them together. Pages are plain HTML, never rendered by JavaScript. Use relative paths (the site lives under `/StarTherapyV3/`), except `404.html`, which uses `/StarTherapyV3/` absolute paths.
- Owner review and testing before any merge/deployment. Never push or merge without permission.

## Sources and precedence
- `design-reference/Star_Therapy_Brand_Guidelines_v3.pdf`: design source of truth.
- `design-reference/Star_Therapy_Solutions_Overview.pdf`: business and clinical source of truth.
- `design-reference/STAR_THERAPY_COPILOT_BRIEF_V3.md`: detailed implementation requirements and cautions.
- `design-reference/star-therapy-brand-v3-prototype.html`: layout inspiration ONLY; not production-ready and contains demo-only restrictions.
- If a source can't be read, say so; do not invent or claim to have reviewed it.
- Reference PDFs, prototype and brief stay local: add `design-reference/` to `.git/info/exclude` or an appropriate `.gitignore` BEFORE staging files. Never commit/publish the reference directory.

## Brand: Direction A · Warm (owner-chosen, supersedes Brand V3 colors and fonts)
- The owner replaced the V3 saturated palette with her pastel palette (October 2026) and chose Direction A (November 2026). Tokens live in `assets/css/site.css`; the V3 PDF still governs layout principles (quiet page, color in tiles, one action color) but not hex values or fonts.
- Cream `#FCF8F1` page; sand `#F6ECE3` alternate sections; ink bronze `#6B522E` headlines; body `#5C5144`; logo bronze `#89683A` (no redrawing or recoloring); deep bronze `#3B2C17` for text on pastel tiles.
- Blush `#F2CEC3` = speech; periwinkle `#78A6EE` = OT (tiles only; links and eyebrows use `#3863B8`, 5.0:1 on sand); mint `#CFEAE6` = locations; latte `#D9B68A` = team; sage `#9CC5A1` / `#4E7A57` = progress; lavender `#E6D2F2` = funding; clay `#D9A890` = physical therapy; rosewood `#8F5650` = the only button color. Color-to-job mapping awaits owner confirmation.
- White text only on rosewood or sage deep. Pastels always carry deep bronze text.
- Fraunces 600 for headlines, Public Sans 400/600/700 for body and buttons. 2px corners on everything; nothing circular. Buttons are short, carry an icon plus label, and are the only rosewood element.
- Icons: `assets/icons/icons.svg` sprite (24px grid, 2px stroke, square caps, mitered joins), always beside text and `aria-hidden`.

## Business accuracy
- Pediatric speech-language therapy, occupational therapy and physical therapy (PT added November 2026; PT funding coverage, PT staff roles and PT session summaries not yet confirmed); office at 6625 Miami Lakes Drive East, Suite 234, Miami Lakes, FL 33014, appointment only.
- Locations include Miami Lakes, Palm Springs North, Hialeah, Hialeah Gardens, Miami Gardens; participating schools/daycares/preschools subject to arrangement/availability.
- Funding categories: private pay, commercial insurance, Medicaid, FES-UA scholarship. NEVER invent accepted insurers or imply guaranteed benefits.
- English and Spanish language availability noted by business; do not promise all care is bilingual without confirmation.
- Detailed post-session summaries are a differentiator; do NOT create a standalone 'Parent Collaboration' section.
- Source discrepancy: brand PDF's linear 'school visit -> office -> insurance' steps are NOT verified intake workflow. Use neutral initial inquiry -> options/eligibility -> evaluation or next appropriate step, pending owner confirmation.
- Source discrepancy: brand speech tile mentions feeding; business overview places feeding under OT. Do not claim speech feeding therapy without confirmation.
- No invented staff names/credentials, testimonials, service availability, locations, outcomes or prices.

## Scope and healthcare privacy
- Current contact direction: phone-only; official owner-confirmed number `(305) 778-6144`, linked as `tel:+13057786144`. Use prominent 'Call Now' actions and readable phone text. All inquiry/contact forms were removed by owner request; do not reintroduce them without explicit approval.
- Do NOT enable form submission or connect mailto, unreviewed form handlers, analytics, ad pixels or third-party scripts to inquiry data. Contact information in healthcare context might be PHI; vendor, privacy, access-control and BAA decisions need separate owner review.
- No child's personal or medical details; no free-text clinical field. No auto-marketing signup from an inquiry.
- No `noindex` from prototype on production site. Preserve existing approved logo/images only; placeholders must be clearly indicated.
- Before changes, show a plan and uncertainties; do NOT edit until user approves. After changes, summarize diff, give local preview and mobile/accessibility QA instructions; no push/merge unless approved.

## Continuity
- For new Codex sessions, read this file and the V3 brief FIRST. Document important approved decisions and remaining TODOs here or in a concise `PROJECT_STATUS.md`. Never treat old chat context as authoritative when contradicted by the latest source docs.
