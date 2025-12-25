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
                        <div style={{ padding: '61.64% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/1149284805?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Never Miss a Lead Again: Voice AI Receptionist for Home Services (GHL)"
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Solution;
