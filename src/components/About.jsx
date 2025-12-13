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
                    <h2 className={styles.headline}>Hi, I'm Anna.</h2>
                    <h3 className={styles.subheadline}>I help service businesses scale with AI.</h3>
                    <p className={styles.text}>
                        Over the last 5 years, I've helped hundreds of service-based businesses increase bookings,
                        streamline operations, and improve client experiences.
                    </p>
                    <p className={styles.text}>
                        My epiphany came when I realized that most business owners are trapped by their phone—unable to grow
                        because they are too busy handling the daily influx of calls.
                    </p>
                    <p className={styles.text}>
                        That's why I developed this Voice AI solution: to give you your freedom back while your business grows on autopilot.
                        My method consistently produces growth, efficiency, and happy clients.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
