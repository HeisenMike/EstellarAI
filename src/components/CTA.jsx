import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import LegalModal from './LegalModal';
import { useState } from 'react';

import { privacyContent, termsContent } from '../data/legalContent';

const CTA = ({ openModal }) => {
    const [activeModal, setActiveModal] = useState(null); // 'privacy', 'terms', or null

    const openLegalModal = (type) => setActiveModal(type);
    const closeLegalModal = () => setActiveModal(null);


    return (
        <section className={styles.section}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className={styles.eyebrow}>Founding Member Offer - Limited Spots</div>
                <h2 className={styles.headline}> <span className={styles.lightItalic}>Lock In</span> Your Founding Member Pricing Today</h2>
                <h3 className={styles.subheadline}>Only 5 spots remain at this exclusive rate. Once they're gone, pricing returns to $2,500 setup + $697/month. Secure your spot now and lock in $297/month forever.</h3>

                <div className={styles.offerBox}>
                    <h4 className={styles.boxTitle}>What You Get as a Founding Member:</h4>
                    <ul className={styles.benefitsList}>
                        <li>✓ Complete Custom Setup (normally $2,500) - FREE</li>
                        <li>✓ Priority Onboarding & Training</li>
                        <li>✓ Personalized AI Script Development</li>
                        <li>✓ Founding Member Exclusive Rates</li>
                        <li>✓ Founding Member Priority Support</li>
                        <li>✓ Lifetime Price Lock</li>
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
                                <div className={styles.priceVal}>
                                    $297/month + phone usage costs
                                    <div className={styles.save}>(locked in)</div>
                                </div>
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
                                <span className={styles.strike}>$697/month</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span className={styles.urgency}>Only 5 Founding Member spots left</span>
                <motion.button
                    onClick={openModal}
                    className={styles.ctaBtn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <span className={styles.btnBg}></span>
                    <span className={styles.btnText}>Book Your Free Strategy Call</span>
                </motion.button>
                <p className={styles.secureText}>No credit card required • 30-minute call • Zero sales pressure</p>
            </motion.div>

            <footer className={styles.footer}>
                <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/in/jan-michael-estrella" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}><FaLinkedin /></a>
                    <a href="https://wa.me/971566233690" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialIcon}><FaWhatsapp /></a>
                    <a href="mailto:contact@estellar.ai" aria-label="Email" className={styles.socialIcon}><FaEnvelope /></a>
                </div>
                <p>© 2025 Estellar AI. All Rights Reserved.</p>
                <div className={styles.legalLinks}>
                    <button onClick={() => openLegalModal('privacy')} className={styles.legalLink}>Privacy Policy</button>
                    <span className={styles.legalDivider}>|</span>
                    <button onClick={() => openLegalModal('terms')} className={styles.legalLink}>Terms of Service</button>
                </div>
            </footer>

            {/* Legal Modals */}
            <LegalModal
                isOpen={activeModal === 'privacy'}
                onClose={closeLegalModal}
                title="Privacy Policy"
            >
                {privacyContent}
            </LegalModal>

            <LegalModal
                isOpen={activeModal === 'terms'}
                onClose={closeLegalModal}
                title="Terms of Service"
            >
                {termsContent}
            </LegalModal>
        </section>
    );
};

export default CTA;
