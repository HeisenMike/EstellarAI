import React from 'react';
import { motion } from 'framer-motion';
import styles from './Empathy.module.css';

const Empathy = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.headline}>Every Missed Call Is Money Walking Out the Door to Your Competition.</h2>
                    <h3 className={styles.subheadline}>You know you're losing revenue, but you can't clone yourself. The good news? You don't have to.</h3>

                    <div className={styles.content}>
                        <div className={styles.textColumn}>
                            <p className={styles.text}>
                                Does this sound familiar? A customer calls with an urgent problem while you're on a job site, and by the time you see the voicemail, they've already hired someone else. You spend your evenings returning calls and chasing payments instead of spending time with your family. You know you need to follow up on estimates and ask for reviews, but there's literally no time left in your day.
                            </p>
                            <p className={styles.text}>
                                You're doing everything right except one thing: you need systems that work when you can't.
                            </p>
                            <p className={styles.closing}>
                                Let me help you automate the parts of your business stealing your time and costing you revenue.
                            </p>
                        </div>
                        <div className={styles.imageColumn}>
                            <img src="/src/assets/missed_call_phone.png" alt="Missed Call Notification" className={styles.phoneImage} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Empathy;
