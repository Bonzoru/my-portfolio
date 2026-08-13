/**
 * Inline icon set. Kept local so the site ships no icon dependency and no
 * emoji-as-icon. Stroke geometry follows the Lucide 24x24 grid.
 */
const paths = {
  arrowUpRight: <path d="M7 17 17 7M9 7h8v8" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m4 12.5 5 5L20 6.5" />,
  shieldCheck: (
    <>
      <path d="M12 3l7.5 3v5.2c0 4.6-3.1 8.1-7.5 9.8-4.4-1.7-7.5-5.2-7.5-9.8V6z" />
      <path d="m9 12 2.2 2.2L15.4 10" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h3l1.4 3.6-2 1.4a11.5 11.5 0 0 0 5.5 5.5l1.4-2 3.6 1.4v3a1.6 1.6 0 0 1-1.8 1.6A15.5 15.5 0 0 1 5 5.3 1.6 1.6 0 0 1 6.6 3.5Z" />
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  dot: <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.6v2M12 19.4v2M2.6 12h2M19.4 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4" />
    </>
  ),
  moon: <path d="M20 14.3A8.4 8.4 0 0 1 9.7 4a8.5 8.5 0 1 0 10.3 10.3Z" />,
  whatsapp: (
    <>
      <path d="M4.2 19.8l1.1-3.9a8 8 0 1 1 3 2.9l-4.1 1z" />
      <path d="M9.1 8.4c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.7 1.6c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.3 0 .6a7 7 0 0 0 2.6 2.2c.3.1.4 0 .6-.1l.5-.6c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5v.6c0 .4-.4.8-.8 1a2.6 2.6 0 0 1-1.8.3 9.7 9.7 0 0 1-5.6-4.8 3 3 0 0 1-.4-1.6c0-.6.2-1.1.3-1.4z" />
    </>
  ),
  externalLink: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M18 14.5V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V7.5A1.5 1.5 0 0 1 5 6h4.5" />
    </>
  ),
  maximize: <path d="M9 4H5.5A1.5 1.5 0 0 0 4 5.5V9M15 4h3.5A1.5 1.5 0 0 1 20 5.5V9M20 15v3.5a1.5 1.5 0 0 1-1.5 1.5H15M4 15v3.5A1.5 1.5 0 0 0 5.5 20H9" />,
};

export default function Icon({ name, className, ...rest }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {d}
    </svg>
  );
}
