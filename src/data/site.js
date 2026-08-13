/**
 * Single source of truth for all site content.
 *
 * RULE: every value here must be traceable to data that already existed in this
 * repository before the redesign. Nothing is invented. Fields that could not be
 * verified are left out entirely rather than filled with a plausible guess.
 */

export const profile = {
  name: 'Surya Aji Andriantoro',
  shortName: 'Surya Aji',
  initials: 'SA',
  role: 'Web Developer, Cybersecurity & AI Engineer',
  headline: 'I build clean web applications and secure the systems behind them.',
  summary:
    'Informatics Engineering student at Darmajaya Institute of Informatics and Business, working across web development, offensive security, and applied AI.',
  location: 'Bandar Lampung, Indonesia',
  email: 'suryaaji237@gmail.com',
  phone: '+62 857-6704-3962',
  phoneHref: '+6285767043962',
  portrait: '/surya-dev.png',
};

export const about = {
  paragraphs: [
    'I am an Informatics Engineering student at Darmajaya Institute of Informatics and Business with a strong interest and experience in Cybersecurity, Web Development, Networking, and AI Engineering.',
    'With an active track record in national and provincial cybersecurity competitions, I am used to working independently and in teams. I pick up new technologies quickly and care about shipping work that holds up in production.',
  ],
  /**
   * Every figure below is counted from the data in this file — not estimated.
   */
  facts: [
    { label: 'Featured projects', value: String(3) },
    { label: 'Competition awards', value: String(4) },
    { label: 'Active since', value: '2022' },
  ],
};

export const skillGroups = [
  {
    id: 'security',
    title: 'Cybersecurity',
    note: 'Offensive security and reconnaissance.',
    items: ['Penetration Testing', 'Bug Hunting', 'OSINT'],
  },
  {
    id: 'web',
    title: 'Web Development',
    note: 'Front-end engineering and interface work.',
    items: ['React / Vite', 'JavaScript', 'HTML & CSS', 'Junior Web Developer (certified)'],
  },
  {
    id: 'ai',
    title: 'AI & Data',
    note: 'Applied models and data pipelines.',
    items: ['AI Engineering & Prompting', 'Data Processing', 'Sentiment Analysis'],
  },
  {
    id: 'network',
    title: 'Networking & Other',
    note: 'Infrastructure fundamentals and adjacent skills.',
    items: ['Junior Network Engineer (certified)', 'Web3 & Blockchain', 'Problem Solving'],
  },
];

export const projects = [
  {
    id: 'xyro',
    title: 'Xyro Terminal',
    category: 'Web-based crypto terminal',
    year: '2025 — Present',
    tagline: 'On-chain data and analytics for crypto communities in one place.',
    description:
      'A web-based terminal built to help crypto community members analyze large volumes of on-chain data in a single unified platform. It bridges the gap between raw blockchain data and actionable insight.',
    images: ['/xyro-1.png', '/xyro-2.png'],
    mediaLayout: 'stack',
    tags: ['React', 'Data Visualization', 'Web3', 'Analytics', 'Dashboard'],
    highlights: [
      'Performance dashboard and trading journal',
      'Altcoin to Bitcoin correlation analysis',
      'Real-time orderbook liquidity',
      'Whale and anomaly transaction tracking',
      'Integrated economic news feed',
    ],
  },
  {
    id: 'crypto-bot',
    title: 'Crypto Market Information Aggregator',
    category: 'Telegram bot · Python',
    year: '2024 — Present',
    tagline: 'Real-time market intelligence delivered straight to Telegram.',
    description:
      'An automated Telegram bot that aggregates and forwards real-time information from multiple channels, delivering on-chain data, macroeconomic updates, and large whale movements into a single unified feed for traders.',
    images: ['/telegram-bot-1.jpg', '/telegram-bot-2.png'],
    mediaLayout: 'side',
    tags: ['Python', 'Telegram API', 'Web3', 'Data Analysis', 'Automation'],
    highlights: [
      'Aggregates 10+ data sources in real time',
      'Tracks whale wallet movements on-chain',
      'Parses macroeconomic signals',
      'Deployed for a live trading community',
    ],
  },
  {
    id: 'tsunami-ml',
    title: 'Seismic Tsunami Predictor',
    category: 'Machine learning research',
    year: '2024',
    tagline: 'Predicting tsunami potential from seismic parameters.',
    description:
      'A data science research project analyzing over 128,000 rows of seismic earthquake data in Indonesia. The study compares Random Forest, K-Nearest Neighbour, and Support Vector Machine, and applies SMOTE to handle class imbalance when predicting tsunami likelihood.',
    images: ['/research-1.png', '/research-2.png'],
    mediaLayout: 'side',
    tags: ['Machine Learning', 'Python', 'Data Science', 'Random Forest', 'SVM', 'SMOTE'],
    highlights: [
      'Published in a Sinta 3 national journal',
      'Trained on more than 128,000 rows of seismic data',
      'Compared Random Forest, KNN, and SVM',
      'Handled imbalanced classes using SMOTE',
    ],
  },
];

