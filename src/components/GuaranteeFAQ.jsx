import React, { useState } from 'react';
import styles from './GuaranteeFAQ.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "I\u2019m not tech savvy\u2014how do I handle setup?",
        a: "We handle the entire setup for you. Our team configures the AI, connects your calendar, and sets up the phone numbers. You just tell us how you want to be booked."
    },
    {
        q: "Does it work with my current software?",
        a: "Yes, Estellar integrates with major platforms like Housecall Pro, ServiceTitan, and Google Calendar, ensuring seamless booking."
    },
    {
        q: "What if a customer has a complex emergency?",
        a: "The AI is trained to recognize urgent keywords (like \"flooding\" or \"gas smell\") and can instantly forward those specific calls to your emergency line while handling routine bookings itself."
    },
    {
        q: "Can I customize what the AI says?",
        a: "Absolutely. We customize the script to match your company's tone, pricing policies, and service area."
    },
    {
        q: "Is there a contract?",
        a: "No. We operate on a month-to-month basis. We believe we should earn your business every month."
    }
];

const GuaranteeFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Guarantee Section */}
                <div className={styles.guaranteeBox}>
                    <h2 className={styles.headline}>No Risk Guarantee</h2>
                    <h3 className={styles.subheadline}>It's easy to say yes.</h3>
                    <p className={styles.text}>
                        Try it for 14 days. If you don't love it, you don't pay. We offer flexible payment options
                        and a full money-back guarantee on your setup fee if you're not satisfied in the first month.
                        We remove the risk so you can focus on the results.
                    </p>
                </div>

                {/* FAQ Section */}
                <div className={styles.faqSection}>
                    <h2 className={styles.headline}>Frequently Asked Questions</h2>
                    <h3 className={styles.subheadline}>Answers to your most common concerns.</h3>

                    <div className={styles.faqList}>
                        {faqs.map((item, index) => (
                            <div key={index} className={styles.faqItem} onClick={() => toggleFAQ(index)}>
                                <div className={styles.question}>
                                    {item.q}
                                    <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
                                </div>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            className={styles.answer}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            {item.a}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GuaranteeFAQ;
