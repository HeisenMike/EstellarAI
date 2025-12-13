import React from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>EstellarAI<span className={styles.dot}>.</span></div>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
