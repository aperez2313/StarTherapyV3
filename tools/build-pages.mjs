// Generates every page of the site (index.html, the folder pages and 404.html) from one template.
// The header, footer and call bar live here once, so edit this file and rerun instead of editing each page.
// Usage, from the repo root: node tools/build-pages.mjs .
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.argv[2];
if (!ROOT) throw new Error('repo root required');

const PHONE = '(305) 788-6144';
const TEL = 'tel:+13057886144';
const MAPS = 'https://www.google.com/maps/search/?api=1&amp;query=6625%20Miami%20Lakes%20Drive%20East%2C%20Suite%20234%2C%20Miami%20Lakes%2C%20FL%2033014';
const IG = 'https://www.instagram.com/startherapysolutions/';
const LI = 'https://www.linkedin.com/company/star-therapy-solutions/';
const NEW_TAB = '<span class="sr-only"> (opens in a new tab)</span>';

const NAV = [
  ['speech-therapy', 'Speech', 'var(--blush)'],
  ['occupational-therapy', 'Occupational therapy', 'var(--peri)'],
  ['physical-therapy', 'Physical therapy', 'var(--clay)'],
  ['locations', 'Locations', 'var(--mint)'],
  ['getting-started', 'Getting started', 'var(--sage)'],
  ['insurance-funding', 'Insurance', 'var(--lavender)'],
  ['about', 'About', 'var(--latte)'],
  ['contact', 'Contact', 'var(--rose)'],
];

