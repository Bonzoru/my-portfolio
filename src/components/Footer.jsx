import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <motion.div 
        className="container footer-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="footer-title">Let's Connect</h2>
        <p className="footer-desc">
          Interested in working together or have any questions? Feel free to reach out.
        </p>
        <div className="contact-links">
          <motion.a 
            href="mailto:suryaaji237@gmail.com" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            suryaaji237@gmail.com
          </motion.a>
          <motion.a 
            href="tel:+6285767043962" 
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            +62 857-6704-3962
          </motion.a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Surya Aji Andriantoro. All rights reserved.</p>
          <p className="footer-location">Bandar Lampung, Indonesia</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
