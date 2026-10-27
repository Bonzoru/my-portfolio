export interface DigitalBadge {
  id: string
  name: string
  issuer: "Cisco" | "Fortinet"
  kind: "Career Path" | "Course" | "Certification"
  year: string
  image: string
  verifyUrl: string
  accentColor: string
}

export const DIGITAL_BADGES: DigitalBadge[] = [
  {
    id: "b66ee586-4002-4ad7-80ef-27b14f536d11",
    name: "Cybersecurity Defense Analyst",
    issuer: "Cisco",
    kind: "Career Path",
    year: "2026",
    image: "/badges/cybersecurity-defense-analyst-career-path-256.webp",
    verifyUrl:
      "https://www.credly.com/badges/b66ee586-4002-4ad7-80ef-27b14f536d11",
    accentColor: "#10b981",
  },
  {
    id: "bf4ea6d5-a0f6-4027-a81e-188f59ed9b1d",
    name: "Junior Cybersecurity Analyst",
    issuer: "Cisco",
    kind: "Career Path",
    year: "2026",
    image: "/badges/junior-cybersecurity-analyst-career-path-256.webp",
    verifyUrl:
      "https://www.credly.com/badges/bf4ea6d5-a0f6-4027-a81e-188f59ed9b1d",
    accentColor: "#06b6d4",
  },
  {
    id: "20219617-efc9-461a-bea5-b08ebd0ccb33",
    name: "Ethical Hacker",
    issuer: "Cisco",
    kind: "Course",
    year: "2026",
    image: "/badges/ethical-hacker-256.webp",
    verifyUrl:
      "https://www.credly.com/badges/20219617-efc9-461a-bea5-b08ebd0ccb33",
    accentColor: "#22c55e",
  },
  {
    id: "1e874f91-1191-4f52-a6cf-9d540a795583",
    name: "Cyber Threat Management",
    issuer: "Cisco",
    kind: "Course",
    year: "2026",
    image: "/badges/cyber-threat-management-256.webp",
    verifyUrl:
      "https://www.credly.com/badges/1e874f91-1191-4f52-a6cf-9d540a795583",
    accentColor: "#14b8a6",
  },
  {
    id: "4484e709-49f3-4877-b307-225def8d5a6d",
    name: "Endpoint Security",
    issuer: "Cisco",
    kind: "Course",
    year: "2026",
    image: "/badges/endpoint-security-256.webp",
    verifyUrl:
      "https://www.credly.com/badges/4484e709-49f3-4877-b307-225def8d5a6d",
    accentColor: "#0ea5e9",
  },
  {
    id: "878f4647-dbf5-4602-9f99-84c7646bda16",
    name: "Network Defense",
    issuer: "Cisco",
    kind: "Course",
    year: "2026",
    image: "/badges/network-defense-256.webp",
    verifyUrl:
      "https://www.credly.com/badges/878f4647-dbf5-4602-9f99-84c7646bda16",
    accentColor: "#3b82f6",
  },
  {
    id: "430a16cf-179d-4e91-ae11-1461f62f0e65",
    name: "Network Support & Security",
    issuer: "Cisco",
    kind: "Course",
    year: "2026",
    image: "/badges/network-support-and-security-256.webp",
    verifyUrl:
      "https://www.credly.com/badges/430a16cf-179d-4e91-ae11-1461f62f0e65",
    accentColor: "#6366f1",
  },
  {
    id: "613f6768-d58e-4238-acd6-fedb1b207b08",
    name: "Networking Devices & Config",
    issuer: "Cisco",
    kind: "Course",
    year: "2026",
    image: "/badges/networking-devices-and-initial-configuration-256.webp",
    verifyUrl:
      "https://www.credly.com/badges/613f6768-d58e-4238-acd6-fedb1b207b08",
    accentColor: "#8b5cf6",
  },
  {
    id: "dc9cddd1-7466-45b4-a475-b0ffed7403f7",
    name: "Networking Basics",
    issuer: "Cisco",
    kind: "Course",
    year: "2026",
    image: "/badges/networking-basics-256.webp",
    verifyUrl:
      "https://www.credly.com/badges/dc9cddd1-7466-45b4-a475-b0ffed7403f7",
    accentColor: "#06b6d4",
  },
  {
    id: "e4da810f-fc15-42e0-8381-17168ad8e0d9",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    kind: "Course",
    year: "2026",
    image: "/badges/introduction-to-cybersecurity-256.webp",
    verifyUrl:
      "https://www.credly.com/badges/e4da810f-fc15-42e0-8381-17168ad8e0d9",
    accentColor: "#10b981",
  },
  {
    id: "9cff6edb-a814-43ea-9fa8-496dbcb11e00",
    name: "Introduction to Modern AI",
    issuer: "Cisco",
    kind: "Course",
    year: "2026",
    image: "/badges/introduction-to-modern-ai-256.webp",
    verifyUrl:
      "https://www.credly.com/badges/9cff6edb-a814-43ea-9fa8-496dbcb11e00",
    accentColor: "#a855f7",
  },
  {
    id: "fortinet-nse-1",
    name: "NSE 1: Cybersecurity",
    issuer: "Fortinet",
    kind: "Certification",
    year: "2026",
    image: "/badges/fortinet-nse-1.png",
    verifyUrl:
      "https://training.fortinet.com/admin/tool/certificate/index.php?code=0967345489SA",
    accentColor: "#ef4444",
  },
  {
    id: "fortinet-nse-2",
    name: "NSE 2: Cybersecurity",
    issuer: "Fortinet",
    kind: "Certification",
    year: "2026",
    image: "/badges/fortinet-nse-2.png",
    verifyUrl:
      "https://training.fortinet.com/admin/tool/certificate/index.php?code=4794130386SA",
    accentColor: "#f97316",
  },
  {
    id: "fortinet-nse-3",
    name: "NSE 3: Cybersecurity",
    issuer: "Fortinet",
    kind: "Certification",
    year: "2026",
    image: "/badges/fortinet-nse-3.png",
    verifyUrl:
      "https://training.fortinet.com/admin/tool/certificate/index.php?code=8906373884SA",
    accentColor: "#eab308",
  },
]
