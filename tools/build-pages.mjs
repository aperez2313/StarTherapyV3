// Generates every page of the site (index.html, the folder pages and 404.html) from one template.
// The header, footer and call bar live here once, so edit this file and rerun instead of editing each page.
// Usage, from the repo root: node tools/build-pages.mjs .
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.argv[2];
if (!ROOT) throw new Error('repo root required');

const PHONE = '(305) 778-6144';
const TEL = 'tel:+13057786144';
const MAPS = 'https://www.google.com/maps/place/Star+Therapy+Solutions/@25.9089664,-80.3101178,17z/data=!3m1!4b1!4m6!3m5!1s0x8f5029aaeeece963:0x18bcb885d2f2215!8m2!3d25.9089664!4d-80.3075375!16s%2Fg%2F11xh90c61_';
const IG = 'https://www.instagram.com/startherapysolutions/';
const LI = 'https://www.linkedin.com/company/star-therapy-solutions/';
const NEW_TAB = '<span class="sr-only"> (opens in a new tab)</span>';

const NAV = [
  ['speech-therapy', 'Speech Therapy', 'var(--blush)'],
  ['occupational-therapy', 'Occupational Therapy', 'var(--peri)'],
  ['physical-therapy', 'Physical Therapy', 'var(--clay)'],
  ['locations', 'Locations', 'var(--mint)'],
  ['getting-started', 'Getting Started', 'var(--sage)'],
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
  const desktopLink = (slug, label) => `<a href="${link(slug)}"${page.slug === slug ? ' aria-current="page"' : ''}>${label}</a>`;
  const megaItem = ([slug, name, glyph, color, description]) => `<a class="mega-link" href="${link(slug)}"${page.slug === slug ? ' aria-current="page"' : ''}><span class="mega-icon" style="background:var(--${color})">${icon(glyph)}</span><span><span class="mega-name">${name}</span><span class="mega-description">${description}</span></span></a>`;
  const dropdown = (label, columns) => `<details class="nav-group"><summary>${label}<svg class="nav-chevron" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="m4 6 4 4 4-4"/></svg></summary><div class="nav-dropdown mega-menu">${columns.map(([heading, items]) => `<div class="mega-column"><p class="mega-heading">${heading}</p>${items.map(megaItem).join('')}</div>`).join('')}</div></details>`;
  const servicesMenu = dropdown('Services', [
    ['Therapy for your child', [
      ['speech-therapy', 'Speech Therapy', 'speech', 'blush', 'Communication and language skills'],
      ['occupational-therapy', 'Occupational Therapy', 'ot', 'peri', 'Skills for everyday activities'],
      ['physical-therapy', 'Physical Therapy', 'pt', 'clay', 'Movement, balance, and mobility'],
    ]],
    ['Explore care with us', [
      ['locations', 'Where We Work', 'map', 'mint', 'Schools, daycares, and our office'],
      ['about', 'Meet Our Team', 'team', 'latte', 'The people behind Star Therapy'],
      ['getting-started', 'Getting Started', 'progress', 'sage', 'Find your family’s next step'],
    ]],
  ]);
  const gettingStartedMenu = dropdown('Getting Started', [
    ['Take the first step', [
      ['getting-started', 'Getting Started', 'progress', 'sage', 'Learn what comes next'],
      ['contact', 'Contact Our Team', 'phone', 'blush', 'Call to discuss your child’s needs'],
    ]],
    ['Plan your care', [
      ['insurance-funding', 'Insurance and Funding', 'shield', 'lavender', 'Explore payment and funding options'],
      ['locations', 'Service Locations', 'map', 'mint', 'Find out where we provide therapy'],
    ]],
  ]);
  const desktopLinks = servicesMenu + desktopLink('locations', 'Locations') + gettingStartedMenu + desktopLink('about', 'About') + desktopLink('contact', 'Contact');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Star Therapy Solutions">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="https://aperez2313.github.io/StarTherapyV3/${page.slug === '404' ? '404.html' : page.slug ? page.slug + '/' : ''}">
  <meta property="og:image" content="https://aperez2313.github.io/StarTherapyV3/assets/images/star-therapy-share-logo.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1100">
  <meta property="og:image:height" content="578">
  <meta property="og:image:alt" content="Star Therapy Solutions logo on a cream background">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="https://aperez2313.github.io/StarTherapyV3/assets/images/star-therapy-share-logo.png">
  <meta name="twitter:image:alt" content="Star Therapy Solutions logo on a cream background">
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
        ${desktopLinks}
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
        <p>© Star Therapy Solutions · Miami Lakes, Florida<br>Pediatric speech-language, occupational, and physical therapy.</p>
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
        <p class="small">6625 Miami Lakes Drive East, Suite 234 · Miami Lakes, FL 33014<br>By appointment only</p>
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
    description: 'Pediatric speech-language, occupational, and physical therapy at participating Miami-Dade schools and daycares and at our Miami Lakes office. Call (305) 778-6144.',
    body: (c) => `    <section class="hero" aria-labelledby="hero-title">
      <div class="wrap hero-grid">
        <div class="stack">
          <p class="eyebrow">Pediatric therapy · Miami Lakes, Florida</p>
          <h1 id="hero-title">Helping Little Stars Reach Their Full Potential.</h1>
          <p class="hero-subtitle">Pediatric Speech, Occupational &amp; Physical Therapy.</p>
          <p class="lede">Personalized speech, occupational, and physical therapy that comes to your child’s school or daycare, with services also available at our Miami Lakes office.</p>
          <div class="actions">${c.call('Call ' + PHONE)}<a class="btn ghost" href="${c.link('contact')}">Contact details</a></div>
          <p class="note">Office visits by appointment · English &amp; Spanish</p>
        </div>
        <figure class="hero-photo"><img src="assets/images/therapy-play.jpg" alt="A therapist in purple scrubs and a young girl at a child-sized table, building a toy potato figure together." width="900" height="1125" fetchpriority="high"><figcaption>Learning through play, at school, daycare, or our Miami Lakes office.</figcaption></figure>
      </div>
    </section>

    <section aria-labelledby="services-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Our therapy services</p><h2 id="services-title">Support that fits your child.</h2></div>
        <div class="tiles">
          <a class="tile speech" href="${c.link('speech-therapy')}"><span class="plate">${c.icon('speech')}</span><h3>Speech-language therapy</h3><p>Support for understanding and expressing ideas, clearer speech, early language, social communication, fluency, and augmentative and alternative communication (AAC).</p><span class="btn more">${c.icon('arrow')}<span>Explore speech therapy</span></span></a>
          <a class="tile ot" href="${c.link('occupational-therapy')}"><span class="plate">${c.icon('ot')}</span><h3>Occupational therapy</h3><p>Support for fine motor skills, handwriting, sensory regulation, daily routines, motor planning, and functional feeding skills.</p><span class="btn more">${c.icon('arrow')}<span>Explore occupational therapy</span></span></a>
          <a class="tile pt" href="${c.link('physical-therapy')}"><span class="plate">${c.icon('pt')}</span><h3>Physical therapy</h3><p>Gross motor skills, strength, balance, coordination, and mobility.</p><span class="btn more">${c.icon('arrow')}<span>Explore physical therapy</span></span></a>
        </div>
      </div>
    </section>

    <section class="alt" aria-labelledby="locations-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Where we go</p><h2 id="locations-title">Therapy that comes to you.</h2><p class="lede">Star Therapy Solutions provides services at participating public schools, private schools, charter schools, preschools, and daycares, as well as our Miami Lakes office. Services at individual facilities depend on arrangements and availability.</p></div>
        ${chips()}
        <p><a class="btn" href="${c.link('locations')}">${c.icon('map')}<span>See where we work</span></a></p>
      </div>
    </section>

    <section aria-labelledby="inside-title">
      <div class="wrap media">
        <div class="stack"><p class="eyebrow">A look inside</p><h2 id="inside-title">Skills practiced through everyday activities.</h2><p class="lede">Take a look at a therapy activity at Star Therapy Solutions. Each child’s treatment is individualized to their needs and goals.</p></div>
        <figure><video controls playsinline preload="none" poster="assets/images/therapy-session-poster.jpg" width="720" height="1280" aria-label="Therapy activity at Star Therapy Solutions"><source src="assets/video/therapy-session.mp4" type="video/mp4">Your browser cannot play this clip.</video><div class="actions"><a class="btn" href="assets/video/therapy-session.mp4">${c.icon('arrow')}<span>Open the therapy video</span></a></div></figure>
      </div>
    </section>

    <section class="alt" aria-labelledby="start-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Getting started</p><h2 id="start-title">Let’s find your next step.</h2><p class="lede">Every family’s path is different. Contact us to discuss services, availability, and what comes next.</p></div>
        ${steps()}
        <div class="grid2">
          ${summaryPanel(c)}
          <article class="panel">${c.icon('shield')}<div class="stack-s"><h3>Explore ways to access care</h3><p>Options include private pay, commercial insurance, Medicaid, and the Family Empowerment Scholarship for Students with Unique Abilities (FES-UA) through Step Up For Students. Plan participation, benefits, authorizations, scholarship eligibility, and available funds must be verified before services begin.</p><a class="btn" href="${c.link('insurance-funding')}">${c.icon('shield')}<span>Insurance and funding</span></a></div></article>
        </div>
      </div>
    </section>

    <section aria-labelledby="founder-heading">
      <div class="wrap founder">
        <figure class="founder-photo"><img src="${c.p}assets/images/victoria-perez.jpg" alt="Victoria Perez, smiling, in teal scrubs with her arms crossed." width="900" height="1350" loading="lazy"></figure>
        <div class="stack">
          <p class="eyebrow">Meet our founder</p>
          <h2 id="founder-heading">Victoria Perez, M.S., CCC-SLP</h2>
          <p class="role">Founder &amp; Lead Speech-Language Pathologist</p>
          <p>Victoria Perez, M.S., CCC-SLP, is a bilingual speech-language pathologist and the founder of Star Therapy Solutions. She is licensed to practice in the state of Florida and has extensive experience providing pediatric speech and language services in school and daycare settings.</p>
          <p><a class="btn" href="${c.link('about')}">${c.icon('team')}<span>About our team</span></a></p>
        </div>
      </div>
    </section>

${callSection(c)}`,
  },
  {
    slug: 'speech-therapy', depth: 1,
    title: 'Speech-Language Therapy for Children | Star Therapy Solutions',
    description: 'Pediatric speech-language therapy in Miami Lakes and participating Miami-Dade schools and daycares: language, articulation, social communication, fluency, and augmentative and alternative communication (AAC).',
    body: (c) => `${pageHero(c, 'speech', 'Speech-language therapy', 'At school, daycare, or our Miami Lakes office, our speech-language therapy services support children who experience difficulties with speech production, language development, communication, and social interaction.')}

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
          ['Augmentative and alternative communication (AAC)', 'Communication devices, picture-based systems, gestures, and other methods.'],
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
    description: 'Pediatric occupational therapy in Miami Lakes and participating Miami-Dade schools and daycares: fine motor, handwriting, sensory regulation, daily living, and feeding skills.',
    body: (c) => `${pageHero(c, 'ot', 'Occupational therapy', 'At school, daycare, or our Miami Lakes office, our occupational therapy services support children’s ability to participate more independently in daily routines, learning, and age-appropriate activities.')}

    <section class="alt" aria-labelledby="areas-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Areas we work on</p><h2 id="areas-title">What occupational therapy can address.</h2></div>
        ${areas([
          ['Fine motor development', 'Hand strength, grasp, dexterity, and coordination for everyday tasks.'],
          ['Visual motor integration', 'Coordinating visual information with motor movements.'],
          ['Handwriting and pre-writing', 'Pencil grasp, letter formation, and foundational writing skills.'],
          ['Sensory processing and regulation', 'Processing sensory experiences to take part in daily routines.'],
          ['Activities of daily living', 'Independence with dressing, grooming, and other self-care.'],
          ['Motor planning and coordination', 'Planning and organizing movements and coordinating both sides of the body.'],
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
    description: 'Pediatric physical therapy in Miami Lakes and participating Miami-Dade schools and daycares: gross motor skills, balance, strength, coordination, walking, and mobility.',
    body: (c) => `${pageHero(c, 'pt', 'Physical therapy', 'Helping children build strength, improve movement, and participate more independently in everyday routines and play, at school, daycare, or our Miami Lakes office.')}

    <section class="alt" aria-labelledby="areas-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Areas we work on</p><h2 id="areas-title">What physical therapy can address.</h2></div>
        ${areas([
          ['Gross motor skills', 'Building skills such as rolling, sitting, crawling, standing, and jumping.'],
          ['Balance', 'Improving stability during movement, play, and everyday activities.'],
          ['Strength', 'Building muscle strength to support movement and independence.'],
          ['Coordination', 'Helping different parts of the body work together for smoother movements.'],
          ['Walking and mobility', 'Supporting walking, stair climbing, and moving safely through daily environments.'],
          ['Posture and alignment', 'Supporting body positioning during sitting, standing, and movement.'],
          ['Motor planning', 'Learning how to plan and carry out new movements.'],
          ['Flexibility and range of motion', 'Improving joint movement and muscle flexibility for everyday activities.'],
          ['Endurance', 'Building stamina for active play and participation in daily routines.'],
        ], 'var(--clay)')}
        <p class="small">Services are individualized according to each child’s evaluation results, needs, and goals.</p>
      </div>
    </section>

${callSection(c)}`,
  },
  {
    slug: 'locations', depth: 1,
    title: 'Where We Provide Therapy | Star Therapy Solutions',
    description: 'Speech, occupational and physical therapy at participating schools, preschools, and daycares in Miami Lakes, Palm Springs North, Hialeah, Hialeah Gardens, and Miami Gardens, and at our Miami Lakes office.',
    body: (c) => `    <section class="page-hero" aria-labelledby="loc-title">
      <div class="wrap stack-l">
        <div class="section-head"><p class="eyebrow">Where we go</p><h1 id="loc-title">Therapy that comes to you.</h1><p class="lede">We serve children and families in Miami Lakes and surrounding Miami-Dade communities, at participating schools and daycares, as well as at our office.</p></div>
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
            <li><span class="plate loc">${c.icon('office')}</span><div><h3>Miami Lakes office</h3><p>Evaluations and treatment by appointment only.</p></div></li>
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
    description: 'How to start pediatric speech, occupational, or physical therapy with Star Therapy Solutions: call our team, explore your options, and begin individualized care.',
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
          <article class="card"><span class="plate fund">${c.icon('card')}</span><h2 class="h3">Private pay</h2><p>Families may choose to pay privately.</p></article>
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
    description: 'Star Therapy Solutions is a pediatric speech-language, occupational, and physical therapy practice in Miami Lakes, founded by Victoria Perez, M.S., CCC-SLP.',
    body: (c) => `    <section class="page-hero" aria-labelledby="about-title">
      <div class="wrap hero-grid">
        <div class="stack">
          <p class="eyebrow">About Star Therapy Solutions</p>
          <h1 id="about-title">Individualized care. Meaningful skills.</h1>
          <p class="lede">A pediatric speech-language, occupational, and physical therapy practice serving children and families throughout Miami Lakes and surrounding Miami-Dade communities.</p>
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
          <h2 id="founder-heading">Victoria Perez, M.S., CCC-SLP</h2>
          <p class="role">Founder &amp; Lead Speech-Language Pathologist</p>
          <p>Victoria Perez, M.S., CCC-SLP, is a bilingual speech-language pathologist and the founder of Star Therapy Solutions. She is licensed to practice in the state of Florida and has extensive experience providing pediatric speech and language services in school and daycare settings.</p>
          <p>Victoria specializes in the evaluation and treatment of speech and language delays, articulation disorders, social communication challenges, fluency, and voice disorders. Her clinical approach emphasizes individualized care, functional goals, and collaboration with families and educators to support meaningful progress for every child.</p>
        </div>
      </div>
    </section>

    <section class="alt" aria-labelledby="clinical-title">
      <div class="wrap stack">
        <div class="section-head"><p class="eyebrow">Our clinical team</p><h2 id="clinical-title">Qualified pediatric therapy professionals.</h2><p class="lede">Our team consists of qualified speech, occupational, and physical therapy professionals dedicated to providing high-quality, individualized care. Each team member works within their professional scope of practice to support your child’s communication, development, mobility, and independence.</p></div>
      </div>
    </section>

${callSection(c)}`,
  },
  {
    slug: 'contact', depth: 1,
    title: 'Contact Us | Star Therapy Solutions',
    description: 'Call Star Therapy Solutions at (305) 778-6144. Office at 6625 Miami Lakes Drive East, Suite 234, Miami Lakes, FL 33014, by appointment only.',
    body: (c) => `    <section class="page-hero" aria-labelledby="contact-heading">
      <div class="wrap grid2">
        <div class="stack">
          <p class="eyebrow">Get started</p>
          <h1 id="contact-heading">Let’s start the conversation.</h1>
          <p class="lede">Have questions about our pediatric speech, occupational, or physical therapy services? Give us a call to learn how we can help your family.</p>
          <p class="phone-big"><a href="${TEL}">${PHONE}</a></p>
          <div class="actions">${c.call('Call Star Therapy Solutions')}</div>
          <p class="small">Ask about English and Spanish language availability for your family.</p>
          <p class="notice"><strong>Not for emergencies.</strong> If your child needs urgent care, call 911.</p>
        </div>
        <div class="stack">
          <div class="card row"><span class="plate loc">${c.icon('pin')}</span><div class="stack-s"><h2 class="h3">Miami Lakes office</h2><address>6625 Miami Lakes Drive East, Suite 234<br>Miami Lakes, FL 33014<br>By appointment only</address><div class="actions"><a class="btn contact-link" href="${MAPS}" target="_blank" rel="noopener noreferrer">${c.icon('map')}<span>Google Maps${NEW_TAB}</span></a></div></div></div>
          <div class="card row"><span class="plate">${c.icon('team')}</span><div class="stack-s"><h2 class="h3">Follow along</h2><div class="actions"><a class="btn contact-link" href="${IG}" target="_blank" rel="noopener noreferrer"><img class="social-icon" src="${c.p}assets/images/instagram-glyph-black.svg" alt="" width="20" height="20"><span>Instagram${NEW_TAB}</span></a><a class="btn contact-link" href="${LI}" target="_blank" rel="noopener noreferrer"><img class="social-icon" src="${c.p}assets/images/linkedin-in-black.png" alt="" width="20" height="20"><span>LinkedIn${NEW_TAB}</span></a></div></div></div>
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
        <p><a class="btn download-notice" href="../assets/documents/notice-of-privacy-practices-oct-2026.docx" download>${c.icon('summary')}<span>Download notice and acknowledgment (Word)</span></a></p>
        <p>Your Information. Your Rights. Our Responsibilities.</p>
        <p>Effective date: October 14, 2026</p>
        <p>Star Therapy Solutions, LLC  |  6625 Miami Lakes Drive East, Suite 234, Miami Lakes, FL 33014</p>
        <p>Phone: 305-778-6144  |  Fax: 305-280-4606  |  Privacy contact: Privacy Officer, startherapysolutions@gmail.com</p>
        <p>THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOUR CHILD MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</p>
        <p>This notice applies to protected health information maintained by Star Therapy Solutions, LLC. References to “you” generally mean the patient or a parent or legal guardian legally authorized to act for the patient. Certain minors may have independent confidentiality rights under applicable law.</p>
        <h3>1 | Your rights</h3>
        <h4>Access records</h4>
        <p>You may request to inspect or receive an electronic or paper copy of your child’s medical record and other health information we maintain. We generally respond within 30 days, subject to lawful extensions and exceptions. A reasonable cost-based fee may apply where permitted.</p>
        <h4>Request an amendment</h4>
        <p>You may ask us to correct information you believe is incorrect or incomplete. We may deny the request for a legally permitted reason and will explain our decision in writing, generally within 60 days, subject to a permitted extension.</p>
        <h4>Request confidential communications or restrictions</h4>
        <p>You may ask us to contact you in a specific way or at another address; we will accommodate reasonable requests. You may request limits on certain uses or disclosures for treatment, payment, or operations, although we are not required to agree to every request. If you pay in full out of pocket for a service and ask us not to disclose the related information to your health plan for payment or health care operations, we must honor that request unless the disclosure is required by law.</p>
        <h4>Request an accounting and a paper copy</h4>
        <p>You may ask for an accounting of certain disclosures made during the six years before your request. Disclosures for treatment, payment, and health care operations, among other categories, generally are excluded. One accounting in a 12-month period is free; additional accountings may carry a reasonable cost-based fee. You may request a paper copy of this notice at any time, even if you agreed to receive it electronically.</p>
        <h4>Personal representative and complaints</h4>
        <p>A person legally authorized to act for a patient, including a parent or guardian when permitted by law, may exercise applicable rights. We will verify authority and respect exceptions under laws governing minors. You may complain to us or the U.S. Department of Health and Human Services without retaliation.</p>
        <h3>2 | Your choices</h3>
        <p>When permitted by law, you may tell us your preferences about sharing information with relatives, friends, or others involved in care or payment, and for disaster relief. If the patient cannot express a preference, we may act in the patient’s best interests using professional judgment. We generally need written authorization for most uses of psychotherapy notes, marketing activities requiring authorization, and sale of protected health information. Other uses or disclosures not described in this notice or allowed by law require written authorization, which may be revoked in writing except to the extent already relied upon.</p>
        <p>If we contact you for fundraising where permitted by law, you may choose not to receive further fundraising communications. Special rules apply to fundraising involving substance use disorder records protected by 42 CFR Part 2.</p>
        <h3>3 | How we use and disclose information</h3>
        <h4>Treatment</h4>
        <p>We may use and share information with treating speech-language pathologists, occupational therapists, supervised therapy personnel, referring clinicians, and other care professionals to evaluate, plan, provide, or coordinate services. Example: a therapist shares clinically relevant findings with another treating clinician.</p>
        <h4>Payment</h4>
        <p>We may share necessary information to check eligibility, obtain authorizations, submit claims, and receive payments from insurance plans, Medicaid programs, or other authorized payers. Example: we submit therapy documentation to a health plan to support payment.</p>
        <h4>Health care operations</h4>
        <p>We may use or disclose information for quality improvement, professional supervision, staff training, business management, auditing, compliance, and other legally permitted operations. Example: we review therapy notes to evaluate quality and documentation practices.</p>
        <h4>Therapy in schools and daycare centers</h4>
        <p>We provide some services at schools and daycare centers. We share information with teachers, administrators, and other school or daycare staff only as law allows or with applicable authorization. Some records maintained by educational institutions are governed by FERPA instead of HIPAA. A parent’s signature acknowledging this notice does not by itself authorize disclosures that otherwise require permission.</p>
        <h4>Other permitted or required disclosures</h4>
        <p>Subject to legal requirements and safeguards, we may disclose information for public health and safety, reporting suspected abuse or neglect, health oversight, research when authorized by law, judicial and administrative proceedings, law enforcement, workers’ compensation, certain government functions, medical examiners and funeral directors, and to prevent or lessen a serious threat. We may disclose information when required by law, including in response to valid legal process.</p>
        <h3>4 | Special protections</h3>
        <p>Florida law and other federal or state laws may provide extra privacy protections, including for certain minor, behavioral health, and other sensitive records. Where a more protective law applies, we follow that law. Florida Statutes section 456.057 may govern confidentiality and access to patient records.</p>
        <p>If we receive or maintain substance use disorder patient records protected by 42 CFR Part 2, additional safeguards apply. A patient may provide a single consent for future uses or disclosures for treatment, payment, and health care operations where Part 2 permits. Information disclosed under that consent may be redisclosed as HIPAA permits, except where special Part 2 restrictions apply. Part 2 records generally cannot be used or disclosed in civil, criminal, administrative, or legislative proceedings against a patient without the patient’s specific written consent or a qualifying court order and required legal process. We comply with applicable restrictions on other uses and disclosures of these records.</p>
        <h3>5 | Our responsibilities</h3>
        <p>We are required to protect the privacy and security of protected health information, provide notice of our legal duties and privacy practices, notify affected individuals when required following a breach of unsecured protected health information, and follow the terms of the notice currently in effect. We will not otherwise use or share protected information unless permitted by law or appropriately authorized in writing.</p>
        <h3>6 | Changes to this notice</h3>
        <p>We may change this notice and make revised terms effective for information we already maintain, as permitted by law. The current notice will be available upon request, posted at our office, and prominently available on any practice website describing our services.</p>
        <h3>7 | Questions or complaints</h3>
        <p>Star Therapy Solutions, LLC  |  Attention: Privacy Officer<br>6625 Miami Lakes Drive East, Suite 234, Miami Lakes, FL 33014<br>Phone: 305-778-6144  |  Email: startherapysolutions@gmail.com</p>
        <p>You may also complain to the U.S. Department of Health and Human Services, Office for Civil Rights, 200 Independence Avenue SW, Washington, DC 20201; 1-877-696-6775; https://www.hhs.gov/hipaa/filing-a-complaint/index.html. We will not retaliate for filing a complaint.</p>
      </div>
    </section>

    <section id="website" aria-labelledby="website-title">
      <div class="wrap stack legal">
        <h2 id="website-title">Website Privacy</h2>
        <p class="small">Last updated: November 9, 2026</p>
        <h3>What this website collects</h3>
        <p>This website has no contact forms, accounts, newsletter sign-ups, or online booking. It does not use cookies, analytics, advertising pixels, or other tracking tools. Our hosting provider may record basic technical information, as described below.</p>
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
