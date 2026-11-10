# Star Therapy Solutions project status

Last reviewed: October 12, 2026 (America/New_York).

## Authorization and repository state

- Owner approved the first visual homepage increment with "OK make it so I can visually see."
- Repository: aperez2313/StarTherapyV3. Current branch verified: feature/brand-v3-redesign.
- Do not create another branch, modify main, push, merge, or deploy without owner authorization.
- First homepage and media increments committed as 2aaf713. Owner then requested a GitHub link for owner review; pushed the existing feature branch to origin. Merge and deployment remain unauthorized.
- Added .gitignore to exclude every design-reference directory, including the nested handoff references.
- Existing persistent instructions preserved at StarTherapy_Codex_Ready_Handoff/AGENTS.md and copied unchanged to root AGENTS.md for future sessions.

## References reviewed, in requested order

1. StarTherapy_Codex_Ready_Handoff/AGENTS.md
2. StarTherapy_Codex_Ready_Handoff/design-reference/Star_Therapy_Brand_Guidelines_v3.pdf
3. StarTherapy_Codex_Ready_Handoff/design-reference/Star_Therapy_Solutions_Overview.pdf
4. StarTherapy_Codex_Ready_Handoff/design-reference/STAR_THERAPY_COPILOT_BRIEF_V3.md
5. StarTherapy_Codex_Ready_Handoff/design-reference/star-therapy-brand-v3-prototype.html
6. index.html

Both PDFs were read through local text extraction. No rendered PDF or browser visual inspection was performed. The repository references were used; Downloads copies were not compared. Root AGENTS.md and root design-reference do not currently exist.

## Source precedence and constraints

The user's request controls scope. The brand PDF controls visual identity, the overview controls business facts, and the prototype supplies inspiration only. The brief's fresh-branch instruction is superseded by the explicit instruction to remain on the existing branch.

- Paper #FCFAF7, headline/UI bronze #6B522E, body #5C5144, authentic logo #89683A.
- Speech coral #E88978; OT cobalt #3559A6; locations sky #8FCBE3; team mustard #E3B423; progress kelly #3E9A55; action poppy #D24B45.
- Quicksand 700 headings; Source Sans 3 body/buttons. Contain color in square tiles/chips, use pill actions, no full-page accent fields.
- Preserve exact poppy token; proposed accessible white-text button fill #C7443E per brief, pending plan approval. Verify all actual foreground/background pairs.
- Keep calls primary, add Request Information secondary; inquiry controls disabled and no sending, storage, mailto handler, analytics, pixels, or backend.
- No standalone Parent Collaboration section. Integrate verified after-session summaries into existing service/next-step content.

## Code audit

- Existing palette, font families, off-white field, service color assignments and repeated phone links are substantially aligned.
- index.html:90 contains a drawn SVG star, not a verified approved logo asset. No separate logo/photo assets found in the repository.
- Hero photo and team photos are placeholders; two staff names are placeholders. Victoria's Founder title is not substantiated in the business overview.
- Heading sizes exceed the guide's suggested scale; cobalt eyebrow and secondary action styling should return to bronze UI roles; locations currently use pill chips instead of square color cues.
- White small text on poppy and white step numbers on kelly require contrast correction. Coral service body text also needs measured contrast verification.
- At <=820px navigation links are hidden without a replacement menu. Sticky-header anchor offsets, skip link and reduced-motion styles are absent. Narrow header fit needs browser testing.
- School-to-office-to-insurance sequence is unverified. 'We come to your child' implies availability too broadly.
- Missing complete office address, appointment-only notice, Hialeah Gardens/Miami Gardens coverage, participating-site caveat, funding options, practice languages and detailed session summaries.
- No Request Information flow or form exists. 'Call or message us' lacks a working message path.
- Title and semantic main/sections are present. Meta description, canonical URL, local business structured data, social metadata, sitemap and robots file are absent. No noindex directive present; do not import the prototype's noindex.
- Fonts currently make external Google Fonts requests. Prefer licensed self-hosted fonts after approval.
- Static code audit only: no claim of browser, accessibility or performance test completion.

## Proposed homepage order

