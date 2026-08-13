/**
 * The site's single ambient background system: one hairline grid plus two very
 * soft accent glows. Pure CSS, fixed behind all content, aria-hidden, and
 * disabled by prefers-reduced-motion in components.css.
 *
 * Deliberately not a canvas or particle field: nothing here needs JS, so it
 * costs no main-thread work and cannot drop frames on a phone.
 */
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__grid" />
      <div className="backdrop__glow backdrop__glow--a" />
      <div className="backdrop__glow backdrop__glow--b" />
    </div>
  );
}
