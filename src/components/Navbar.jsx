import React from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import logo from '../assets/estellar_logo_v4.png';

const Navbar = () => {
  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <img src={logo} alt="Estellar AI" className={styles.logoImage} />
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
