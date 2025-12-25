import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import PixelSwarm from './PixelSwarm';

const Hero = ({ openModal }) => {
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
                        Complete automation for HVAC, plumbing, and roofing contractors with payment processing, invoicing, and reputation management. Focus on the work while we handle everything else.
                    </p>

                    <div className={styles.btnGroup}>
                        <motion.button
                            onClick={openModal}
                            className={styles.primaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}
                        >
                            <span className={styles.btnBg}></span>
                            <span className={styles.btnText}>Book a Free Strategy Call</span>
                        </motion.button>
                        <motion.a
                            href="#demo"
                            className={styles.secondaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            See Demo
                        </motion.a>
                    </div>

                    <p className={styles.subtext}>No credit card required</p>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
