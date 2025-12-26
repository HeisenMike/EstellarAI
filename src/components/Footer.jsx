import React, { useState } from 'react';
import styles from './Footer.module.css';
import LegalModal from './LegalModal';

const Footer = () => {
    const [activeModal, setActiveModal] = useState(null); // 'privacy', 'terms', or null

    const openModal = (type) => setActiveModal(type);
    const closeModal = () => setActiveModal(null);

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
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <button onClick={() => openModal('privacy')} className={styles.linkButton}>
                        Privacy Policy
                    </button>
                    <button onClick={() => openModal('terms')} className={styles.linkButton}>
                        Terms of Service
                    </button>
                </div>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Estellar AI. All rights reserved.
                </p>
            </div>

            {/* Modals */}
            <LegalModal
                isOpen={activeModal === 'privacy'}
                onClose={closeModal}
                title="Privacy Policy"
            >
                {privacyContent}
            </LegalModal>

            <LegalModal
                isOpen={activeModal === 'terms'}
                onClose={closeModal}
                title="Terms of Service"
            >
                {termsContent}
            </LegalModal>
        </footer>
    );
};

export default Footer;