/**
 * Cisco credential.
 *
 * VERIFIED from the repository: issuer, credential name, year, and the official
 * NetAcad issuance URL (which is publicly resolvable and unique to this
 * credential).
 *
 * DELIBERATELY ABSENT — no source in this repository provides them and the
 * NetAcad issuance page requires an authenticated session to read:
 *   - official badge artwork
 *   - exact issue date (only the year is recorded)
 *   - numeric credential / issuance ID beyond the URL token
 *   - skill tags attached to the badge by the issuer
 */
export const ciscoBadges = [
  {
    id: 'cisco-endpoint-security',
    name: 'Endpoint Security',
    issuer: 'Cisco Networking Academy',
    program: 'Cisco Networking Academy',
    year: '2026',
    verifyUrl:
      'https://www.netacad.com/certificates/issuanceId=e3d16ab7-3e5b-47dd-b3b7-fca5046bf828',
    verified: true,
  },
];

/**
 * Non-Cisco credentials. Kept separate so the Cisco section stays focused.
 * `verifyUrl: null` means the repository holds no verification link — the UI
 * renders those without a verify affordance instead of linking to "#".
 */
export const otherCredentials = [
  {
    id: 'komdigi-ai',
    name: 'AI Engineer for Millennials (Micro Skill)',
    issuer: 'Komdigi',
    program: 'Kementerian Komunikasi dan Digital',
    year: '2026',
    verifyUrl: null,
  },
  {
    id: 'anthropic-subagents',
    name: 'Introduction to Subagents',
    issuer: 'Anthropic',
    program: 'Powered by Claude',
    year: '2026',
    verifyUrl: null,
  },
];

export const awards = [
  {
    id: 'ncs-national-2nd',
    placement: '2nd place · National',
    event: 'Nusantara Cyber Security (NCS)',
    scope: 'National',
  },
  {
    id: 'ncs-best-performance',
    placement: 'Best performance',
    event: 'Nusantara Cyber Security (NCS)',
    scope: 'National',
  },
  {
    id: 'ncs-cluster-2nd',
    placement: '2nd place · Cluster',
    event: 'Nusantara Cyber Security (NCS)',
    scope: 'Cluster',
  },
  {
    id: 'ncs-best-team-lampung',
    placement: 'Best team · Lampung Province',
    event: 'Nusantara Cyber Security (NCS)',
    scope: 'Provincial',
  },
];

export const experience = [
  {
    id: 'bjb',
    role: 'IT Support (Internship)',
    company: 'Bank BJB Operations Bureau',
    period: '2025 — 2026',
    description:
      'Provided technical support for daily operations, handled hardware and network troubleshooting, and managed system installation and configuration.',
  },
  {
    id: 'freelance-dev',
    role: 'Project Developer (Independent)',
    company: 'Freelance',
    period: '2024 — Present',
    description:
      'Built an on-chain data aggregation platform and Telegram bots that automate and distribute on-chain and macroeconomic information using AI.',
  },
  {
    id: 'pentest',
    role: 'Penetration Tester & Bug Hunter',
    company: 'Freelance',
    period: '2022 — Present',
    description:
      'Discovered security vulnerabilities and evaluated systems through attack simulation, then compiled structured vulnerability reports.',
  },
  {
    id: 'trader',
    role: 'Crypto Trader & Market Analyst',
    company: 'Independent',
    period: '2022 — Present',
    description:
      'Traded on DEX and CEX platforms and analyzed markets using technical, macroeconomic, and sentiment analysis to inform AI-based trading bots.',
  },
];

export const navigation = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];
