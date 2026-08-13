import { m } from 'motion/react';
import Reveal from './Reveal';
import { awards, experience } from '../data/site';

const ease = [0.16, 1, 0.3, 1];

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
              <m.li
                className="award"
                key={award.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px -4% 0px' }}
                transition={{ duration: 0.42, delay: i * 0.05, ease }}
              >
                <span className="award__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="award__placement">{award.placement}</p>
                <p className="award__event">{award.event}</p>
                <p className="award__scope">{award.scope}</p>
              </m.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
