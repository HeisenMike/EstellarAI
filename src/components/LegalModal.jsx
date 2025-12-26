import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import styles from './LegalModal.module.css';

const LegalModal = ({ isOpen, onClose, title, children }) => {
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
                        <div className={styles.header}>
                            <h2 className={styles.title}>{title}</h2>
                            <button
                                className={styles.closeButton}
                                onClick={onClose}
                                aria-label="Close modal"
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <div className={styles.content}>
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LegalModal;
