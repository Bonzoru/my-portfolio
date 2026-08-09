import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificationsData = [
  {
    id: 1,
    issuerTitle: 'Cisco',
    date: '2026',
    logo: '🛡️',
    items: [
      {
        id: 'cisco-1',
        name: 'Endpoint Security',
        type: 'link',
        url: 'https://www.netacad.com/certificates/issuanceId=e3d16ab7-3e5b-47dd-b3b7-fca5046bf828'
      }
    ]
  },
  {
    id: 2,
    issuerTitle: 'Komdigi',
    date: '2026',
    logo: '🤖',
    items: [
      {
        id: 'komdigi-1',
        name: 'AI Engineer For Milenial (Micro Skill)',
        type: 'link',
        url: '#'
      }
    ]
  },
  {
    id: 3,
    issuerTitle: 'Anthropic',
    date: '2026',
    logo: '🧠',
    items: [
      {
        id: 'anthropic-1',
        name: 'Introduction to subagents',
        type: 'image',
        imageSrc: '/anthropic-cert.jpg'
      }
    ]
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const closeModal = () => {
    setSelectedCert(null);
    setActiveImage(null);
  };

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <motion.p
          className="section-eyebrow text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          CONTINUOUS LEARNING
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="certs-grid">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="cert-logo-container">
                <span className="cert-logo">{cert.logo}</span>
              </div>
              <div className="cert-info">
                <div>
                  <h3 className="cert-title">{cert.issuerTitle}</h3>
                  <p className="cert-date">{cert.date}</p>
                </div>
                <span className="btn-view-cert">
                  View Details ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="cert-modal-panel"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="cert-modal-close"
                onClick={closeModal}
              >
                ✕
              </button>

              <div className="cert-modal-header">
                <div className="cert-modal-icon">{selectedCert.logo}</div>
                <div>
                  <h3 className="cert-modal-title">{selectedCert.issuerTitle}</h3>
                  <p className="cert-modal-date">{selectedCert.date}</p>
                </div>
              </div>

              <div className="cert-modal-body">
                <div className="cert-items-list">
                  {selectedCert.items.map((item) => (
                    <div key={item.id} className="cert-item-row">
                      <span className="cert-item-name">{item.name}</span>
                      {item.type === 'link' ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-cert-action"
                        >
                          Verify ↗
                        </a>
                      ) : (
                        <button
                          className="btn-cert-action"
                          onClick={() => setActiveImage(activeImage === item.imageSrc ? null : item.imageSrc)}
                        >
                          View Certificate
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {activeImage && (
                  <motion.div 
                    className="cert-image-preview mt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <img
                      src={activeImage}
                      alt="Certificate Preview"
                      className="protected-cert-img"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="image-fallback" style={{ display: 'none', height: '200px', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6', borderRadius: '0.5rem' }}>
                      <span>Image not found. Please add to public folder.</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
