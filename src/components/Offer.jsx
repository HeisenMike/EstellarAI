import React from 'react';
import { motion } from 'framer-motion';
import styles from './Offer.module.css';

const Offer = () => {
    return (
        <section className={styles.section}>
            <motion.div
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.headline}>Estellar AI Full Business Automation Package</h2>
                <h3 className={styles.subheadline}>Launch your 24/7 autonomous office with our Founding Member pricing.</h3>

                <div className={styles.priceTag}>
                    <span className={styles.oldPrice}>$2,500 Setup Fee</span>
                    <span className={styles.newPrice}>Launch Price: $97 Setup</span>
                    <span className={styles.period}>for Founding Members</span>
                </div>

                <p className={styles.valueProps}>
                    This isn't just appointment setting—it's a complete office solution covering lead capture, booking, follow-up, payment processing, and review generation (the entire 5-Step Blueprint).
                </p>
                <p className={styles.valueProps}>
                    By joining us as a Founding Member, you lock in low monthly pricing and gain immediate relief from staff stress and missed revenue. This setup usually requires a $2,500 enterprise integration fee, but we've reduced the barrier to entry to help you grow.
                </p>

                <ul className={styles.list}>
                    <li>✓ 24/7 Lead Capture Voice AI</li>
                    <li>✓ Smart Booking & Calendar Sync</li>
                    <li>✓ Automated Payment Processing</li>
                    <li>✓ Automated Reputation Management</li>
                    <li>✓ Seamless Integration with Jobber</li>
                    <li>✓ Full Custom Scripting & Training</li>
                    <li>✓ Founding Member Priority Support</li>
                </ul>

                <button className={styles.ctaBtn}>Inquire About Founding Member Spots</button>
            </motion.div>
        </section>
    );
};

export default Offer;
