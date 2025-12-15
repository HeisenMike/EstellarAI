import React from 'react';
import { motion } from 'framer-motion';
import styles from './Solution.module.css';

const Solution = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.wrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.textContent}>
                        <h2 className={styles.headline}>The <span className={styles.lightItalic}>Always-On Receptionist</span> <br />
                            Who Never Sleeps.</h2>
                        <h3 className={styles.subheadline}>A fully autonomous AI that handles your front desk 24/7.</h3>
                        <p className={styles.paragraph}>
                            The missing ingredient is reliability. You need a system that captures every lead, day or night.
                            Estellar AI is not just a voicemail—it's an intelligent agent that answers questions, checks your calendar,
                            and books appointments in real-time.
                        </p>
                        <p className={styles.paragraph}>
                            It's the <span className={styles.sauce}>secret sauce</span> that turns inquiries into confirmed bookings while you focus on delivering exceptional service.
                        </p>
                    </div>
                    <div className={styles.visual}>
                        <div className={styles.videoPlaceholder}>
                            <div className={styles.playButton} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Solution;
