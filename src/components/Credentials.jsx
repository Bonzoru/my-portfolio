import { useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import Icon from './Icon';
import Reveal from './Reveal';
import BadgeMarquee from './BadgeMarquee';
import CertificateDialog from './CertificateDialog';
import { fortinetBadges } from '../data/site';

const ease = [0.16, 1, 0.3, 1];

/**
 * Verified certifications section, redesigned as two issuer cards side by
 * side (Komdigi left, Anthropic right). Each card fronts with the issuer
 * logo, a count, and a "View certification detail" button that opens a
 * dialog listing every certificate with its own preview + Verify link.
 */
export default function Credentials({ issuers }) {
  const [active, setActive] = useState(null);

  return (
    <section className="section section--tint" id="credentials">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow">Credentials</p>
          <h2 className="section-head__title">Verified Certification & Training</h2>
          <p className="section-head__lede">
            Every certificate opens the issuer&apos;s own verification page, so
            each one can be checked at the source.
          </p>
        </div>

        <div className="cred-grid">
          {issuers.map((iss) => (
            <m.article
              key={iss.id}
              className="cred-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="cred-card__head">
                <img
                  className="cred-card__logo"
                  src={iss.logo}
                  alt={`${iss.name} logo`}
                  width="96"
                  height="96"
                />
                <div className="cred-card__title">
                  <h3 className="cred-card__name">{iss.name}</h3>
                  <p className="cred-card__meta">
                    {iss.count} certificates
                  </p>
                </div>
              </div>
              <p className="cred-card__desc">{iss.description}</p>
              <button
                type="button"
                className="btn cred-card__btn"
                onClick={() => setActive(iss)}
              >
                View certification detail
                <Icon name="arrowRight" className="btn__icon" />
              </button>
            </m.article>
          ))}
        </div>

        <div className="cred-block">
          <Reveal className="subhead">
            <h3 className="subhead__title">Cisco Networking Academy</h3>
            <p className="subhead__meta">
              Digital badges on Credly
            </p>
          </Reveal>
          <BadgeMarquee />
        </div>

        <div className="cred-block">
          <Reveal className="subhead">
            <h3 className="subhead__title">Fortinet Training Institute</h3>
            <p className="subhead__meta">
              3 certified badges
            </p>
          </Reveal>
          <div className="badges-static-grid">
            {fortinetBadges.map((badge, i) => (
              <Reveal
                as="a"
                key={badge.id}
                className="badge-card"
                href={badge.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                delay={i * 0.05}
              >
                <span className="badge-card__plate">
                  <img
                    src={badge.image}
                    width="128"
                    height="128"
                    alt={`${badge.name} badge, issued by Fortinet`}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="badge-card__name">{badge.name}</span>
                <span className="badge-card__meta">Fortinet</span>
                <span className="badge-card__kind">Certification</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <CertificateDialog issuer={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}