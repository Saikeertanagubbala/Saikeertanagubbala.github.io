(function () {
  // ---------- cover art for tracks without a screenshot ----------
  var art = {
    data:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#ff2d95"/>' +
      '<g fill="#161214"><rect x="14" y="58" width="11" height="28"/><rect x="31" y="40" width="11" height="46"/>' +
      '<rect x="48" y="50" width="11" height="36"/><rect x="65" y="24" width="11" height="62"/></g>' +
      '<polyline points="14,46 36,28 54,38 80,12" fill="none" stroke="#f7f1e8" stroke-width="3"/>' +
      '<circle cx="80" cy="12" r="4" fill="#ffd23f" stroke="#161214" stroke-width="2"/></svg>',
    ux:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#ffd23f"/>' +
      '<rect x="30" y="12" width="40" height="76" rx="7" fill="#f7f1e8" stroke="#161214" stroke-width="3"/>' +
      '<rect x="37" y="22" width="26" height="16" fill="#ff2d95"/><g fill="#161214">' +
      '<rect x="37" y="44" width="26" height="4"/><rect x="37" y="52" width="18" height="4"/>' +
      '<rect x="37" y="64" width="12" height="12" rx="2"/><rect x="51" y="64" width="12" height="12" rx="2"/></g>' +
      '<circle cx="78" cy="74" r="9" fill="#161214"/><path d="M74 74l3 3 6-6" stroke="#ffd23f" stroke-width="2.5" fill="none"/></svg>',
    web:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#161214"/>' +
      '<rect x="10" y="16" width="80" height="60" rx="5" fill="none" stroke="#f7f1e8" stroke-width="3"/>' +
      '<line x1="10" y1="27" x2="90" y2="27" stroke="#f7f1e8" stroke-width="3"/>' +
      '<g fill="#ff2d95"><circle cx="17" cy="21.5" r="2"/><circle cx="24" cy="21.5" r="2"/></g>' +
      '<text x="50" y="62" text-anchor="middle" font-family="Space Mono,monospace" font-weight="700" font-size="24" fill="#ff2d95">&lt;/&gt;</text>' +
      '<rect x="30" y="82" width="40" height="5" fill="#ffd23f"/></svg>',
    tools:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#ffdbe7"/>' +
      '<rect x="16" y="16" width="30" height="30" rx="7" fill="#161214"/><rect x="54" y="16" width="30" height="30" rx="15" fill="#ff2d95"/>' +
      '<rect x="16" y="54" width="30" height="30" rx="15" fill="#ffd23f" stroke="#161214" stroke-width="3"/>' +
      '<rect x="54" y="54" width="30" height="30" rx="7" fill="none" stroke="#161214" stroke-width="3"/>' +
      '<path d="M62 69h14M69 62v14" stroke="#161214" stroke-width="3"/></svg>',
    cells:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#161214"/>' +
      '<g fill="none" stroke="#ff2d95" stroke-width="2.5"><circle cx="28" cy="30" r="9"/><circle cx="62" cy="22" r="6"/>' +
      '<circle cx="74" cy="56" r="11"/><circle cx="40" cy="64" r="7"/><circle cx="20" cy="78" r="5"/><circle cx="58" cy="84" r="5"/></g>' +
      '<g fill="#ffd23f"><circle cx="28" cy="30" r="2.5"/><circle cx="74" cy="56" r="3"/><circle cx="40" cy="64" r="2"/></g>' +
      '<rect x="8" y="8" width="84" height="84" fill="none" stroke="#f7f1e8" stroke-width="1.5" stroke-dasharray="4 4"/></svg>'
  };

  // ---------- the playlist ----------
  var tracks = [
    {
      type: 'project', title: 'Supercomputer Efficiency', kind: 'Data Science', when: 'Aug – Dec 2025',
      img: '/assets/img/supercomputers.jpg',
      desc: 'An interactive Streamlit dashboard exploring energy-efficient computing: how supercomputer performance stacks up against power use, and what that means for global data center sustainability.',
      tags: ['Python', 'Streamlit', 'Data Viz'],
      links: [['GitHub', 'https://github.com/Saikeertanagubbala/sustainable_supercomputers']]
    },
    {
      type: 'skill', title: 'Data Science', kind: 'Skill', when: 'core toolkit',
      svg: art.data,
      desc: 'Turning messy datasets into models, insights, and visuals people can act on, from exploratory analysis to machine learning and statistical modeling.',
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'StatsModels', 'PyTorch', 'R / tidyverse', 'SQL', 'Tableau', 'Plotly', 'HPC & Bash'],
      links: []
    },
    {
      type: 'project', title: 'AI Assistance by Students', kind: 'Data Science', when: 'Aug – Dec 2025',
      img: '/assets/img/sat_vs_al.png',
      desc: 'A group project on how students across disciplines use AI, how satisfied they are with it, and whether they come back to it. Mostly exploratory analysis with some modeling, written up as a paper.',
      tags: ['EDA', 'Modeling', 'LaTeX'],
      links: [['Read the paper', '/assets/img/STT_Final_Report.pdf']]
    },
    {
      type: 'project', title: 'Chatbot Conversation Parsing', kind: 'Research Automation', when: 'Apr – Jul 2025',
      img: '/assets/img/Automation.svg',
      desc: 'A script that splits every transcript collected during participant sessions by who was typing, then turns it into a clean CSV. Built for the Department of Media and Information’s chatbot experiment.',
      tags: ['Python', 'Automation', 'CSV'],
      links: [['GitHub', 'https://github.com/Saikeertanagubbala/automation-script']]
    },
    {
      type: 'project', title: 'Athlead', kind: 'UX / UI', when: 'Mar 2025',
      img: '/assets/img/Athlead.png',
      desc: 'Wireframes for a mobile platform that simplifies college sports recruiting, connecting high school athletes directly with coaches alongside their performance stats and academic metrics.',
      tags: ['Figma', 'Wireframing', 'Mobile'],
      links: [['Figma', 'https://www.figma.com/proto/9IlDpUtA0psIEB6IyUyAqT/Athlead?node-id=0-1&t=3z7RUV6k1CIDFzRu-1']]
    },
    {
      type: 'skill', title: 'UX Research & Design', kind: 'Skill', when: 'core toolkit',
      svg: art.ux,
      desc: 'Designing around real people: talking to users, mapping what they need, and testing prototypes until they feel obvious.',
      tags: ['Figma', 'Miro', 'User Research', 'Survey Design', 'Personas', 'Wireframing', 'Prototyping', 'Usability Testing', 'Heuristic Evaluation'],
      links: []
    },
    {
      type: 'project', title: 'Popular Tech Online Courses', kind: 'Data Science', when: 'Jan – Apr 2025',
      img: '/assets/img/Coursera_plot.png',
      desc: 'Cleaned, analyzed and visualized Coursera course data, working through missing values and misclassified subdomains along the way, to surface which tech courses people actually take.',
      tags: ['Pandas', 'NumPy', 'Seaborn', 'Plotly'],
      links: [['GitHub', 'https://github.com/Saikeertanagubbala/online-course-analysis']]
    },
    {
      type: 'project', title: 'Degree Navigator', kind: 'Notion Template', when: 'Dec 2024',
      img: '/assets/img/notion.jpg',
      desc: 'An interactive college credit planner built in Notion. Track courses, credits and progress across four years for any major or minor. 700+ downloads and 30 five-star reviews.',
      tags: ['Notion', 'Product', '700+ downloads'],
      links: [['Get the template', 'https://kgubbala.notion.site/Degree-Navigator-15d01a3e6800800884f9e86cea0d125d?pvs=4']]
    },
    {
      type: 'project', title: 'SCC Grid Search Optimization', kind: 'Machine Learning', when: 'Aug – Dec 2024',
      svg: art.cells,
      desc: 'Worked with a team to optimize SimplyCellCounter, a tool for automated cell quantification. We used grid search to tune its parameters across a varied set of mouse brain images, improving accuracy across differences in tissue and image quality.',
      tags: ['Python', 'OpenCV', 'Grid Search'],
      links: []
    },
    {
      type: 'skill', title: 'Web Development', kind: 'Skill', when: 'core toolkit',
      svg: art.web,
      desc: 'Building the front end that puts data in front of people, from quick prototypes to deployed sites. This one included.',
      tags: ['HTML / CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Vue.js', 'Supabase', 'C / C++', 'Vercel', 'Netlify'],
      links: []
    },
    {
      type: 'project', title: 'Sustainable Technology Solutions', kind: 'UX Research', when: 'Sep – Dec 2024',
      img: '/assets/img/Sustainable.png',
      desc: 'Human-centered technology for rural farmers and fishermen in Bangladesh. Built personas, designed low-fidelity prototypes in Figma, and tested the mobile use case.',
      tags: ['Figma', 'Personas', 'Usability Testing'],
      links: [['Presentation', '/assets/img/Final%20Presentation.pdf']]
    },
    {
      type: 'project', title: 'Co-x3', kind: 'UX / Web', when: 'Aug 2024',
      img: '/assets/img/Cox3%20mockup.jpg',
      desc: 'Two pieces for a non-profit: polished product mockups (market research, product staging and several Figma options), then helping design and build their e-commerce site on Zoho Commerce with custom code for extra interactivity.',
      tags: ['Figma', 'Zoho Commerce', 'E-commerce'],
      links: [['Figma', 'https://www.figma.com/design/A51bcSYu5AVwh0SaaIO2Cl/Design-Ideas?node-id=0-1&t=SznbBGgSlKm2r5wX-1'], ['Website', 'https://shop.x3.family/']]
    },
    {
      type: 'project', title: 'Spartan One', kind: 'UX / UI', when: 'Aug – Oct 2023',
      img: '/assets/img/Access%20card.png',
      desc: 'Digitizing MSU student IDs in a mobile app with NFC/RFID campus access. Worked with university staff to gather the technical details, then built a Figma prototype with features like temporary keycard requests.',
      tags: ['Figma', 'Prototyping', 'Mobile'],
      links: [['Figma', 'https://www.figma.com/design/8BWMaJa0QovACrQak6Vur1/ESHP-491---Spartan-One?node-id=1-15&t=YznklpzxTpB6hhSE-1']]
    },
    {
      type: 'skill', title: 'The Essentials', kind: 'Skill', when: 'everyday tools',
      svg: art.tools,
      desc: 'The everyday tools that keep projects organized, versioned, and shareable.',
      tags: ['Git', 'Qualtrics', 'Notion', 'Canva', 'Google Workspace', 'Microsoft Office'],
      links: []
    }
  ];

  var playlistNames = {
    all: 'keertana’s greatest hits',
    project: 'projects: the album',
    skill: 'skills: deluxe edition'
  };

  var TRACK_MS = 12000;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var $ = function (id) { return document.getElementById(id); };
  var el = {
    cover: $('cover'), title: $('title'), kind: $('kind'), trackNo: $('trackNo'),
    fill: $('fill'), elapsed: $('elapsed'), when: $('when'), desc: $('desc'),
    chips: $('chips'), links: $('links'), queue: $('queue'), playlistName: $('playlistName'),
    play: $('play'), playLabel: $('playLabel'), onAir: $('onAir')
  };

  var list = tracks.slice();
  var index = 0;
  var playing = false;
  var startedAt = 0;
  var pausedAt = 0;
  var raf = null;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function artFor(t, alt) {
    return t.img ? '<img src="' + t.img + '" alt="' + esc(alt || '') + '">' : t.svg;
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function renderQueue() {
    el.queue.innerHTML = list.map(function (t, i) {
      return '<li><button data-i="' + i + '"' + (i === index ? ' class="current" aria-current="true"' : '') + '>' +
        '<span class="num">' + (i + 1) + '</span><span class="eq" aria-hidden="true"><i></i><i></i><i></i></span>' +
        '<span class="thumb">' + artFor(t, '') + '</span>' +
        '<span><span class="q-title">' + esc(t.title) + '</span><span class="q-kind">' + esc(t.kind) + '</span></span>' +
        '</button></li>';
    }).join('');
  }

  function show(i) {
    index = (i + list.length) % list.length;
    var t = list[index];

    el.cover.innerHTML = artFor(t, t.title);
    el.title.textContent = t.title;
    el.kind.textContent = t.kind;
    el.trackNo.textContent = pad(index + 1) + ' / ' + pad(list.length);
    el.when.textContent = t.when;
    el.desc.textContent = t.desc;
    el.chips.innerHTML = t.tags.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
    el.links.innerHTML = t.links.map(function (l) {
      return '<a class="pill" href="' + l[1] + '" target="_blank" rel="noopener">' + esc(l[0]) + ' ↗</a>';
    }).join('');

    if (!reduce) {
      [el.cover, el.title, el.desc].forEach(function (n) {
        n.classList.remove('swap', 'fade-in');
        void n.offsetWidth;
        n.classList.add(n === el.cover ? 'swap' : 'fade-in');
      });
    }

    renderQueue();
    resetClock();
  }

  // ---------- clock / autoplay ----------
  function resetClock() {
    pausedAt = 0;
    startedAt = performance.now();
    paint(0);
  }

  function paint(ms) {
    var pct = Math.min(ms / TRACK_MS, 1);
    el.fill.style.width = (pct * 100) + '%';
    el.elapsed.textContent = '0:' + pad(Math.floor(ms / 1000));
  }

  function tick(now) {
    var ms = now - startedAt;
    if (ms >= TRACK_MS) {
      show(index + 1);
    } else {
      paint(ms);
    }
    raf = requestAnimationFrame(tick);
  }

  function setPlaying(on) {
    playing = on;
    document.body.classList.toggle('playing-now', on);
    el.play.classList.toggle('playing', on);
    document.querySelector('.mini-play').classList.toggle('playing', on);
    document.querySelector('.mini-play').setAttribute('aria-label', on ? 'pause' : 'play');
    el.play.setAttribute('aria-label', on ? 'pause' : 'play');
    el.playLabel.textContent = on ? 'pause' : 'play';
    el.onAir.classList.toggle('live', on);
    if (on) {
      startedAt = performance.now() - pausedAt;
      raf = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(raf);
      pausedAt = performance.now() - startedAt;
    }
  }

  // ---------- controls ----------
  function press(btn) {
    btn.classList.add('pressed');
    setTimeout(function () { btn.classList.remove('pressed'); }, 120);
  }

  function next() { show(index + 1); }
  function prev() { show(index - 1); }
  function shuffle() {
    if (list.length < 2) return;
    var j;
    do { j = Math.floor(Math.random() * list.length); } while (j === index);
    var b = $('shuffle');
    b.classList.remove('spin'); void b.offsetWidth; b.classList.add('spin');
    show(j);
  }
  function toggle() { setPlaying(!playing); }

  $('next').addEventListener('click', next);
  $('prev').addEventListener('click', prev);
  $('shuffle').addEventListener('click', shuffle);
  el.play.addEventListener('click', toggle);

  document.querySelector('.mini-controls').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    ({ next: next, prev: prev, shuffle: shuffle, play: toggle })[b.getAttribute('data-act')]();
  });

  el.queue.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-i]');
    if (b) show(+b.getAttribute('data-i'));
  });

  document.querySelectorAll('.seg button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.seg button').forEach(function (o) {
        o.setAttribute('aria-checked', o === b ? 'true' : 'false');
      });
      var which = b.getAttribute('data-list');
      list = which === 'all' ? tracks.slice() : tracks.filter(function (t) { return t.type === which; });
      el.playlistName.textContent = playlistNames[which];
      show(0);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.target.closest('input, textarea, select, [contenteditable]') || e.metaKey || e.ctrlKey || e.altKey) return;
    var deck = document.getElementById('deck').getBoundingClientRect();
    var deckVisible = deck.bottom > 80 && deck.top < innerHeight;
    if (!deckVisible) return;
    if (e.key === 'ArrowRight') { next(); press($('next')); }
    else if (e.key === 'ArrowLeft') { prev(); press($('prev')); }
    else if (e.key === 's' || e.key === 'S') { shuffle(); press($('shuffle')); }
    else if (e.key === ' ' && !e.target.closest('button, a')) { e.preventDefault(); toggle(); press(el.play); }
  });

  // preload images so skipping feels instant
  tracks.forEach(function (t) { if (t.img) { var im = new Image(); im.src = t.img; } });

  show(0);
})();
