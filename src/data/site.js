/**
 * Single source of truth for all site content.
 *
 * SOURCING RULE: every value here is traceable to a real source.
 *   1. Content that already existed in this repository before the redesign.
 *   2. The Cisco badge IDs and Komdigi verification links supplied by the owner.
 *   3. Badge names, issue dates, issuers and artwork pulled from Credly's public
 *      OpenBadges v2 API using those badge IDs (api.credly.com/v1/obi/v2).
 *
 * Nothing is invented. Fields that cannot be verified are omitted rather than
 * filled with a plausible guess.
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
  // Display + dial format taken from the pre-redesign Footer component.
  phone: '+62 857-6704-3962',
  phoneHref: '+6285767043962',
  // Same number in wa.me form: country code, no plus, no separators.
  whatsapp: '6285767043962',
  whatsappMessage: 'Hi Surya, I found your portfolio and would like to talk about a project.',
  portrait: '/surya-dev.png',
};

export const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
  profile.whatsappMessage,
)}`;

export const about = {
  /** The intro sentence lives here once and is rendered in exactly one place. */
  intro:
    'I am an Informatics Engineering student at Darmajaya Institute of Informatics and Business with a strong interest and experience in Cybersecurity, Web Development, Networking, and AI Engineering.',
  paragraphs: [
    'With an active track record in national and provincial cybersecurity competitions, I am used to working independently and in teams. I pick up new technologies quickly and care about shipping work that holds up in production.',
    'Most of my time goes to three things: building web interfaces that stay fast under real data, testing systems the way an attacker would, and wiring AI into workflows where it removes actual manual effort.',
  ],
  /** Every figure below is counted from the data in this file, not estimated. */
  facts: [
    { label: 'Featured projects', value: '3' },
    { label: 'Cisco badges', value: '11' },
    { label: 'Komdigi certificates', value: '14' },
    { label: 'Competition awards', value: '4' },
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
    year: '2025 to present',
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
    category: 'Telegram bot, Python',
    year: '2024 to present',
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
 * Cisco digital badges, issued through Cisco Networking Academy and hosted on
 * Credly.
 *
 * `id` values are the Credly share-badge IDs supplied by the owner. Everything
 * else (canonical name, issue date, issuer, artwork) was read back from
 * Credly's public OpenBadges v2 API for that exact ID, so the card content and
 * the verification target cannot drift apart.
 *
 * `artwork` points at local WebP copies of the official Credly badge images so
 * the marquee does not depend on a third-party image host at render time.
 */
export const ciscoBadges = [
  {
    id: 'b66ee586-4002-4ad7-80ef-27b14f536d11',
    name: 'Cybersecurity Defense Analyst Career Path',
    kind: 'career-path',
    issued: '2026-08-12',
    artwork: 'cybersecurity-defense-analyst-career-path',
  },
  {
    id: '1e874f91-1191-4f52-a6cf-9d540a795583',
    name: 'Cyber Threat Management',
    kind: 'course',
    issued: '2026-08-09',
    artwork: 'cyber-threat-management',
  },
  {
    id: '4484e709-49f3-4877-b307-225def8d5a6d',
    name: 'Endpoint Security',
    kind: 'course',
    issued: '2026-08-08',
    artwork: 'endpoint-security',
  },
  {
    id: '20219617-efc9-461a-bea5-b08ebd0ccb33',
    name: 'Ethical Hacker',
    kind: 'course',
    issued: '2026-08-08',
    artwork: 'ethical-hacker',
  },
  {
    id: 'bf4ea6d5-a0f6-4027-a81e-188f59ed9b1d',
    name: 'Junior Cybersecurity Analyst Career Path',
    kind: 'career-path',
    issued: '2026-08-12',
    artwork: 'junior-cybersecurity-analyst-career-path',
  },
  {
    id: '878f4647-dbf5-4602-9f99-84c7646bda16',
    name: 'Network Defense',
    kind: 'course',
    issued: '2026-08-08',
    artwork: 'network-defense',
  },
  {
    id: 'dc9cddd1-7466-45b4-a475-b0ffed7403f7',
    name: 'Networking Basics',
    kind: 'course',
    issued: '2026-08-12',
    artwork: 'networking-basics',
  },
  {
    id: '613f6768-d58e-4238-acd6-fedb1b207b08',
    name: 'Networking Devices and Initial Configuration',
    kind: 'course',
    issued: '2026-08-12',
    artwork: 'networking-devices-and-initial-configuration',
  },
  {
    id: '430a16cf-179d-4e91-ae11-1461f62f0e65',
    name: 'Network Support and Security',
    kind: 'course',
    issued: '2026-08-13',
    artwork: 'network-support-and-security',
  },
  {
    id: 'e4da810f-fc15-42e0-8381-17168ad8e0d9',
    name: 'Introduction to Cybersecurity',
    kind: 'course',
    issued: '2026-08-07',
    artwork: 'introduction-to-cybersecurity',
  },
  {
    id: '9cff6edb-a814-43ea-9fa8-496dbcb11e00',
    name: 'Introduction to Modern AI',
    kind: 'course',
    issued: '2026-08-09',
    artwork: 'introduction-to-modern-ai',
  },
];

export const credlyBadgeUrl = (id) => `https://www.credly.com/badges/${id}`;

/**
 * Komdigi (Kementerian Komunikasi dan Digital) certificates.
 * Names and verification links are exactly as supplied by the owner. The
 * verification page is opened in a new tab, never embedded in an iframe.
 */
export const komdigiCertificates = [
  {
    id: 'information-technology',
    name: 'Information Technology',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299892850-4620',
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299864850-19509',
  },
  {
    id: 'programming-concepts',
    name: 'Programming Concepts',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299793850-14930',
  },
  {
    id: 'ai-social-media-content',
    name: 'AI-Driven Social Media Content Production',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299794850-15953',
  },
  {
    id: 'ai-product-development',
    name: 'AI Product Development Aspects',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299814850-7444',
  },
  {
    id: 'ai-copywriting',
    name: 'AI Copywriting for Digital Advertising',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299829850-12767',
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=22910029850-24484',
  },
  {
    id: 'ethical-hacking-fundamentals',
    name: 'Ethical Hacking Fundamentals',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=22910030850-19247',
  },
  {
    id: 'data-analytics-career-insights',
    name: 'Data Analytics Career Insights',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299746850-27718',
  },
  {
    id: 'intro-data-science',
    name: 'Introduction to Data Science and Its Industry Applications',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299818850-39960',
  },
  {
    id: 'isms',
    name: 'Information Security Management System',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299727990-9721',
  },
  {
    id: 'cybersecurity-fundamentals',
    name: 'Cybersecurity Fundamentals',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299734850-28908',
  },
  {
    id: 'infosec',
    name: 'InfoSec',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299750990-6696',
  },
  {
    id: 'virtual-lab-linux',
    name: 'Virtual Lab Setup & Linux Fundamentals',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299809850-4549',
  },
];

/**
 * Anthropic certificates. Intentionally empty: the owner will supply the
 * certificate files and watermark later. The Credentials section reads this
 * array and renders a reserved slot when it is empty, so adding entries later
 * needs no layout or component changes.
 *
 * Expected shape when populated:
 *   { id, name, issued?: 'YYYY-MM-DD', verifyUrl?: string, image?: string }
 */
export const anthropicCertificates = [];

export const awards = [
  {
    id: 'ncs-national-2nd',
    placement: '2nd place, National',
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
    placement: '2nd place, Cluster',
    event: 'Nusantara Cyber Security (NCS)',
    scope: 'Cluster',
  },
  {
    id: 'ncs-best-team-lampung',
    placement: 'Best team, Lampung Province',
    event: 'Nusantara Cyber Security (NCS)',
    scope: 'Provincial',
  },
];

export const experience = [
  {
    id: 'bjb',
    role: 'IT Support (Internship)',
    company: 'Bank BJB Operations Bureau',
    period: '2025 to 2026',
    description:
      'Provided technical support for daily operations, handled hardware and network troubleshooting, and managed system installation and configuration.',
  },
  {
    id: 'freelance-dev',
    role: 'Project Developer (Independent)',
    company: 'Freelance',
    period: '2024 to present',
    description:
      'Built an on-chain data aggregation platform and Telegram bots that automate and distribute on-chain and macroeconomic information using AI.',
  },
  {
    id: 'pentest',
    role: 'Penetration Tester & Bug Hunter',
    company: 'Freelance',
    period: '2022 to present',
    description:
      'Discovered security vulnerabilities and evaluated systems through attack simulation, then compiled structured vulnerability reports.',
  },
  {
    id: 'trader',
    role: 'Crypto Trader & Market Analyst',
    company: 'Independent',
    period: '2022 to present',
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
