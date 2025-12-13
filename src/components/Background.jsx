import React from 'react';
import styles from './Background.module.css';

const Background = () => {
    return (
        <div className={styles.background}>
            <div className={styles.orb} id={styles.orb1}></div>
            <div className={styles.orb} id={styles.orb2}></div>
            <div className={styles.orb} id={styles.orb3}></div>
        </div>
    );
};

export default Background;
