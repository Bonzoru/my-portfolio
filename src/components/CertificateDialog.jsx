import { useEffect, useRef } from 'react';
import { m } from 'motion/react';
import Icon from './Icon';

const ease = [0.16, 1, 0.3, 1];

/**
 * Certificate detail dialog. Shows the issuer logo, then the full grid of
 * certificates — each row has the certificate artwork, its name, a "Preview"
 * button (opens the PDF) and a "Verify" button (opens the official
 * verification page in a new tab).
 *
 * Accessibility mirrors ProjectDialog: role="dialog", aria-modal, Escape to
 * close, scroll lock, focus moved in and Tab cycled inside the panel.
 */
export default function CertificateDialog({ issuer, onClose }) {
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

  const titleId = `cd-title-${issuer.id}`;

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
        className="pd-panel cd-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        transition={{ duration: 0.4, ease }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pd-head">
          <div className="pd-head__text">
            <h3 className="pd-title" id={titleId}>
              {issuer.name} certificates
            </h3>
            <p className="pd-meta">{issuer.count} verified certificates</p>
          </div>
          <button ref={closeRef} className="pd-close" type="button" onClick={onClose}>
            <Icon name="close" />
            <span className="sr-only">Close certificate details</span>
          </button>
        </div>

        <div className="pd-body">
          <ul className="cd-list">
            {issuer.certificates.map((cert) => (
              <li className="cd-item" key={cert.id}>
                <img
                  className="cd-item__thumb"
                  src={cert.image}
                  alt=""
                  width="120"
                  height="80"
                  loading="lazy"
                  decoding="async"
                />
                <div className="cd-item__text">
                  <span className="cd-item__name">{cert.name}</span>
                </div>
                <div className="cd-item__actions">
                  {cert.pdf && (
                    <a
                      className="cd-btn"
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="eye" />
                      Preview
                      <span className="sr-only">Preview {cert.name} certificate</span>
                    </a>
                  )}
                  {cert.verifyUrl && (
                    <a
                      className="cd-btn cd-btn--primary"
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="externalLink" />
                      Verify
                      <span className="sr-only">
                        Verify {cert.name} on the official page (opens in a new tab)
                      </span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </m.div>
    </m.div>
  );
}