import { useEffect, useRef } from 'react';
import { m } from 'motion/react';
import Icon from './Icon';
import media from '../data/media';

const ease = [0.16, 1, 0.3, 1];

/**
 * Project detail dialog.
 *
 * The card and this panel share `layoutId={'project-' + id}`, so Motion
 * animates the card growing into the panel instead of cross-fading two
 * unrelated boxes. AnimatePresence in Projects handles the exit.
 *
 * Accessibility: role="dialog" + aria-modal, labelled by the title, Escape to
 * close, background scroll locked, focus moved in on open and returned to the
 * triggering card on close, and Tab cycled inside the panel.
 */
export default function ProjectDialog({ project, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusables = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const titleId = `pd-title-${project.id}`;
  const shots = project.images.map((img) => ({ img, m: media[img] })).filter((s) => s.m);

  return (
    <m.div
      className="pd-scrim"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <m.div
        ref={panelRef}
        className="pd-panel"
        layoutId={`project-${project.id}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        transition={{ duration: 0.4, ease }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pd-head">
          <div className="pd-head__text">
            <h3 className="pd-title" id={titleId}>
              {project.title}
            </h3>
            <p className="pd-meta">
              {project.category} · {project.year}
            </p>
          </div>
          <button ref={closeRef} className="pd-close" type="button" onClick={onClose}>
            <Icon name="close" />
            <span className="sr-only">Close project details</span>
          </button>
        </div>

        <div className="pd-body">
          <div
            className={`pd-shots${
              shots.length > 1 && project.mediaLayout === 'side' ? ' pd-shots--side' : ''
            }`}
          >
            {shots.map(({ img, m: src }, i) => (
              <img
                key={img}
                src={src.src}
                srcSet={src.srcSet}
                sizes="(min-width: 720px) 800px, 92vw"
                width={src.width}
                height={src.height}
                alt={`${project.title}, interface preview ${i + 1}`}
                decoding="async"
              />
            ))}
          </div>

          <p className="pd-lede">{project.tagline}</p>
          <p className="pd-desc">{project.description}</p>

          <div>
            <p className="pd-section-title">What it does</p>
            <ul className="pd-list">
              {project.highlights.map((h) => (
                <li key={h}>
                  <Icon name="check" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="pd-section-title">Built with</p>
            <ul className="pd-tags">
              {project.tags.map((tag) => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </m.div>
    </m.div>
  );
}
