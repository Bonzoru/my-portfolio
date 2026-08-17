import { useEffect } from 'react';

/**
 * Global media protection.
 *
 * Blocks the two practical ways a visitor can save an image from the page:
 *   - right-click (context menu "Save image as...")
 *   - drag-and-drop the image onto the desktop
 *
 * Combined with the CSS layer (user-drag: none, user-select: none,
 * -webkit-touch-callout: none) and the transparent overlay on protected
 * figures this makes casual copying annoying. It deliberately does NOT try
 * to block keyboard screenshots (PrintScreen / OS screenshot tools): those
 * are system-level and any attempt to block them would be both ineffective
 * and hostile to the visitor.
 *
 * The hook is mounted once at the app root and attaches native listeners so
 * React's synthetic event system is not involved.
 */
export default function MediaProtection() {
  useEffect(() => {
    const prevent = (e) => e.preventDefault();

    const onContextMenu = (e) => {
      const t = e.target;
      // Only interfere when the click is on (or inside) an image, a canvas
      // or the certificate lightbox. Text and UI stay fully usable.
      if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
        e.preventDefault();
      }
    };

    const onDragStart = (e) => {
      if (e.target instanceof HTMLImageElement) e.preventDefault();
    };

    document.addEventListener('contextmenu', onContextMenu);
    document.addEventListener('dragstart', onDragStart);
    // Belt-and-braces: also drop the generic image default handler.
    document.addEventListener('selectstart', prevent);
    return () => {
      document.removeEventListener('contextmenu', onContextMenu);
      document.removeEventListener('dragstart', onDragStart);
      document.removeEventListener('selectstart', prevent);
    };
  }, []);

  return null;
}