function build(page) {
  const p = page.depth ? '../' : '';
  const icon = (name, cls = 'icon') => `<svg class="${cls}" aria-hidden="true"><use href="${p}assets/icons/icons.svg#${name}"></use></svg>`;
  const call = (text = 'Call Now', cls = 'btn') => `<a class="${cls}" href="${TEL}">${icon('phone')}<span>${text}</span></a>`;
  const link = slug => `${p}${slug}/`;
  const ctx = { p, icon, call, link };
  const navLinks = NAV.map(([slug, label, color]) =>
    `<a href="${link(slug)}" style="--cur:${color}"${page.slug === slug ? ' aria-current="page"' : ''}>${label}</a>`).join('\n        ');
  const footerLinks = NAV.map(([slug, label]) => `<a href="${link(slug)}">${label}</a>`).join('');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <link rel="icon" href="${p}startherapy.svg" type="image/svg+xml">
  <link rel="preload" href="${p}assets/fonts/fraunces-600-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${p}assets/css/site.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header class="site-header">
    <div class="wrap bar">
      <a class="logo" href="${p || './'}" aria-label="Star Therapy Solutions home"><img src="${p}startherapy.svg" alt="Star Therapy Solutions" width="1366" height="768"></a>
      <nav class="desktop-nav" aria-label="Main">
        ${navLinks}
        ${call()}
      </nav>
      <details class="mobile-nav">
        <summary>${icon('menu')}<span>Menu</span></summary>
        <nav aria-label="Mobile navigation">
        ${navLinks}
        ${call()}
        </nav>
      </details>
    </div>
  </header>

  <main id="main">
${page.body(ctx)}
  </main>

  <footer class="site-footer">
    <div class="wrap footer-grid">
      <div class="stack-s">
        <p class="footer-name">Star Therapy Solutions</p>
        <p class="footer-phone"><a href="${TEL}">${PHONE}</a></p>
        <address>6625 Miami Lakes Drive East, Suite 234<br>Miami Lakes, FL 33014<br>By appointment only</address>
        <nav class="footer-social" aria-label="Social media"><a href="${IG}" aria-label="Star Therapy Solutions on Instagram (opens in a new tab)" target="_blank" rel="noopener noreferrer"><img class="social-icon" src="${p}assets/images/instagram-glyph-black.svg" alt="" width="32" height="32" loading="lazy"></a><a href="${LI}" aria-label="Star Therapy Solutions on LinkedIn (opens in a new tab)" target="_blank" rel="noopener noreferrer"><img class="social-icon" src="${p}assets/images/linkedin-in-black.png" alt="" width="32" height="32" loading="lazy"></a></nav>
      </div>
      <nav class="footer-links" aria-label="Footer"><a href="${p || './'}">Home</a>${footerLinks}</nav>
      <div class="stack-s">
        <p>© Star Therapy Solutions · Miami Lakes, Florida<br>Pediatric speech-language, occupational and physical therapy.</p>
        <p class="footer-legal"><a href="${link('privacy')}#notice">Notice of Privacy Practices</a> · <a href="${link('privacy')}#website">Website Privacy</a></p>
      </div>
    </div>
  </footer>
  <div class="mobile-actions" aria-label="Quick contact">${call()}<a class="btn ghost" href="${link('contact')}">Contact details</a></div>
  <script src="${p}assets/js/navigation.js"></script>
</body>
</html>
`;
}

const chips = (region = true) => `<div class="chips"><span class="chip">Miami Lakes</span><span class="chip">Palm Springs North</span><span class="chip">Hialeah</span><span class="chip">Hialeah Gardens</span><span class="chip">Miami Gardens</span>${region ? '<span class="chip region">Surrounding Miami-Dade</span>' : ''}</div>`;

const steps = () => `<ol class="grid3">
          <li class="card step"><span class="num" aria-hidden="true">1</span><h3>Contact our team</h3><p>Tell us about your child’s needs and the services you’re interested in.</p></li>
          <li class="card step"><span class="num" aria-hidden="true">2</span><h3>Explore your options</h3><p>We’ll discuss service locations, availability, insurance, and evaluation needs.</p></li>
          <li class="card step"><span class="num" aria-hidden="true">3</span><h3>Begin personalized care</h3><p>Once the necessary steps are completed, your child can begin individualized therapy.</p></li>
        </ol>`;

const summaryPanel = ({ icon }) => `<article class="panel">${icon('summary')}<div class="stack-s"><h3>Keeping parents involved every step of the way</h3><p>After every therapy session, parents receive a detailed summary of the activities completed, skills addressed, their child’s progress, and practical strategies to continue working on these skills at home.</p></div></article>`;

const callSection = ({ call }) => `    <section class="cta" aria-labelledby="cta-heading">
      <div class="wrap stack center">
        <h2 id="cta-heading">Let’s start the conversation.</h2>
        <p class="phone-big"><a href="${TEL}">${PHONE}</a></p>
        ${call('Call Star Therapy Solutions')}
        <p class="small">6625 Miami Lakes Drive East, Suite 234 · Miami Lakes, FL 33014 · By appointment only</p>
      </div>
    </section>`;

const areas = (list, stripe) => `<ul class="grid3">${list.map(([t, d]) => `
          <li class="card area" style="--stripe:${stripe}"><h3>${t}</h3><p>${d}</p></li>`).join('')}
        </ul>`;

const pageHero = (ctx, kind, title, lede) => `    <section class="page-hero">
      <div class="wrap stack">
        <span class="plate big ${kind}">${ctx.icon(kind)}</span>
        <h1>${title}</h1>
        <p class="lede">${lede}</p>
        <div class="actions">${ctx.call('Call ' + PHONE)}<a class="btn ghost" href="${ctx.link('getting-started')}">How to get started</a></div>
      </div>
    </section>`;

const pages = [
  {
    slug: '', depth: 0, file: 'index.html',
    title: 'Star Therapy Solutions | Pediatric Speech, OT and PT in Miami Lakes',
    description: 'Pediatric speech-language, occupational and physical therapy at participating Miami-Dade schools and daycares and at our Miami Lakes office. Call (305) 788-6144.',
    body: (c) => `    <section class="hero" aria-labelledby="hero-title">
      <div class="wrap hero-grid">
        <div class="stack">
          <p class="eyebrow">Pediatric therapy · Miami Lakes, Florida</p>
          <h1 id="hero-title">Helping Little Stars Reach Their Full Potential.</h1>
          <p class="hero-subtitle">Pediatric Speech, Occupational &amp; Physical Therapy.</p>
          <p class="lede">Personalized speech, occupational and physical therapy that comes to your child’s school or daycare, with services also available at our Miami Lakes office.</p>
          <div class="actions">${c.call('Call ' + PHONE)}<a class="btn ghost" href="${c.link('contact')}">Contact details</a></div>
          <p class="note">Office visits by appointment · English &amp; Spanish</p>
        </div>
        <figure class="hero-photo"><img src="assets/images/therapy-play.jpg" alt="A therapist in purple scrubs and a young girl at a child-sized table, building a toy potato figure together." width="900" height="1125" fetchpriority="high"><figcaption>Learning through play, at school, daycare or our Miami Lakes office.</figcaption></figure>
      </div>
    </section>

    <section aria-labelledby="services-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Our therapy services</p><h2 id="services-title">Support that fits your child.</h2></div>
        <div class="tiles">
          <a class="tile speech" href="${c.link('speech-therapy')}"><span class="plate">${c.icon('speech')}</span><h3>Speech-language therapy</h3><p>Support for understanding and expressing ideas, clearer speech, early language, social communication, fluency, and AAC.</p><span class="more">Explore speech therapy →</span></a>
          <a class="tile ot" href="${c.link('occupational-therapy')}"><span class="plate">${c.icon('ot')}</span><h3>Occupational therapy</h3><p>Support for fine motor skills, handwriting, sensory regulation, daily routines, motor planning, and functional feeding skills.</p><span class="more">Explore occupational therapy →</span></a>
          <a class="tile pt" href="${c.link('physical-therapy')}"><span class="plate">${c.icon('pt')}</span><h3>Physical therapy</h3><p>Gross motor skills, strength, balance, coordination and mobility.</p><span class="more">Explore physical therapy →</span></a>
        </div>
      </div>
    </section>

    <section class="alt" aria-labelledby="locations-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Where we go</p><h2 id="locations-title">Therapy that comes to you.</h2><p class="lede">Star Therapy Solutions provides services at participating public schools, private schools, charter schools, preschools, and daycares, as well as our Miami Lakes office. Services at individual facilities depend on arrangements and availability.</p></div>
        ${chips()}
        <p><a class="text-link" href="${c.link('locations')}">See where we work →</a></p>
      </div>
    </section>

    <section aria-labelledby="inside-title">
      <div class="wrap media">
        <div class="stack"><p class="eyebrow">A look inside</p><h2 id="inside-title">Skills practiced through everyday activities.</h2><p class="lede">Take a look at a therapy activity at Star Therapy Solutions. Each child’s treatment is individualized to their needs and goals.</p></div>
        <figure><video controls playsinline preload="none" poster="assets/images/therapy-session-poster.jpg" width="720" height="1280" aria-label="Therapy activity at Star Therapy Solutions"><source src="assets/video/therapy-session.mp4" type="video/mp4">Your browser cannot play this clip.</video><figcaption>Therapy in practice. <a href="assets/video/therapy-session.mp4">Open the therapy video</a>.</figcaption></figure>
      </div>
    </section>

    <section class="alt" aria-labelledby="start-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Getting started</p><h2 id="start-title">Let’s find your next step.</h2><p class="lede">Every family’s path is different. Contact us to discuss services, availability, and what comes next.</p></div>
        ${steps()}
        <div class="grid2">
          ${summaryPanel(c)}
          <article class="panel">${c.icon('shield')}<div class="stack-s"><h3>Explore ways to access care</h3><p>Private pay, commercial insurance, Medicaid, and the Step Up For Students Unique Abilities Scholarship. Plan participation, benefits, authorizations, scholarship eligibility, and available funds must be verified before services begin.</p><a class="text-link" href="${c.link('insurance-funding')}">Insurance and funding →</a></div></article>
        </div>
      </div>
    </section>

    <section aria-labelledby="founder-heading">
      <div class="wrap founder">
        <figure class="founder-photo"><img src="${c.p}assets/images/victoria-perez.jpg" alt="Victoria Perez, smiling, in teal scrubs with her arms crossed." width="900" height="1350" loading="lazy"></figure>
        <div class="stack">
          <p class="eyebrow">Meet our founder</p>
          <h2 id="founder-heading">Victoria Perez, M.S. CCC-SLP</h2>
          <p class="role">Founder &amp; Lead Speech-Language Pathologist</p>
          <p>Victoria Perez, M.S. CCC-SLP is a bilingual Speech-Language Pathologist and the founder of Star Therapy Solutions. She is licensed to practice in the state of Florida and has extensive experience providing pediatric speech and language services in school and daycare settings.</p>
          <p><a class="text-link" href="${c.link('about')}">About our team →</a></p>
        </div>
      </div>
    </section>

${callSection(c)}`,
  },
  {
    slug: 'speech-therapy', depth: 1,
    title: 'Speech-Language Therapy for Children | Star Therapy Solutions',
    description: 'Pediatric speech-language therapy in Miami Lakes and participating Miami-Dade schools and daycares: language, articulation, social communication, fluency and AAC.',
    body: (c) => `${pageHero(c, 'speech', 'Speech-language therapy', 'Our speech-language therapy services support children experiencing difficulties with speech production, language development, communication, and social interaction, at school, daycare, or our Miami Lakes office.')}

    <section class="alt" aria-labelledby="areas-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Areas we work on</p><h2 id="areas-title">What speech therapy can address.</h2></div>
        ${areas([
          ['Receptive language', 'Understanding spoken language, vocabulary, questions, concepts, and directions.'],
          ['Expressive language', 'Vocabulary, grammar, sentence formulation, and expressing thoughts, wants, and needs.'],
          ['Articulation and speech sounds', 'Clearer speech and accurate production of speech sounds.'],
          ['Phonological disorders', 'Patterns of speech sound errors that interfere with being understood.'],
          ['Social communication', 'Conversation, turn-taking, topic maintenance, and interaction across settings.'],
          ['Early language development', 'Requesting, labeling, combining words, and early interactions.'],
          ['Fluency', 'Support for stuttering and other disruptions in the flow of speech.'],
          ['AAC', 'Communication devices, picture-based systems, gestures, and other methods.'],
          ['Higher-level language', 'Comprehension, inferencing, verbal reasoning, and narrative organization.'],
        ], 'var(--blush)')}
        <p class="small">Services are individualized according to each child’s evaluation results, clinical needs, and therapeutic goals.</p>
      </div>
    </section>

    <section aria-labelledby="eval-title">
      <div class="wrap grid2">
        <article class="panel">${c.icon('evaluation')}<div class="stack-s"><h3 id="eval-title">It starts with an evaluation</h3><p>Speech-language evaluations may assess receptive language, expressive language, articulation, phonological skills, social communication, and other areas based on your child’s needs. Results guide individualized treatment recommendations.</p></div></article>
        ${summaryPanel(c)}
      </div>
    </section>

${callSection(c)}`,
  },
  {
    slug: 'occupational-therapy', depth: 1,
    title: 'Pediatric Occupational Therapy | Star Therapy Solutions',
    description: 'Pediatric occupational therapy in Miami Lakes and participating Miami-Dade schools and daycares: fine motor, handwriting, sensory regulation, daily living and feeding skills.',
    body: (c) => `${pageHero(c, 'ot', 'Occupational therapy', 'Our occupational therapy services support children’s ability to participate more independently in everyday routines, school, and age-appropriate activities, at school, daycare, or our Miami Lakes office.')}

    <section class="alt" aria-labelledby="areas-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Areas we work on</p><h2 id="areas-title">What occupational therapy can address.</h2></div>
        ${areas([
          ['Fine motor development', 'Hand strength, grasp, dexterity, and coordination for everyday tasks.'],
          ['Visual motor integration', 'Coordinating visual information with motor movements.'],
          ['Handwriting and pre-writing', 'Pencil grasp, letter formation, and foundational writing skills.'],
          ['Sensory processing and regulation', 'Processing sensory experiences to take part in daily routines.'],
          ['Activities of daily living', 'Independence with dressing, grooming, and other self-care.'],
          ['Motor planning and coordination', 'Planning and organizing movements, and bilateral coordination.'],
          ['Attention and participation', 'Engagement in daily activities, including classroom routines.'],
          ['Feeding skills', 'Sensory, motor, and functional feeding difficulties, within the OT scope of practice.'],
          ['School readiness', 'Developmental skills that support participation in learning activities.'],
        ], 'var(--peri)')}
        <p class="small">Services are individualized according to each child’s evaluation results, clinical needs, and therapeutic goals.</p>
      </div>
    </section>

    <section aria-labelledby="eval-title">
      <div class="wrap grid2">
        <article class="panel">${c.icon('evaluation')}<div class="stack-s"><h3 id="eval-title">It starts with an evaluation</h3><p>Occupational therapy evaluations may assess fine motor coordination, visual motor integration, sensory processing, motor planning, and functional independence. Findings help determine treatment goals.</p></div></article>
        <article class="panel">${c.icon('progress')}<div class="stack-s"><h3>Progress you can follow</h3><p>Therapists monitor progress throughout treatment and adjust goals as clinically appropriate. Parents receive a detailed summary after every session.</p></div></article>
      </div>
    </section>

${callSection(c)}`,
  },
  {
    slug: 'physical-therapy', depth: 1,
    title: 'Pediatric Physical Therapy | Star Therapy Solutions',
    description: 'Pediatric physical therapy in Miami Lakes and participating Miami-Dade schools and daycares: gross motor skills, balance, strength, coordination, walking and mobility.',
    body: (c) => `${pageHero(c, 'pt', 'Physical therapy', 'Helping children build strength, improve movement and participate more independently in everyday routines and play, at school, daycare or our Miami Lakes office.')}

    <section class="alt" aria-labelledby="areas-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Areas we work on</p><h2 id="areas-title">What physical therapy can address.</h2></div>
        ${areas([
          ['Gross motor skills', 'Building skills such as rolling, sitting, crawling, standing and jumping.'],
          ['Balance', 'Improving stability during movement, play and everyday activities.'],
          ['Strength', 'Building muscle strength to support movement and independence.'],
          ['Coordination', 'Helping different parts of the body work together for smoother movements.'],
          ['Walking and mobility', 'Supporting walking, stair climbing and moving safely through daily environments.'],
          ['Posture and alignment', 'Supporting body positioning during sitting, standing and movement.'],
          ['Motor planning', 'Learning how to plan and carry out new movements.'],
          ['Flexibility and range of motion', 'Improving joint movement and muscle flexibility for everyday activities.'],
          ['Endurance', 'Building stamina for active play and participation in daily routines.'],
        ], 'var(--clay)')}
        <p class="small">Services are individualized according to each child’s evaluation results, needs and goals.</p>
      </div>
    </section>

${callSection(c)}`,
  },
  {
    slug: 'locations', depth: 1,
    title: 'Where We Provide Therapy | Star Therapy Solutions',
    description: 'Speech, occupational and physical therapy at participating schools, preschools and daycares in Miami Lakes, Palm Springs North, Hialeah, Hialeah Gardens and Miami Gardens, and at our Miami Lakes office.',
    body: (c) => `    <section class="page-hero" aria-labelledby="loc-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Where we go</p><h1 id="loc-title">Therapy that comes to you.</h1><p class="lede">We serve children and families in Miami Lakes and surrounding Miami-Dade communities, at participating schools and daycares and at our office.</p></div>
        ${chips()}
      </div>
    </section>

    <section class="alt" aria-labelledby="settings-title">
      <div class="wrap grid2">
        <div class="stack">
          <h2 id="settings-title">Where sessions happen</h2>
          <ul class="settings">
            <li><span class="plate loc">${c.icon('school')}</span><div><h3>Public schools</h3><p>Therapeutic support within the child’s educational environment.</p></div></li>
            <li><span class="plate loc">${c.icon('school')}</span><div><h3>Private and charter schools</h3><p>Collaborating with families and educational staff as appropriate.</p></div></li>
            <li><span class="plate loc">${c.icon('blocks')}</span><div><h3>Daycares and preschools</h3><p>Therapy in familiar early childhood settings.</p></div></li>
            <li><span class="plate loc">${c.icon('office')}</span><div><h3>Miami Lakes office</h3><p>Evaluations and treatment, by appointment only.</p></div></li>
          </ul>
          <p class="small">Services at individual educational facilities depend on availability and applicable arrangements. Call to ask about your child’s school.</p>
        </div>
        <div class="card office-card">
          <img src="../starTherapyOffice_.JPG" alt="The Star Therapy Solutions office in Miami Lakes" width="1536" height="2048" loading="lazy">
          <div class="stack">
            <h3>Our Miami Lakes office</h3>
            <address>6625 Miami Lakes Drive East, Suite 234<br>Miami Lakes, FL 33014<br>By appointment only</address>
            <div class="actions">${c.call()}<a class="btn ghost" href="${MAPS}" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗${NEW_TAB}</a></div>
          </div>
        </div>
      </div>
    </section>

${callSection(c)}`,
  },
  {
    slug: 'getting-started', depth: 1,
    title: 'Getting Started | Star Therapy Solutions',
    description: 'How to start pediatric speech, occupational or physical therapy with Star Therapy Solutions: call our team, explore your options, and begin individualized care.',
    body: (c) => `    <section class="page-hero" aria-labelledby="start-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Getting started</p><h1 id="start-title">Let’s find your next step.</h1><p class="lede">Every family’s path is different. A phone call is the first step.</p><div class="actions">${c.call('Call ' + PHONE)}</div></div>
        <h2 class="sr-only">Three steps to get started</h2>
        ${steps()}
      </div>
    </section>

    <section class="alt" aria-labelledby="family-title">
      <div class="wrap stack-l">
        <h2 id="family-title" class="sr-only">For families</h2>
        <div class="grid2">
          ${summaryPanel(c)}
          <article class="panel">${c.icon('languages')}<div class="stack-s"><h3>English and Spanish</h3><p>Ask about English and Spanish language availability for your family when you call.</p></div></article>
        </div>
      </div>
    </section>

${callSection(c)}`,
  },
  {
    slug: 'insurance-funding', depth: 1,
    title: 'Insurance and Funding | Star Therapy Solutions',
    description: 'Ways to access pediatric therapy at Star Therapy Solutions: private pay, commercial insurance, Medicaid, and the Step Up For Students FES-UA scholarship.',
    body: (c) => `    <section class="page-hero" aria-labelledby="fund-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Insurance and funding</p><h1 id="fund-title">Explore ways to access care.</h1><p class="lede">Star Therapy Solutions offers several payment and funding options. Call to discuss yours and verify applicable coverage before services begin.</p><div class="actions">${c.call('Call ' + PHONE)}</div></div>
        <div class="grid2">
          <article class="card"><span class="plate fund">${c.icon('card')}</span><h2 class="h3">Private pay</h2><p>Families may choose to pay privately for speech-language or occupational therapy services.</p></article>
          <article class="card"><span class="plate fund">${c.icon('shield')}</span><h2 class="h3">Commercial health insurance</h2><p>We accept commercial health insurance plans. Benefits, eligibility, and coverage requirements vary.</p></article>
          <article class="card"><span class="plate fund">${c.icon('medicaid')}</span><h2 class="h3">Medicaid health insurance</h2><p>We accept Medicaid insurance plans, subject to plan participation, eligibility, and applicable authorization requirements.</p></article>
          <article class="card"><span class="plate fund">${c.icon('cap')}</span><h2 class="h3">Step Up For Students scholarship</h2><p>We accept the Family Empowerment Scholarship for Students with Unique Abilities (FES-UA) for eligible therapy services, subject to program requirements and available funds.</p></article>
        </div>
        <p class="notice"><strong>Please note:</strong> plan participation, benefits, authorizations, scholarship eligibility, and available funds must be verified before services begin.</p>
      </div>
    </section>

${callSection(c)}`,
  },
  {
    slug: 'about', depth: 1,
    title: 'About Our Team | Star Therapy Solutions',
    description: 'Star Therapy Solutions is a pediatric speech-language, occupational and physical therapy practice in Miami Lakes, founded by Victoria Perez, M.S. CCC-SLP.',
    body: (c) => `    <section class="page-hero" aria-labelledby="about-title">
      <div class="wrap hero-grid">
        <div class="stack">
          <p class="eyebrow">About Star Therapy Solutions</p>
          <h1 id="about-title">Individualized care. Meaningful skills.</h1>
          <p class="lede">A pediatric speech-language, occupational and physical therapy practice serving children and families throughout Miami Lakes and surrounding Miami-Dade communities.</p>
        </div>
        <figure class="team-photo"><img src="../Team_StartTherapy.JPEG" alt="The Star Therapy Solutions team pictured together at the practice." width="1080" height="1350"><figcaption>The people behind Star Therapy Solutions</figcaption></figure>
      </div>
    </section>

    <section class="alt" aria-labelledby="approach-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Our approach</p><h2 id="approach-title">How we work with your family.</h2></div>
        <div class="grid2">
          <article class="card"><h3>Individualized treatment</h3><p>Individualized assessments and clinical observations guide plans built around each child’s strengths, needs, and goals.</p></article>
          <article class="card"><h3>Family-centered care</h3><p>Parent education, communication, and collaboration are important parts of our services.</p></article>
          <article class="card"><h3>Functional skill development</h3><p>Meaningful skills children can use at home, in school, and during social interactions.</p></article>
          <article class="card"><h3>Collaboration with families and educators</h3><p>We coordinate with parents, caregivers, educators, and other professionals as appropriate.</p></article>
        </div>
      </div>
    </section>

    <section aria-labelledby="founder-heading">
      <div class="wrap founder">
        <figure class="founder-photo"><img src="${c.p}assets/images/victoria-perez.jpg" alt="Victoria Perez, smiling, in teal scrubs with her arms crossed." width="900" height="1350" loading="lazy"></figure>
        <div class="stack">
          <p class="eyebrow">Meet our founder</p>
          <h2 id="founder-heading">Victoria Perez, M.S. CCC-SLP</h2>
          <p class="role">Founder &amp; Lead Speech-Language Pathologist</p>
          <p>Victoria Perez, M.S. CCC-SLP is a bilingual Speech-Language Pathologist and the founder of Star Therapy Solutions. She is licensed to practice in the state of Florida and has extensive experience providing pediatric speech and language services in school and daycare settings.</p>
          <p>Victoria specializes in the evaluation and treatment of speech and language delays, articulation disorders, social communication challenges, fluency, and voice disorders. Her clinical approach emphasizes individualized care, functional goals, and collaboration with families and educators to support meaningful progress for every child.</p>
        </div>
      </div>
    </section>

    <section class="alt" aria-labelledby="clinical-title">
      <div class="wrap stack">
        <div class="section-head"><p class="eyebrow">Our clinical team</p><h2 id="clinical-title">Qualified pediatric therapy professionals.</h2><p class="lede">Our practice works with licensed speech-language pathologists (SLPs), speech-language pathology assistants (SLPAs), licensed occupational therapists (OTs), and certified occupational therapy assistants (COTAs). All professionals provide services within their respective scopes of practice and applicable supervision requirements.</p></div>
      </div>
    </section>

${callSection(c)}`,
  },
  {
    slug: 'contact', depth: 1,
    title: 'Contact Us | Star Therapy Solutions',
    description: 'Call Star Therapy Solutions at (305) 788-6144. Office at 6625 Miami Lakes Drive East, Suite 234, Miami Lakes, FL 33014, by appointment only.',
    body: (c) => `    <section class="page-hero" aria-labelledby="contact-heading">
      <div class="wrap grid2">
        <div class="stack">
          <p class="eyebrow">Get started</p>
          <h1 id="contact-heading">Let’s Start the Conversation</h1>
          <p class="lede">Have questions about our pediatric speech and language therapy services? Give us a call to learn how we can help your family.</p>
          <p class="phone-big"><a href="${TEL}">${PHONE}</a></p>
          <div class="actions">${c.call('Call Star Therapy Solutions')}</div>
          <p class="small">Ask about English and Spanish language availability for your family.</p>
          <p class="notice"><strong>Not for emergencies.</strong> If your child needs urgent care, call 911.</p>
        </div>
        <div class="stack">
          <div class="card row"><span class="plate loc">${c.icon('pin')}</span><div class="stack-s"><h2 class="h3">Miami Lakes office</h2><address>6625 Miami Lakes Drive East, Suite 234<br>Miami Lakes, FL 33014<br>By appointment only</address><a class="text-link" href="${MAPS}" target="_blank" rel="noopener noreferrer">View our office on Google Maps ↗${NEW_TAB}</a></div></div>
          <div class="card row"><span class="plate">${c.icon('team')}</span><div class="stack-s"><h2 class="h3">Follow along</h2><a class="text-link" href="${IG}" target="_blank" rel="noopener noreferrer">Instagram · @startherapysolutions ↗${NEW_TAB}</a><a class="text-link" href="${LI}" target="_blank" rel="noopener noreferrer">LinkedIn · Star Therapy Solutions ↗${NEW_TAB}</a></div></div>
        </div>
      </div>
    </section>`,
  },
  {
    slug: 'privacy', depth: 1,
    title: 'Privacy | Star Therapy Solutions',
    description: 'Star Therapy Solutions’ HIPAA Notice of Privacy Practices and website privacy statement.',
    body: (c) => `    <section class="page-hero" aria-labelledby="privacy-title">
      <div class="wrap stack">
        <p class="eyebrow">Privacy</p>
        <h1 id="privacy-title">Your privacy matters to us.</h1>
        <p class="lede">This page has two parts: our HIPAA Notice of Privacy Practices, which explains how we handle your child’s health information, and our website privacy statement, which explains what this website does and does not collect.</p>
        <nav class="actions" aria-label="On this page"><a class="btn ghost" href="#notice">Notice of Privacy Practices</a><a class="btn ghost" href="#website">Website Privacy</a></nav>
      </div>
    </section>

    <section class="alt" id="notice" aria-labelledby="notice-title">
      <div class="wrap stack legal">
        <h2 id="notice-title">Notice of Privacy Practices</h2>
        <p class="notice">[Notice of Privacy Practices: owner to supply. This section will contain the practice’s HIPAA Notice of Privacy Practices word for word, with its effective date.]</p>
      </div>
    </section>

    <section id="website" aria-labelledby="website-title">
      <div class="wrap stack legal">
        <h2 id="website-title">Website Privacy</h2>
        <p class="small">Last updated: [date, owner to confirm]</p>
        <h3>What this website collects</h3>
        <p>This website does not collect personal information. It has no contact forms, accounts, newsletter sign-ups or online booking, and it does not use cookies, analytics, advertising pixels or other tracking tools.</p>
        <h3>When you call us</h3>
        <p>Tapping a phone number opens your phone’s calling app. Information you share with us by phone is handled as described in our Notice of Privacy Practices above.</p>
        <h3>Technical information</h3>
        <p>Like most websites, our web hosting provider may automatically record basic technical information, such as your IP address and browser type, for security and to keep the site running. We do not use this information for advertising or marketing.</p>
        <h3>Health information and social media</h3>
        <p>Please do not share your child’s health information through social media messages or comments. To discuss your child’s care, call us at <a href="${TEL}">${PHONE}</a>.</p>
        <h3>Children</h3>
        <p>This website is intended for parents and caregivers. We do not knowingly collect information from children through this website.</p>
        <h3>Changes to this statement</h3>
        <p>If we change how this website works, we will update this statement and the date above.</p>
        <h3>Questions</h3>
        <p>Call us at <a href="${TEL}">${PHONE}</a>, or write to Star Therapy Solutions, 6625 Miami Lakes Drive East, Suite 234, Miami Lakes, FL 33014.</p>
      </div>
    </section>`,
  },
];

for (const page of pages) {
  const dir = page.depth ? join(ROOT, page.slug) : ROOT;
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, page.file || 'index.html'), build(page));
}

// 404 lives at the site root but is served for any missing path, so it uses absolute project paths.
const notFound = build({
  slug: '404', depth: 0,
  title: 'Page not found | Star Therapy Solutions',
  description: 'This page could not be found.',
  body: (c) => `    <section class="page-hero">
      <div class="wrap stack">
        <p class="eyebrow">Page not found</p>
        <h1>We couldn’t find that page.</h1>
        <p class="lede">The link may be old or mistyped. Start from the homepage, or give us a call.</p>
        <div class="actions"><a class="btn ghost" href="./">Go to the homepage</a>${c.call('Call ' + PHONE)}</div>
      </div>
    </section>`,
}).replaceAll('href="speech-therapy/', 'href="/StarTherapyV3/speech-therapy/');
writeFileSync(join(ROOT, '404.html'), notFound
  .replace(/(href|src)="(?!https?:|tel:|#|\/)([^"]*)"/g, (m, attr, path) => `${attr}="/StarTherapyV3/${path === './' ? '' : path}"`));

console.log('wrote', pages.length, 'pages + 404.html');
