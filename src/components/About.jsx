import Reveal from './Reveal';
import { about } from '../data/site';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="section-head section-head--split">
          <Reveal as="p" className="eyebrow">
            About
          </Reveal>
          <Reveal as="h2" className="section-head__title" delay={0.04}>
            Security-minded engineer, product-minded builder.
          </Reveal>
          <Reveal as="p" className="section-head__lede" delay={0.08}>
            {about.paragraphs[0]}
          </Reveal>
        </div>

        <div className="about__grid">
          <Reveal className="about__prose">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </Reveal>

          <Reveal className="about__facts" delay={0.08}>
            {about.facts.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <span className="about__fact-value">{fact.value}</span>
                <span className="about__fact-label">{fact.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
