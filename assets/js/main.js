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
      '<rect x="8" y="8" width="84" height="84" fill="none" stroke="#f7f1e8" stroke-width="1.5" stroke-dasharray="4 4"/></svg>',
    concert:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#161214"/>' +
      '<polygon points="22,0 30,0 52,74 6,74" fill="#ff2d95" opacity=".55"/><polygon points="70,0 78,0 94,74 46,74" fill="#ffd23f" opacity=".5"/>' +
      '<rect x="0" y="74" width="100" height="26" fill="#161214"/>' +
      '<g fill="#f7f1e8"><circle cx="12" cy="80" r="6"/><circle cx="30" cy="78" r="7"/><circle cx="50" cy="81" r="6"/><circle cx="70" cy="78" r="7"/><circle cx="88" cy="80" r="6"/>' +
      '<rect x="4" y="84" width="16" height="16" rx="5"/><rect x="21" y="83" width="18" height="17" rx="6"/><rect x="42" y="85" width="16" height="15" rx="5"/><rect x="61" y="83" width="18" height="17" rx="6"/><rect x="80" y="84" width="16" height="16" rx="5"/></g>' +
      '<rect x="64" y="56" width="5" height="18" fill="#f7f1e8" transform="rotate(-20 66 65)"/></svg>',
    detect:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#ffd23f"/>' +
      '<rect x="10" y="14" width="52" height="34" rx="8" fill="#f7f1e8" stroke="#161214" stroke-width="3"/><path d="M20 48l-4 12 14-12" fill="#f7f1e8" stroke="#161214" stroke-width="3" stroke-linejoin="round"/>' +
      '<rect x="38" y="52" width="52" height="34" rx="8" fill="#161214"/><path d="M80 86l4 10-14-10" fill="#161214"/>' +
      '<text x="36" y="37" text-anchor="middle" font-family="Space Mono,monospace" font-weight="700" font-size="14" fill="#161214">human</text>' +
      '<text x="64" y="75" text-anchor="middle" font-family="Space Mono,monospace" font-weight="700" font-size="16" fill="#ff2d95">AI?</text></svg>',
    genre:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#ffdbe7"/>' +
      '<g fill="#161214"><rect x="10" y="44" width="5" height="12"/><rect x="18" y="34" width="5" height="32"/><rect x="26" y="40" width="5" height="20"/><rect x="34" y="26" width="5" height="48"/><rect x="42" y="38" width="5" height="24"/><rect x="50" y="30" width="5" height="40"/><rect x="58" y="42" width="5" height="16"/></g>' +
      '<circle cx="80" cy="26" r="8" fill="#ff2d95" stroke="#161214" stroke-width="3"/><circle cx="74" cy="76" r="8" fill="#ffd23f" stroke="#161214" stroke-width="3"/><circle cx="88" cy="54" r="6" fill="#161214"/></svg>',
    sentiment:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#ff2d95"/>' +
      '<circle cx="50" cy="44" r="24" fill="#ffd23f" stroke="#161214" stroke-width="3"/><circle cx="42" cy="40" r="3" fill="#161214"/><circle cx="58" cy="40" r="3" fill="#161214"/>' +
      '<path d="M40 50q10 10 20 0" stroke="#161214" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<g fill="#f7f1e8" stroke="#161214" stroke-width="2"><path d="M22 80l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6-4.5-4 6-1z"/><path d="M41 80l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6-4.5-4 6-1z"/><path d="M60 80l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6-4.5-4 6-1z"/></g>' +
      '<path d="M79 80l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6-4.5-4 6-1z" fill="none" stroke="#161214" stroke-width="2"/></svg>',
    tissue:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#161214"/><g stroke="#161214" stroke-width="2">' +
      '<rect x="10" y="10" width="20" height="20" fill="#ffdbe7"/><rect x="30" y="10" width="20" height="20" fill="#ff2d95"/><rect x="50" y="10" width="20" height="20" fill="#ffdbe7"/><rect x="70" y="10" width="20" height="20" fill="#ffdbe7"/>' +
      '<rect x="10" y="30" width="20" height="20" fill="#ffdbe7"/><rect x="30" y="30" width="20" height="20" fill="#ff2d95"/><rect x="50" y="30" width="20" height="20" fill="#ff2d95"/><rect x="70" y="30" width="20" height="20" fill="#ffdbe7"/>' +
      '<rect x="10" y="50" width="20" height="20" fill="#ffdbe7"/><rect x="30" y="50" width="20" height="20" fill="#ffdbe7"/><rect x="50" y="50" width="20" height="20" fill="#ff2d95"/><rect x="70" y="50" width="20" height="20" fill="#ffdbe7"/>' +
      '<rect x="10" y="70" width="20" height="20" fill="#ffdbe7"/><rect x="30" y="70" width="20" height="20" fill="#ffdbe7"/><rect x="50" y="70" width="20" height="20" fill="#ffdbe7"/><rect x="70" y="70" width="20" height="20" fill="#ffdbe7"/></g>' +
      '<rect x="28" y="8" width="44" height="64" fill="none" stroke="#ffd23f" stroke-width="3" stroke-dasharray="5 3"/></svg>',
    llm:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#ffd23f"/>' +
      '<g stroke="#161214" stroke-width="2.5"><line x1="20" y1="25" x2="50" y2="50"/><line x1="20" y1="75" x2="50" y2="50"/><line x1="50" y1="50" x2="80" y2="25"/><line x1="50" y1="50" x2="80" y2="75"/><line x1="20" y1="25" x2="20" y2="75"/><line x1="80" y1="25" x2="80" y2="75"/></g>' +
      '<g stroke="#161214" stroke-width="3"><circle cx="20" cy="25" r="8" fill="#f7f1e8"/><circle cx="20" cy="75" r="8" fill="#f7f1e8"/><circle cx="80" cy="25" r="8" fill="#ff2d95"/><circle cx="80" cy="75" r="8" fill="#f7f1e8"/><circle cx="50" cy="50" r="13" fill="#161214"/></g>' +
      '<text x="50" y="55" text-anchor="middle" font-family="Space Mono,monospace" font-weight="700" font-size="11" fill="#ffd23f">AI</text></svg>',
    viz:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#ffdbe7"/>' +
      '<circle cx="38" cy="40" r="22" fill="none" stroke="#161214" stroke-width="12"/><path d="M38 18a22 22 0 0 1 21 28" fill="none" stroke="#ff2d95" stroke-width="12"/>' +
      '<g fill="#161214"><rect x="64" y="66" width="7" height="22"/><rect x="74" y="56" width="7" height="32"/><rect x="84" y="72" width="7" height="16"/></g>' +
      '<path d="M10 86l14-12 12 6 16-14" fill="none" stroke="#ff2d95" stroke-width="3"/></svg>',
    pipeline:
      '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#161214"/>' +
      '<g stroke="#f7f1e8" stroke-width="3"><rect x="8" y="38" width="20" height="24" rx="3" fill="#ff2d95"/><rect x="40" y="38" width="20" height="24" rx="3" fill="#ffd23f"/><rect x="72" y="38" width="20" height="24" rx="3" fill="#f7f1e8"/>' +
      '<line x1="28" y1="50" x2="40" y2="50"/><line x1="60" y1="50" x2="72" y2="50"/></g>' +
      '<path d="M18 30a32 32 0 0 1 64 0" fill="none" stroke="#ff2d95" stroke-width="3" stroke-dasharray="4 3"/><path d="M78 24l4 6-7 1" fill="none" stroke="#ff2d95" stroke-width="3"/>' +
      '<g fill="#f7f1e8" font-family="Space Mono,monospace" font-size="8" font-weight="700" text-anchor="middle"><text x="18" y="76">ETL</text><text x="50" y="76">CI</text><text x="82" y="76">CD</text></g></svg>'
  };

  // ---------- the playlist ----------
  // To add a project: copy one block below. Use `img` for a screenshot path, or `svg` for drawn cover art.
  var tracks = [
    {
      type: 'project', title: 'Concerts4Superfans', kind: 'Data Engineering', when: 'Python · SQL · CI/CD',
      svg: art.concert,
      desc: 'A concert recommender that ingests Spotify streaming history into a DuckDB ETL pipeline, engineering 8 behavioral features across 100,000+ streams and 2,700+ artists to score how deep a fan really is. Those scores meet live Spotify and Ticketmaster APIs to surface upcoming shows by location and price for a listener’s top 50 artists, and GitHub Actions sends a personalized email digest every week.',
      tags: ['Python', 'SQL', 'DuckDB', 'ETL', 'Spotify API', 'Ticketmaster API', 'GitHub Actions'],
      links: [['GitHub', 'https://github.com/Saikeertanagubbala/Concerts4Superfans']]
    },
    {
      type: 'skill', title: 'Machine Learning', kind: 'Skill', when: 'core toolkit',
      svg: art.data,
      desc: 'Turning messy datasets into models people can act on: supervised and unsupervised learning, feature engineering, hyperparameter tuning, time-series forecasting, and solid statistical inference underneath it all.',
      tags: ['Python', 'R', 'SQL', 'Scikit-learn', 'PyTorch', 'XGBoost', 'Pandas', 'NumPy', 'SciPy', 'Statsmodels', 'OpenCV'],
      links: []
    },
    {
      type: 'project', title: 'AI vs. Human Text Detection', kind: 'LLM Evaluation', when: 'LangChain · Ollama',
      svg: art.detect,
      desc: 'Can a model tell when a model wrote something? Evaluated four prompting strategies (zero-shot, few-shot, chain-of-thought and principle-based) on LLaMA-3.1-8B via Ollama, then benchmarked them against a fine-tuned RoBERTa classifier on accuracy and macro-F1. Fine-tuning won on structured text classification, and moving evaluation to Colab GPUs cut inference from 20+ hours to 1.5.',
      tags: ['LangChain', 'Ollama', 'LLaMA 3.1', 'RoBERTa', 'Prompt Engineering'],
      links: [['GitHub', 'https://github.com/yernarbakatay/Human-vs-AI-generated-Text-Detection']]
    },
    {
      type: 'project', title: 'Music Genre Classification', kind: 'Machine Learning', when: 'Ensembles · Tuning',
      svg: art.genre,
      desc: 'Used PCA on 1,000 GTZAN audio files to narrow 10 genres to 3 separable classes, with a rule-based decision tree as a 55% baseline. A tuned KNN reached 73%, then Random Forest, Gradient Boosting, AdaBoost and XGBoost were benchmarked on accuracy, precision, recall and F1, with XGBoost on top at 83%.',
      tags: ['Scikit-learn', 'XGBoost', 'PCA', 'Grid Search', 'Audio Features'],
      links: [['GitHub', 'https://github.com/archishabhatt/Music-Genre-Classification']]
    },
    {
      type: 'project', title: 'Customer Sentiment Analysis', kind: 'NLP', when: 'TF-IDF · BERT',
      svg: art.sentiment,
      desc: 'A binary sentiment classifier across 41K+ Amazon reviews using TF-IDF and three supervised models: SVM (91.71%), logistic regression (91.15%) and multinomial naive Bayes (89.96%), beating a rule-based baseline by 13%. The classical models were then benchmarked against a fine-tuned BERT model.',
      tags: ['NLP', 'Scikit-learn', 'SVM', 'BERT', 'TF-IDF'],
      links: [['GitHub', 'https://github.com/archishabhatt/customer_review_analysis']]
    },
    {
      type: 'skill', title: 'AI & LLMs', kind: 'Skill', when: 'core toolkit',
      svg: art.llm,
      desc: 'Putting language models to work responsibly: retrieval-augmented generation, prompt engineering, and careful evaluation of whether the model is actually right.',
      tags: ['NLP', 'NLTK', 'LangChain', 'Ollama', 'RAG', 'Prompt Engineering', 'LLM Evaluation', 'BERT / RoBERTa'],
      links: []
    },
    {
      type: 'project', title: 'Sustainable AI Infrastructure', kind: 'Data Science', when: 'Aug – Dec 2025',
      img: '/assets/img/supercomputers.jpg',
      desc: 'How green is the world’s AI compute? Compared power capacity, renewable adoption and data-center density across 191 countries in interactive Plotly charts, then fit a multiple linear regression on 1,000+ supercomputer records over 5 years to predict energy efficiency (R² = 0.83). Accelerator type and install year mattered more than raw power. All of it lives in a Streamlit dashboard.',
      tags: ['Python', 'Scikit-learn', 'Regression', 'Plotly', 'Streamlit'],
      links: [['Dashboard code', 'https://github.com/Saikeertanagubbala/sustainable_supercomputers'], ['Country analysis', 'https://github.com/Saikeertanagubbala/AI_datacenters_sustainability']]
    },
    {
      type: 'project', title: 'AI Assistance by Students', kind: 'Statistical Analysis', when: 'Aug – Dec 2025',
      img: '/assets/img/sat_vs_al.png',
      desc: 'What makes students satisfied with AI tools, and what brings them back? Investigated 9,551 student–AI sessions to see how usage differs across disciplines and tasks, combining exploratory analysis with predictive modeling, written up as a LaTeX research paper.',
      tags: ['Python', 'EDA', 'Modeling', 'LaTeX'],
      links: [['Read the paper', '/assets/img/STT_Final_Report.pdf'], ['GitHub', 'https://github.com/IuliaBunescu/student-ai-consumption']]
    },
    {
      type: 'project', title: 'Breast Cancer Image Classification', kind: 'Deep Learning', when: 'PyTorch',
      svg: art.tissue,
      desc: 'Part of a team comparing feedforward (FNN) and convolutional (CNN) neural networks in PyTorch to automate invasive ductal carcinoma detection on an imbalanced tissue-image dataset. The compact FNN reached 80% accuracy, a good fit for rapid diagnostics in resource-limited settings.',
      tags: ['PyTorch', 'CNN', 'Image Classification', 'Imbalanced Data'],
      links: []
    },
    {
      type: 'skill', title: 'Data Viz & BI', kind: 'Skill', when: 'core toolkit',
      svg: art.viz,
      desc: 'Making the answer obvious at a glance, from quick pivot tables to interactive dashboards that refresh themselves.',
      tags: ['Tableau', 'Power BI', 'Excel & Power Query', 'Matplotlib', 'Seaborn', 'Plotly', 'Streamlit', 'R Shiny'],
      links: []
    },
    {
      type: 'project', title: 'Coursera Market Analysis', kind: 'Data Visualization', when: 'Jan – Apr 2025',
      img: '/assets/img/Coursera_plot.png',
      desc: 'Cleaned and reclassified 900+ Coursera course records into 8 tech subdomains with Pandas, then compared engagement against availability to measure supply–demand gaps. The final poster’s multivariate visuals point to HealthTech and FinTech as undersaturated entry points for learners.',
      tags: ['Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
      links: [['GitHub', 'https://github.com/Saikeertanagubbala/online-course-analysis']]
    },
    {
      type: 'project', title: 'SimplyCellCounter ML Enhancement', kind: 'Image Processing', when: 'Aug – Dec 2024',
      svg: art.cells,
      desc: 'Extended an OpenCV cell-counting algorithm with grid-search tuning across 5 parameters and batch cross-validation on 150 mouse brain-tissue images, replacing manual calibration.',
      tags: ['Python', 'OpenCV', 'Scikit-learn', 'NumPy', 'Grid Search'],
      links: []
    },
    {
      type: 'skill', title: 'Data Engineering & DevOps', kind: 'Skill', when: 'core toolkit',
      svg: art.pipeline,
      desc: 'Getting data where it needs to go, and keeping code tested and shipping on its own.',
      tags: ['Git', 'GitHub Actions', 'GitLab CI/CD', 'DuckDB', 'Databricks', 'Docker', 'Kubernetes', 'Azure', 'HPCC', 'Bash'],
      links: []
    },
    {
      type: 'project', title: 'Chatbot Conversation Parsing', kind: 'Research Automation', when: 'Apr – Jul 2025',
      img: '/assets/img/Automation.svg',
      desc: 'Parsed 140+ telehealth research session transcripts from raw text into a structured CSV, split by who was typing, creating an analysis-ready dataset for text modeling. Built for the Department of Media and Information’s chatbot experiment.',
      tags: ['Python', 'Automation', 'Text Data'],
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
      tags: ['Figma', 'Miro', 'User Research', 'Survey Design', 'Qualtrics', 'Personas', 'Prototyping', 'Usability Testing'],
      links: []
    },
    {
      type: 'project', title: 'Degree Navigator', kind: 'Notion Template', when: 'Dec 2024',
      img: '/assets/img/notion.jpg',
      desc: 'An interactive college credit planner built in Notion. Track courses, credits and progress across four years for any major or minor. 700+ downloads and 30 five-star reviews.',
      tags: ['Notion', 'Product', '700+ downloads'],
      links: [['Get the template', 'https://kgubbala.notion.site/Degree-Navigator-15d01a3e6800800884f9e86cea0d125d?pvs=4']]
    },
    {
      type: 'project', title: 'Sustainable Technology Solutions', kind: 'UX Research', when: 'Sep – Dec 2024',
      img: '/assets/img/Sustainable.png',
      desc: 'Human-centered technology for rural farmers and fishermen in Bangladesh. Built personas, designed low-fidelity prototypes in Figma, and tested the mobile use case.',
      tags: ['Figma', 'Personas', 'Usability Testing'],
      links: [['Presentation', '/assets/img/Final%20Presentation.pdf']]
    },
    {
      type: 'skill', title: 'Web Development', kind: 'Skill', when: 'core toolkit',
      svg: art.web,
      desc: 'Building the front end that puts data in front of people, from quick prototypes to deployed sites. This one included.',
      tags: ['HTML / CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Supabase', 'C / C++', 'Power Apps'],
      links: []
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
