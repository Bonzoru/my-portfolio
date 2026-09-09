import { useCallback, useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import Reveal from './Reveal';
import Icon from './Icon';
import ProjectDialog from './ProjectDialog';
import useReveal from '../hooks/useReveal';
import media from '../data/media';
import { projects } from '../data/site';

/**
 * A single work card. Split out as its own component because the reveal hook
 * cannot be called inside a .map() callback.
 */
function WorkCard({ project, index, onOpen }) {
  const cover = media[project.images[0]];
  const [ref, shown] = useReveal();

  return (
    <m.button
      ref={ref}
      id={`work-card-${project.id}`}
      type="button"
      className="work-card"
      layoutId={`project-${project.id}`}
      onClick={onOpen}
      aria-haspopup="dialog"
      initial={{ opacity: 0, y: 18 }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: index * 0.08 }}
      whileTap={{ scale: 0.985 }}
    >
      <div
        className="work-card__media"
        style={
          index === 0 && cover
            ? { aspectRatio: `${cover.width} / ${cover.height}` }
            : undefined
        }
      >
        {cover && (
          <img
            src={cover.src}
            srcSet={cover.srcSet}
            sizes="(min-width: 1200px) 580px, (min-width: 720px) 46vw, 92vw"
            width={cover.width}
            height={cover.height}
            alt={`${project.title}, interface preview`}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      <div className="work-card__body">
        <div className="work-card__top">
          <span className="work-card__index">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="work-card__year">{project.year}</span>
        </div>

        <h3 className="work-card__title">{project.title}</h3>
        <p className="work-card__category">{project.category}</p>
        <p className="work-card__tagline">{project.tagline}</p>

        <ul className="work-card__tags">
          {project.tags.slice(0, 4).map((tag) => (
            <li className="tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>

        <span className="work-card__more">
          View project detail
          <Icon name="arrowRight" />
        </span>
      </div>
    </m.button>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState(null);
  const active = projects.find((p) => p.id === openId) || null;

  const close = useCallback(() => {
    setOpenId(null);
    requestAnimationFrame(() => {
      document.getElementById(`work-card-${openId}`)?.focus();
    });
  }, [openId]);

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
            Open a card for the full detail.
          </Reveal>
        </div>

        <div className="work__grid">
          {projects.map((project, index) => (
            <WorkCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setOpenId(project.id)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectDialog project={active} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
