import Reveal from './Reveal';
import Icon from './Icon';
import { ciscoBadges, otherCredentials } from '../data/site';

export default function Credentials() {
  return (
    <section className="section section--tint" id="credentials">
      <div className="shell">
        <div className="section-head section-head--split">
          <Reveal as="p" className="eyebrow">
            Credentials
          </Reveal>
          <Reveal as="h2" className="section-head__title" delay={0.04}>
            Cisco digital badges
          </Reveal>
          <Reveal as="p" className="section-head__lede" delay={0.08}>
            Issued through Cisco Networking Academy. Each entry links to the
            official issuance record so it can be checked directly at the source.
          </Reveal>
        </div>

        <div className="creds">
          {ciscoBadges.map((badge, i) => (
            <Reveal className="cred-card" key={badge.id} delay={i * 0.06}>
              {/* Typographic emblem — the issuer's official badge artwork is not
                  bundled in this repository, so nothing here imitates it. */}
              <div className="cred-card__emblem" aria-hidden="true">
                <span className="cred-card__emblem-mark">CISCO</span>
                <span className="cred-card__emblem-sub">NetAcad</span>
              </div>

              <div className="cred-card__body">
                <p className="cred-card__issuer">{badge.issuer}</p>
                <h3 className="cred-card__name">{badge.name}</h3>
                <div className="cred-card__row">
                  <span className="cred-status">
                    <Icon name="shieldCheck" />
                    Verifiable credential
                  </span>
                  <span className="cred-card__year">Issued {badge.year}</span>
                </div>
                {badge.verifyUrl && (
                  <p>
                    <a
                      className="link-arrow"
                      href={badge.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify on netacad.com
                      <Icon name="arrowUpRight" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </p>
                )}
              </div>
            </Reveal>
          ))}

          <Reveal className="cred-note" delay={0.1}>
            <span>
              Only credentials with a record in this repository are listed. The
              official badge artwork and exact issue dates are held on Cisco’s
              own credential pages, which need a signed-in session to read — use
              the verify link above for the authoritative record.
            </span>
          </Reveal>
        </div>

        <div className="section-head" style={{ marginTop: 'var(--sp-8)' }}>
          <Reveal as="p" className="eyebrow">
            Other certifications
          </Reveal>
        </div>

        <Reveal as="ul" className="cred-list">
          {otherCredentials.map((cred) => (
            <li className="cred-list__item" key={cred.id}>
              <div>
                <p className="cred-list__name">{cred.name}</p>
                <p className="cred-list__meta">
                  <span>{cred.issuer}</span>
                  <span className="cred-list__dot">{cred.program}</span>
                </p>
              </div>
              <p className="cred-list__meta">{cred.year}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
