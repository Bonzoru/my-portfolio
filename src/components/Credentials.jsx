import Reveal from './Reveal';
import BadgeMarquee from './BadgeMarquee';
import CertificateCard from './CertificateCard';
import {
  anthropicCertificates,
  ciscoBadges,
  komdigiCertificates,
} from '../data/site';

/**
 * Credentials, split by issuer instead of one long block:
 *   1. Cisco / Credly  -> badge marquee, each badge links to its Credly record
 *   2. Komdigi         -> one card per certificate with a VERIFY link
 *   3. Anthropic       -> reserved slot, rendered from an empty array
 *
 * The Anthropic block reads `anthropicCertificates` through the same
 * CertificateCard as Komdigi. Adding entries to that array is all it takes to
 * populate it; no layout or component change is needed.
 */
export default function Credentials() {
  return (
    <section className="section section--tint" id="credentials">
      <div className="shell">
        <div className="section-head section-head--split">
          <Reveal as="p" className="eyebrow">
            Credentials
          </Reveal>
          <Reveal as="h2" className="section-head__title" delay={0.04}>
            Verified certifications
          </Reveal>
          <Reveal as="p" className="section-head__lede" delay={0.08}>
            Grouped by issuer. Every entry links to the issuer's own
            verification page, so each one can be checked at the source.
          </Reveal>
        </div>

        {/* 1. Cisco / Credly */}
        <div className="cred-block">
          <Reveal className="subhead">
            <h3 className="subhead__title">Cisco Networking Academy</h3>
            <p className="subhead__meta">
              {ciscoBadges.length} digital badges on Credly
            </p>
          </Reveal>
          <BadgeMarquee />
        </div>

        {/* 2. Komdigi */}
        <div className="cred-block">
          <Reveal className="subhead">
            <h3 className="subhead__title">Komdigi Digital Talent</h3>
            <p className="subhead__meta">
              {komdigiCertificates.length} certificates
            </p>
          </Reveal>
          <ul className="komdigi__grid">
            {komdigiCertificates.map((cert, i) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                issuer="Komdigi"
                index={i}
              />
            ))}
          </ul>
        </div>

        {/* 3. Anthropic */}
        <div className="cred-block">
          <Reveal className="subhead">
            <h3 className="subhead__title">Anthropic</h3>
            <p className="subhead__meta">
              {anthropicCertificates.length > 0
                ? `${anthropicCertificates.length} certificates`
                : 'Reserved'}
            </p>
          </Reveal>

          {anthropicCertificates.length > 0 ? (
            <ul className="komdigi__grid">
              {anthropicCertificates.map((cert, i) => (
                <CertificateCard
                  key={cert.id}
                  certificate={cert}
                  issuer="Anthropic"
                  index={i}
                />
              ))}
            </ul>
          ) : (
            <Reveal className="cred-pending">
              <p className="cred-pending__title">Not published yet</p>
              <p className="cred-pending__note">
                This block is wired to the same certificate component as the
                Komdigi list. The certificates will appear here once their files
                are added, with no layout change required.
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
