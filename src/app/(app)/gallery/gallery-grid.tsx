"use client"

import Image from "next/image"

import { useTranslation } from "@/lib/i18n/use-translation"
import { cn } from "@/lib/utils"

export type GalleryItem = {
  src: string
  title: string
  titleId: string
  date: string
  description: string
  descriptionId: string
  highlight: string
  highlightId: string
  aspect?: "landscape" | "portrait" | "square"
  objectPosition?: string
  fullWidth?: boolean
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const { l } = useTranslation()

  return (
    <div className="grid grid-cols-1 gap-px border-b border-line bg-line sm:grid-cols-2">
      {items.map((item, index) => {
        const localizedTitle = l(item.title, item.titleId)
        const localizedDesc = l(item.description, item.descriptionId)
        const localizedHighlight = l(item.highlight, item.highlightId)
        const eager = index < 2

        return (
          <div
            key={item.src}
            className={cn(
              "flex flex-col bg-card p-3.5 sm:p-4",
              item.fullWidth && "sm:col-span-2"
            )}
          >
            <div
              className={cn(
                "group/media relative overflow-hidden rounded-xl select-none",
                item.aspect === "landscape"
                  ? "aspect-16/10 sm:aspect-16/9"
                  : "aspect-4/3 sm:aspect-square"
              )}
            >
              <Image
                src={item.src}
                alt={localizedTitle}
                fill
                sizes={
                  item.fullWidth
                    ? "(min-width: 768px) 700px, calc(100vw - 16px)"
                    : "(min-width: 768px) 360px, calc(100vw - 16px)"
                }
                loading={eager ? "eager" : "lazy"}
                fetchPriority={eager ? "high" : "auto"}
                quality={85}
                className={cn(
                  "object-cover transition-transform duration-500 ease-out group-hover/media:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/media:scale-100",
                  item.objectPosition ?? "object-center"
                )}
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
            </div>

            <div className="mt-3 flex flex-1 flex-col justify-between gap-2.5 px-0.5">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="line-clamp-1 text-sm font-semibold tracking-tight text-foreground">
                    {localizedTitle}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                {localizedDesc && (
                  <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                    {localizedDesc}
                  </p>
                )}
              </div>

              {localizedHighlight && (
                <span className="mt-auto font-mono text-[11px] text-muted-foreground/80">
                  {localizedHighlight}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