1. Header: approved logo, usable mobile navigation, prominent Call Victoria.
2. Hero: plain pediatric speech-language/OT headline with Miami Lakes, individualized support and participating-site context; primary phone plus bronze outlined Request Information; one authorized photo.
3. Locations: sky color cues, five verified communities, full appointment-only office address, participating schools/daycares caveat.
4. Services: meaningful square coral/cobalt tiles, concise verified examples and evaluation/treatment context.
5. Getting started: proposed contact -> discuss options/funding -> evaluation or appropriate next step, with kelly accents. Include quiet funding and after-session summary panels.
6. Team: only verified approved people/roles/photos; keep placeholders local or defer portrait cards pending assets.
7. Contact/footer: full address, repeated phone, disabled adult-contact form with clear unavailable state and instruction to call. No suggestion that a disabled form can request a callback.

## Owner decisions and missing information

- Provide/identify the authentic logo and approve rights/consent for hero/team images. No logo should be recreated from the PDFs.
- Verify Victoria's name, role, public number 305-778-6144 and Instagram handle before release.
- Confirm actual intake order, referral requirements, age range, appointment/contact hours, waitlist and service availability. Do not invent response times or outcomes.
- Confirm named participating facilities only if they will be published; current overview supports unnamed participating settings only.
- Confirm accepted insurance plans and funding details before listing individual insurers or claiming guaranteed eligibility.
- Feeding is explicitly within OT in the overview; brand PDF places feeding under speech too. Proposed default: OT only unless confirmed otherwise.
- English/Spanish are practice languages, not a guarantee that every clinician/evaluation is bilingual. Confirm scope and have Spanish page copy reviewed by a human.
- Approve the accessible CTA fill, neutral initial-contact sequence and omission/deferment of unsupported team profiles.
- Confirm final public domain/canonical URL and Google Business Profile details before SEO configuration is finalized.
- Separately approve a healthcare-appropriate inquiry provider, applicable agreements, notices, access controls and retention before any live form work.

## Phases proposed; none approved for implementation

1. Homepage and conversion: incremental index.html changes; accessible menu/call options; correct business content; disabled inquiry; brand contrast/type improvements; approved assets; basic local metadata and factual structured data.
2. Review: desktop and 320/375/390/768px checks, keyboard navigation/focus, zoom/reflow, sticky anchors, contrast, reduced motion, HTML/link checks, image/font performance and network verification that inquiry data cannot be sent or stored. Review diff with owner; approval remains required before push/merge/deploy.
3. Future content: Speech-Language Therapy, Occupational Therapy, Getting Started, Insurance & Funding, Locations & Service Areas, About/Team and Contact pages. Add owner-approved privacy information; Spanish after human review. Use one truthful service-area page initially, not duplicate city pages or invented offices.
4. Secure inquiry integration: separate approved provider and privacy/access-control design, implementation and testing. Keep newsletter consent separate.

## Proposed files after approval

- index.html: incremental layout, copy, mobile navigation, CTAs, disabled form, metadata and structured data.
- assets/css/site.css: shared brand styles if extraction improves maintainability.
- assets/js/navigation.js: only if a scripted accessible menu is preferable to native controls; no inquiry data handling.
- assets/images/: approved original logo and authorized optimized photos only.
- assets/fonts/: properly licensed Quicksand and Source Sans 3 files and required license notices.
- AGENTS.md: preserve/copy original handoff instructions to root, record approved decisions without treating this proposal as approval.
- PROJECT_STATUS.md: decisions, completed work, QA results and outstanding questions.
- sitemap.xml and robots.txt: after final URL and serving path confirmation; account for GitHub Pages /StarTherapyV3/ path.
- Future page files: speech-therapy.html, occupational-therapy.html, getting-started.html, insurance-funding.html, locations.html, about.html, contact.html, privacy.html (content reviewed before release).
- Never stage or publish design-reference content. Do not modify the prototype/PDFs.

## Standards checked for the plan

- Google Search Central local business structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/

## First visual increment completed

