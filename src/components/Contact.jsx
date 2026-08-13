import Reveal from './Reveal';
import Icon from './Icon';
import { profile } from '../data/site';

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
        </Reveal>

        <Reveal className="contact__channels" delay={0.06}>
          <a className="channel" href={`mailto:${profile.email}`}>
            <span className="channel__icon">
              <Icon name="mail" />
            </span>
            <span className="channel__text">
              <span className="channel__label">Email</span>
              <span className="channel__value">{profile.email}</span>
            </span>
          </a>
          <a className="channel" href={`tel:${profile.phoneHref}`}>
            <span className="channel__icon">
              <Icon name="phone" />
            </span>
            <span className="channel__text">
              <span className="channel__label">Phone</span>
              <span className="channel__value">{profile.phone}</span>
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
