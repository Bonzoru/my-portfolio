import { SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { decodeEmail } from "@/utils/string"

export const dynamic = "force-static"
export const revalidate = false

function buildLlmsTxt(): string {
  const email = decodeEmail(USER.email)
  const baseUrl = SITE_INFO.url

  return `# Surya Aji Andriantoro

> Surya Aji Andriantoro is a Web Developer, Cybersecurity & AI Engineer, and Informatics Engineering graduate from Darmajaya Institute of Informatics and Business in Bandar Lampung, Indonesia. He specializes in web development, offensive cybersecurity (penetration testing & bug hunting), on-chain analytics, and applied machine learning.

## Core Projects & Systems
- [Xyro Terminal](${baseUrl}/projects/xyro): Web-based crypto terminal unifying performance dashboards, trading journals, altcoin-to-BTC correlation matrices, real-time orderbook liquidity, and whale transaction tracking.
- [Crypto Market Information Aggregator](${baseUrl}/projects/crypto-bot): Automated Python Telegram bot aggregating real-time on-chain data, macroeconomic updates, and whale movements from 10+ sources.
- [Seismic Tsunami Predictor](${baseUrl}/projects/tsunami-ml): Machine learning research analyzing 128,000+ rows of Indonesian seismic earthquake data using Random Forest, KNN, SVM, and SMOTE (Published in a Sinta 3 accredited national journal).

## Professional Experience & Career Roles
- [Bank BJB Operations Bureau](${baseUrl}/#experience): IT Support (Internship) — Hardware diagnostics, network troubleshooting, and endpoint system configuration.
- [Freelance · Independent Developer](${baseUrl}/#experience): Project Developer — Built Xyro Terminal and automated AI/Python Telegram market bots.
- [Freelance · Offensive Security](${baseUrl}/#experience): Penetration Tester & Bug Hunter — Vulnerability discovery, attack simulation, and OSINT reconnaissance.
- [Independent · Digital Asset Markets](${baseUrl}/#experience): Crypto Trader & Market Analyst — Technical, macroeconomic, and sentiment analysis across DEX/CEX platforms.

## Awards & National Achievements (7)
- 4th / First Runner Up — Rise The Ranger Incident Response, Satsiber TNI 2026 (National)
- 2nd Place National Best Team Lampung Province — Nusantara Cyber Security (NCS) APTIKOM 2026 (National)
- Outstanding Student of the Year 2025/2026 — IIB Darmajaya (University)
- 2nd Place National CTF — Nusantara Cyber Security (NCS) APTIKOM 2025 (National)
- Best Performance — Nusantara Cyber Security (NCS) APTIKOM 2025 (National)
- 2nd Place Cluster — Nusantara Cyber Security (NCS) APTIKOM 2025 (National)
- The Best Team Lampung Province — Nusantara Cyber Security (NCS) APTIKOM 2025 (National)

## Contact & Profiles
- [Portfolio Website](${baseUrl}): ${baseUrl}
- [Email](mailto:${email}): ${email}
`
}

export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  })
}
