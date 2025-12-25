import React from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import logo from '../assets/estellar_logo_v5.png';

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
        <a
          href="https://e.estellarai.com/widget/form/BJ18AT4yGmhl8MrLwA0O"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          style={{ textDecoration: 'none' }}
        >
          Book A Call
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
