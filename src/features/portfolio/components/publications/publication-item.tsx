"use client"

import { format } from "date-fns"
import { BookOpenIcon } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import type { Publication } from "@/features/portfolio/types/publications"
import { useTranslation } from "@/lib/i18n/use-translation"
import { cn } from "@/lib/utils"

export function PublicationItem({
  className,
  publication,
}: {
  className?: string
  publication: Publication
}) {
  const { t } = useTranslation()

  return (
    <div
      className={cn(
        "group flex items-center pr-2 transition-colors duration-200 ease-out hover:bg-accent-muted",
        className
      )}
    >
      <div className="flex w-15 shrink-0 items-center justify-center">
        <div
          className={cn(
            "flex size-6 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background",
            "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4"
          )}
        >
          <BookOpenIcon />
        </div>
      </div>

      <div className="flex-1 border-l border-dashed border-line p-4 pr-2">
        <p className="mb-1 leading-snug font-medium text-balance">
          {publication.title}
        </p>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <dl>
            <dt className="sr-only">{t.publications.journal}</dt>
            <dd>{publication.journal}</dd>
          </dl>

          <Separator
            className="data-vertical:h-4 data-vertical:self-center"
            orientation="vertical"
          />

          <dl>
            <dt className="sr-only">{t.publications.published}</dt>
            <dd>
              <time
                suppressHydrationWarning
                dateTime={new Date(publication.date).toISOString()}
              >
                {format(new Date(publication.date), "MM.yyyy")}
              </time>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  )
}
