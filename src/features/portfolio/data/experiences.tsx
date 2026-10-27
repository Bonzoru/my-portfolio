import {
  BarChart3Icon,
  Code2Icon,
  GraduationCapIcon,
  NetworkIcon,
  ShieldAlertIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "bjb",
    companyName: "Bank BJB Operations Bureau",
    companyLogo: "/logos/bank-bjb.svg",
    companyWebsite: "https://www.bankbjb.co.id/",
    positions: [
      {
        id: "bjb-1",
        title: "IT Support (Internship)",
        employmentPeriod: {
          start: "2025",
          end: "2026",
        },
        employmentType: "Internship",
        icon: <NetworkIcon />,
        description: `- Provided technical support for daily banking operations across the Operations Bureau.
- Handled hardware diagnostics and network troubleshooting to minimize operational downtime.
- Managed operating system installation, endpoint configuration, and internal IT infrastructure maintenance.`,
        descriptionId: `- Memberikan dukungan teknis untuk operasional harian perbankan di Biro Operasional Bank BJB.
- Menangani diagnostik perangkat keras (hardware) dan pemecahan masalah jaringan (network troubleshooting) untuk meminimalkan waktu henti operasional.
- Mengelola instalasi sistem operasi, konfigurasi perangkat endpoint, dan pemeliharaan infrastruktur TI internal.`,
        skills: [
          "IT Support",
          "Network Troubleshooting",
          "Hardware Diagnostics",
          "System Configuration",
          "Endpoint Management",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "freelance-dev",
    companyName: "Freelance · Independent Developer",
    positions: [
      {
        id: "freelance-dev-1",
        title: "Project Developer (Independent)",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Freelance",
        icon: <Code2Icon />,
        description: `- Built **Xyro Terminal**, a web-based crypto terminal and on-chain data aggregation platform for analyzing whale movements, orderbook liquidity, and market correlations.
- Developed automated Python Telegram bots that aggregate and distribute real-time on-chain and macroeconomic intelligence from 10+ data sources using AI workflows.`,
        descriptionId: `- Membangun **Xyro Terminal**, terminal kripto berbasis web dan platform agregasi data on-chain untuk menganalisis pergerakan whale, likuiditas orderbook, dan korelasi pasar.
- Mengembangkan bot Telegram otomatis berbasis Python yang mengumpulkan dan mendistribusikan informasi on-chain serta makroekonomi secara real-time dari 10+ sumber data menggunakan alur kerja AI.`,
        skills: [
          "React",
          "Python",
          "Web3 & On-Chain Data",
          "Telegram API",
          "AI Automation",
          "Full-Stack Development",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "pentest",
    companyName: "Freelance · Offensive Security",
    positions: [
      {
        id: "pentest-1",
        title: "Penetration Tester & Bug Hunter",
        employmentPeriod: {
          start: "2022",
        },
        employmentType: "Freelance",
        icon: <ShieldAlertIcon />,
        description: `- Discovered security vulnerabilities across web applications and network endpoints through offensive security testing and reconnaissance (OSINT).
- Evaluated system defenses through real-world attack simulation and compiled structured vulnerability disclosure reports with remediation guidance.`,
        descriptionId: `- Menemukan kerentanan keamanan pada aplikasi web dan endpoint jaringan melalui pengujian keamanan ofensif (penetration testing) dan rekognisi (OSINT).
- Mengevaluasi pertahanan sistem melalui simulasi serangan nyata dan menyusun laporan kerentanan (vulnerability report) yang terstruktur beserta panduan remediasi.`,
        skills: [
          "Penetration Testing",
          "Bug Hunting",
          "OSINT",
          "Vulnerability Assessment",
          "Incident Response",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "trader",
    companyName: "Independent · Digital Asset Markets",
    positions: [
      {
        id: "trader-1",
        title: "Crypto Trader & Market Analyst",
        employmentPeriod: {
          start: "2022",
        },
        employmentType: "Independent",
        icon: <BarChart3Icon />,
        description: `- Traded across decentralized (DEX) and centralized (CEX) exchanges with disciplined risk management.
- Analyzed markets using technical, macroeconomic, on-chain liquidity, and sentiment analysis to inform AI-assisted trading and alerting bots.`,
        descriptionId: `- Melakukan perdagangan di bursa terdesentralisasi (DEX) dan tersentralisasi (CEX) dengan manajemen risiko yang terukur.
- Menganalisis pasar menggunakan analisis teknikal, makroekonomi, likuiditas on-chain, dan analisis sentimen untuk mendukung bot trading serta sistem peringatan berbasis AI.`,
        skills: [
          "On-Chain Analytics",
          "Sentiment Analysis",
          "Market Analysis",
          "DEX & CEX",
          "Algorithmic Signals",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "edu-darmajaya",
        title: "Institute of Informatics and Business (IIB) Darmajaya",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        employmentType: "Bachelor of Informatics Engineering",
        icon: <GraduationCapIcon />,
        description: `- Graduated with a **Bachelor of Informatics Engineering (S.Kom)** in Bandar Lampung, Indonesia.
- Named **Outstanding Student of the Year 2025/2026** at IIB Darmajaya.
- Represented the university in national and provincial cybersecurity and CTF competitions (Satsiber TNI, NCS APTIKOM).
- Conducted machine learning research on Indonesian seismic tsunami prediction (128,000+ records) published in a Sinta 3 accredited national journal.`,
        descriptionId: `- Lulus sebagai **Sarjana Teknik Informatika (S.Kom)** di Institut Informatika dan Bisnis (IIB) Darmajaya, Bandar Lampung.
- Terpilih sebagai **Mahasiswa Berprestasi (Outstanding Student of the Year) 2025/2026** di IIB Darmajaya.
- Mewakili kampus dalam kompetisi keamanan siber (Cybersecurity / CTF & Incident Response) tingkat nasional dan provinsi (Satsiber TNI, NCS APTIKOM).
- Melakukan penelitian machine learning untuk prediksi potensi tsunami dari parameter seismik di Indonesia (128.000+ baris data) yang dipublikasikan di jurnal nasional terakreditasi Sinta 3.`,
        skills: [
          "Informatics Engineering",
          "Cybersecurity",
          "Web Development",
          "Machine Learning Research",
          "Networking",
        ],
      },
    ],
  },
]