- Modified index.html incrementally; added assets/css/site.css and assets/js/navigation.js.
- Updated hero, service descriptions, locations, funding, next steps, family session summaries, office address and disabled contact preview; added native mobile navigation and persistent mobile call/request links.
- Removed the unverified drawn logo star and fictional staff cards. The later owner-supplied media increment replaced the temporary identity and hero placeholder with the supplied logo and office photo.
- Added local SEO meta description; canonical, sitemap and business structured data deferred pending public URL and contact verification.
- Existing Google Fonts requests remain for this local review. Licensed self-hosted fonts remain future work before release/privacy review.
- Chrome local rendering verified at 1440px desktop and emulated 390px/320px mobile: no horizontal document overflow at mobile sizes, mobile menu visible and disabled fieldset confirmed. Desktop and mobile screenshots visually inspected.
- Contrast measured: white/CTA 4.86:1; speech ink/coral 4.65:1; white/cobalt 6.71:1; step-number ink/kelly 4.59:1.
- Unique IDs, anchor targets, local asset presence, JavaScript syntax and git diff whitespace checks passed. Contact controls have no form element, sending endpoint, submit button, storage or data-handling code.
- Opened local index.html in Chrome for owner review. No preview server or deployment required. Full keyboard, screen-reader, menu-interaction, HTML-validation and broader performance QA remain before release.

Next action: owner visual review of the local homepage; refine as requested. No pushing, merging or deploying without explicit approval.

GitHub review link: https://github.com/aperez2313/StarTherapyV3/tree/feature/brand-v3-redesign . This displays source code, not a deployed preview. The GitHub Pages website remains unchanged. A separately approved preview deployment is needed for a shareable visual website review.

## Owner-supplied media increment

- Owner supplied startherapy.svg, starTherapyOffice_.JPG, Team_StartTherapy.JPEG and IMG_2813.mov and requested placement on the homepage.
- Original SVG is now used in the header without recoloring/redrawing; its transparent export margins are accommodated through CSS.
- Office photograph replaces the hero placeholder; team image is shown uncropped in a mustard frame in the team section. No individual names or credentials were inferred from the photo.
- Therapy clip is placed below the two service tiles, with user-controlled playback and no autoplay. Created assets/video/therapy-session.mp4 (H.264/AAC, 720x1280, 4.37 seconds) and assets/images/therapy-session-poster.jpg. Original media preserved; source video location metadata omitted from the MP4. Playback downloads only when requested (preload="none").
- Desktop and 390px mobile image placement visually inspected. Final Chrome checks at 1440px and 320px confirmed MP4 playback with advancing time and no video error; 320px document width equals viewport width (no horizontal overflow). JS syntax and diff whitespace checks passed. Reopened the finished local page in Chrome for owner review.
- Website media are included in the owner-authorized local commit. Original MOV and handoff bundle remain local and ignored; root AGENTS.md preserves persistent context. Public release, including review of the client clip's publication authorization and any needed captions, remains part of the owner review before deployment.


## October 12 owner revision round ? local, uncommitted

The owner supplied explicit copy revisions. These override earlier generic copy and intake suggestions. Current branch remains feature/brand-v3-redesign; working tree was clean before editing. Do not commit, push, merge or deploy this round until explicitly authorized. Do not add the optional founder section.

| Revision | Status | Files Modified | Notes |
|---|---|---|---|
| Homepage | Completed | index.html; assets/css/site.css | Exact new headline, subtitle and description; removed hero-detail paragraph. Original CTAs/photo preserved; balanced heading wrap and subtitle styles added. |
| Where We Go | Completed | index.html | Exact new heading; all five service areas unchanged; participating settings clarified; availability caveat retained. |
| Therapy Services | Pending content | index.html | Label updated to Our Therapy Services. No existing detail pages found. Owner will provide content or destinations; no fake Learn More links added. |
| Therapy Video | Pending Asset | None | PENDING OWNER ASSET: Ashley clip featuring Mr. Potato Head. Existing section and media unchanged. |
| Getting Started | Completed | index.html | All three exact step titles/descriptions applied; design preserved. |
| Between Sessions | Completed | index.html | Exact owner-approved heading and description applied. |
| Insurance | Partly completed; heading pending | index.html | Scholarship name spelled out; requested Commercial insurances/Medicaid insurances applied following instruction to follow the revision. Editorial wording remains flagged for owner review. Existing verification disclaimer unchanged. Insurance & Payment Options is proposed only; no heading substituted. |
| Contact | Completed | index.html | Exact existing address preserved; By Appointment Only. notice retained; Maps search link added; supplied Instagram URL https://www.instagram.com/startherapyservices/ added. |

QA: Chrome checked at 1440px desktop, 768px tablet, 390px and 320px mobile; no horizontal document overflow. Desktop and 320px hero screenshots visually reviewed; no forced heading line breaks. Static checks passed for unique IDs, anchor targets, asset existence, unchanged video markup, unchanged five areas, exact Maps query/address, unchanged insurance disclaimer, supplied Instagram URL and disabled inquiry controls. Google Maps URL returned HTTP 200. JavaScript syntax and git diff whitespace checks passed. No package.json/build/lint pipeline exists in this static project. Disabled inquiry controls are intentionally retained from the prior approved scope.

