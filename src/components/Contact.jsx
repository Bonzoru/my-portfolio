import Reveal from './Reveal';
import Icon from './Icon';
import { profile, mailtoUrl } from '../data/site';

/**
 * Email is the primary channel. The CTA and the first channel row both open
 * the visitor's mail client prefilled to the address in the repository, so
 * there is a single, verifiable way to reach the owner.
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
            work. The fastest way to reach me is email.
          </p>
          <div className="contact__cta">
            <a
              className="btn btn--wa"
              href={mailtoUrl}
            >
              <Icon name="mail" className="btn__icon" />
              Send an email
            </a>
          </div>
        </Reveal>

        <Reveal className="contact__channels" delay={0.06}>
          <a className="channel channel--primary" href={mailtoUrl}>
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