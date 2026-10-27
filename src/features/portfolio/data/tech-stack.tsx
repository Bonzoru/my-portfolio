import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  // 01 Cybersecurity & Network
  {
    key: "pentest",
    title: "Penetration Testing",
    href: "https://owasp.org/",
    iconId: "prometheus",
    categories: ["Cybersecurity & Network"],
  },
  {
    key: "bughunting",
    title: "Bug Hunting",
    href: "https://portswigger.net/",
    iconId: "grafana",
    categories: ["Cybersecurity & Network"],
  },
  {
    key: "osint",
    title: "OSINT",
    href: "https://osintframework.com/",
    iconId: "opencv",
    categories: ["Cybersecurity & Network"],
  },
  {
    key: "network-eng",
    title: "Cisco Networking",
    href: "https://www.netacad.com/",
    iconId: "docker",
    categories: ["Cybersecurity & Network"],
  },
  {
    key: "fortinet",
    title: "Fortinet NSE (1–3)",
    href: "https://training.fortinet.com/",
    iconId: "microsoftazure",
    categories: ["Cybersecurity & Network"],
  },

  // 02 Web Development
  {
    key: "react",
    title: "React / Vite",
    href: "https://react.dev/",
    iconId: "react",
    categories: ["Web Development"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    iconId: "js",
    categories: ["Web Development"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    iconId: "typescript",
    categories: ["Web Development"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    iconId: "nextjs2",
    categories: ["Web Development"],
  },
  {
    key: "tailwindcss",
    title: "HTML & CSS / Tailwind",
    href: "https://tailwindcss.com/",
    iconId: "tailwindcss",
    categories: ["Web Development"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    iconId: "nodejs",
    categories: ["Web Development"],
  },

  // 03 AI & Data
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    iconId: "python",
    categories: ["AI & Data"],
  },
  {
    key: "claude",
    title: "Claude API & MCP",
    href: "https://claude.ai/",
    iconId: "claude",
    categories: ["AI & Data"],
  },
  {
    key: "scikitlearn",
    title: "Scikit-Learn (RF, SVM, KNN)",
    href: "https://scikit-learn.org/",
    iconId: "scikitlearn",
    categories: ["AI & Data"],
  },
  {
    key: "pandas",
    title: "Data Processing & SMOTE",
    href: "https://pandas.pydata.org/",
    iconId: "pandas",
    categories: ["AI & Data"],
  },
  {
    key: "chatgpt",
    title: "Prompt Engineering",
    href: "https://chatgpt.com/",
    iconId: "chatgpt",
    categories: ["AI & Data"],
  },
  {
    key: "gemini",
    title: "Sentiment Analysis",
    href: "https://gemini.google.com/",
    iconId: "gemini",
    categories: ["AI & Data"],
  },

  // 04 Web3 & Automation
  {
    key: "web3",
    title: "Web3 & On-Chain Analytics",
    href: "https://ethereum.org/",
    iconId: "langchain",
    categories: ["Web3 & Automation"],
  },
  {
    key: "telegram-api",
    title: "Telegram Bot API",
    href: "https://core.telegram.org/bots/api",
    iconId: "fastapi",
    categories: ["Web3 & Automation"],
  },
  {
    key: "vscode",
    title: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
    iconId: "vscode",
    categories: ["Web3 & Automation"],
  },
]

export const STACK_CATEGORIES = [
  "Cybersecurity & Network",
  "Web Development",
  "AI & Data",
  "Web3 & Automation",
]
