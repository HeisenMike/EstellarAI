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

                    <h1 className={styles.title}>
                        The 24/7 <span className={styles.lightItalic}> AI System </span> That Answers Every Call and Books Every Job
                    </h1>

                    <p className={styles.painRelief}>
                        Complete AI automation for home service contractors: call answering, appointment booking, payment processing, invoicing, and reputation management—all handled 24/7 so you never lose revenue.
                    </p>

                    <div className={styles.btnGroup}>
                        <motion.button
                            className={styles.primaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className={styles.btnBg}></span>
                            <span className={styles.btnText}>Get Started Free</span>
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
