import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import LegalModal from './LegalModal';
import { useState } from 'react';

const CTA = ({ openModal }) => {
    const [activeModal, setActiveModal] = useState(null); // 'privacy', 'terms', or null

    const openLegalModal = (type) => setActiveModal(type);
    const closeLegalModal = () => setActiveModal(null);

    const privacyContent = (
        <>
            <p><strong>Effective Date:</strong> December 25, 2025</p>

            <h3>1. Introduction</h3>
            <p>Welcome to Estellar AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and protect your data when you visit our website or use our services.</p>

            <h3>2. Information We Collect</h3>
            <p>We collect the following types of information:</p>
            <ul>
                <li><strong>Personal Information:</strong> When you fill out forms on our website (such as strategy call applications), we collect personally identifiable information including your Name, Email Address, Phone Number, and Company Name.</li>
                <li><strong>Usage Data:</strong> We use tools like Google Analytics to collect anonymous data about how visitors use our website, such as pages visited, time spent on the site, and referring sources.</li>
                <li><strong>Interaction Data:</strong> If you interact with our AI voice agents (via Retell AI) or other automated systems, we may process and store transcripts or summaries of those interactions to provide and improve our services.</li>
            </ul>

            <h3>3. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
                <li>Provide and deliver our services (including strategy calls and automation setups).</li>
                <li>Communicate with you regarding appointments, updates, and offers.</li>
                <li>Improve our website and customer experience based on analytics.</li>
                <li>Comply with legal obligations.</li>
            </ul>

            <h3>4. Third-Party Sharing</h3>
            <p>We do not sell your personal data. We may share data with trusted third-party service providers solely for the purpose of running our business, including:</p>
            <ul>
                <li><strong>GoHighLevel:</strong> For CRM and communication management.</li>
                <li><strong>Retell AI:</strong> For voice agent services.</li>
                <li><strong>Google Analytics:</strong> For website traffic analysis.</li>
            </ul>

            <h3>5. Cookies and Tracking</h3>
            <p>We use cookies to enhance your experience and analyze website traffic. You can choose to disable cookies through your browser settings, though this may affect some website functionality.</p>

            <h3>6. Your Rights</h3>
            <p>Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:support@e.estellarai.com">support@e.estellarai.com</a>.</p>

            <h3>7. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:support@e.estellarai.com">support@e.estellarai.com</a></li>
                <li><strong>Location:</strong> General Trias, Cavite, Philippines</li>
            </ul>
        </>
    );

    const termsContent = (
        <>
            <p><strong>Effective Date:</strong> December 25, 2025</p>

            <h3>1. Acceptance of Terms</h3>
            <p>By accessing or using the website and services of Estellar AI, you agree to be bound by these Terms of Service. If you do not agree, strictly do not use our services.</p>

            <h3>2. Services</h3>
            <p>Estellar AI provides automation and consulting services. We reserve the right to modify or discontinue any part of our services at any time without prior notice.</p>

            <h3>3. User Responsibilities</h3>
            <p>You agree to provide accurate and current information when booking calls or submitting forms. You are responsible for maintaining the confidentiality of any communications between us.</p>

            <h3>4. Payments and Refunds</h3>
            <ul>
                <li><strong>Pricing:</strong> Pricing for specific projects will be agreed upon in a separate proposal or agreement.</li>
                <li><strong>Refund Policy:</strong> Refunds are conditional and based on the specific terms agreed to for each project. Generally, we value client satisfaction and will offer refunds if we fail to meet the agreed-upon deliverables. However, no refunds are guaranteed for completed work that meets the initial specifications.</li>
            </ul>

            <h3>5. Intellectual Property</h3>
            <p>All content on this website, including text, graphics, logos, and software, is the property of Estellar AI or its content suppliers and is protected by international copyright laws.</p>

            <h3>6. Limitation of Liability</h3>
            <p>Estellar AI shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability is limited to the amount paid by you for the specific service in question.</p>

            <h3>7. Governing Law</h3>
            <p>These Terms shall be governed by and construed in accordance with the laws of the Philippines. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in Cavite, Philippines.</p>
        </>
    );

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