Remaining owner input: (1) approved insurance section heading; (2) Learn More copy or valid destinations; (3) replacement Ashley/Mr. Potato Head video. Requested insurance terminology remains an editorial review item; no invented alternatives used. Preview by opening index.html in Chrome or via VS Code Live Server, then refresh.


## Founder design preview and Instagram correction ? October 12

- Latest owner instruction now explicitly authorizes the founder preview, superseding the earlier instruction to defer it. Keep prior owner revisions intact. No commit/push/merge/deployment authorized.
- Added #founder immediately before unchanged #team. Used the exact supplied biography, name Victoria Perez, M.S., CCC-SLP, and title Founder & Speech-Language Pathologist. No extra credentials or language names inferred.
- Two-column desktop layout; portrait left, biography right. Tablet/mobile stack vertically. Mustard frame and neutral 4:5 placeholder labeled Victoria Perez - Professional Photo Coming Soon. Preview only: do not publish with this placeholder.
- Future photograph path: assets/images/victoria-perez.jpg. Replace only .founder-photo-placeholder with <img src="assets/images/victoria-perez.jpg" alt="Victoria Perez, founder and speech-language pathologist at Star Therapy Solutions" loading="lazy">. Existing .founder-portrait img CSS preserves natural proportions using width:100% and height:auto; no face cropping. Record actual intrinsic width/height when file arrives.
- Optional LinkedIn position reserved in an HTML comment beneath credentials; no empty or fake anchor created. Use .founder-linkedin class when a supplied URL is added.
- Corrected contact Instagram URL to https://www.instagram.com/startherapysolutions/; this supersedes the earlier supplied startherapyservices URL.
- Modified index.html, assets/css/site.css and this status document only. Existing uncommitted revision changes preserved.
- Chrome checks passed at 1440, 768, 390 and 320px: correct founder-to-team order, two desktop columns/one mobile column, correct Instagram URL, no horizontal overflow. Desktop and mobile screenshots visually reviewed; diff whitespace and JS syntax checks passed. Opened local index.html#founder in Chrome.
- Needed: approved professional photograph. Optional future inputs: professional LinkedIn URL, why Victoria founded the practice, exact pediatric experience years, therapy languages, and a personal message to parents. None was invented.
- Remaining owner-round items still pending: service Learn More content/destinations, insurance heading approval, Ashley/Mr. Potato Head replacement video.


## Team photo frame revision — October 12

Owner requested a different brand color in place of the yellow team photograph frame. Updated only .team-photo background to brand bronze #89683A and its caption to off-white #FCFAF7. This owner-directed exception supersedes the mustard team-frame guideline for this component. Image, layout and founder preview unchanged. Local changes only; no commit, push or deployment.


## Minimal adult-contact preview ? October 12

- Owner requested three fields based on a screenshot: parent name, email and phone. Updated index.html to show exactly those three adult-contact fields; removed contact/language preference selectors. Kept fieldset and button disabled, with no form transport, storage, backend or analytics added. Prior uncommitted founder/copy/color revisions preserved.
- Added adult-only guidance and clarified that the disabled preview does not send/save entries; do not enter child identifiers, medical or insurance details. No HIPAA-compliant or legal-protection claim added. A disclaimer does not establish compliance or replace agreements/safeguards.
- The screenshot describes identifiers in isolation; healthcare inquiry context can still make identifying information PHI. Production activation requires confirmation of HIPAA applicability, approved receiving provider and BAA where required, permissions/notification/retention review, appropriate privacy notices and compliance/legal review by the practice. No receiving provider is selected.
- Static verification: exactly three inputs inside disabled fieldset; no clinical text area, selectors, form element, submission transport or storage code. Diff whitespace checks passed. No commit/push/deployment.
- Reference: https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html and https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html .


## Preliminary website safety review ? October 12

Read-only code audit of current local files: three disabled adult-contact inputs; no form element or submit control; navigation-only JavaScript; no submission endpoint, storage code, external JavaScript, analytics or ad pixels found in the reviewed HTML/JS/CSS. Local original SVG contains no matching script/event-handler/foreignObject/image/link references. This is not a compliance certification or full security assessment.

