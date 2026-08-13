import { m } from 'motion/react';
import { ciscoBadges, credlyBadgeUrl } from '../data/site';
import useReveal from '../hooks/useReveal';

/**
 * Cisco badge marquee.
 *
 * The track holds the badge list twice and translates by -50%, so the loop is
 * seamless with no jump. Duration scales with the badge count so speed per
 * badge stays constant, and CSS pauses the animation on hover and on
 * focus-within. Only `transform` animates, so it stays on the compositor.
 *
 * The duplicated half is aria-hidden, so assistive tech reads the 11 badges
 * once. prefers-reduced-motion turns the marquee into a normal horizontal
 * scroller (see components.css).
 *
 * Artwork: local WebP copies of the official Credly badge images, fetched from
 * Credly's public OpenBadges API for these exact badge IDs. Each badge links to
 * its official Credly page for verification. Deliberately not the embed.js
 * widget: that renders one iframe per badge, which cannot be marquee'd, paused,
 * or kept off the main thread.
 */
export default function BadgeMarquee() {
  const lap = [...ciscoBadges, ...ciscoBadges];
  const duration = `${ciscoBadges.length * 6}s`;
  const [ref, shown] = useReveal();

  return (
    <>
      <div className="marquee" style={{ '--marquee-duration': duration }}>
        <m.div
          ref={ref}
          className="marquee__track"
          initial={{ opacity: 0 }}
          animate={{ opacity: shown ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {lap.map((badge, i) => {
            const dup = i >= ciscoBadges.length;
            return (
              <a
                key={`${badge.id}-${i}`}
                className="badge-card"
                href={credlyBadgeUrl(badge.id)}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={dup ? 'true' : undefined}
                tabIndex={dup ? -1 : undefined}
              >
                <span className="badge-card__plate">
                  <img
                    src={`/badges/${badge.artwork}-128.webp`}
                    srcSet={`/badges/${badge.artwork}-128.webp 128w, /badges/${badge.artwork}-256.webp 256w`}
                    sizes="104px"
                    width="128"
                    height="128"
                    alt={dup ? '' : `${badge.name} badge, issued by Cisco`}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="badge-card__name">{badge.name}</span>
                <span className="badge-card__meta">
                  Cisco · {badge.issued.slice(0, 4)}
                </span>
                <span className="badge-card__kind">
                  {badge.kind === 'career-path' ? 'Career path' : 'Course'}
                </span>
              </a>
            );
          })}
        </m.div>
      </div>
      <p className="marquee-hint">
        {ciscoBadges.length} badges. Hover or focus to pause, then select a badge
        to open its official Credly record.
      </p>
    </>
  );
}
