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
                <div className={styles.eyebrow}>Founding Member Offer - Limited Spots</div>
                <h2 className={styles.headline}>Lock In Your Founding Member Pricing Today</h2>
                <h3 className={styles.subheadline}>Only 5 spots remain at this exclusive rate. Once they're gone, pricing returns to $2,500 setup + $97/month. Secure your spot now and lock in $497/month forever.</h3>

                <div className={styles.offerBox}>
                    <h4 className={styles.boxTitle}>What You Get as a Founding Member:</h4>
                    <ul className={styles.benefitsList}>
                        <li>✓ Complete Custom Setup (normally $2,500) - FREE</li>
                        <li>✓ Priority Onboarding & Training</li>
                        <li>✓ Personalized AI Script Development</li>
                        <li>✓ 14-Day Free Trial - No Credit Card Required</li>
                        <li>✓ Founding Member Priority Support</li>
                        <li>✓ Price Locked In Forever</li>
                    </ul>

                    <div className={styles.pricingComparison}>
                        <div className={styles.pricingCol}>
                            <span className={`${styles.colTitle} ${styles.foundingTitle}`}>Founding Member Pricing</span>
                            <div className={styles.priceDetail}>
                                <span>Setup:</span>
                                <span className={styles.priceVal}>FREE <span className={styles.save}>(save $2,500)</span></span>
                            </div>
                            <div className={styles.priceDetail}>
                                <span>Monthly:</span>
                                <span className={styles.priceVal}>$497/month <span className={styles.save}>(locked in)</span></span>
                            </div>
                        </div>
                        <div className={styles.pricingCol}>
                            <span className={styles.colTitle}>Regular Pricing</span>
                            <div className={styles.priceDetail}>
                                <span>Setup:</span>
                                <span className={styles.strike}>$2,500</span>
                            </div>
                            <div className={styles.priceDetail}>
                                <span>Monthly:</span>
                                <span className={styles.strike}>$97/month</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span className={styles.urgency}>Only 5 Founding Member spots left</span>
                <button className={styles.ctaBtn}>
                    <span className={styles.btnBg}></span>
                    <span className={styles.btnText}>Book Your Free Strategy Call</span>
                </button>
                <p className={styles.secureText}>No credit card required • 30-minute call • Cancel trial anytime</p>
            </motion.div>

            <footer className={styles.footer}>
                <p>© 2025 Estellar AI. All Rights Reserved.</p>
            </footer>
        </section>
    );
};

export default CTA;
