import Script from "next/script"

import { SectionSeparator } from "@/components/section-separator"
import { SITE_INFO } from "@/config/site"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { ProjectsPageContent } from "@/features/projects/components/projects-page-content"
import { createPageMetadata } from "@/lib/seo"

const title = "Web, Web3 & Machine Learning Projects"
const description =
  "A selection of projects I've built across full-stack web development, Web3 on-chain analytics, Python automation, and machine learning research."
const keywords = [
  "Surya Aji Andriantoro projects",
  "sryaaji projects",
  "Xyro Terminal",
  "Crypto Market Information Aggregator",
  "Seismic Tsunami Predictor",
  "Web3 analytics projects",
  "machine learning projects",
]

function getProjectsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_INFO.url}/projects#collection`,
    url: `${SITE_INFO.url}/projects`,
    name: title,
    description,
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${SITE_INFO.url}/#website`,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_INFO.url}/projects/${project.id}`,
        name: project.title,
        description: project.seoDescription ?? project.tagline,
      })),
    },
    author: {
      "@id": `${SITE_INFO.url}/#person`,
    },
  }
}

export const metadata = createPageMetadata({
  title,
  description,
  path: "/projects",
  keywords,
})

export default function ProjectsPage() {
  return (
    <>
      <Script
        id="projects-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProjectsJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <SectionSeparator />
      <div className="relative z-1 -mt-px border-x border-t border-line bg-card max-md:border-x-0">
        <ProjectsPageContent projects={PROJECTS} />
        <SectionSeparator sides={false} />
      </div>
    </>
  )
}
