(function () {
  // ---------- the playlist ----------
  // To add a project: copy one block below. Add `img: '/assets/img/your-logo.png'` to give it a cover;
  // tracks without `img` show a plain title card until you add one.
  var tracks = [
    {
      title: 'Concerts4Superfans', kind: 'Data Engineering',
      desc: 'A concert recommender that ingests Spotify streaming history into a DuckDB ETL pipeline, engineering 8 behavioral features across 100,000+ streams and 2,700+ artists to score how deep a fan really is. Those scores meet live Spotify and Ticketmaster APIs to surface upcoming shows by location and price for a listener’s top 50 artists, and GitHub Actions sends a personalized email digest every week.',
      tags: ['Python', 'SQL', 'DuckDB', 'ETL', 'Spotify API', 'Ticketmaster API', 'GitHub Actions'],
      links: [['GitHub', 'https://github.com/Saikeertanagubbala/Concerts4Superfans']]
    },
    {
      title: 'AI vs. Human Text Detection', kind: 'LLM Evaluation',
      desc: 'Can a model tell when a model wrote something? Evaluated four prompting strategies (zero-shot, few-shot, chain-of-thought and principle-based) on LLaMA-3.1-8B via Ollama, then benchmarked them against a fine-tuned RoBERTa classifier on accuracy and macro-F1. Fine-tuning won on structured text classification, and moving evaluation to Colab GPUs cut inference from 20+ hours to 1.5.',
      tags: ['LangChain', 'Ollama', 'LLaMA 3.1', 'RoBERTa', 'Prompt Engineering'],
      links: [['GitHub', 'https://github.com/yernarbakatay/Human-vs-AI-generated-Text-Detection']]
    },
    {
      title: 'Music Genre Classification', kind: 'Machine Learning',
      desc: 'Used PCA on 1,000 GTZAN audio files to narrow 10 genres to 3 separable classes, with a rule-based decision tree as a 55% baseline. A tuned KNN reached 73%, then Random Forest, Gradient Boosting, AdaBoost and XGBoost were benchmarked on accuracy, precision, recall and F1, with XGBoost on top at 83%.',
      tags: ['Scikit-learn', 'XGBoost', 'PCA', 'Grid Search', 'Audio Features'],
      links: [['GitHub', 'https://github.com/archishabhatt/Music-Genre-Classification']]
    },
    {
      title: 'Customer Sentiment Analysis', kind: 'NLP',
      desc: 'A binary sentiment classifier across 41K+ Amazon reviews using TF-IDF and three supervised models: SVM (91.71%), logistic regression (91.15%) and multinomial naive Bayes (89.96%), beating a rule-based baseline by 13%. The classical models were then benchmarked against a fine-tuned BERT model.',
      tags: ['NLP', 'Scikit-learn', 'SVM', 'BERT', 'TF-IDF'],
      links: [['GitHub', 'https://github.com/archishabhatt/customer_review_analysis']]
    },
    {
      title: 'Sustainable AI Infrastructure', kind: 'Data Science',
      img: '/assets/img/supercomputers.jpg',
      desc: 'How green is the world’s AI compute? Compared power capacity, renewable adoption and data-center density across 191 countries in interactive Plotly charts, then fit a multiple linear regression on 1,000+ supercomputer records over 5 years to predict energy efficiency (R² = 0.83). Accelerator type and install year mattered more than raw power. All of it lives in a Streamlit dashboard.',
      tags: ['Python', 'Scikit-learn', 'Regression', 'Plotly', 'Streamlit'],
      links: [['Dashboard code', 'https://github.com/Saikeertanagubbala/sustainable_supercomputers'], ['Country analysis', 'https://github.com/Saikeertanagubbala/AI_datacenters_sustainability']]
    },
    {
      title: 'AI Assistance by Students', kind: 'Statistical Analysis',
      img: '/assets/img/sat_vs_al.png',
      desc: 'What makes students satisfied with AI tools, and what brings them back? Investigated 9,551 student–AI sessions to see how usage differs across disciplines and tasks, combining exploratory analysis with predictive modeling, written up as a LaTeX research paper.',
      tags: ['Python', 'EDA', 'Modeling', 'LaTeX'],
      links: [['Read the paper', '/assets/img/STT_Final_Report.pdf'], ['GitHub', 'https://github.com/IuliaBunescu/student-ai-consumption']]
    },
    {
      title: 'Breast Cancer Image Classification', kind: 'Deep Learning',
      desc: 'Part of a team comparing feedforward (FNN) and convolutional (CNN) neural networks in PyTorch to automate invasive ductal carcinoma detection on an imbalanced tissue-image dataset. The compact FNN reached 80% accuracy, a good fit for rapid diagnostics in resource-limited settings.',
      tags: ['PyTorch', 'CNN', 'Image Classification', 'Imbalanced Data'],
      links: []
    },
    {
      title: 'Coursera Market Analysis', kind: 'Data Visualization',
      img: '/assets/img/Coursera_plot.png',
      desc: 'Cleaned and reclassified 900+ Coursera course records into 8 tech subdomains with Pandas, then compared engagement against availability to measure supply–demand gaps. The final poster’s multivariate visuals point to HealthTech and FinTech as undersaturated entry points for learners.',
      tags: ['Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
      links: [['GitHub', 'https://github.com/Saikeertanagubbala/online-course-analysis']]
    },
    {
      title: 'SimplyCellCounter ML Enhancement', kind: 'Image Processing',
      desc: 'Extended an OpenCV cell-counting algorithm with grid-search tuning across 5 parameters and batch cross-validation on 150 mouse brain-tissue images, replacing manual calibration.',
      tags: ['Python', 'OpenCV', 'Scikit-learn', 'NumPy', 'Grid Search'],
      links: []
    },
    {
      title: 'Chatbot Conversation Parsing', kind: 'Research Automation',
      img: '/assets/img/Automation.svg',
      desc: 'Parsed 140+ telehealth research session transcripts from raw text into a structured CSV, split by who was typing, creating an analysis-ready dataset for text modeling. Built for the Department of Media and Information’s chatbot experiment.',
      tags: ['Python', 'Automation', 'Text Data'],
      links: [['GitHub', 'https://github.com/Saikeertanagubbala/automation-script']]
    },
    {
      title: 'Athlead', kind: 'UX / UI',
      img: '/assets/img/Athlead.png',
      desc: 'Wireframes for a mobile platform that simplifies college sports recruiting, connecting high school athletes directly with coaches alongside their performance stats and academic metrics.',
      tags: ['Figma', 'Wireframing', 'Mobile'],
      links: [['Figma', 'https://www.figma.com/proto/9IlDpUtA0psIEB6IyUyAqT/Athlead?node-id=0-1&t=3z7RUV6k1CIDFzRu-1']]
    },
    {
      title: 'Degree Navigator', kind: 'Notion Template',
      img: '/assets/img/notion.jpg',
      desc: 'An interactive college credit planner built in Notion. Track courses, credits and progress across four years for any major or minor. 700+ downloads and 30 five-star reviews.',
      tags: ['Notion', 'Product', '700+ downloads'],
      links: [['Get the template', 'https://kgubbala.notion.site/Degree-Navigator-15d01a3e6800800884f9e86cea0d125d?pvs=4']]
    },
    {
      title: 'Sustainable Technology Solutions', kind: 'UX Research',
      img: '/assets/img/Sustainable.png',
      desc: 'Human-centered technology for rural farmers and fishermen in Bangladesh. Built personas, designed low-fidelity prototypes in Figma, and tested the mobile use case.',
      tags: ['Figma', 'Personas', 'Usability Testing'],
      links: [['Presentation', '/assets/img/Final%20Presentation.pdf']]
    },
    {
      title: 'Co-x3', kind: 'UX / Web',
      img: '/assets/img/Cox3%20mockup.jpg',
      desc: 'Two pieces for a non-profit: polished product mockups (market research, product staging and several Figma options), then helping design and build their e-commerce site on Zoho Commerce with custom code for extra interactivity.',
      tags: ['Figma', 'Zoho Commerce', 'E-commerce'],
      links: [['Figma', 'https://www.figma.com/design/A51bcSYu5AVwh0SaaIO2Cl/Design-Ideas?node-id=0-1&t=SznbBGgSlKm2r5wX-1'], ['Website', 'https://shop.x3.family/']]
    },
    {
      title: 'Spartan One', kind: 'UX / UI',
      img: '/assets/img/Access%20card.png',
      desc: 'Digitizing MSU student IDs in a mobile app with NFC/RFID campus access. Worked with university staff to gather the technical details, then built a Figma prototype with features like temporary keycard requests.',
      tags: ['Figma', 'Prototyping', 'Mobile'],
      links: [['Figma', 'https://www.figma.com/design/8BWMaJa0QovACrQak6Vur1/ESHP-491---Spartan-One?node-id=1-15&t=YznklpzxTpB6hhSE-1']]
    }
  ];

  // ---------- skills (shown in the panel next to the player) ----------
  var skills = [
    ['machine learning', ['Python', 'R', 'SQL', 'Scikit-learn', 'PyTorch', 'XGBoost', 'Pandas', 'NumPy', 'SciPy', 'Statsmodels', 'OpenCV']],
    ['ai & llms', ['NLP', 'NLTK', 'LangChain', 'Ollama', 'RAG', 'Prompt Engineering', 'LLM Evaluation', 'BERT / RoBERTa']],
    ['data viz & bi', ['Tableau', 'Power BI', 'Excel & Power Query', 'Matplotlib', 'Seaborn', 'Plotly', 'Streamlit', 'R Shiny']],
    ['data engineering & devops', ['Git', 'GitHub Actions', 'GitLab CI/CD', 'DuckDB', 'Databricks', 'Docker', 'Kubernetes', 'Azure', 'HPCC', 'Bash']],
    ['ux research & design', ['Figma', 'Miro', 'User Research', 'Survey Design', 'Qualtrics', 'Personas', 'Prototyping', 'Usability Testing']],
    ['web development', ['HTML / CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Supabase', 'C / C++', 'Power Apps']]
  ];

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

  var tones = ['pink', 'butter', 'blush', 'ink'];

  function initials(title) {
    return title.replace(/[^A-Za-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean)
      .slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
  }

  // a screenshot if there is one, otherwise a plain title card
  function artFor(t, alt, small) {
    if (t.img) return '<img src="' + t.img + '" alt="' + esc(alt || '') + '">';
    var tone = tones[tracks.indexOf(t) % tones.length];
    return '<span class="ph ' + tone + '" aria-hidden="true">' +
      (small ? initials(t.title) : '<b>' + esc(t.title) + '</b>') + '</span>';
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function renderQueue() {
    el.queue.innerHTML = list.map(function (t, i) {
      return '<li><button data-i="' + i + '"' + (i === index ? ' class="current" aria-current="true"' : '') + '>' +
        '<span class="num">' + (i + 1) + '</span><span class="eq" aria-hidden="true"><i></i><i></i><i></i></span>' +
        '<span class="thumb">' + artFor(t, '', true) + '</span>' +
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
    el.when.textContent = '-0:' + pad(Math.ceil((TRACK_MS - Math.min(ms, TRACK_MS)) / 1000));
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

  // ---------- skill filter ----------
  function uses(t, skill) {
    var tags = t.tags.map(function (x) { return x.toLowerCase(); });
    return skill.split(' / ').some(function (n) {
      var k = n.toLowerCase();
      if (tags.indexOf(k) > -1) return true;
      if (k.length < 3) return false;
      var safe = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp('(^|[^a-z0-9])' + safe + '([^a-z0-9]|$)', 'i').test(t.desc);
    });
  }

  var activeSkill = null;
  var skillsBox = $('skills');
  var clearBtn = $('skillsClear');

  var openGroup = 0;

  function renderSkills() {
    skillsBox.innerHTML = skills.map(function (g, gi) {
      return '<details class="s-group" name="skill-groups"' + (gi === openGroup ? ' open' : '') + ' data-g="' + gi + '">' +
        '<summary class="s-name">' + esc(g[0]) + '</summary><div class="s-chips">' +
        g[1].map(function (sk) {
          var count = tracks.filter(function (t) { return uses(t, sk); }).length;
          if (!count) return '<span class="s-off">' + esc(sk) + '</span>';
          var on = sk === activeSkill;
          return '<button data-skill="' + esc(sk) + '" aria-pressed="' + on + '"' + (on ? ' class="on"' : '') +
            ' aria-label="' + esc(sk) + ', ' + count + ' project' + (count > 1 ? 's' : '') + '">' +
            esc(sk) + '<sup>' + count + '</sup></button>';
        }).join('') + '</div></details>';
    }).join('');
  }

  skillsBox.addEventListener('toggle', function (e) {
    if (e.target.open) {
      openGroup = +e.target.getAttribute('data-g');
      skillsBox.querySelectorAll('details[open]').forEach(function (d) { if (d !== e.target) d.open = false; });
    }
  }, true);

  function filterBy(skill) {
    activeSkill = skill === activeSkill ? null : skill;
    list = activeSkill ? tracks.filter(function (t) { return uses(t, activeSkill); }) : tracks.slice();
    el.playlistName.textContent = activeSkill ? 'projects using ' + activeSkill : 'all projects';
    clearBtn.hidden = !activeSkill;
    renderSkills();
    show(0);
  }

  skillsBox.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-skill]');
    if (b) filterBy(b.getAttribute('data-skill'));
  });
  clearBtn.addEventListener('click', function () { filterBy(activeSkill); });

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

  renderSkills();
  show(0);
})();
