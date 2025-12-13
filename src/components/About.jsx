import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageCol}>
                    {/* Placeholder for About Image */}
                    <div className={styles.imagePlaceholder}>About Image</div>
                </div>
                <div className={styles.textCol}>
                    <h2 className={styles.headline}>Hi, I'm Michael.</h2>
                    <h3 className={styles.subheadline}>I help service businesses scale with AI and automation.</h3>
                    <p className={styles.text}>
                        For over a decade, I managed high-stakes B2B operations where client satisfaction wasn't optional. It was everything.
                    </p>
                    <p className={styles.text}>
                        The challenge? Manual processes were sabotaging our ability to deliver. Missed follow-ups. Delayed responses. Opportunities lost not because we didn't care, but because we were buried in admin work.
                    </p>
                    <p className={styles.text}>
                        So I started automating the redundant tasks. Built workflows that handled the repetitive work so my team could focus on what actually mattered: serving clients and closing deals.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
