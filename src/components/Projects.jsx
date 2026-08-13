import Reveal from './Reveal';
import Icon from './Icon';
import { projects } from '../data/site';

/**
 * Responsive sources for the screenshots that were already in /public.
 * Each entry maps the original file to the generated webp variants.
 */
const media = {
  '/xyro-1.png': {
    src: '/xyro-1-1024.webp',
    srcSet: '/xyro-1-640.webp 640w, /xyro-1-1024.webp 1024w',
    width: 1024,
    height: 486,
  },
  '/xyro-2.png': {
    src: '/xyro-2-1024.webp',
    srcSet: '/xyro-2-640.webp 640w, /xyro-2-1024.webp 1024w',
    width: 1024,
    height: 482,
  },
  '/telegram-bot-1.jpg': {
    src: '/telegram-bot-1-800.webp',
    srcSet: '/telegram-bot-1-800.webp 800w',
    width: 800,
    height: 1584,
    fit: 'contain',
  },
  '/telegram-bot-2.png': {
    src: '/telegram-bot-2-774.webp',
    srcSet: '/telegram-bot-2-774.webp 387w',
    width: 387,
    height: 300,
    fit: 'contain',
  },
  '/research-1.png': {
    src: '/research-1-672.webp',
    srcSet: '/research-1-672.webp 336w',
    width: 336,
    height: 257,
    fit: 'contain',
  },
  '/research-2.png': {
    src: '/research-2-500.webp',
    srcSet: '/research-2-500.webp 250w',
    width: 250,
    height: 254,
    fit: 'contain',
  },
};

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head section-head--split">
          <Reveal as="p" className="eyebrow">
            Selected work
          </Reveal>
          <Reveal as="h2" className="section-head__title" delay={0.04}>
            Things I have built and shipped
          </Reveal>
          <Reveal as="p" className="section-head__lede" delay={0.08}>
            Three projects that cover the range: a production data platform, an
            always-on automation service, and applied machine-learning research.
          </Reveal>
        </div>

        <div className="work__list">
          {projects.map((project, index) => (
            <article className="project" key={project.id}>
              <Reveal className="project__media" y={18}>
                <div
                  className={[
                    'project__frame',
                    project.images.length > 1 ? 'project__frame--pair' : '',
                    `project__frame--${project.mediaLayout || 'side'}`,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {project.images.map((img, i) => {
                    const m = media[img];
                    if (!m) return null;
                    return (
                      <img
                        key={img}
                        src={m.src}
                        srcSet={m.srcSet}
                        sizes="(min-width: 940px) 46vw, (min-width: 560px) 44vw, 88vw"
                        width={m.width}
                        height={m.height}
                        alt={`${project.title} — interface preview ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        data-fit={m.fit}
                      />
                    );
                  })}
                </div>
              </Reveal>

              <Reveal className="project__body" delay={0.06}>
                <p className="project__index">
                  {String(index + 1).padStart(2, '0')} — {project.year}
                </p>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__category">{project.category}</p>
                <p className="project__tagline">{project.tagline}</p>
                <p className="project__desc">{project.description}</p>

                <ul className="project__highlights">
                  {project.highlights.map((h) => (
                    <li className="project__highlight" key={h}>
                      <Icon name="check" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <ul className="project__tags">
                  {project.tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
