"use client"

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  ShieldCheckIcon,
} from "lucide-react"
import React, { useEffect, useRef, useState } from "react"

import { DIGITAL_BADGES, type DigitalBadge } from "@/features/portfolio/data/badges"
import { cn } from "@/lib/utils"

import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "../panel"

const CISCO_BADGES = DIGITAL_BADGES.filter((b) => b.issuer === "Cisco")
const FORTINET_BADGES = DIGITAL_BADGES.filter((b) => b.issuer === "Fortinet")

export function DigitalBadges() {
  return (
    <Panel id="badges">
      <PanelHeader className="flex flex-wrap items-center justify-between gap-2">
        <PanelTitle>
          Badges
          <PanelTitleSup>({DIGITAL_BADGES.length})</PanelTitleSup>
        </PanelTitle>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheckIcon className="size-3.5 text-emerald-500" />
          <span className="font-mono">Credly Verified</span>
        </div>
      </PanelHeader>

      <div className="divide-y divide-line">
        {/* Top: Cisco Networking Academy */}
        <BadgeDepthCarousel
          title="Cisco Networking Academy"
          subtitle="Digital Badges on Credly"
          badges={CISCO_BADGES}
          intervalMs={3000}
          initialDelayMs={0}
          maxVisibleOffset={2}
        />

        {/* Bottom: Fortinet Training Institute (NSE) */}
        <BadgeDepthCarousel
          title="Fortinet Training Institute"
          subtitle="NSE Certified Cybersecurity"
          badges={FORTINET_BADGES}
          intervalMs={3400}
          initialDelayMs={1500}
          maxVisibleOffset={1}
        />
      </div>
    </Panel>
  )
}

interface BadgeDepthCarouselProps {
  title: string
  subtitle: string
  badges: DigitalBadge[]
  intervalMs?: number
  initialDelayMs?: number
  maxVisibleOffset?: number
}

function BadgeDepthCarousel({
  title,
  subtitle,
  badges,
  intervalMs = 3000,
  initialDelayMs = 0,
  maxVisibleOffset = 2,
}: BadgeDepthCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const total = badges.length

  useEffect(() => {
    if (isHovered || total <= 1) return

    let intervalId: ReturnType<typeof setInterval> | null = null
    const timeoutId = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % total)
      intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % total)
      }, intervalMs)
    }, initialDelayMs || intervalMs)

    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [isHovered, total, intervalMs, initialDelayMs])

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total)
  const next = () => setActiveIndex((i) => (i + 1) % total)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current
    const diff = touchStartX.current - endX
    if (Math.abs(diff) > 36) {
      if (diff > 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  const activeBadge = badges[activeIndex] ?? badges[0]

  return (
    <div
      className="px-3 py-2 sm:px-4 sm:py-2.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sub-header */}
      <div className="mb-1 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-medium text-foreground">{title}</h3>
          <p className="font-mono text-[11px] text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-md bg-muted/60 px-2 py-0.5 font-mono text-[11px] tabular-nums text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
          <a
            href={activeBadge.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-line bg-card px-2 py-0.5 font-mono text-[11px] font-medium text-foreground transition-colors hover:bg-accent"
          >
            Verify
            <ExternalLinkIcon className="size-2.5" />
          </a>
        </div>
      </div>

      {/* 3D Depth Stage with Left & Right Arrow Buttons */}
      <div className="relative flex h-33 w-full items-center justify-center overflow-hidden sm:h-35 [perspective:900px]">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-1 z-30 flex size-7 cursor-pointer items-center justify-center rounded-full border border-line bg-card/90 text-foreground shadow-sm backdrop-blur-xs transition-all hover:scale-105 hover:bg-accent active:scale-95 sm:left-2 sm:size-8"
          aria-label={`Previous ${title} badge`}
        >
          <ChevronLeftIcon className="size-4" />
        </button>

        {/* 3D Cards */}
        <div className="relative flex size-full items-center justify-center [transform-style:preserve-3d]">
          {badges.map((badge, index) => {
            let offset = index - activeIndex
            if (total > 2) {
              if (offset > Math.floor(total / 2)) offset -= total
              if (offset < -Math.floor(total / 2)) offset += total
            }

            if (Math.abs(offset) > maxVisibleOffset) return null

            const abs = Math.abs(offset)
            const translateX = offset * 68
            const translateZ = -abs * 60
            const rotateY = offset * -22
            const scale = offset === 0 ? 1 : Math.max(0.72, 1 - abs * 0.15)
            const opacity = offset === 0 ? 1 : Math.max(0.32, 1 - abs * 0.34)

            return (
              <div
                key={badge.id}
                style={{
                  transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex: 20 - abs,
                }}
                onClick={() => {
                  if (offset === 0) {
                    window.open(badge.verifyUrl, "_blank", "noopener,noreferrer")
                  } else {
                    setActiveIndex(index)
                  }
                }}
                role="button"
                tabIndex={offset === 0 ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    if (offset === 0) {
                      window.open(badge.verifyUrl, "_blank", "noopener,noreferrer")
                    } else {
                      setActiveIndex(index)
                    }
                  }
                }}
                className={cn(
                  "absolute flex h-29 w-25 cursor-pointer flex-col items-center justify-between rounded-xl border bg-card p-1.5 text-center shadow-sm transition-all duration-500 ease-out select-none sm:h-31 sm:w-28 sm:p-2",
                  offset === 0
                    ? "border-foreground/35 shadow-md ring-1 ring-foreground/10"
                    : "border-line hover:border-foreground/20"
                )}
              >
                <span className="font-mono text-[9px] text-muted-foreground sm:text-[10px]">
                  {badge.kind}
                </span>

                <img
                  src={badge.image}
                  alt={badge.name}
                  width={52}
                  height={52}
                  className="size-11 object-contain drop-shadow-xs sm:size-12"
                  loading="lazy"
                  draggable={false}
                />

                <span className="line-clamp-2 text-[10px] font-medium leading-tight text-foreground sm:text-[11px]">
                  {badge.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={next}
          className="absolute right-1 z-30 flex size-7 cursor-pointer items-center justify-center rounded-full border border-line bg-card/90 text-foreground shadow-sm backdrop-blur-xs transition-all hover:scale-105 hover:bg-accent active:scale-95 sm:right-2 sm:size-8"
          aria-label={`Next ${title} badge`}
        >
          <ChevronRightIcon className="size-4" />
        </button>
      </div>
    </div>
  )
}
