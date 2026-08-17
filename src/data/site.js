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
  headline:
    'Bachelor of Informatics Engineering — early-career IT professional specializing in Web Development, Cybersecurity, AI engineering & automation, and Networking.',
  summary:
    'Informatics Engineering graduate from Darmajaya Institute of Informatics and Business, working across web development, offensive security, and applied AI.',
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
    'Bachelor of Informatics Engineering with hands-on experience in Cybersecurity, Web Development, Networking, and AI Engineering.',
  paragraphs: [
    'I work across the full stack of modern IT: building web interfaces that stay fast under real data, defending and testing systems the way an attacker would, and wiring AI into workflows that remove actual manual effort.',
    'With an active track record in national and provincial cybersecurity competitions, I am used to working independently and in teams. I pick up new technologies quickly and care about shipping work that holds up in production.',
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
    id: 'membangun-lab-virtual-dasar-linux',
    name: 'Membangun Lab Virtual & Dasar Linux',
    image: '/certificates/komdigi/images/membangun-lab-virtual-dasar-linux.webp',
    pdf: '/certificates/komdigi/pdf/membangun-lab-virtual-dasar-linux.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299809850-4549',
  },
  {
    id: 'seberapa-aman-informasi-anda-dari-ancaman-digital',
    name: 'Seberapa Aman Informasi Anda dari Ancaman Digital',
    image: '/certificates/komdigi/images/seberapa-aman-informasi-anda-dari-ancaman-digital.webp',
    pdf: '/certificates/komdigi/pdf/seberapa-aman-informasi-anda-dari-ancaman-digital.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299750990-6696',
  },
  {
    id: 'introduction-to-cyber-security-and-career-awareness',
    name: 'Introduction to Cyber Security and Career Awareness',
    image: '/certificates/komdigi/images/introduction-to-cyber-security-and-career-awareness.webp',
    pdf: '/certificates/komdigi/pdf/introduction-to-cyber-security-and-career-awareness.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299734850-28908',
  },
  {
    id: 'pengenalan-data-science-dan-pemanfaatannya-di-berbagai-sektor',
    name: 'Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor',
    image: '/certificates/komdigi/images/pengenalan-data-science-dan-pemanfaatannya-di-berbagai-sektor.webp',
    pdf: '/certificates/komdigi/pdf/pengenalan-data-science-dan-pemanfaatannya-di-berbagai-sektor.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299818850-39960',
  },
  {
    id: 'ancaman-pembobolan-akun-pribadi-dan-pencegahannya',
    name: 'Ancaman Pembobolan Akun Pribadi dan Pencegahannya',
    image: '/certificates/komdigi/images/ancaman-pembobolan-akun-pribadi-dan-pencegahannya.webp',
    pdf: '/certificates/komdigi/pdf/ancaman-pembobolan-akun-pribadi-dan-pencegahannya.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299727990-9721',
  },
  {
    id: 'wawasan-karir-dalam-bidang-data-analytics',
    name: 'Wawasan Karir dalam Bidang Data Analytics',
    image: '/certificates/komdigi/images/wawasan-karir-dalam-bidang-data-analytics.webp',
    pdf: '/certificates/komdigi/pdf/wawasan-karir-dalam-bidang-data-analytics.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299746850-27718',
  },
  {
    id: 'ethical-hacker-for-dummies',
    name: 'Ethical Hacker For Dummies',
    image: '/certificates/komdigi/images/ethical-hacker-for-dummies.webp',
    pdf: '/certificates/komdigi/pdf/ethical-hacker-for-dummies.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=22910030850-19247',
  },
  {
    id: 'ai-engineer-for-milenial',
    name: 'AI Engineer For Milenial',
    image: '/certificates/komdigi/images/ai-engineer-for-milenial.webp',
    pdf: '/certificates/komdigi/pdf/ai-engineer-for-milenial.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=22910029850-24484',
  },
  {
    id: 'copywriting-ai-untuk-iklan-digital',
    name: 'Copywriting AI Untuk Iklan Digital',
    image: '/certificates/komdigi/images/copywriting-ai-untuk-iklan-digital.webp',
    pdf: '/certificates/komdigi/pdf/copywriting-ai-untuk-iklan-digital.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299829850-12767',
  },
  {
    id: 'memahami-aspek-pengembangan-produk-ai',
    name: 'Memahami Aspek Pengembangan Produk AI',
    image: '/certificates/komdigi/images/memahami-aspek-pengembangan-produk-ai.webp',
    pdf: '/certificates/komdigi/pdf/memahami-aspek-pengembangan-produk-ai.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299814850-7444',
  },
  {
    id: 'produksi-konten-media-sosial-dengan-ai',
    name: 'Produksi Konten Media Sosial Dengan AI',
    image: '/certificates/komdigi/images/produksi-konten-media-sosial-dengan-ai.webp',
    pdf: '/certificates/komdigi/pdf/produksi-konten-media-sosial-dengan-ai.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299794850-15953',
  },
  {
    id: 'konsep-pemrograman',
    name: 'Konsep Pemrograman',
    image: '/certificates/komdigi/images/konsep-pemrograman.webp',
    pdf: '/certificates/komdigi/pdf/konsep-pemrograman.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299793850-14930',
  },
  {
    id: 'introduction-to-cloud-computing',
    name: 'Introduction To Cloud Computing',
    image: '/certificates/komdigi/images/introduction-to-cloud-computing.webp',
    pdf: '/certificates/komdigi/pdf/introduction-to-cloud-computing.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299864850-19509',
  },
  {
    id: 'what-is-business-pitching',
    name: 'What is Business Pitching',
    image: '/certificates/komdigi/images/what-is-business-pitching.webp',
    pdf: '/certificates/komdigi/pdf/what-is-business-pitching.pdf',
    verifyUrl: 'https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=2299892850-4620',
  },
];

