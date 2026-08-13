import Reveal from './Reveal';
import { awards, experience } from '../data/site';

/**
 * Awards use <Reveal as="li"> rather than their own whileInView so the
 * fast-scroll blank-content failure mode is handled in exactly one place
 * (see hooks/useReveal.js).
 */
export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <div className="section-head section-head--split">
          <Reveal as="p" className="eyebrow">
            Track record
          </Reveal>
          <Reveal as="h2" className="section-head__title" delay={0.04}>
            Experience and recognition
          </Reveal>
          <Reveal as="p" className="section-head__lede" delay={0.08}>
            Roles held alongside study, plus results from national and
            provincial cybersecurity competitions.
          </Reveal>
        </div>

        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal className="tl-item" key={item.id} delay={i * 0.05}>
              <p className="tl-period">{item.period}</p>
              <h3 className="tl-role">{item.role}</h3>
              <p className="tl-company">{item.company}</p>
              <p className="tl-desc">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="cred-block">
          <Reveal className="subhead">
            <h3 className="subhead__title">Awards</h3>
            <p className="subhead__meta">{awards.length} competition results</p>
          </Reveal>

          <ul className="awards__list">
            {awards.map((award, i) => (
              <Reveal
                as="li"
                className="award"
                key={award.id}
                y={12}
                delay={i * 0.05}
              >
                <span className="award__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="award__placement">{award.placement}</p>
                <p className="award__event">{award.event}</p>
                <p className="award__scope">{award.scope}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
