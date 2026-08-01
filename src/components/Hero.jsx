import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-normal" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Web Developer, Cybersecurity & AI
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building & Securing<br />
            <span className="accent-gradient">The Digital World</span>
          </motion.h1>
          
          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Crafting clean, interactive applications and protecting systems through offensive security and penetration testing.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#about" className="btn btn-secondary">More About Me</a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            <div className="image-fallback">
              <span>SA</span>
            </div>
            <img
              src="/surya-dev.png"
              alt="Surya"
              className="hero-img-main"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-hint-normal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
