import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle scripts in the iframe content if needed
    // The provided code snippet has a script tag next to the iframe.
    // React doesn't execute script tags injected via dangerouslySetInnerHTML or standard JSX safely/predictably.
    // However, for GHL iframes, usually just the iframe source is enough, 
    // but the script `form_embed.js` might be for resizing. 
    // We will append the script dynamically if it's not present.

    useEffect(() => {
        if (isOpen) {
            const scriptId = "ghl-script-loader";
            if (!document.getElementById(scriptId)) {
                const script = document.createElement("script");
                script.id = scriptId;
                script.src = "https://e.estellarai.com/js/form_embed.js";
                script.type = "text/javascript";
                script.async = true;
                document.body.appendChild(script);
            }
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <button
                            className={styles.closeButton}
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            <FaTimes />
                        </button>

                        <div className={styles.iframeContainer}>
                            <iframe
                                src="https://e.estellarai.com/widget/booking/gsUBga2YFHgiH8YfrmfL"
                                style={{
                                    width: '117.65%', // 1 / 0.85 to compensate for scale
                                    height: '117.65%',
                                    border: 'none',
                                    minHeight: '950px', // Increased to ensure internal content fits
                                    transform: 'scale(0.85)',
                                    transformOrigin: 'top left',
                                }}
                                id="gsUBga2YFHgiH8YfrmfL_1766680521848"
                                title="Booking Calendar"
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
