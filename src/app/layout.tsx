import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import dynamic from "next/dynamic"
import Script from "next/script"
import type { Person, ProfilePage, WebSite, WithContext } from "schema-dts"

import { Providers } from "@/components/providers"
import { META_THEME_COLORS, SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { SITE_OG_IMAGE } from "@/lib/seo"
import { decodeEmail } from "@/utils/string"

const Analytics =
  process.env.VERCEL === "1"
    ? dynamic(() => import("@vercel/analytics/next").then((m) => m.Analytics))
    : null
const SpeedInsights =
  process.env.VERCEL === "1"
    ? dynamic(() =>
        import("@vercel/speed-insights/next").then((m) => m.SpeedInsights)
      )
    : null

const fallbackProfileTitle = `${USER.displayName} | Web Developer, Cybersecurity & AI Engineer`
const profileTitle = USER.seoTitle ?? fallbackProfileTitle
const profileDescription = USER.seoDescription ?? USER.bio

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http")) return pathOrUrl
  return `${SITE_INFO.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

function getWebSiteJsonLd(): WebSite {
  return {
    "@type": "WebSite",
    "@id": `${SITE_INFO.url}/#website`,
    url: SITE_INFO.url,
    name: SITE_INFO.name,
    description: profileDescription,
    inLanguage: "en-US",
    publisher: {
      "@id": `${SITE_INFO.url}/#person`,
    },
  }
}

function getProfilePageJsonLd(): WithContext<ProfilePage> {
  const email = decodeEmail(USER.email)
  const person: Person = {
    "@type": "Person",
    "@id": `${SITE_INFO.url}/#person`,
    name: USER.displayName,
    alternateName: [USER.username],
    url: SITE_INFO.url,
    image: absoluteUrl(USER.avatar),
    jobTitle: USER.jobTitle,
    email: `mailto:${email}`,
    telephone: USER.phone,
    description: profileDescription,
    knowsAbout: USER.keywords,
    sameAs: USER.sameAs,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Institute of Informatics and Business (IIB) Darmajaya",
        url: "https://darmajaya.ac.id",
      },
    ],
    worksFor: USER.jobs.map((job) => ({
      "@type": "Organization",
      name: job.company,
      url: job.website,
    })),
    address: {
      "@type": "PostalAddress",
      addressCountry: USER.address,
    },
    mainEntityOfPage: `${SITE_INFO.url}/#profile-page`,
  }

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_INFO.url}/#profile-page`,
    url: SITE_INFO.url,
    name: profileTitle,
    headline: profileTitle,
    description: profileDescription,
    dateCreated: USER.dateCreated,
    dateModified: USER.dateModified,
    mainEntity: person,
  }
}

function getRootJsonLd() {
  const profilePage = getProfilePageJsonLd()
  const { "@context": context, ...profilePageGraphNode } = profilePage

  return {
    "@context": context,
    "@graph": [getWebSiteJsonLd(), profilePageGraphNode],
  }
}

// Runs synchronously before body paint to enforce dark mode by default
// unless the user explicitly selected light mode in sryaaji-theme.
const themeColorBootstrap = String.raw`
  try {
    var stored = localStorage.getItem('sryaaji-theme');
    var isDark = stored !== 'light';
    var root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
      var meta = document.querySelector('meta[name=\"theme-color\"]');
      if (meta) meta.setAttribute('content', '${META_THEME_COLORS.dark}');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
      var metaLight = document.querySelector('meta[name=\"theme-color\"]');
      if (metaLight) metaLight.setAttribute('content', '${META_THEME_COLORS.light}');
    }
  } catch (_) {}\

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos');
    }
  } catch (_) {}\
`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s | ${USER.displayName}`,
    default: profileTitle,
  },
  description: profileDescription,
  keywords: USER.keywords,
  applicationName: SITE_INFO.name,
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  authors: [
    {
      name: USER.displayName,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.displayName,
  publisher: USER.displayName,
  openGraph: {
    siteName: USER.displayName,
    url: "/",
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    title: profileTitle,
    description: profileDescription,
    images: [{ ...SITE_OG_IMAGE, url: absoluteUrl(SITE_OG_IMAGE.url) }],
  },
  twitter: {
    card: "summary_large_image",
    title: profileTitle,
    description: profileDescription,
    creator: `@${USER.username}`,
    images: [absoluteUrl(SITE_OG_IMAGE.url)],
  },
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    title: SITE_INFO.name,
    capable: true,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
  themeColor: META_THEME_COLORS.dark,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-color-bootstrap"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeColorBootstrap }}
        />
        <link
          rel="alternate"
          type="text/markdown"
          href="/llms.txt"
          title="LLMs.txt"
        />
        <link
          rel="preload"
          href="/fonts/geist-sans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/caveat-latin.woff2"
          as="font"
          type="font/woff2"
          fetchPriority="low"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist-mono-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <Script
          id="root-jsonld"
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getRootJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
        {Analytics ? <Analytics /> : null}
        {SpeedInsights ? <SpeedInsights /> : null}
      </body>
    </html>
  )
}
