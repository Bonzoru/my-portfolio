import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Crypto Market Information Aggregator',
    category: 'Telegram Bot · Python',
    tagline: 'Real-time crypto intelligence delivered to your Telegram.',
    description:
      'An automated Telegram bot that aggregates and forwards real-time information from various channels delivering on-chain data, macroeconomic updates, and large-scale whale movements into a single unified feed for traders.',
    images: ['/telegram-bot-1.jpg', '/telegram-bot-2.png'],
    tags: ['Python', 'Telegram API', 'Web3', 'Data Analysis', 'Automation'],
    highlights: [
      'Aggregates 10+ data sources in real-time',
      'Tracks whale wallet movements on-chain',
      'Macro economic signal parsing',
      'Deployed for a live trading community',
    ],
    year: '2024 Present',
  },
  {
    id: 2,
    title: 'Xyro Terminal',
    category: 'Web-based Crypto Terminal',
    tagline: 'The ultimate on-chain data and analytics platform for crypto communities.',
    description:
      'A web-based terminal built to help crypto community members analyze vast amounts of on-chain data in a single unified platform. It bridges the gap between raw blockchain data and actionable insights.',
    images: ['/xyro-1.png', '/xyro-2.png'],
    tags: ['React', 'Data Visualization', 'Web3', 'Analytics', 'Dashboard'],
    highlights: [
      'Performance Dashboard & Trading Journal',
      'Altcoin to Bitcoin Correlation Analysis',
      'Real-time Orderbook Liquidity',
      'Whale & Anomaly Transaction Tracking',
      'Integrated Economic News Feed',
    ],
    year: '2025 Present',
  },
  {
    id: 3,
    title: 'Seismic Tsunami Predictor (ML)',
    category: 'Machine Learning Research',
    tagline: 'Predicting tsunami potential based on seismic parameters using advanced ML algorithms.',
    description:
      'An in-depth data science research project analyzing over 128,000 rows of seismic earthquake data in Indonesia. The study compares the performance of Random Forest, K-Nearest Neighbor (KNN), and Support Vector Machine (SVM) algorithms. It implements SMOTE (Synthetic Minority Over-sampling Technique) to effectively handle data imbalance and predict tsunami likelihood with high accuracy.',
    images: ['/research-1.png', '/research-2.png'],
    tags: ['Machine Learning', 'Python', 'Data Science', 'Random Forest', 'SVM', 'SMOTE'],
    highlights: [
      'Published in Sinta 3 National Journal',
      'Trained on > 128,000 rows of seismic dataset',
      'Compared Random Forest, KNN, and SVM models',
      'Optimized imbalanced data using SMOTE',
      'Achieved high accuracy in predicting tsunami potential',
    ],
    year: '2024',
  },
];

/* ────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
const ProjectCard = ({ project, onClick }) => (
  <motion.div
    className="proj-card"
    onClick={() => onClick(project)}
    whileHover={{ y: -6 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
  >
    {/* Preview thumbnail */}
    <div className="proj-thumb">
      {project.images && project.images.length > 0 ? (
        <div className="proj-thumb-grid" style={{ gridTemplateColumns: project.images.length > 1 ? '1fr 1fr' : '1fr' }}>
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} preview ${i + 1}`}
              className="proj-thumb-img"
              onError={(e) => (e.target.style.display = 'none')}
            />
          ))}
        </div>
      ) : (
        <div className="proj-thumb-fallback">
          <span>📁</span>
        </div>
      )}
      <div className="proj-thumb-overlay">
        <span className="proj-view-btn">View Project ↗</span>
      </div>
    </div>

    {/* Card info */}
    <div className="proj-info">
      <h3 className="proj-title">{project.title}</h3>
      <p className="proj-category">{project.category}</p>
    </div>
  </motion.div>
);

/* ────────────────────────────────────────────
   PROJECT MODAL
───────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-panel"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>

          {/* Image gallery */}
          <div className="modal-gallery">
            {project.images && project.images.length > 0 ? (
              <div className="modal-gallery-grid" style={{ gridTemplateColumns: project.images.length > 1 ? '1fr 1fr' : '1fr' }}>
                {project.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                    className="modal-gallery-img"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                ))}
              </div>
            ) : (
              <div className="modal-gallery-fallback">No preview available</div>
            )}
          </div>

          {/* Content */}
          <div className="modal-body">
            <div className="modal-meta">
              <span className="modal-category-badge">{project.category}</span>
            </div>

            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-tagline">{project.tagline}</p>
            <p className="modal-description">{project.description}</p>

            {/* Highlights */}
            {project.highlights && (
              <div className="modal-highlights">
                <h4>Key Highlights</h4>
                <ul>
                  {project.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="highlight-dot"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech tags */}
            {project.tags && (
              <div className="modal-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ────────────────────────────────────────────
   MAIN PROJECTS SECTION
───────────────────────────────────────────── */
const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.p
          className="projects-eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          SOME OF MY LATEST WORK
        </motion.p>

        <motion.div
          className="proj-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show:   { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
              }}
            >
              <ProjectCard project={project} onClick={setSelected} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
