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
                <div className={styles.eyebrow}>Founding Member Offer</div>
                <h2 className={styles.headline}> <span className={styles.lightItalic}>Everything</span> You Need to Never Miss Another Job</h2>
                <h3 className={styles.subheadline}>This isn't just appointment setting. It's your complete AI office that handles every call, booking, payment, and review automatically.</h3>

                <p className={styles.bodyCopy}>
                    As a Founding Member, you get priority setup and lock in $297/month forever (regular price: $697/month). Plus, your setup fee is FREE instead of the standard $2,500 enterprise integration.
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

                <div className={styles.pricingBox}>
                    <h4 className={styles.pricingHeader}>🎉 Founding Member Pricing</h4>

                    <div className={styles.pricingMain}>
                        <span className={styles.currentPrice}>$297/month</span>
                        <span className={styles.regularPriceLabel}>(regularly $697/month)</span>
                    </div>

                    <div className={styles.lockText}>
                        🔒 Locked in forever
                    </div>

                    <div className={styles.includesSection}>
                        <span className={styles.includesLabel}>Includes:</span>
                        <ul className={styles.includesList}>
                            <li>✅ $2,500 custom setup (FREE)</li>
                            <li>✅ Full implementation</li>
                            <li>✅ Ongoing support</li>
                        </ul>
                    </div>

                    <div className={styles.saveText}>
                        You Save: <span className={styles.saveHighlight}>$400/month + $2,500 setup</span>
                    </div>
                </div>

                <a
                    href="https://e.estellarai.com/widget/form/BJ18AT4yGmhl8MrLwA0O"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaBtn}
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <span className={styles.btnBg}></span>
                    <span className={styles.btnText}>Book Your Free Strategy Call</span>
                </a>
                <p className={styles.ctaSubtext}>No credit card required • Only 5 spots left this month</p>
            </motion.div>
        </section>
    );
};

export default Offer;
