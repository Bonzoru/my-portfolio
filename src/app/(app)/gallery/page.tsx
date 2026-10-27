import Script from "next/script"

import { SectionSeparator } from "@/components/section-separator"
import { SITE_INFO } from "@/config/site"
import { createPageMetadata } from "@/lib/seo"

import { GalleryGrid, type GalleryItem } from "./gallery-grid"

const title = "Gallery & Moments"
const description =
  "Documentation of my internship at Bank BJB, national cybersecurity competition awards (Rise The Ranger 2 Satsiber TNI & NCS APTIKOM), and university achievements."
const keywords = [
  "Surya Aji Andriantoro gallery",
  "Bank BJB internship",
  "Rise The Ranger 2 Satsiber TNI 2026",
  "Nusantara Cyber Security APTIKOM 2025",
  "Outstanding Student of the Year IIB Darmajaya",
]

export const metadata = createPageMetadata({
  title,
  description,
  path: "/gallery",
  keywords,
})

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/gallery/magang-bank-bjb.jpg",
    title: "IT Support Internship · Bank BJB Operations Bureau",
    titleId: "Magang IT Support · Biro Operasional Bank BJB",
    date: "2025 - 2026",
    aspect: "landscape",
    objectPosition: "object-[center_25%]",
    fullWidth: true,
    description:
      "Completed an IT Support internship at Bank BJB KC Bandar Lampung (Operations Bureau), handling daily banking IT operations, hardware diagnostics, network troubleshooting, and endpoint system configuration.",
    descriptionId:
      "Menyelesaikan magang sebagai IT Support di Bank BJB KC Bandar Lampung (Biro Operasional), menangani dukungan teknis operasional perbankan harian, diagnostik hardware, troubleshooting jaringan, dan konfigurasi sistem.",
    highlight: "Bank BJB KC Bandar Lampung · Operations Bureau",
    highlightId: "Bank BJB KC Bandar Lampung · Biro Operasional",
  },
  {
    src: "/gallery/juara-aptikom-2025.jpg",
    title: "2nd Place National CTF · NCS APTIKOM 2025",
    titleId: "Juara 2 Nasional CTF · NCS APTIKOM 2025",
    date: "2025",
    aspect: "square",
    objectPosition: "object-[center_35%]",
    description:
      "Awarded 2nd Place National Capture The Flag (CTF), 2nd Place Cluster, Best Performance, and The Best Team Lampung Province at Nusantara Cyber Security (NCS) RAKORNAS APTIKOM 2025.",
    descriptionId:
      "Meraih Juara 2 Nasional Capture The Flag (CTF), Juara 2 Kategori Klaster, Best Performance, dan Tim Terbaik Provinsi Lampung pada kompetisi Nusantara Cyber Security (NCS) RAKORNAS APTIKOM 2025.",
    highlight: "National Cybersecurity Competition · APTIKOM 2025",
    highlightId: "Kompetisi Keamanan Siber Nasional · APTIKOM 2025",
  },
  {
    src: "/gallery/mahasiswa-berprestasi-darmajaya.jpg",
    title: "Outstanding Student of the Year · IIB Darmajaya",
    titleId: "Mahasiswa Berprestasi · IIB Darmajaya",
    date: "2026",
    aspect: "square",
    objectPosition: "object-[center_38%]",
    description:
      "Recognized as Outstanding Student of the Year 2025/2026 at the Institute of Informatics and Business (IIB) Darmajaya for achievements in national cybersecurity competitions and academic research.",
    descriptionId:
      "Dinobatkan sebagai Mahasiswa Berprestasi (Outstanding Student of the Year) 2025/2026 di Institut Informatika dan Bisnis (IIB) Darmajaya atas prestasi kompetisi keamanan siber nasional dan publikasi riset ilmiah.",
    highlight: "University Award · IIB Darmajaya 2025/2026",
    highlightId: "Penghargaan Kampus · IIB Darmajaya 2025/2026",
  },
  {
    src: "/gallery/rise-the-ranger-2-stage.jpg",
    title: "4th / First Runner Up · Rise The Ranger 2 (Satsiber TNI)",
    titleId: "Juara Harapan 1 · Rise The Ranger 2 (Satsiber TNI)",
    date: "2026",
    aspect: "square",
    objectPosition: "object-[center_30%]",
    description:
      "Achieved 4th Place / First Runner Up nationwide in the Rise The Ranger 2 Incident Response competition organized by Satuan Siber (Satsiber) TNI 2026.",
    descriptionId:
      "Meraih Juara Harapan 1 (4th Place / First Runner Up) tingkat nasional pada kompetisi Rise The Ranger 2 Incident Response yang diselenggarakan oleh Satuan Siber (Satsiber) TNI 2026.",
    highlight: "National Incident Response · Satsiber TNI 2026",
    highlightId: "Incident Response Nasional · Satsiber TNI 2026",
  },
  {
    src: "/gallery/rise-the-ranger-2-competition.jpg",
    title: "Live Incident Response Final · Rise The Ranger 2",
    titleId: "Babak Final Incident Response · Rise The Ranger 2",
    date: "2026",
    aspect: "square",
    objectPosition: "object-center",
    description:
      "Representing IIB Darmajaya during the live final round of Rise The Ranger 2 Satsiber TNI 2026, performing real-time cyber incident response, digital forensics, and defense investigation.",
    descriptionId:
      "Mewakili IIB Darmajaya pada babak final langsung Rise The Ranger 2 Satsiber TNI 2026 dalam penanganan insiden siber (incident response), forensik digital, dan investigasi pertahanan sistem.",
    highlight: "Final Round · Rise The Ranger 2 Satsiber TNI",
    highlightId: "Babak Final · Rise The Ranger 2 Satsiber TNI",
  },
]

function getGalleryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${SITE_INFO.url}/gallery#gallery`,
    url: `${SITE_INFO.url}/gallery`,
    name: title,
    description,
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${SITE_INFO.url}/#website`,
    },
    associatedMedia: GALLERY_ITEMS.map((item) => ({
      "@type": "ImageObject",
      name: item.title,
      contentUrl: item.src.startsWith("http")
        ? item.src
        : `${SITE_INFO.url}${item.src}`,
      uploadDate: item.date,
    })),
  }
}

export default function GalleryPage() {
  return (
    <>
      <Script
        id="gallery-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getGalleryJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <SectionSeparator />
      <div className="relative z-1 -mt-px border-x border-t border-line bg-card max-md:border-x-0">
        <GalleryGrid items={GALLERY_ITEMS} />
        <SectionSeparator sides={false} />
      </div>
    </>
  )
}
