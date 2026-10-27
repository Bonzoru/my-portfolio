import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

const DEFAULT_SITE_URL = "https://sryaaji.vercel.app"

function normalizeSiteUrl(value?: string) {
  if (!value) return DEFAULT_SITE_URL

  const url = value.startsWith("http") ? value : `https://${value}`
  return url.replace(/\/+$/, "")
}

export const SITE_INFO = {
  name: USER.displayName,
  url: normalizeSiteUrl(process.env.APP_URL),
  ogImage: USER.ogImage,
  description: USER.seoDescription ?? USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#000000",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
]

export const X_HANDLE = "@sryaaji"
export const GITHUB_USERNAME = ""
export const GITHUB_REPO = ""
export const GITHUB_REPO_URL = "https://sryaaji.vercel.app"
export const UTM_PARAMS = {
  utm_source: "sryaaji",
}
