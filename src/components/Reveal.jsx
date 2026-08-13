import { m } from 'motion/react';

/**
 * One entrance primitive for the whole site so timing stays consistent.
 * Motion's `MotionConfig reducedMotion="user"` (see App) neutralises the
 * transform for users who ask for reduced motion; the CSS media query in
 * index.css covers the non-JS transitions.
 */
const easeOut = [0.16, 1, 0.3, 1];

export default function Reveal({
  as = 'div',
  children,
  delay = 0,
  y = 14,
  className,
  ...rest
}) {
  const Tag = m[as] ?? m.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
