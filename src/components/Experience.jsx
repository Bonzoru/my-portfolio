import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'IT Support (Internship)',
      company: 'Bank BJB Operations Bureau',
      period: '2025 - 2026',
      desc: 'Provided technical support for daily operations, handled hardware/network troubleshooting, and managed system installations and configurations.'
    },
    {
      role: 'Project Developer (Independent)',
      company: 'Freelance',
      period: '2024 - Present',
      desc: 'Built an on-chain data aggregation platform and Telegram bots to automate and distribute on-chain & macro economic information using AI.'
    },
    {
      role: 'Penetration Tester & Bug Hunter',
      company: 'Freelance',
      period: '2022 - Present',
      desc: 'Discovered security vulnerabilities and evaluated systems through cyber attack simulations. Compiled structured vulnerability reports.'
    },
    {
      role: 'Crypto Trader & Market Analyst',
      company: 'Independent',
      period: '2022 - 2025',
      desc: 'Actively traded on DEX/CEX platforms, analyzed markets using technical, macroeconomic, and sentiment analysis for AI-based trading bots.'
    }
  ];

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item" 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2, type: "spring", stiffness: 50 }}
            >
              <div className="timeline-dot"></div>
              <motion.div 
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
              >
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