External Google Fonts requests remain; review third-party request metadata and preferably self-host properly licensed fonts before activating inquiries. Maps/Instagram are outbound links rather than embeds and use noopener/noreferrer. No production server-header, hosting-log, browser-network or account-access review was performed in this audit.

Release/activation items: confirm actual deployed revision and HTTPS/hosting controls; browser-network and storage tests with fictional data; approved receiving service and appropriate BAA if ePHI is handled; permissions/MFA/audit/retention/notification procedures; practice privacy notices and applicable legal review; publication authorization for team/client media; replace founder Coming Soon placeholder before release. Preserve disabled inquiry until these decisions are approved. No code changes, commits, pushes or deployments performed in this safety review.


## Phone-only contact experience ? October 12

Latest owner instruction removes all parent inquiry/contact forms. Removed three-field disabled preview and Request Information links; replaced navigation/hero/mobile actions with Call Now tel links and contact-details anchors. Contact heading and description use the supplied text; contact CTA is Call Star Therapy Solutions. Office/address/Maps/Instagram and all other sections preserved.

Owner explicitly requested a placeholder instead of the previously listed number. All tel links now use +13055550100; visible number 305-555-0100 is labeled as a placeholder in contact/footer. Official business number must be supplied and substituted before public release. No website parent-contact/medical data collection or storage code exists. Phone provider handling remains outside the website. No claim of full HIPAA compliance or legal clearance.

Changed index.html, assets/css/site.css and status documentation; prior owner revisions preserved. No commit, push, merge or deploy authorized. Static checks verified absence of form controls and inquiry CTAs, consistent placeholder tel links and valid anchors.


## Approved limited V4 color update

Owner approved adding id="hero" while retaining aria-labelledby="hero-title", changing speech/OT card colors and the call buttons. Applied to index.html and locally ignored preview-pastel.html, with shared assets/css/site.css. Speech #DDB9AD, OT #A9BFD8, existing dark tile ink #4B3223 retained for sufficient small-text contrast; primary call fill #263D35 uses the V4 accessibility example rather than the insufficient white/#617E73 pairing. Hover uses darker sage #1D3029. Other content/layout unchanged. Full V4 rollout is still pending approval. No commit/push/deployment. Hero labels/unique IDs and contrast calculations checked.


## Separate V4 website option

Owner requested another website option using the V4 deck. Created preview-v4.html and assets/css/preview-v4.css without modifying index.html or preview-pastel.html. HTML body is identical to the current homepage; all approved copy, assets, founder and phone-only contact preserved. Uses V4 warm ink/body, mint location chips, neutral service cards with blush/blue circles, sage progress/photo frames and accessible #263D35 call buttons. Preview includes noindex/nofollow only in its own head, not the homepage. Prior preview remains available.

Chrome checked 1440/768/390/320px layouts: no horizontal overflow and no form fields; service and narrow contact screenshots visually inspected. Anchor/asset checks passed. Founder image and official phone are still pending; this remains a local design preview, not a compliance certification. No commit/push/deployment. Preview by opening preview-v4.html or Live Server.


## V4 option: reduced green palette

Owner requested replacing the multiple green tones. Changed only assets/css/preview-v4.css: bronze #6B522E calls with warm-brown hover, powder-blue location chips with dark #4B3223 labels, blush progress and photo frames, warm-brown focus/secondary actions. Existing V4 neutral backgrounds, service colors, content and homepage preserved. This owner-requested preview variation overrides the deck green category/action roles only in preview-v4.html. Text contrast calculations exceed 4.5:1; this does not certify ADA/WCAG conformance. No commit, push or deployment.


## V4 location chip color variation

Owner requested different V4 deck colors for the five location chips shown in the screenshot. Updated only preview-v4.css: Miami Lakes blush #DDB9AD; Hialeah powder blue #A9BFD8; Palm Springs North honey #D6B78E; Hialeah Gardens mint #C9DCD5; Miami Gardens sage #A8C5B3. Retained dark #4B3223 labels and all names/behavior/layout. All label contrast pairs exceed 4.5:1. This owner-selected variation overrides the deck single-mint location role in the separate preview; other page colors preserved. No commit/push/deploy.


## Official business phone confirmed

