import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsList = [
    { category: 'Cybersecurity', items: ['Penetration Testing', 'Bug Hunting', 'OSINT'] },
    { category: 'Web Development', items: ['React / Vite', 'HTML & CSS', 'JavaScript', 'Junior Web Developer (Cert)'] },
    { category: 'AI & Data', items: ['AI Engineering & Prompting', 'Data Processing', 'Sentiment Analysis'] },
    { category: 'Networking & Others', items: ['Junior Network Engineer (Cert)', 'Web3 & Blockchain', 'Problem Solving'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="section skills bg-secondary" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          My Expertise
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsList.map((skillGroup, index) => (
            <motion.div 
              className="skill-card" 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "var(--accent-color)"
              }}
            >
              <h3 className="skill-category">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="skill-dot"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
