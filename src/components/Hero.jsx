import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import PixelSwarm from './PixelSwarm';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <PixelSwarm />
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className={styles.badgeContainer}>
                        <span className={styles.badge}>New v2.0 Available</span>
                        <span className={styles.badge}>AI Powered</span>
                    </div>

                    <h1 className={styles.title}>
                        The <span className={styles.lightItalic}>All-in-One</span> AI System Ready to Book Your Jobs in 14 Days.
                    </h1>

                    <p className={styles.painRelief}>
                        Deploy the complete 24/7 Voice AI lead management, booking,
                        and payment system for your home service business fast.
                    </p>

                    <div className={styles.btnGroup}>
                        <motion.button
                            className={styles.primaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Free
                        </motion.button>
                        <motion.button
                            className={styles.secondaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            See Demo
                        </motion.button>
                    </div>

                    <p className={styles.subtext}>No credit card required</p>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
