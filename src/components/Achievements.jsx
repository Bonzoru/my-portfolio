import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { rank: '🥈', title: '2nd Place National', event: 'Cybersecurity Competition Nusantara Cyber Security (NCS)' },
  { rank: '🏆', title: 'Best Performance', event: 'Cybersecurity Competition Nusantara Cyber Security (NCS)' },
  { rank: '🥈', title: '2nd Place Cluster', event: 'Cybersecurity Competition Nusantara Cyber Security (NCS)' },
  { rank: '🏆', title: 'Best Team Lampung Province', event: 'Cybersecurity Competition Nusantara Cyber Security (NCS)' },
];

const Achievements = () => {
  return (
    <section className="section achievements bg-secondary" id="achievements">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Awards & Recognition
        </motion.h2>

        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <motion.div
              className="achievement-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}
            >
              <span className="achievement-rank">{a.rank}</span>
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-event">{a.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
