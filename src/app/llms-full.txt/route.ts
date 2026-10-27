import { SITE_INFO } from "@/config/site"
import { AWARDS } from "@/features/portfolio/data/awards"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { PUBLICATIONS } from "@/features/portfolio/data/publications"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"
import { decodeEmail } from "@/utils/string"

export const dynamic = "force-static"
export const revalidate = false

function buildLlmsFullTxt(): string {
  const email = decodeEmail(USER.email)
  const baseUrl = SITE_INFO.url

  const projectSections = PROJECTS.map((project) => {
    const periodStr = `${project.period.start}${project.period.end ? ` – ${project.period.end}` : " – Present"}`
    const lines = [
      `### ${project.title} (${project.category.toUpperCase()})`,
      `- **URL**: ${baseUrl}/projects/${project.id}`,
      project.links.live ? `- **Live Demo**: ${project.links.live}` : null,
      project.links.repo ? `- **Repository**: ${project.links.repo}` : null,
      `- **Period**: ${periodStr}`,
      `- **Role / Ownership**: ${project.collaboration.role} (${project.collaboration.ownership})`,
      `- **Tagline / Summary**: ${project.tagline}`,
      project.description ? `- **Description**: ${project.description.replace(/\n+/g, " ")}` : null,
      project.features?.length ? `- **Key Features**:\n${project.features.map((f) => `  * ${f}`).join("\n")}` : null,
      project.impact?.length ? `- **Impact & Metrics**:\n${project.impact.map((m) => `  * ${m}`).join("\n")}` : null,
      project.collaboration.contributions?.length
        ? `- **Detailed Contributions**:\n${project.collaboration.contributions.map((c) => `  * ${c}`).join("\n")}`
        : null,
      `- **Technologies / Skills**: ${project.skills.join(", ")}`,
      project.coverSkills?.length ? `- **Core Stack**: ${project.coverSkills.join(" · ")}` : null,
    ].filter(Boolean)

    return lines.join("\n")
  }).join("\n\n")

  const experienceSections = EXPERIENCES.map((exp) => {
    const posLines = exp.positions.map((pos) => {
      const skillsStr = pos.skills?.length ? `\n- **Skills**: ${pos.skills.join(", ")}` : ""
      return `#### ${pos.title} | ${pos.employmentType} (${pos.employmentPeriod.start} – ${pos.employmentPeriod.end ?? "Present"})\n${pos.description}${skillsStr}`
    }).join("\n\n")

    return `### ${exp.companyName}\n${posLines}`
  }).join("\n\n")

  const certSections = CERTIFICATIONS.map((cert) => {
    return `- **${cert.title}**\n  * Issuer: ${cert.issuer}\n  * Date: ${cert.issueDate}\n  * Credential ID: ${cert.credentialID || "N/A"}\n  * Verification URL: ${cert.credentialURL}`
  }).join("\n\n")

  const awardSections = AWARDS.map((award) => {
    return `- **${award.title}** (${award.grade})\n  * Prize: ${award.prize}\n  * Date: ${award.date}\n  * Details: ${(award.description ?? "").replace(/\n+/g, " ")}`
  }).join("\n\n")

  const publicationSections = PUBLICATIONS.map((pub) => {
    return `- **${pub.title}**\n  * Journal: ${pub.journal}\n  * Date: ${pub.date}\n  * Summary: ${pub.description}`
  }).join("\n\n")

  const techCategories = Array.from(
    new Set(TECH_STACK.flatMap((item) => item.categories))
  )
  const techStackSections = techCategories
    .map((cat) => {
      const items = TECH_STACK.filter((item) => item.categories.includes(cat))
        .map((i) => i.title)
        .join(", ")
      return `- **${cat}**: ${items}`
    })
    .join("\n")

  return `# Complete Knowledge Base — Surya Aji Andriantoro

> Surya Aji Andriantoro is a Web Developer, Cybersecurity & AI Engineer, and Informatics Engineering graduate from the Institute of Informatics and Business (IIB) Darmajaya in Bandar Lampung, Indonesia. He specializes in offensive cybersecurity, full-stack web development, Web3 on-chain analytics, and applied machine learning.

---

## 1. Executive Summary & Profile

- **Full Name**: ${USER.displayName}
- **Role**: ${USER.jobTitle}
- **Location**: ${USER.address} (Timezone: ${USER.timeZone}, UTC+7)
- **Email**: ${email}
- **Website**: ${baseUrl}
- **LinkedIn**: https://www.linkedin.com/in/suryaajiandriantoro/
- **Bio**: ${USER.bio}
- **About**: ${USER.about}

---

## 2. Education & Academic Background

- **Institution**: Institute of Informatics and Business (IIB) Darmajaya, Bandar Lampung, Indonesia
- **Degree**: Bachelor of Informatics Engineering (S.Kom)
- **Period**: 2022 – 2026
- **Honors**: Outstanding Student of the Year 2025/2026 at IIB Darmajaya

---

## 3. Professional Experience

${experienceSections}

---

## 4. In-Depth Project Case Studies

${projectSections}

---

## 5. Technical Skillset & Taxonomy

${techStackSections}

---

## 6. Honors & National Cybersecurity Competition Awards

${awardSections}

---

## 7. Research Publications

${publicationSections}

---

## 8. Professional Certifications (${CERTIFICATIONS.length} Verified Credentials)

${certSections}

---

## 9. Contact Channels & Inquiries

- **Direct Inquiries**: Use the interactive contact modal at ${baseUrl}
- **Email**: ${email}
- **LinkedIn**: https://www.linkedin.com/in/suryaajiandriantoro/
`
}

export async function GET() {
  const content = buildLlmsFullTxt()
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  })
}
