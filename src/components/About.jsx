import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-text">
            <p>
              I am an Informatics Engineering student at Darmajaya Institute of Informatics and Business with a strong interest and experience in Cybersecurity, Web Development, Networking, and AI Engineering.
            </p>
            <p>
              With an active track record in national and provincial cybersecurity competitions, I am accustomed to working independently or within a team. I adapt quickly to new technologies and am highly committed to delivering quality results.
            </p>
          </div>
          <div className="about-stats">
            {[
              { num: '2+', label: 'Years Experience' },
              { num: '5+', label: 'Awards in Cyber' },
              { num: '10+', label: 'Projects Completed' }
            ].map((stat, i) => (
              <motion.div 
                className="stat-item" 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1), type: "spring" }}
                whileHover={{ y: -10 }}
              >
                <h3>{stat.num}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
