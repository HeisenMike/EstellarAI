import React from 'react';
import { motion } from 'framer-motion';
import { LuPhone, LuCalendar, LuTrendingUp, LuCreditCard, LuStar } from "react-icons/lu";
import styles from './Position.module.css';

const blueprintSteps = [
    {
        icon: <LuPhone />,
        step: "1. 24/7 Voice AI Agent",
        title: "Capture Every Call Instantly",
        desc: "Your AI voice agent answers every call right away, day or night, with natural, human-sounding conversation. It can book, reschedule, and cancel appointments automatically while answering customer inquiries clearly and consistently. The system handles multiple calls at the same time, so every caller is attended to promptly. It collects key details, qualifies leads, and keeps your business responsive even when you are unavailable. This ensures more appointments are booked, more questions are answered, and every opportunity is captured efficiently.",
        benefit: "Capture every emergency job and high-value lead, even at 2 AM.",
        span: "col-span-2"
    },
    {
        icon: <LuCalendar />,
        step: "2. Smart Appointment Booking",
        title: "Zero-Friction Calendar Management",
        desc: "Books, confirms, and reschedules appointments directly into your calendar with real-time sync, automated confirmations, and instant customer notifications.",
        benefit: "Eliminate double-bookings, no-shows, and phone tag completely.",
        span: "col-span-1"
    },
    {
        icon: <LuTrendingUp />,
        step: "3. Visual Sales Pipeline (CRM)",
        title: "Track Every Dollar of Revenue",
        desc: "Automatically track every estimate and job from \"New Lead\" to \"Paid Invoice\" on a simple, visual CRM board.",
        benefit: "Turn 70-80% of missed calls into booked appointments.",
        span: "col-span-1"
    },
    {
        icon: <LuCreditCard />,
        step: "4. Payment & Invoice Automation",
        title: "Get Paid Faster, Stress Less",
        desc: "Sends digital invoices, processes payments, and handles automated payment reminders after every job, including recurring payment setups for plans.",
        benefit: "Reduce outstanding invoices and eliminate awkward payment conversations.",
        span: "col-span-1"
    },
    {
        icon: <LuStar />,
        step: "5. Reputation Management",
        title: "Dominate Local Search",
        desc: "Automatically requests 5-star reviews after successful jobs with smart timing.",
        benefit: "Generate more 5-star reviews, boost reputation, and attract premium customers.",
        span: "col-span-1"
    }
];

// import PixelHead from './PixelHead';

const Position = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.headline}>The <span className={styles.lightItalic}>5-Step Blueprint</span> That <br /> Automates Your Entire Business Cycle</h2>
                    <h3 className={styles.subheadline}>From the very first ring to the final 5-star review, Estellar AI handles it all.</h3>
                </div>

                <div className={styles.bentoGrid}>
                    {blueprintSteps.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} ${styles[item.span] || ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(164, 110, 255, 0.15)" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {/* {index === 0 && <PixelHead />} */}
                            <div className={styles.iconBox}>
                                {item.icon}
                            </div>
                            <p className={styles.stepNum}>{item.step}</p>
                            <h4 className={styles.cardTitle}>{item.title}</h4>
                            <p className={styles.desc}>{item.desc}</p>
                            <div className={styles.divider}></div>
                            <p className={styles.benefit}><strong>Benefit:</strong> {item.benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Position;
