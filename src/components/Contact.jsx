import Reveal from './Reveal';
import Icon from './Icon';
import { profile, whatsappUrl } from '../data/site';

/**
 * WhatsApp is the primary channel. The CTA and the first channel row both open
 * wa.me with the number already in the repository, prefilled with a short
 * message so the chat opens ready to send.
 */
export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="shell contact__grid">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="contact__title">Open to work and collaboration</h2>
          <p className="contact__lede">
            Available for web development, security assessment, and automation
            work. The fastest way to reach me is WhatsApp.
          </p>
          <div className="contact__cta">
            <a
              className="btn btn--wa"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" className="btn__icon" />
              Chat on WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="contact__channels" delay={0.06}>
          <a
            className="channel channel--primary"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="channel__icon">
              <Icon name="whatsapp" />
            </span>
            <span className="channel__text">
              <span className="channel__label">WhatsApp</span>
              <span className="channel__value">{profile.phone}</span>
            </span>
          </a>
          <a className="channel" href={`mailto:${profile.email}`}>
            <span className="channel__icon">
              <Icon name="mail" />
            </span>
            <span className="channel__text">
              <span className="channel__label">Email</span>
              <span className="channel__value">{profile.email}</span>
            </span>
          </a>
          <div className="channel">
            <span className="channel__icon">
              <Icon name="mapPin" />
            </span>
            <span className="channel__text">
              <span className="channel__label">Based in</span>
              <span className="channel__value">{profile.location}</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
