import React, { useState } from 'react';
import styles from './GuaranteeFAQ.module.css';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const faqs = [
    {
        q: "I\u2019m not tech savvy\u2014how do I handle setup?",
        a: "I handle the entire setup for you. I configure the AI, connect your calendar, and set up the phone numbers. You just tell me how you want to be booked."
    },
    {
        q: "Does it work with my current software?",
        a: "Yes, Estellar AI integrates with major platforms like Housecall Pro, ServiceTitan, and Google Calendar, ensuring seamless booking."
    },
    {
        q: "What if a customer has a complex emergency?",
        a: "The AI is trained to recognize urgent keywords (like \"flooding\" or \"gas smell\") and can instantly forward those specific calls to your emergency line while handling routine bookings itself."
    },
    {
        q: "Can I customize what the AI says?",
        a: "Absolutely. I customize the script to match your company's tone, pricing policies, and service area."
    },
    {
        q: "Is there a contract?",
        a: "No. I operate on a month-to-month basis. I believe I should earn your business every month."
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
                    <h2 className={styles.headline}> <span className={styles.lightItalic}>No Risk </span> Guarantee</h2>
                    <h3 className={styles.subheadline}>It's easy to say yes.</h3>
                    <p className={styles.text}>
                        I am so confident that Estellar AI will streamline your operations that I offer a complete safety net. You can start with our 14-day free trial to see the results before you pay a dime. Plus, I offer flexible month-to-month plans with no long-term contracts. If you don't love the time you save, simply cancel. No risk, no stress.
                    </p>
                </div>

                {/* FAQ Section */}
                <div className={styles.faqSection}>
                    <h2 className={styles.headline}>Frequently Asked Questions</h2>
                    <h3 className={styles.subheadline}>Answers to your most common concerns.</h3>

                    <div className={styles.faqList}>
                        <LayoutGroup>
                            {faqs.map((item, index) => (
                                <motion.div
                                    layout
                                    key={index}
                                    className={styles.faqItem}
                                    onClick={() => toggleFAQ(index)}
                                    initial={false}
                                >
                                    <motion.div layout className={styles.question}>
                                        {item.q}
                                        <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
                                    </motion.div>
                                    <AnimatePresence initial={false} mode="wait">
                                        {activeIndex === index && (
                                            <motion.div
                                                layout
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
                                </motion.div>
                            ))}
                        </LayoutGroup>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GuaranteeFAQ;