/**
 * Anthropic certificates — issued via Anthropic's Skilljar platform.
 * Each entry carries the certificate artwork, the PDF, and the official
 * verification link so every one can be checked at the source.
 */
export const anthropicCertificates = [
  {
    id: 'claude-101',
    name: 'Claude 101',
    image: '/certificates/anthropic/images/claude-101.webp',
    pdf: '/certificates/anthropic/pdf/claude-101.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/mx76zr7fcuk2',
  },
  {
    id: 'claude-code-101',
    name: 'Claude Code 101',
    image: '/certificates/anthropic/images/claude-code-101.webp',
    pdf: '/certificates/anthropic/pdf/claude-code-101.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/y54r289jdqzu',
  },
  {
    id: 'claude-platform',
    name: 'Claude Platform',
    image: '/certificates/anthropic/images/claude-platform.webp',
    pdf: '/certificates/anthropic/pdf/claude-platform.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/68ycck8e3aew',
  },
  {
    id: 'introduction-to-claude-cowork',
    name: 'Introduction to Claude Cowork',
    image: '/certificates/anthropic/images/introduction-to-claude-cowork.webp',
    pdf: '/certificates/anthropic/pdf/introduction-to-claude-cowork.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/szn3pai2jamf',
  },
  {
    id: 'claude-code-in-action',
    name: 'Claude Code in Action',
    image: '/certificates/anthropic/images/claude-code-in-action.webp',
    pdf: '/certificates/anthropic/pdf/claude-code-in-action.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/mc3c3e88r6ap',
  },
  {
    id: 'ai-fluency-framework-foundations',
    name: 'AI Fluency: Framework & Foundations',
    image: '/certificates/anthropic/images/ai-fluency-framework-foundations.webp',
    pdf: '/certificates/anthropic/pdf/ai-fluency-framework-foundations.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/ps57hxob588i',
  },
  {
    id: 'building-with-the-claude-api',
    name: 'Building with the Claude API',
    image: '/certificates/anthropic/images/building-with-the-claude-api.webp',
    pdf: '/certificates/anthropic/pdf/building-with-the-claude-api.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/oiyy2o8gc89v',
  },
  {
    id: 'introduction-to-model-context-protocol',
    name: 'Introduction to Model Context Protocol',
    image: '/certificates/anthropic/images/introduction-to-model-context-protocol.webp',
    pdf: '/certificates/anthropic/pdf/introduction-to-model-context-protocol.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/56nhuwmfjskd',
  },
  {
    id: 'ai-fluency-for-educators',
    name: 'AI Fluency for Educators',
    image: '/certificates/anthropic/images/ai-fluency-for-educators.webp',
    pdf: '/certificates/anthropic/pdf/ai-fluency-for-educators.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/v35b4yt87nas',
  },
  {
    id: 'ai-fluency-for-students',
    name: 'AI Fluency for Students',
    image: '/certificates/anthropic/images/ai-fluency-for-students.webp',
    pdf: '/certificates/anthropic/pdf/ai-fluency-for-students.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/qmo4qq7xv76z',
  },
  {
    id: 'model-context-protocol-advanced-topics',
    name: 'Model Context Protocol: Advanced Topics',
    image: '/certificates/anthropic/images/model-context-protocol-advanced-topics.webp',
    pdf: '/certificates/anthropic/pdf/model-context-protocol-advanced-topics.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/9isinow72fiy',
  },
  {
    id: 'claude-with-amazon-bedrock',
    name: 'Claude with Amazon Bedrock',
    image: '/certificates/anthropic/images/claude-with-amazon-bedrock.webp',
    pdf: '/certificates/anthropic/pdf/claude-with-amazon-bedrock.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/aap9zfwb368s',
  },
  {
    id: 'claude-on-google-cloud',
    name: 'Claude on Google Cloud',
    image: '/certificates/anthropic/images/claude-on-google-cloud.webp',
    pdf: '/certificates/anthropic/pdf/claude-on-google-cloud.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/xb79t8te2ywc',
  },
  {
    id: 'teaching-ai-fluency',
    name: 'Teaching AI Fluency',
    image: '/certificates/anthropic/images/teaching-ai-fluency.webp',
    pdf: '/certificates/anthropic/pdf/teaching-ai-fluency.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/hpe47z45nnas',
  },
  {
    id: 'ai-fluency-for-nonprofits',
    name: 'AI Fluency for Nonprofits',
    image: '/certificates/anthropic/images/ai-fluency-for-nonprofits.webp',
    pdf: '/certificates/anthropic/pdf/ai-fluency-for-nonprofits.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/bxgdvts657tt',
  },
  {
    id: 'introduction-to-agent-skills',
    name: 'Introduction to Agent Skills',
    image: '/certificates/anthropic/images/introduction-to-agent-skills.webp',
    pdf: '/certificates/anthropic/pdf/introduction-to-agent-skills.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/dxpc9p2vnkun',
  },
  {
    id: 'introduction-to-subagents',
    name: 'Introduction to Subagents',
    image: '/certificates/anthropic/images/introduction-to-subagents.webp',
    pdf: '/certificates/anthropic/pdf/introduction-to-subagents.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/4vgw8eih73su',
  },
  {
    id: 'ai-capabilities-and-limitations',
    name: 'AI Capabilities and Limitations',
    image: '/certificates/anthropic/images/ai-capabilities-and-limitations.webp',
    pdf: '/certificates/anthropic/pdf/ai-capabilities-and-limitations.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/ur49s5fdcx53',
  },
  {
    id: 'ai-fluency-for-small-businesses',
    name: 'AI Fluency for Small Businesses',
    image: '/certificates/anthropic/images/ai-fluency-for-small-businesses.webp',
    pdf: '/certificates/anthropic/pdf/ai-fluency-for-small-businesses.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/7mn8vbf9k5d5',
  },
  {
    id: 'ai-fluency-for-builders',
    name: 'AI Fluency for Builders',
    image: '/certificates/anthropic/images/ai-fluency-for-builders.webp',
    pdf: '/certificates/anthropic/pdf/ai-fluency-for-builders.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/wze9a37og6ij',
  },
  {
    id: 'ai-fluency-for-pk-12-educators',
    name: 'AI Fluency for PK-12 Educators',
    image: '/certificates/anthropic/images/ai-fluency-for-pk-12-educators.webp',
    pdf: '/certificates/anthropic/pdf/ai-fluency-for-pk-12-educators.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/tdokuskaiso3',
  },
];

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
