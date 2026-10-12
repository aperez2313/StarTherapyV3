# Star Therapy Solutions — working instructions for coding agents

## Project and state
- Repository: `https://github.com/aperez2313/StarTherapyV3`
- Live website: `https://aperez2313.github.io/StarTherapyV3/`
- CURRENT WORKING BRANCH: `feature/brand-v3-redesign` (already created and checked out in VS Code). DO NOT make another branch or modify `main` without explicit user approval.
- Existing production entry: `index.html`. Preserve and improve incrementally; don't replace wholesale with the prototype.
- Owner review and testing before any merge/deployment. Never push or merge without permission.

## Sources and precedence
- `design-reference/Star_Therapy_Brand_Guidelines_v3.pdf`: design source of truth.
- `design-reference/Star_Therapy_Solutions_Overview.pdf`: business and clinical source of truth.
- `design-reference/STAR_THERAPY_COPILOT_BRIEF_V3.md`: detailed implementation requirements and cautions.
- `design-reference/star-therapy-brand-v3-prototype.html`: layout inspiration ONLY; not production-ready and contains demo-only restrictions.
- If a source can't be read, say so; do not invent or claim to have reviewed it.
- Reference PDFs, prototype and brief stay local: add `design-reference/` to `.git/info/exclude` or an appropriate `.gitignore` BEFORE staging files. Never commit/publish the reference directory.

## Brand V3 (mandatory)
- Off-white `#FCFAF7`; headline/ink bronze `#6B522E`; body `#5C5144`; authentic logo bronze `#89683A` (no redrawing).
- Coral `#E88978` = speech; cobalt `#3559A6` = OT; sky `#8FCBE3` = locations/school; mustard `#E3B423` = team; kelly `#3E9A55` = progress; poppy `#D24B45` = primary action.
- Avoid low-contrast white poppy button text: use accessible slightly darker fill as appropriate while retaining brand token.
- Quicksand Bold for headlines and Source Sans 3 for body/buttons; off-white page, colorful square tiles, pill-shaped action buttons. No full-page bright color fields.

## Business accuracy
- Pediatric speech-language therapy and occupational therapy; office at 6625 Miami Lakes Drive East, Suite 234, Miami Lakes, FL 33014, appointment only.
- Locations include Miami Lakes, Palm Springs North, Hialeah, Hialeah Gardens, Miami Gardens; participating schools/daycares/preschools subject to arrangement/availability.
- Funding categories: private pay, commercial insurance, Medicaid, FES-UA scholarship. NEVER invent accepted insurers or imply guaranteed benefits.
- English and Spanish language availability noted by business; do not promise all care is bilingual without confirmation.
- Detailed post-session summaries are a differentiator; do NOT create a standalone 'Parent Collaboration' section.
- Source discrepancy: brand PDF's linear 'school visit -> office -> insurance' steps are NOT verified intake workflow. Use neutral initial inquiry -> options/eligibility -> evaluation or next appropriate step, pending owner confirmation.
- Source discrepancy: brand speech tile mentions feeding; business overview places feeding under OT. Do not claim speech feeding therapy without confirmation.
- No invented staff names/credentials, testimonials, service availability, locations, outcomes or prices.

## Scope and healthcare privacy
- Phase 1: homepage refresh, mobile nav, service description, service area/funding, prominent `tel:3057786144` 'Call Victoria', secondary 'Request Information' path, and non-sending visual inquiry form only.
- Do NOT enable form submission or connect mailto, unreviewed form handlers, analytics, ad pixels or third-party scripts to inquiry data. Contact information in healthcare context might be PHI; vendor, privacy, access-control and BAA decisions need separate owner review.
- No child's personal or medical details; no free-text clinical field. No auto-marketing signup from an inquiry.
- No `noindex` from prototype on production site. Preserve existing approved logo/images only; placeholders must be clearly indicated.
- Before changes, show a plan and uncertainties; do NOT edit until user approves. After changes, summarize diff, give local preview and mobile/accessibility QA instructions; no push/merge unless approved.

## Continuity
- For new Codex sessions, read this file and the V3 brief FIRST. Document important approved decisions and remaining TODOs here or in a concise `PROJECT_STATUS.md`. Never treat old chat context as authoritative when contradicted by the latest source docs.
