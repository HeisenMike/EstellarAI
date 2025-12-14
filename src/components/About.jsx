import React from 'react';
import styles from './About.module.css';
import aboutImage from '../assets/michael_about.jpg';

const About = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageCol}>
                    <img src={aboutImage} alt="Michael Estrella" className={styles.aboutImage} />
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
                        So I started automating the redundant tasks. That's when it clicked: automation wasn't just a productivity tool. It was the key to scaling without sacrificing service quality.
                    </p>
                    <p className={styles.text}>
                        Now I help home service contractors capture more revenue with Voice AI and marketing automation. AI agents answer every call and book appointments instantly. Automated follow-up systems turn leads into customers. All running 24/7 without adding to your workload.
                    </p>
                    <p className={styles.text}>
                        Google Analytics certified. HubSpot certified. But more importantly, I treat your business like a partnership, not a transaction.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
