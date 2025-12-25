import React from 'react';
import styles from './Montage.module.css';

// Import images directly to ensure Vite bundles them
import img1 from '../assets/montage/montage-1.png';
import img2 from '../assets/montage/montage-2.png';
import img3 from '../assets/montage/montage-3.png';
import img4 from '../assets/montage/montage-4.png';
import img5 from '../assets/montage/montage-5.png';

const images = [img1, img2, img3, img4, img5];

const Montage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Workflow ${index + 1}`} className={styles.image} />
                ))}
            </div>
            {/* Overlay gradient to ensure text readability if we kept text, but we aren't. 
                However, a subtle overlay makes it look more integrated. */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                pointerEvents: 'none'
            }}></div>
        </div>
    );
};

export default Montage;
