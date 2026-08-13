import Reveal from './Reveal';
import { skillGroups } from '../data/site';

export default function Skills() {
  return (
    <section className="section section--tint" id="skills">
      <div className="shell">
        <div className="section-head section-head--split">
          <Reveal as="p" className="eyebrow">
            Capabilities
          </Reveal>
          <Reveal as="h2" className="section-head__title" delay={0.04}>
            What I work with
          </Reveal>
          <Reveal as="p" className="section-head__lede" delay={0.08}>
            Grouped by discipline rather than listed as logos, so the overlap
            between security, web, and data work stays readable.
          </Reveal>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal className="skill-panel" key={group.id} delay={i * 0.06}>
              <div className="skill-panel__head">
                <h3 className="skill-panel__title">{group.title}</h3>
                <p className="skill-panel__note">{group.note}</p>
              </div>
              <ul className="skill-panel__list">
                {group.items.map((item) => (
                  <li className="skill-chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
