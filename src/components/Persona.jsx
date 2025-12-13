import React from 'react';
import styles from './Persona.module.css';

const personas = [
    {
        role: "The Solo Operator",
        tried: "Tried answering calls while on the job, under a sink, or on a roof.",
        fail: "Resulted in missed details, forgotten callbacks, and looking unprofessional to new clients.",
        aha: "AHA Moment: 'I can't be on the tools and on the phone at the same time.'"
    },
    {
        role: "The Growing Crew",
        tried: "Tried hiring a part-time office admin or using a generic call center.",
        fail: "Calls still get missed after 5 PM and on weekends—exactly when emergencies happen.",
        aha: "AHA Moment: 'I need a system that captures leads 24/7, not just 9-5.'"
    },
    {
        role: "The Lead Chase",
        tried: "Relying on voicemail to catch the calls you miss.",
        fail: "70% of homeowners won't leave a message; they just call the next plumber or electrician on the list.",
        aha: "AHA Moment: 'Speed to lead isn't optional. Instant pickup wins the job.'"
    }
];

const Persona = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.centered}>
                    <h2 className={styles.headline}>We've All Been There.</h2>
                    <h3 className={styles.subheadline}>Why the old ways just don't cut it anymore.</h3>
                </div>
                <div className={styles.grid}>
                    {personas.map((p, i) => (
                        <div key={i} className={styles.card}>
                            <h4 className={styles.role}>{p.role}</h4>
                            <p className={styles.text}><strong>Tried:</strong> {p.tried}</p>
                            <div className={styles.failBox}>
                                <span className={styles.cross}>✗</span> {p.fail}
                            </div>
                            <div className={styles.ahaBox}>
                                <p className={styles.aha}>{p.aha}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Persona;
