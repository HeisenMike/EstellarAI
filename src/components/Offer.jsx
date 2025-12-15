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
                    As a Founding Member, you get priority setup and lock in $97/month forever (regular price: $697/month). Plus, your setup fee is FREE instead of the standard $2,500 enterprise integration.
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
                    <span className={styles.trialText}>14-Day Free Trial. No setup fees.</span>
                    <span className={styles.thenPrice}>Then: $97/month only.</span>
                    <span className={styles.regularPrice}>(Regular: $2,500 setup + $697/month)</span>
                    <div className={styles.lockText}>
                        🔒 Price locked in forever as Founding Member
                    </div>
                </div>

                <button className={styles.ctaBtn}>
                    <span className={styles.btnBg}></span>
                    <span className={styles.btnText}>Book Your Free Strategy Call</span>
                </button>
                <p className={styles.ctaSubtext}>No credit card required • Only 5 spots left this month</p>
            </motion.div>
        </section>
    );
};

export default Offer;
