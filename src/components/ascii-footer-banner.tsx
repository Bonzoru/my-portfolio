"use client"

import { AsciiBanner } from "@/components/ascii-banner"
import { useTranslation } from "@/lib/i18n/use-translation"

export interface AsciiFooterBannerProps {
  className?: string
}

export function AsciiFooterBanner({ className = "" }: AsciiFooterBannerProps) {
  const { l } = useTranslation()

  return (
    <div
      role="region"
      aria-label="Footer workspace banner"
      className={`relative min-h-[195px] w-full overflow-hidden border-b border-line bg-card sm:min-h-[250px] select-none ${className}`}
    >
      <div className="absolute inset-0">
        <AsciiBanner src="/banner-footer.webp" alt="Footer Workspace Banner" />
      </div>

      {/* Subtle gradient & inner vignette so text remains crisp over the cityscape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-5 bg-gradient-to-r from-black/65 via-black/35 to-black/20 shadow-[inset_0_0_24px_rgba(0,0,0,0.45),inset_0_1px_3px_rgba(0,0,0,0.3),inset_0_-1px_3px_rgba(0,0,0,0.3)]"
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-center px-5 sm:px-8">
        <div className="max-w-lg sm:max-w-xl">
          <h2 className="text-lg font-bold tracking-tight text-white leading-snug sm:text-2xl sm:leading-tight sm:whitespace-nowrap">
            {l(
              "Building the future with web, security, and AI.",
              "Membangun masa depan dengan web, keamanan siber, dan AI."
            )}
          </h2>

          <p className="mt-1.5 text-xs leading-relaxed text-white/85 sm:mt-2 sm:text-sm max-w-sm sm:max-w-lg">
            {l(
              "Available for web development, offensive security assessment, and AI automation workflows.",
              "Tersedia untuk pengembangan web, pengujian keamanan siber (security assessment), dan otomatisasi AI."
            )}
          </p>

          <div className="mt-3.5 sm:mt-4.5">
            <a
              href="mailto:suryaaji237@gmail.com"
              className="inline-flex h-8 shrink-0 items-center justify-center rounded-[min(var(--radius-lg),10px)] bg-white px-3.5 text-sm font-medium text-zinc-950 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>{l("Get in touch", "Hubungi Saya")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
