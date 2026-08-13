/**
 * Responsive sources for the screenshots that already live in /public.
 * Each key is the original file path recorded in src/data/site.js; the value
 * points at the generated WebP variants and the real intrinsic size, so the
 * browser can reserve space and avoid layout shift.
 *
 * `fit: 'contain'` marks captures that would be destroyed by a cover crop
 * (phone screenshots and portrait figures).
 */
const media = {
  '/xyro-1.png': {
    src: '/xyro-1-1024.webp',
    srcSet: '/xyro-1-640.webp 640w, /xyro-1-1024.webp 1024w',
    width: 1024,
    height: 486,
  },
  '/xyro-2.png': {
    src: '/xyro-2-1024.webp',
    srcSet: '/xyro-2-640.webp 640w, /xyro-2-1024.webp 1024w',
    width: 1024,
    height: 482,
  },
  '/telegram-bot-1.jpg': {
    src: '/telegram-bot-1-800.webp',
    srcSet: '/telegram-bot-1-800.webp 800w',
    width: 800,
    height: 1584,
    fit: 'contain',
  },
  '/telegram-bot-2.png': {
    src: '/telegram-bot-2-774.webp',
    srcSet: '/telegram-bot-2-774.webp 387w',
    width: 387,
    height: 300,
    fit: 'contain',
  },
  '/research-1.png': {
    src: '/research-1-672.webp',
    srcSet: '/research-1-672.webp 336w',
    width: 336,
    height: 257,
    fit: 'contain',
  },
  '/research-2.png': {
    src: '/research-2-500.webp',
    srcSet: '/research-2-500.webp 250w',
    width: 250,
    height: 254,
    fit: 'contain',
  },
};

export default media;