Owner supplied (305) 788-6144. Updated index.html, preview-pastel.html and preview-v4.html: readable number (305) 788-6144; all tel links use tel:+13057886144. Removed placeholder notices and associated aria-describedby references. This supersedes the earlier placeholder and old 305-778-6144 reference number. All 21 call links verified. No commit/push/deployment.


## Company LinkedIn footer link

Owner supplied https://www.linkedin.com/company/star-therapy-solutions/ . Added company LinkedIn and Instagram links together in a labeled footer social navigation on index.html, preview-pastel.html and preview-v4.html. Links open in a new tab with noopener/noreferrer and screen-reader notices. Company link does not substitute for Victoria's pending personal LinkedIn URL. Existing contact actions preserved. Shared footer CSS keeps social links visible on mobile despite primary-navigation hide rules. No commit/push/deployment.


## Owner-supplied Instagram footer icon

Copied the supplied official gradient SVG unchanged to assets/images/instagram-glyph-gradient.svg. Added 32px image alongside visible Instagram footer label on index.html and both previews, with empty alt to avoid repeating its accessible name, existing new-tab announcement and safe link attributes preserved. Image lazy-loaded; footer links retain at least 44px height. Source SVG contains an embedded raster and is approximately 10.9 MB; future lossless/visual-preserving delivery optimization may be useful, but original artwork is unchanged. LinkedIn remains a text link pending an official icon asset. No commit/push/deployment.


## Black Instagram glyph

Owner supplied the official black Instagram SVG following the gradient icon request. Replaced footer icon references on homepage and both previews with assets/images/instagram-glyph-black.svg, copied unchanged. Existing link, label, focus and dimensions preserved. Previous gradient file retained unused; no commit/push/deployment.


## Official black LinkedIn footer icon

Owner supplied InBug-Black.png. Copied unchanged to assets/images/linkedin-in-black.png and added beside the visible company LinkedIn label in the homepage and both previews. Existing profile URL, new-tab announcement and safe link attributes preserved; empty image alt prevents duplicate announcement. Shared 32px object-fit:contain styling preserves the mark and registered-trademark symbol without stretching or cropping; clickable area remains at least 44px high. No commit/push/deployment.


## Icon-only footer social links

Owner requested removing visible Instagram/LinkedIn footer text. Both social anchors now contain only the original icons; descriptive aria-labels retain company/platform names and new-tab announcements. Contact-section Instagram text is preserved. Shared 32px icons with 6px padding maintain 44x44px targets. Applied to homepage and both previews; no commit/push/deployment.

## Owner palette and three website directions — October 15
- Owner supplied a revised pastel palette (ABC blocks, smiley faces, stars, rainbow, her flyer) and asked to stick to it. Proposed tokens: cream #FCF8F1, blush #F2CEC3 (speech), periwinkle #78A6EE (OT; text uses #3F6CC4), mint #CFEAE6 (locations), latte #D9B68A (team), sage #9CC5A1 / #4E7A57 (progress), lavender #E6D2F2 (funding), clay #D9A890, rosewood #8F5650 (only action color, white text 5.8:1). Logo stays #89683A. Color-to-job mapping awaits owner confirmation.
- Three clickable prototypes, all eight pages each: A · Warm (Fraunces, 2px corners), B · Gentle (Fredoka, rainbow arches, closest to the flyer), C · Playful (Bricolage Grotesque, outlines and block shadows).
- Local preview: open previews/directions/index.html. Pages carry noindex; index.html and the live site are unchanged. Owner review link is the private Claude artifact (share it from its Share menu). Remove or keep the previews folder before any merge to main, since main publishes to GitHub Pages.
- Open: owner's direction choice, color jobs, real intake sequence, phone 788 vs 778 in older brand guide, founder photo, office hours. No commit, push or deployment.

## Direction A rollout — November 8
- Owner chose Direction A · Warm. Checkpoint commit f2b0a55 saved the October owner-approved homepage first.
- `assets/css/site.css` rewritten with Direction A tokens (owner pastel palette, Fraunces + Public Sans, 2px corners); the inline `<style>` in `index.html` is gone. `preview-v4.html` and the ignored `preview-pastel.html` also load `site.css`, so they no longer show their old look.
- New icon sprite `assets/icons/icons.svg`.
- Homepage split into real pages: `/speech-therapy/`, `/occupational-therapy/`, `/locations/`, `/getting-started/`, `/insurance-funding/`, `/about/`, `/contact/`, plus `404.html`, `sitemap.xml`, `robots.txt`. Owner wording kept (hero title, contact heading, founder bio); facts from the business overview only.
- `robots.txt` and the sitemap only take effect from a domain root; on `aperez2313.github.io/StarTherapyV3/` submit the sitemap in Search Console instead. Update both if a custom domain is added.
- Still open: color-to-job confirmation, phone 788 vs 778, office hours, founder photo, real intake steps, privacy notice, Spanish pages. `previews/` stays until the merge, then is removed.

