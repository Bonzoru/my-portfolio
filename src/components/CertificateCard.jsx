import { m } from 'motion/react';
import Icon from './Icon';
import useReveal from '../hooks/useReveal';

const ease = [0.16, 1, 0.3, 1];

/**
 * One certificate row: name on the left, VERIFY on the right from 560px up,
 * stacked below that. Reusable for any issuer, which is how the Anthropic
 * certificates will drop in later with no redesign.
 *
 * Props mirror the shape in src/data/site.js:
 *   { id, name, verifyUrl?, issued? }
 */
export default function CertificateCard({ certificate, issuer, index = 0 }) {
  const [ref, shown] = useReveal();

  return (
    <m.li
      ref={ref}
      className="cert-card"
      initial={{ opacity: 0, y: 12 }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      /* Stagger caps at 8 so a long list never waits on a slow cascade. */
      transition={{ duration: 0.42, delay: Math.min(index, 8) * 0.05, ease }}
    >
      <div className="cert-card__text">
        <span className="cert-card__issuer">{issuer}</span>
        <span className="cert-card__name">{certificate.name}</span>
      </div>

      {certificate.verifyUrl && (
        <a
          className="verify-btn"
          href={certificate.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Verify
          <Icon name="externalLink" />
          <span className="sr-only">
            {certificate.name} (opens the official verification page in a new tab)
          </span>
        </a>
      )}
    </m.li>
  );
}
