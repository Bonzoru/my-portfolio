import { m } from 'motion/react';
import useReveal from '../hooks/useReveal';

/**
 * One entrance primitive for the whole site so timing stays consistent.
 *
 * `MotionConfig reducedMotion="user"` (see App) neutralises the transform for
 * users who ask for reduced motion; the opacity fade is kept because it is not
 * vestibular motion, and useReveal guarantees it always resolves to 1.
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
  const [ref, shown] = useReveal();

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
