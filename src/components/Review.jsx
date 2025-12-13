import React from 'react';
import styles from './Review.module.css';

const reviews = [
    {
        name: "Sarah Jenkins",
        role: "MedSpa Owner",
        text: "Doubled our bookings in 2 weeks. The AI handles everything seamlessly.",
        stars: 5
    },
    {
        name: "Dr. Mike Ross",
        role: "Aesthetics Clinic",
        text: "I was skeptical at first, but it sounds so human. My patients love it.",
        stars: 5
    },
    {
        name: "Jessica Lee",
        role: "Wellness Center",
        text: "The best investment I've made this year. It paid for itself in day one.",
        stars: 5
    },
    {
        name: "David Chen",
        role: "Physiotherapy",
        text: "No more missed calls during lunch breaks. A game changer.",
        stars: 5
    }
];

const Review = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.headline}>Trusted by Top MedSpas</h2>
                    <h3 className={styles.subheadline}>Loved by business owners nationwide.</h3>
                </div>
                <div className={styles.grid}>
                    {reviews.map((r, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.stars}>{"★".repeat(r.stars)}</div>
                            <p className={styles.text}>"{r.text}"</p>
                            <div className={styles.author}>
                                <span className={styles.name}>{r.name}</span>
                                <span className={styles.role}>{r.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
