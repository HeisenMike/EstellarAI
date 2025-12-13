import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';

const CTA = () => {
    return (
        <section className={styles.section}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.headline}>Ready to begin your journey? <br /> Let’s get started!</h2>
                <h3 className={styles.subheadline}>Launch Offer Ends Soon</h3>

                <p className={styles.text}>
                    Secure your spot today to lock in our "Founding Member" pricing and start automating your business immediately. Join now and get your first 14 days completely free.
                </p>

                <div className={styles.offerBox}>
                    <h4 className={styles.boxTitle}>What You Get If You Start Now:</h4>
                    <ul className={styles.benefitsList}>
                        <li>✓ Exclusive Bonus: Free Script Customization</li>
                        <li>✓ Priority Onboarding Support</li>
                        <li>✓ Personalized Setup Guidance</li>
                        <li>✓ 14-Day Risk-Free Trial</li>
                    </ul>
                    <div className={styles.pricing}>
                        <div className={styles.priceRow}>
                            <span>Setup Fee:</span>
                            <span className={styles.strike}>$2500</span>
                            <span className={styles.bold}>$97</span>
                        </div>
                        <div className={styles.priceRow}>
                            <span>Monthly Fee:</span>
                            <span className={styles.strike}>$997</span>
                            <span className={styles.bold}>$497</span>
                        </div>
                    </div>
                </div>

                <button className={styles.ctaBtn}>Start My 14-Day Free Trial</button>
                <p className={styles.secureText}>100% Secure Checkout • Cancel Anytime</p>
            </motion.div>

            <footer className={styles.footer}>
                <p>© 2025 Estellar AI. All Rights Reserved.</p>
            </footer>
        </section>
    );
};

export default CTA;