## Cleanup after Direction A launch — November 8
- PR #3 merged; Direction A is live. Removed `previews/directions/` (A/B/C comparison prototypes) and its robots.txt rule now that the owner has chosen. The prototypes remain viewable in git history and in the private Claude artifact.
- Audit: every CSS class in `site.css` is used; all tracked images, video and `navigation.js` are referenced. The icon sprite keeps 11 spare icons (map, home, calendar, fluency, aac, pencil, sensory, feeding, clock, arrow, close) for future pages.
- Local-only drafts (preview-v4, preview-pastel, gradient Instagram icon, Direction A handoff note) moved to the git-excluded `_local-archive/` folder rather than deleted.

## Physical therapy added — November 9
- Owner is adding pediatric physical therapy. New page `/physical-therapy/` with the owner-supplied intro and nine skill areas; third clay (`#D9A890`) service card on the homepage; hero now reads "Pediatric Speech, Occupational & Physical Therapy." Nav gained "Physical therapy" and collapses to the Menu button below 1200px.
- Founder heading now "Victoria Perez, M.S. CCC-SLP" (comma removed) and role "Founder & Lead Speech-Language Pathologist" on Home and About.
- Not extended to PT until the owner confirms: insurance/Medicaid/FES-UA coverage, PT/PTA staff roles on About, post-session summaries, and a PT evaluation description.

## WCAG 2.1 AA audit — November 9
- Audited all 10 pages: axe-core (WCAG 2.0/2.1 A and AA), 320px reflow, text spacing, keyboard focus, skip link, headings, landmarks, titles, link and image text.
- Fixed: link/label blue `#3F6CC4` to `#3863B8` (contrast on sand), header width at 320px, Getting started heading order. Homepage office photo now shown uncropped (owner request).
- Open: therapy video (4s, has an audio track) has no captions or transcript; owner to confirm whether it contains speech. A screen-reader pass (NVDA) and an accessibility statement page are still recommended. No tool can certify ADA compliance.
- Founder photo supplied by owner: saved web-sized (900x1350, 75 KB) as `assets/images/victoria-perez.jpg`; replaces the placeholder on Home and About in a latte frame, full photo, descriptive alt text.

