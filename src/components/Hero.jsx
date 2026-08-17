import { m } from 'motion/react';
import Icon from './Icon';
import { profile, whatsappUrl } from '../data/site';

const ease = [0.16, 1, 0.3, 1];

/** Staggered entrance, hero only. The rest of the page uses <Reveal/>. */
const rise = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease },
});

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <div>
          <m.p className="hero__status" {...rise(0)}>
            <Icon name="mapPin" />
            {profile.location}
          </m.p>

          <m.h1 className="hero__title" {...rise(0.06)}>
            {profile.name.split(' ').slice(0, 2).join(' ')}
            <br />
            <em>{profile.name.split(' ').slice(2).join(' ')}</em>
          </m.h1>

          <m.p className="hero__lede" {...rise(0.12)}>
            {profile.headline}
          </m.p>

          <m.div className="hero__actions" {...rise(0.18)}>
            <a className="btn" href="#work">
              View selected work
              <Icon name="arrowRight" className="btn__icon" />
            </a>
            <a className="btn btn--ghost" href="#about">
              More about me
            </a>
          </m.div>

          <m.dl className="hero__meta" {...rise(0.24)}>
            <div className="hero__meta-row">
              <dt className="hero__meta-key">Focus</dt>
              <dd className="hero__meta-val">
                <span className="nowrap">Web development</span> ·{' '}
                <span className="nowrap">Cybersecurity</span> ·{' '}
                <span className="nowrap">AI engineering</span>
              </dd>
            </div>
            <div className="hero__meta-row">
              <dt className="hero__meta-key">Education</dt>
              <dd className="hero__meta-val">
                B.Eng. Informatics Engineering, Darmajaya Institute
              </dd>
            </div>
            <div className="hero__meta-row">
              <dt className="hero__meta-key">Contact</dt>
              <dd className="hero__meta-val">
                <a className="hero__meta-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </dd>
            </div>
          </m.dl>
        </div>

        <m.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          <img
            src="/surya-dev-640.webp"
            srcSet="/surya-dev-640.webp 640w, /surya-dev-1024.webp 1024w"
            sizes="(min-width: 820px) 380px, 78vw"
            width="640"
            height="639"
            alt={`Portrait of ${profile.name}`}
            fetchPriority="high"
            decoding="async"
          />
        </m.div>
      </div>
    </section>
  );
}
