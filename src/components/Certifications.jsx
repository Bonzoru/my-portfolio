import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificationsData = [
  {
    id: 1,
    title: 'Endpoint Security',
    issuer: 'Cisco Networking Academy',
    date: 'August 2026',
    type: 'link',
    credentialUrl: 'https://www.netacad.com/certificates/issuanceId=e3d16ab7-3e5b-47dd-b3b7-fca5046bf828',
    logo: '🛡️',
  },
  {
    id: 2,
    title: 'AI Engineer For Milenial (Micro Skill)',
    issuer: 'Pusat Pengembangan Literasi Digital (Komdigi)',
    date: 'August 2026',
    type: 'link',
    credentialUrl: '#', // Ganti dengan link hasil scan QR code
    logo: '🤖',
  },
  {
    id: 3,
    title: 'Introduction to subagents',
    issuer: 'Anthropic',
    date: 'August 2026',
    type: 'image',
    imageSrc: '/anthropic-cert.jpg', // Pastikan gambar ini ada di folder public
    logo: '🧠',
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

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
          Licenses & Certifications
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
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">Issued {cert.date}</p>
                <span className="btn-view-cert">
                  {cert.type === 'link' ? 'View Details ↗' : 'View Certificate 👁️'}
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
            onClick={() => setSelectedCert(null)}
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
                onClick={() => setSelectedCert(null)}
              >
                ✕
              </button>

              <div className="cert-modal-header">
                <div className="cert-modal-icon">{selectedCert.logo}</div>
                <div>
                  <h3 className="cert-modal-title">{selectedCert.title}</h3>
                  <p className="cert-modal-issuer">{selectedCert.issuer}</p>
                  <p className="cert-modal-date">Issued {selectedCert.date}</p>
                </div>
              </div>

              <div className="cert-modal-body">
                {selectedCert.type === 'link' ? (
                  <div className="cert-link-preview">
                    <p>This credential can be verified online through the issuer's official portal.</p>
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Verify Credential ↗
                    </a>
                  </div>
                ) : (
                  <div className="cert-image-preview">
                    {/* Menggunakan onContextMenu untuk mencegah klik kanan (anti-save) */}
                    <img
                      src={selectedCert.imageSrc}
                      alt={`${selectedCert.title} Certificate`}
                      className="protected-cert-img"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="image-fallback" style={{ display: 'none', height: '200px', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6', borderRadius: '0.5rem' }}>
                      <span>Image not found. Please add {selectedCert.imageSrc} to public folder.</span>
                    </div>
                  </div>
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