## Privacy page and self-hosted fonts — November 9
- New `/privacy/` page: Notice of Privacy Practices (placeholder until the owner supplies the practice's HIPAA notice) and an owner-reviewed Website Privacy statement; footer links on every page. Published at the user's request with the notice placeholder visible; replace it and the "Last updated" date when the owner sends them.
- Fonts now self-hosted in `assets/fonts/` (Fraunces 600, Public Sans variable, with OFL license files); Google Fonts removed, so the site makes no third-party requests.

## START HERE (handoff, November 9) — continuing in VS Code
**State:** `main` = live site (https://aperez2313.github.io/StarTherapyV3/), last merged PR #10. Branch `feature/brand-v3-redesign` holds the same content. Work on the branch, open a PR into `main`, and merge only after the user approves.

**How the site is built**
- Every page comes from `tools/build-pages.mjs`. Edit content there, then `node tools/build-pages.mjs .` from the repo root. Do not hand-edit generated HTML.
- Styles: `assets/css/site.css` (Direction A tokens at the top). Icons: `assets/icons/icons.svg`. Fonts: self-hosted in `assets/fonts/`.
- Preview: `node tools/serve.mjs . 8123`, then http://localhost:8123/StarTherapyV3/
- Review PDF screenshots: `node tools/capture-screenshots.mjs "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" <folder> https://aperez2313.github.io/StarTherapyV3/`
- PRs: GitHub CLI is installed at `C:\Program Files\GitHub CLI\gh.exe` and signed in as aperez2313. On PowerShell 5.1, pass PR text with `--body-file`, not `--body`.

**Open items (waiting on the owner)**
1. Notice of Privacy Practices text and "Last updated" date for `/privacy/` (placeholder is live).
2. Video captions: the 4-second therapy clip has audio; captions if speech, short description if not.
3. Photo release on file for the child in the homepage photo.
4. Phone 788 vs 778 (older brand guide), office hours, real intake steps.
5. PT: insurance/Medicaid/FES-UA coverage, PT/PTA staff, session summaries.
6. Color-to-job mapping confirmation.

**Proposed, not started:** loading-screen intro (1.2s, once per visit, skippable, skipped with reduced motion); accessibility statement page; NVDA screen-reader pass.

## November 9, 2026 — owner proofreading updates
- Owner corrected the phone number to (305) 778-6144 (tel:+13057786144), superseding all historical phone-number notes above.
- Shared desktop/mobile menu and footer labels now use Speech Therapy, Occupational Therapy, Physical Therapy, and Getting Started.
- Updated the generator and regenerated every page, including metadata and the 404 page. Prepared locally for review; not pushed or deployed.

## November 9, 2026 — additional proofreading updates
- Added the supplied October 14, 2026 Notice of Privacy Practices in full, plus the original Word download. Preserved the supplied wording and line breaks, with semantic section headings and a static acknowledgment section.
- Replaced the clinical-team paragraph with the owner's supplied wording, including physical therapy.
- Proofread the shared address; wording is correct. Put By appointment only on its own line for readability.
- Local proof only; publishing remains pending owner approval.

## November 9, 2026 — contact buttons
- Converted Google Maps, Instagram and LinkedIn links on Contact to the existing rosewood button style. Kept social destinations and new-tab accessibility notices.
- Maps query now includes Star Therapy Solutions and the full office address; shared Locations map link uses the same destination.
- Prepared for local owner review; not published.
- Verified the Google Maps business listing in-browser against its name, office address and corrected phone number. Replaced the search URL with the verified direct place URL.

- Owner requested the existing Instagram and LinkedIn brand logos in the Contact buttons; reused the footer assets with decorative empty alt text and retained the button labels and destinations.

- Owner removed the service-specific qualifier from the Insurance and Funding private-pay card. It now reads: Families may choose to pay privately.

## November 9, 2026 — complete site proofreading
- Reviewed Home, Speech Therapy, Occupational Therapy, Physical Therapy, Locations, Getting Started, Insurance and Funding, About, Contact, Privacy, and the 404 page, including shared navigation, footer, captions and metadata.
- Standardized list punctuation and founder credential punctuation; improved service introductions and movement descriptions; expanded AAC; aligned the Contact introduction with all three services; clarified the full FES-UA name; matched the Contact heading to the shared call-to-action.
- Removed the Website Privacy date placeholder and clarified its data-collection wording to agree with its existing hosting-information disclosure. The supplied HIPAA notice was not rewritten.
- Verified every one of the 52 nonempty Word notice paragraphs appears unchanged on the page; original Word download remains identical.
- Verified all 11 generated pages, local link targets and telephone destinations, and checked for stale numbers, date placeholders and duplicated punctuation.
- All revisions remain local and pending owner completion and publishing approval.

## November 9, 2026 — publishing approval
- Owner approved the standalone action-button preview and instructed: ok pushg. Authorized publishing all accumulated reviewed revisions.
- Action links use existing rosewood buttons; navigation and footer links retain their established style.

## November 9, 2026 — sharing image and footer preview
- Owner selected the existing Star Therapy logo for text-message link previews. Added a cream-background PNG and static Open Graph/Twitter metadata to all 11 pages.
- Footer links now omit permanent underlines; hover and keyboard focus retain underline feedback.
- Prepared locally for review; these changes have not been published.

- Owner requested a seamless sticky header. Removed the header divider and translucent blur; matched the page's cream background while preserving sticky positioning and stacking order. Local preview pending publishing approval.

- Enlarged the header logo from 200px to 260px, with responsive 210px and 185px sizes on small phones. Increased header height to fit and adjusted the navigation breakpoint to avoid crowding. Local preview only.

- Owner requested a rounded-button comparison. Preview uses 12px button corners, including service-card actions. Other card corners remain unchanged. Pending owner review.

- Owner requested rounder buttons; preview now uses fully rounded pill corners instead of 12px.

- Owner approved this preview batch with ok push, following the established push-and-publish workflow. Publishing rounded buttons, larger logo, seamless sticky header, footer styling, and logo sharing metadata.
