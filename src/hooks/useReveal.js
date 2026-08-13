import { useEffect, useRef, useState } from 'react';

/**
 * Shared "has this entered the viewport yet" flag.
 *
 * Why not Motion's `whileInView` / a plain IntersectionObserver: with threshold
 * 0, an element that travels from below the fold to above it inside a single
 * frame never reports `isIntersecting: true`. The observer sees `false` before
 * and `false` after, so with no state change there is often no callback at all,
 * and the element is left at opacity 0 permanently. That is reachable with a
 * flick scroll, a scrollbar drag, or a jump to an anchor, and it silently hides
 * real content. Measured: a 1.5x-viewport-per-step scroll left 18 of 29 cards
 * invisible.
 *
 * So visibility is resolved by measuring, driven by one shared rAF-throttled
 * scroll/resize listener for the whole page (not one listener per element).
 * An element reveals when its top edge is above the reveal line OR it has
 * already passed above the viewport. Reveals once, then unsubscribes.
 */

const subscribers = new Set();
let ticking = false;
let listening = false;

function measure() {
  ticking = false;
  const line = window.innerHeight * 0.94;
  for (const fn of subscribers) fn(line);
}

function schedule() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(measure);
}

function subscribe(fn) {
  subscribers.add(fn);
  if (!listening) {
    listening = true;
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
  }
  schedule();
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0 && listening) {
      listening = false;
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    }
  };
}

export default function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return undefined;

    let unsubscribe = () => {};
    const check = (line) => {
      const top = node.getBoundingClientRect().top;
      if (top < line) {
        setShown(true);
        unsubscribe();
      }
    };
    unsubscribe = subscribe(check);
    return () => unsubscribe();
  }, [shown]);

  return [ref, shown];
}
