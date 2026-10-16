(function () {
  var DIR = document.documentElement.getAttribute('data-dir') || 'a';
  var PHONE = '(305) 788-6144';
  var TEL = 'tel:+13057886144';
  var MAPS = 'https://www.google.com/maps/search/?api=1&query=6625%20Miami%20Lakes%20Drive%20East%2C%20Suite%20234%2C%20Miami%20Lakes%2C%20FL%2033014';

  var ICONS = {
    speech: 'M3 4h18v12H9l-5 4v-4H3z M7 9h10 M7 12h6',
    ot: 'M7 11V5 M10 11V3 M13 11V3 M16 11V5 M5 11h13v4l-3 6H8l-3-6z M18 13l3-3',
    pin: 'M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z M10 7h4v4h-4z',
    school: 'M3 21h18 M5 21V10l7-5 7 5v11 M10 21v-5h4v5 M12 5V2h4',
    blocks: 'M4 13h7v7H4z M13 13h7v7h-7z M8.5 4h7v7h-7z',
    office: 'M5 21V3h14v18 M3 21h18 M9 7h2 M13 7h2 M9 11h2 M13 11h2 M10 21v-5h4v5',
    team: 'M9 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6z M3 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2 M16 5a3 3 0 0 1 0 6 M21 20v-2a4 4 0 0 0-3-3.9',
    phone: 'M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z',
    shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4',
    medicaid: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M12 8v8 M8 12h8',
    cap: 'M2 9l10-5 10 5-10 5z M6 11v5c3 2 9 2 12 0v-5 M22 9v6',
    card: 'M3 6h18v12H3z M3 10h18 M7 14h4',
    languages: 'M3 4h11v8H7l-4 3z M17 9h4v10l-4-3h-7v-2',
    summary: 'M6 4h12v17H6z M9 2h6v4H9z M9 10h6 M9 14h6 M9 18h3',
    evaluation: 'M10 17a7 7 0 1 0 0-14a7 7 0 0 0 0 14z M15 15l6 6 M7 10l2 2 4-4',
    progress: 'M3 20h5v-5h5v-5h5V5h3',
    clock: 'M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18z M12 7v5l3 3',
    arrow: 'M4 12h15 M13 6l6 6-6 6',
    menu: 'M3 6h18 M3 12h18 M3 18h18',
    close: 'M5 5l14 14 M19 5L5 19'
  };
  function icon(name, label) {
    var aria = label ? 'role="img" aria-label="' + label + '"' : 'aria-hidden="true"';
    return '<svg class="icon" viewBox="0 0 24 24" ' + aria + '><path d="' + ICONS[name] + '"/></svg>';
  }
  function callBtn(text) {
    return '<a class="btn" href="' + TEL + '">' + icon('phone') + '<span>' + (text || 'Call Now') + '</span></a>';
  }

  var NAV = [
    ['speech', 'Speech', 'var(--speech)'],
    ['ot', 'Occupational therapy', 'var(--ot)'],
    ['locations', 'Locations', 'var(--loc)'],
    ['start', 'Getting started', 'var(--prog)'],
    ['funding', 'Insurance', 'var(--fund)'],
    ['about', 'About', 'var(--team)'],
    ['contact', 'Contact', 'var(--action)']
  ];
  var CHIPS = ['Miami Lakes', 'Palm Springs North', 'Hialeah', 'Hialeah Gardens', 'Miami Gardens'];
  function chips(withRegion) {
    return '<div class="chips">' + CHIPS.map(function (c) { return '<span class="chip">' + c + '</span>'; }).join('') +
      (withRegion ? '<span class="chip region">Surrounding Miami-Dade</span>' : '') + '</div>';
  }
  function steps() {
    var s = [
      ['Call our team', 'Tell us about your child’s needs and the services you are interested in.'],
      ['Explore your options', 'We discuss locations, availability, insurance or funding, and evaluation needs.'],
      ['Begin personalized care', 'Once the necessary steps are complete, individualized therapy begins.']
    ];
    return '<ol class="grid3 steps">' + s.map(function (x, i) {
      return '<li class="card step"><span class="num">' + (i + 1) + '</span><h3>' + x[0] + '</h3><p>' + x[1] + '</p></li>';
    }).join('') + '</ol>';
  }
  function tiles() {
    return '<div class="tiles">' +
      '<a class="tile speech" href="#speech"><span class="plate">' + icon('speech') + '</span><h3>Speech-language therapy</h3><p>Language, speech sounds, social communication, fluency and AAC.</p><span class="more">Explore speech therapy →</span></a>' +
      '<a class="tile ot" href="#ot"><span class="plate">' + icon('ot') + '</span><h3>Occupational therapy</h3><p>Fine motor, handwriting, sensory regulation, daily routines and feeding skills.</p><span class="more">Explore occupational therapy →</span></a>' +
      '</div>';
  }
  function summaryPanel() {
    return '<div class="panel">' + icon('summary') + '<div class="stack-s"><h3>A summary after every session</h3><p>Parents receive a detailed summary of the skills addressed, activities completed, their child’s performance and progress toward goals, plus practical strategies for home. It matters most when therapy happens at school or daycare and you cannot attend.</p></div></div>';
  }
  function head(eyebrow, title, lede, extra) {
    return '<div class="section-head"><p class="eyebrow">' + eyebrow + '</p><h2>' + title + '</h2>' + (lede ? '<p class="lede">' + lede + '</p>' : '') + (extra || '') + '</div>';
  }
  function areas(list, stripe) {
    return '<div class="grid3 areas">' + list.map(function (a) {
      return '<div class="card area" style="--stripe:' + stripe + '"><h3>' + a[0] + '</h3><p>' + a[1] + '</p></div>';
    }).join('') + '</div>';
  }
  function pageHero(kind, title, lede, img) {
    return '<section class="page-hero"><div class="wrap hero-grid">' +
      '<div class="stack"><span class="plate big ' + kind + '">' + icon(kind) + '</span><h1>' + title + '</h1><p class="lede">' + lede + '</p><div class="actions">' + callBtn('Call ' + PHONE) + '</div></div>' +
      (img ? '<figure class="hero-photo"><img src="' + img[0] + '" alt="' + img[1] + '" width="1536" height="2048"></figure>' : '') +
      '</div></section>';
  }

  var PAGES = {
    home: function () {
      return '<section class="hero"><div class="wrap hero-grid">' +
        '<div class="stack"><p class="eyebrow">Pediatric therapy · Miami Lakes, Florida</p>' +
        '<h1>Helping little stars reach their full potential.</h1>' +
        '<p class="lede">Personalized speech and occupational therapy that comes to your child’s school or daycare, with services also available at our Miami Lakes office.</p>' +
        '<div class="actions">' + callBtn('Call ' + PHONE) + '<a class="btn ghost" href="#start">How to get started</a></div>' +
        '<p class="note">Office visits by appointment · English and Spanish</p></div>' +
        '<figure class="hero-photo"><img src="../../starTherapyOffice_.JPG" alt="Sunlit Star Therapy Solutions office with a child-sized table, therapy toys and artwork" width="1536" height="2048"></figure>' +
        '</div></section>' +
        '<section><div class="wrap stack-l">' + head('Our therapy services', 'Support that fits your child.') + tiles() + '</div></section>' +
        '<section class="alt"><div class="wrap stack-l">' + head('Where we go', 'Therapy that comes to you.', 'Participating public, private and charter schools, preschools and daycares, plus our Miami Lakes office. Services at each facility depend on arrangements and availability.') + chips(true) + '<p><a class="text-link" href="#locations">See where we work →</a></p></div></section>' +
        '<section><div class="wrap inside"><div class="stack"><p class="eyebrow">A look inside</p><h2>Skills practiced through everyday activities.</h2><p class="lede">Each child’s treatment is individualized to their needs and goals.</p></div><figure class="poster"><img src="../../assets/images/therapy-session-poster.jpg" alt="A therapy activity at Star Therapy Solutions" width="720" height="1280"><figcaption>Therapy video plays here on the live site.</figcaption></figure></div></section>' +
        '<section class="alt"><div class="wrap stack-l">' + head('Getting started', 'Let’s find your next step.', 'Every family’s path is different. Call to discuss services, availability and what comes next.') + steps() + '<div class="grid2">' + summaryPanel() +
        '<div class="panel">' + icon('shield') + '<div class="stack-s"><h3>Ways to access care</h3><p>Private pay, commercial health insurance, Medicaid, and the Step Up For Students FES-UA scholarship. Coverage must be verified before services begin.</p><a class="text-link" href="#funding">Insurance and funding →</a></div></div></div></div></section>' +
        '<section><div class="wrap founder"><div class="placeholder">[Photo of Victoria Perez, coming soon]</div><div class="stack"><p class="eyebrow">Meet our founder</p><h2>Victoria Perez, M.S., CCC-SLP</h2><p class="note">Founder and speech-language pathologist</p><p>Victoria is a bilingual speech-language pathologist and the founder of Star Therapy Solutions. She is licensed in Florida and has extensive experience providing pediatric speech and language services in school and daycare settings.</p><p><a class="text-link" href="#about">About our team →</a></p></div></div></section>' +
        callSection();
    },
    speech: function () {
      return pageHero('speech', 'Speech-language therapy', 'Support for children with difficulties in speech production, language development, communication and social interaction, at school, daycare or our Miami Lakes office.') +
        '<section><div class="wrap stack-l">' + head('Areas we work on', 'What speech therapy can address.') +
        areas([
          ['Receptive language', 'Understanding words, questions, concepts and directions.'],
          ['Expressive language', 'Vocabulary, grammar and sharing thoughts, wants and needs.'],
          ['Articulation', 'Clearer speech and accurate production of speech sounds.'],
          ['Phonological patterns', 'Sound-error patterns that affect how well a child is understood.'],
          ['Social communication', 'Conversation, turn-taking and interaction across settings.'],
          ['Early language', 'Requesting, labeling, combining words and early interaction.'],
          ['Fluency', 'Support for stuttering and the flow of speech.'],
          ['AAC', 'Communication devices, picture systems, gestures and other methods.'],
          ['Higher-level language', 'Comprehension, inferencing, reasoning and organizing stories.']
        ], 'var(--speech)') + '<p class="small">Services are individualized according to each child’s evaluation results, needs and goals.</p></div></section>' +
        '<section class="alt"><div class="wrap grid2">' +
        '<div class="panel">' + icon('evaluation') + '<div class="stack-s"><h3>It starts with an evaluation</h3><p>Speech-language evaluations may look at receptive and expressive language, articulation, phonological skills, social communication and other areas based on your child’s needs. Results guide an individualized plan.</p></div></div>' +
        summaryPanel() + '</div></section>' + callSection();
    },
    ot: function () {
      return pageHero('ot', 'Occupational therapy', 'Helping children take part more independently in everyday routines, school and play, at school, daycare or our Miami Lakes office.') +
        '<section><div class="wrap stack-l">' + head('Areas we work on', 'What occupational therapy can address.') +
        areas([
          ['Fine motor', 'Hand strength, grasp, dexterity and coordination for everyday tasks.'],
          ['Visual motor', 'Coordinating what a child sees with how they move.'],
          ['Handwriting', 'Pencil grasp, letter formation and pre-writing skills.'],
          ['Sensory regulation', 'Processing sensory experiences to take part in daily routines.'],
          ['Daily living', 'Independence with dressing, grooming and self-care.'],
          ['Motor planning', 'Planning and organizing movements, and bilateral coordination.'],
          ['Attention', 'Engagement in daily activities, including classroom routines.'],
          ['Feeding skills', 'Sensory, motor and functional feeding, within the OT scope of practice.'],
          ['School readiness', 'Developmental skills that support learning activities.']
        ], 'var(--ot)') + '<p class="small">Services are individualized according to each child’s evaluation results, needs and goals.</p></div></section>' +
        '<section class="alt"><div class="wrap grid2">' +
        '<div class="panel">' + icon('evaluation') + '<div class="stack-s"><h3>It starts with an evaluation</h3><p>OT evaluations may look at fine motor coordination, visual motor integration, sensory processing, motor planning and functional independence.</p></div></div>' +
        '<div class="panel">' + icon('progress') + '<div class="stack-s"><h3>Progress you can follow</h3><p>Therapists monitor progress throughout treatment and adjust goals as clinically appropriate. You receive a detailed summary after every session.</p></div></div>' +
        '</div></section>' + callSection();
    },
    locations: function () {
      var settings = [
        ['school', 'Public schools', 'Therapeutic support within the child’s school day.'],
        ['school', 'Private and charter schools', 'Working with families and school staff as appropriate.'],
        ['blocks', 'Daycares and preschools', 'Therapy in a familiar early-learning setting.'],
        ['office', 'Miami Lakes office', 'Evaluations and treatment, by appointment only.']
      ];
      return '<section class="page-hero"><div class="wrap stack-l">' + head('Where we go', 'Therapy that comes to you.', 'We serve families in Miami Lakes and surrounding Miami-Dade communities, at participating schools and daycares and at our office.') + chips(true) + '</div></section>' +
        '<section class="alt"><div class="wrap grid2 top">' +
        '<div class="stack"><h2>Where sessions happen</h2><ul class="settings">' + settings.map(function (s) {
          return '<li><span class="plate loc">' + icon(s[0]) + '</span><div><h3>' + s[1] + '</h3><p>' + s[2] + '</p></div></li>';
        }).join('') + '</ul><p class="small">Services at individual facilities depend on arrangements and availability. Call to ask about your child’s school.</p></div>' +
        '<div class="card office-card"><img src="../../starTherapyOffice_.JPG" alt="The Star Therapy Solutions office in Miami Lakes" width="1536" height="2048"><div class="stack"><h3>Our Miami Lakes office</h3><address>6625 Miami Lakes Drive East, Suite 234<br>Miami Lakes, FL 33014<br>By appointment only</address><div class="actions">' + callBtn() + '<a class="btn ghost" href="' + MAPS + '" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a></div></div></div>' +
        '</div></section>' + callSection();
    },
    start: function () {
      return '<section class="page-hero"><div class="wrap stack-l">' + head('Getting started', 'Let’s find your next step.', 'Every family’s path is different. A phone call is the first step.') + steps() + '</div></section>' +
        '<section class="alt"><div class="wrap grid2">' + summaryPanel() +
        '<div class="panel">' + icon('languages') + '<div class="stack-s"><h3>English and Spanish</h3><p>Ask about language availability for your family when you call.</p><div>' + callBtn('Call ' + PHONE) + '</div></div></div>' +
        '</div></section>' + callSection();
    },
    funding: function () {
      var f = [
        ['card', 'Private pay', 'Families may choose to pay privately for speech-language or occupational therapy.'],
        ['shield', 'Commercial insurance', 'We accept commercial health insurance plans. Benefits, eligibility and coverage requirements vary.'],
        ['medicaid', 'Medicaid', 'We accept Medicaid plans, subject to plan participation, eligibility and authorization requirements.'],
        ['cap', 'FES-UA scholarship', 'Step Up For Students’ Family Empowerment Scholarship for Students with Unique Abilities, subject to program requirements and available funds.']
      ];
      return '<section class="page-hero"><div class="wrap stack-l">' + head('Insurance and funding', 'Ways to access care.', 'Star Therapy Solutions offers several payment and funding options. Call to talk through yours and verify coverage before services begin.', '<div class="actions">' + callBtn('Call ' + PHONE) + '</div>') +
        '<div class="grid2 funding">' + f.map(function (x) {
          return '<div class="card fund"><span class="plate fundp">' + icon(x[0]) + '</span><h3>' + x[1] + '</h3><p>' + x[2] + '</p></div>';
        }).join('') + '</div>' +
        '<p class="notice"><strong>Please note:</strong> plan participation, benefits, authorizations, scholarship eligibility and available funds must be verified before services begin.</p></div></section>' + callSection();
    },
    about: function () {
      var approach = [
        ['Individualized treatment', 'Plans built from each child’s strengths, needs and goals.'],
        ['Family-centered care', 'Parent education, communication and collaboration throughout.'],
        ['Functional skills', 'Meaningful skills children use at home, at school and with friends.'],
        ['Working with educators', 'Coordination with caregivers, teachers and other professionals as appropriate.']
      ];
      return '<section class="page-hero"><div class="wrap hero-grid"><div class="stack">' + '<p class="eyebrow">About Star Therapy Solutions</p><h1>Individualized care. Meaningful skills.</h1><p class="lede">A pediatric speech-language and occupational therapy practice serving children and families in Miami Lakes and surrounding Miami-Dade communities.</p></div>' +
        '<figure class="hero-photo"><img src="../../Team_StartTherapy.JPEG" alt="The Star Therapy Solutions team pictured together at the practice" width="1080" height="1350"></figure></div></section>' +
        '<section class="alt"><div class="wrap stack-l">' + head('Our approach', 'How we work with your family.') + '<div class="grid2">' + approach.map(function (a) {
          return '<div class="card"><h3>' + a[0] + '</h3><p>' + a[1] + '</p></div>';
        }).join('') + '</div></div></section>' +
        '<section><div class="wrap founder"><div class="placeholder">[Photo of Victoria Perez, coming soon]</div><div class="stack"><p class="eyebrow">Meet our founder</p><h2>Victoria Perez, M.S., CCC-SLP</h2><p class="note">Founder and speech-language pathologist</p><p>Victoria Perez is a bilingual speech-language pathologist and the founder of Star Therapy Solutions. She is licensed to practice in Florida and has extensive experience providing pediatric speech and language services in school and daycare settings.</p><p>She specializes in the evaluation and treatment of speech and language delays, articulation disorders, social communication challenges, fluency and voice disorders, with an emphasis on individualized care and functional goals.</p></div></div></section>' +
        '<section class="alt"><div class="wrap stack-l">' + head('Our clinical team', 'Qualified pediatric therapy professionals.', 'Our practice works with licensed speech-language pathologists (SLPs), speech-language pathology assistants (SLPAs), licensed occupational therapists (OTs) and certified occupational therapy assistants (COTAs), each within their scope of practice and supervision requirements.') +
        '<p class="small">Individual team profiles will appear once approved names, roles and photos are supplied.</p></div></section>' + callSection();
    },
    contact: function () {
      return '<section class="page-hero"><div class="wrap grid2 top">' +
        '<div class="stack"><p class="eyebrow">Get started</p><h1>Let’s start the conversation.</h1><p class="lede">Have questions about speech or occupational therapy for your child? Give us a call to learn how we can help your family.</p>' +
        '<p class="phone-big">' + PHONE + '</p><div class="actions">' + callBtn('Call Star Therapy Solutions') + '</div>' +
        '<p class="small">Ask about English and Spanish language availability for your family.</p>' +
        '<p class="notice"><strong>Not for emergencies.</strong> If your child needs urgent care, call 911.</p></div>' +
        '<div class="stack">' +
        '<div class="card row">' + '<span class="plate loc">' + icon('pin') + '</span><div class="stack-s"><h3>Miami Lakes office</h3><address>6625 Miami Lakes Drive East, Suite 234<br>Miami Lakes, FL 33014</address><a class="text-link" href="' + MAPS + '" target="_blank" rel="noopener noreferrer">View on Google Maps ↗</a></div></div>' +
        '<div class="card row">' + '<span class="plate">' + icon('clock') + '</span><div class="stack-s"><h3>By appointment only</h3><p>[Office phone hours: owner to supply]</p></div></div>' +
        '<div class="card stack-s"><h3>Follow along</h3><a class="text-link" href="https://www.instagram.com/startherapysolutions/" target="_blank" rel="noopener noreferrer">Instagram · @startherapysolutions ↗</a><a class="text-link" href="https://www.linkedin.com/company/star-therapy-solutions/" target="_blank" rel="noopener noreferrer">LinkedIn · Star Therapy Solutions ↗</a></div>' +
        '</div></div></section>';
    }
  };

  function callSection() {
    return '<section class="cta"><div class="wrap stack center"><h2>Let’s start the conversation.</h2><p class="phone-big">' + PHONE + '</p>' + callBtn('Call Star Therapy Solutions') +
      '<p class="small">6625 Miami Lakes Drive East, Suite 234 · Miami Lakes, FL 33014 · By appointment only</p></div></section>';
  }

  var NAMES = { a: 'A · Warm', b: 'B · Gentle', c: 'C · Playful' };
  function chrome() {
    var proto = document.getElementById('proto');
    proto.innerHTML = '<div class="wrap"><strong>Design prototype · Direction ' + NAMES[DIR] + '</strong><span class="proto-links">' +
      ['a', 'b', 'c'].map(function (d) {
        return '<a data-dir-link="' + d + '" href="' + d + '.html"' + (d === DIR ? ' aria-current="true"' : '') + '>' + NAMES[d] + '</a>';
      }).join('') + '<a href="index.html">All directions</a></span></div>';
    document.getElementById('header').innerHTML = '<div class="wrap">' +
      '<a class="logo" href="#home"><img src="../../startherapy.svg" alt="Star Therapy Solutions home" width="1366" height="768"></a>' +
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mainnav">' + icon('menu') + '<span>Menu</span></button>' +
      '<nav class="main" id="mainnav" aria-label="Main">' + NAV.map(function (n) {
        return '<a href="#' + n[0] + '" data-page="' + n[0] + '" style="--cur:' + n[2] + '">' + n[1] + '</a>';
      }).join('') + '</nav>' + '<a class="btn call" href="' + TEL + '">' + icon('phone') + '<span>Call Now</span></a></div>';
    document.getElementById('footer').innerHTML = '<div class="wrap foot"><div class="stack-s"><img class="foot-logo" src="../../startherapy.svg" alt="" width="1366" height="768"><p>© Star Therapy Solutions · Miami Lakes, Florida</p></div>' +
      '<nav aria-label="Footer">' + NAV.map(function (n) { return '<a href="#' + n[0] + '">' + n[1] + '</a>'; }).join('') + '</nav>' +
      '<div class="stack-s"><p class="foot-phone">' + PHONE + '</p><p>6625 Miami Lakes Drive East, Suite 234<br>Miami Lakes, FL 33014</p></div></div>';
    document.getElementById('callbar').innerHTML = callBtn('Call Now') + '<a class="btn ghost" href="#locations">Directions</a>';
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.getElementById('mainnav');
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  function render() {
    var key = (location.hash || '#home').slice(1);
    if (!PAGES[key]) key = 'home';
    document.getElementById('app').innerHTML = PAGES[key]();
    document.querySelectorAll('nav.main a').forEach(function (a) {
      if (a.getAttribute('data-page') === key) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    document.querySelectorAll('[data-dir-link]').forEach(function (a) {
      a.setAttribute('href', a.getAttribute('data-dir-link') + '.html' + (key === 'home' ? '' : '#' + key));
    });
    document.title = 'Star Therapy · ' + NAMES[DIR];
    window.scrollTo(0, 0);
  }

  chrome();
  window.addEventListener('hashchange', render);
  render();
})();
