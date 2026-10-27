import type { Project, ProjectCollaboration } from "../types/projects"

const COLLABORATION: Record<string, ProjectCollaboration> = {
  xyro: {
    ownership: "Independent project",
    ownershipId: "Proyek Mandiri",
    label: "Independent",
    team: "Solo project",
    role: "Full-Stack Web & Web3 Analytics Developer",
    roleId: "Pengembang Web Full-Stack & Analitik Web3",
    contributions: [
      "Designed and built the web-based crypto terminal interface using React for high-volume on-chain data visualization.",
      "Implemented performance dashboard and trading journal workflows for community members.",
      "Built altcoin-to-Bitcoin correlation analysis and real-time orderbook liquidity tracking modules.",
      "Integrated whale and anomaly transaction tracking alongside an economic news feed.",
    ],
    contributionsId: [
      "Merancang dan membangun antarmuka terminal kripto berbasis web menggunakan React untuk visualisasi data on-chain berkapasitas besar.",
      "Mengimplementasikan dashboard performa dan alur kerja jurnal trading untuk anggota komunitas.",
      "Membangun modul analisis korelasi altcoin terhadap Bitcoin dan pelacakan likuiditas orderbook secara real-time.",
      "Mengintegrasikan pelacakan transaksi whale & anomali bersama feed berita makroekonomi.",
    ],
  },
  "crypto-bot": {
    ownership: "Independent project",
    ownershipId: "Proyek Mandiri",
    label: "Independent",
    team: "Solo project",
    role: "Python & AI Automation Developer",
    roleId: "Pengembang Otomatisasi Python & AI",
    contributions: [
      "Architected an automated Telegram bot in Python that aggregates real-time market intelligence from 10+ channels and sources.",
      "Built parsers for macroeconomic updates, on-chain data, and large whale wallet movements.",
      "Deployed and maintained the live notification pipeline for an active trading community.",
    ],
    contributionsId: [
      "Merancang arsitektur bot Telegram otomatis menggunakan Python yang mengumpulkan intelijen pasar real-time dari 10+ kanal dan sumber data.",
      "Membangun parser untuk pembaruan makroekonomi, data on-chain, dan pergerakan dompet whale berukuran besar.",
      "Men-deploy dan memelihara pipeline notifikasi langsung untuk komunitas trading aktif.",
    ],
  },
  "tsunami-ml": {
    ownership: "Research project",
    ownershipId: "Proyek Riset",
    label: "Research",
    team: "Academic Research · IIB Darmajaya",
    role: "Machine Learning Researcher & Author",
    roleId: "Peneliti Machine Learning & Penulis",
    contributions: [
      "Collected, cleaned, and preprocessed over 128,000 rows of Indonesian seismic earthquake data.",
      "Applied SMOTE (Synthetic Minority Over-sampling Technique) to resolve severe class imbalance in tsunami occurrence data.",
      "Trained, tuned, and benchmarked Random Forest, K-Nearest Neighbour (KNN), and Support Vector Machine (SVM) models.",
      "Authored and published the research findings in an accredited Sinta 3 national journal.",
    ],
    contributionsId: [
      "Mengumpulkan, membersihkan, dan melakukan preprocessing lebih dari 128.000 baris data gempa seismik di Indonesia.",
      "Menerapkan SMOTE (Synthetic Minority Over-sampling Technique) untuk mengatasi ketidakseimbangan kelas pada data kejadian tsunami.",
      "Melatih, melakukan tuning, dan membandingkan performa model Random Forest, K-Nearest Neighbour (KNN), serta Support Vector Machine (SVM).",
      "Menulis dan memublikasikan hasil penelitian pada jurnal nasional terakreditasi Sinta 3.",
    ],
  },
}

export const PROJECTS: Project[] = [
  {
    id: "xyro",
    title: "Xyro Terminal",
    seoTitle: "Xyro Terminal – Web-Based Crypto & On-Chain Analytics | Surya Aji",
    category: "Web-based crypto terminal",
    categoryId: "Terminal Kripto Berbasis Web",
    tagline:
      "On-chain data and analytics for crypto communities in one place. A web-based terminal built to help community members analyze large volumes of on-chain data in a single unified platform.",
    taglineId:
      "Data dan analitik on-chain untuk komunitas kripto dalam satu tempat. Terminal berbasis web yang dirancang untuk membantu komunitas menganalisis data on-chain berjumlah besar dalam satu platform terpadu.",
    seoDescription:
      "A web-based crypto terminal built to help community members analyze large volumes of on-chain data, orderbook liquidity, and whale transactions in one unified platform.",
    year: "2025",
    image: "/xyro-1-1024.webp",
    gallery: ["/xyro-1-1024.webp", "/xyro-2-1024.webp"],
    period: { start: "2025", end: "Present" },
    link: "https://myporto-aji.vercel.app/#work",
    links: {
      live: "",
      repo: "",
    },
    skills: [
      "React",
      "JavaScript",
      "Data Visualization",
      "Web3",
      "On-Chain Analytics",
      "Dashboard",
    ],
    coverSkills: ["React", "On-Chain Analytics", "Web3 Dashboard"],
    features: [
      "Performance dashboard and integrated trading journal.",
      "Altcoin to Bitcoin correlation analysis matrix.",
      "Real-time orderbook liquidity visualization.",
      "Whale and anomaly transaction tracking across on-chain feeds.",
      "Integrated macroeconomic and crypto news feed.",
    ],
    featuresId: [
      "Dashboard performa dan jurnal trading terintegrasi.",
      "Matriks analisis korelasi Altcoin terhadap Bitcoin.",
      "Visualisasi likuiditas orderbook secara real-time.",
      "Pelacakan transaksi whale dan anomali di berbagai feed on-chain.",
      "Feed berita makroekonomi dan kripto yang terintegrasi.",
    ],
    impact: [
      "Bridges the gap between raw blockchain data and actionable trading insights in a single fast web interface.",
      "Consolidates multiple fragmented analytics workflows into one unified community terminal.",
    ],
    impactId: [
      "Menjembatani kesenjangan antara data mentah blockchain dan wawasan yang dapat ditindaklanjuti dalam satu antarmuka web yang cepat.",
      "Menyatukan berbagai alur kerja analitik yang terpisah ke dalam satu terminal komunitas terpadu.",
    ],
    collaboration: COLLABORATION.xyro,
    description:
      "A web-based terminal built to help crypto community members analyze large volumes of on-chain data in a single unified platform. It bridges the gap between raw blockchain data and actionable insight.",
    isExpanded: true,
  },
  {
    id: "crypto-bot",
    title: "Crypto Market Information Aggregator",
    seoTitle: "Crypto Market Information Aggregator – Python Telegram Bot | Surya Aji",
    category: "Telegram bot, Python",
    categoryId: "Bot Telegram, Python",
    tagline:
      "Real-time market intelligence delivered straight to Telegram. An automated bot that aggregates and forwards on-chain data, macroeconomic updates, and whale movements into a unified feed.",
    taglineId:
      "Intelijen pasar real-time yang dikirim langsung ke Telegram. Bot otomatis yang mengumpulkan dan meneruskan data on-chain, pembaruan makroekonomi, dan pergerakan whale ke dalam satu feed terpadu.",
    seoDescription:
      "An automated Python Telegram bot that aggregates real-time on-chain data, macroeconomic updates, and large whale movements from 10+ sources.",
    year: "2025",
    image: "/telegram-bot-1-800.webp",
    gallery: ["/telegram-bot-1-800.webp", "/telegram-bot-2-774.webp"],
    period: { start: "2024", end: "Present" },
    link: "https://myporto-aji.vercel.app/#work",
    links: {
      live: "",
      repo: "",
    },
    skills: [
      "Python",
      "Telegram API",
      "Web3",
      "Data Analysis",
      "Automation",
    ],
    coverSkills: ["Python", "Telegram API", "Real-Time Automation"],
    features: [
      "Aggregates 10+ market and on-chain data sources in real time.",
      "Tracks large whale wallet movements on-chain automatically.",
      "Parses and formats macroeconomic signals for rapid decision-making.",
      "Deployed 24/7 for a live trading community.",
    ],
    featuresId: [
      "Mengagregasi 10+ sumber data pasar dan on-chain secara real-time.",
      "Melacak pergerakan dompet whale berukuran besar secara otomatis.",
      "Mem-parsing dan memformat sinyal makroekonomi untuk pengambilan keputusan cepat.",
      "Di-deploy secara aktif untuk komunitas trading langsung.",
    ],
    impact: [
      "Eliminates manual channel monitoring by delivering filtered, high-signal alerts straight to traders on Telegram.",
    ],
    impactId: [
      "Menghilangkan pemantauan kanal secara manual dengan mengirimkan peringatan tersaring bernilai tinggi langsung ke Telegram trader.",
    ],
    collaboration: COLLABORATION["crypto-bot"],
    description:
      "An automated Telegram bot that aggregates and forwards real-time information from multiple channels, delivering on-chain data, macroeconomic updates, and large whale movements into a single unified feed for traders.",
  },
  {
    id: "tsunami-ml",
    title: "Seismic Tsunami Predictor",
    seoTitle: "Seismic Tsunami Predictor – Machine Learning Research | Surya Aji",
    category: "Machine learning research",
    categoryId: "Riset Machine Learning",
    tagline:
      "Predicting tsunami potential from seismic parameters across 128,000+ rows of Indonesian earthquake data using Random Forest, KNN, SVM, and SMOTE.",
    taglineId:
      "Memprediksi potensi tsunami dari parameter seismik pada lebih dari 128.000 baris data gempa di Indonesia menggunakan Random Forest, KNN, SVM, dan SMOTE.",
    seoDescription:
      "Machine learning research analyzing 128,000+ rows of Indonesian seismic earthquake data comparing Random Forest, KNN, and SVM with SMOTE, published in a Sinta 3 national journal.",
    year: "2025",
    image: "/research-1-672.webp",
    gallery: ["/research-1-672.webp", "/research-2-500.webp"],
    period: { start: "2024" },
    link: "https://myporto-aji.vercel.app/#work",
    links: {
      live: "",
      repo: "",
    },
    badge: "Sinta 3 Published",
    badgeId: "Terbit di Sinta 3",
    skills: [
      "Machine Learning",
      "Python",
      "Data Science",
      "Random Forest",
      "SVM",
      "KNN",
      "SMOTE",
    ],
    coverSkills: ["Random Forest & SVM", "SMOTE", "128K+ Seismic Rows"],
    features: [
      "Trained and evaluated on more than 128,000 rows of seismic earthquake data in Indonesia.",
      "Comparative evaluation across Random Forest, K-Nearest Neighbour (KNN), and Support Vector Machine (SVM).",
      "Addressed severe class imbalance in tsunami occurrence using SMOTE oversampling.",
      "Peer-reviewed and published in a Sinta 3 accredited national journal.",
    ],
    featuresId: [
      "Dilatih dan dievaluasi pada lebih dari 128.000 baris data gempa bumi seismik di Indonesia.",
      "Evaluasi komparatif antara algoritma Random Forest, K-Nearest Neighbour (KNN), dan Support Vector Machine (SVM).",
      "Mengatasi ketidakseimbangan kelas (class imbalance) pada data tsunami menggunakan teknik SMOTE.",
      "Telah melalui peer-review dan dipublikasikan pada jurnal nasional terakreditasi Sinta 3.",
    ],
    impact: [
      "Published in a Sinta 3 national journal, providing an empirical benchmark for machine learning-based tsunami early warning classification in Indonesia.",
    ],
    impactId: [
      "Dipublikasikan di jurnal nasional Sinta 3, memberikan tolok ukur empiris untuk klasifikasi peringatan dini tsunami berbasis machine learning di Indonesia.",
    ],
    collaboration: COLLABORATION["tsunami-ml"],
    description:
      "A data science research project analyzing over 128,000 rows of seismic earthquake data in Indonesia. The study compares Random Forest, K-Nearest Neighbour, and Support Vector Machine, and applies SMOTE to handle class imbalance when predicting tsunami likelihood.",
  },
]

export const PROJECTS_BY_ID = PROJECTS.reduce<Record<string, Project>>(
  (accumulator, project) => {
    accumulator[project.id] = project
    return accumulator
  },
  {}
)

