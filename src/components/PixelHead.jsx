import React, { useEffect, useRef } from 'react';
import headImageSrc from '../assets/pixel_woman_talking_v2.png';

const PixelHead = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let targets = [];
        let loaded = false;
        let isVisible = false;

        const image = new Image();
        image.src = headImageSrc;

        const initParticles = () => {
            if (!loaded) return;

            const w = canvas.width;
            const h = canvas.height;

            const imgAspect = image.width / image.height;
            const canvasAspect = w / h;

            let drawW, drawH;
            if (canvasAspect > imgAspect) {
                drawH = h * 0.85;
                drawW = drawH * imgAspect;
            } else {
                drawW = w * 0.85;
                drawH = drawW / imgAspect;
            }

            // Fixed sample grid for stable "voxel" look
            const resolution = window.innerWidth < 768 ? 80 : 120; // 120px grid width

            const offCanvas = document.createElement('canvas');
            offCanvas.width = resolution;
            offCanvas.height = resolution / imgAspect;
            const offCtx = offCanvas.getContext('2d');
            offCtx.drawImage(image, 0, 0, offCanvas.width, offCanvas.height);

            const imgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height).data;

            // Calculate exact visual size of each pixel on the main canvas
            const pixelSize = (drawW / offCanvas.width);

            targets = [];
            particles = [];

            for (let y = 0; y < offCanvas.height; y++) {
                for (let x = 0; x < offCanvas.width; x++) {
                    const index = (y * offCanvas.width + x) * 4;
                    const r = imgData[index];
                    const g = imgData[index + 1];
                    const b = imgData[index + 2];
                    const a = imgData[index + 3];

                    // Simple brightness check since background is pure black
                    const brightness = (r + g + b) / 3;
                    if (brightness > 20) {
                        // Map grid coordinates to screen space
                        const targetX = (x / offCanvas.width) * drawW + (w - drawW) / 2;
                        const targetY = (y / offCanvas.height) * drawH + (h - drawH) / 2;

                        targets.push({ x: targetX, y: targetY });

                        particles.push({
                            x: Math.random() * w * 4 - w * 1.5,
                            y: Math.random() * h * 4 - h * 1.5,
                            vx: (Math.random() - 0.5) * 4,
                            vy: (Math.random() - 0.5) * 4,
                            // Uniform size allows for clean grid look
                            size: pixelSize, // Use calculated size (maybe -0.5 for gap)
                            color: `rgba(${r}, ${g}, ${b}, ${a / 255})`,
                            noiseOffset: Math.random() * 100
                        });
                    }
                }
            }
        };

        const resizeCanvas = () => {
            if (!canvas.parentElement) return;
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
            initParticles();
        };

        image.onload = () => {
            loaded = true;
            resizeCanvas();
        };

        // Visibility Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isVisible = true;
                } else {
                    // Only reset on desktop
                    if (window.innerWidth >= 768) {
                        isVisible = false;
                    }
                }
            });
        }, { threshold: 0.1 });

        observer.observe(canvas);

        let time = 0;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.02;

            particles.forEach((p, i) => {
                const target = targets[i];
                if (!target) return;

                if (isVisible) {
                    const dx = target.x - p.x;
                    const dy = target.y - p.y;

                    p.x += dx * 0.05; // Slightly faster convergence for snap effect
                    p.y += dy * 0.05;

                    // Enhanced floating effect (higher amplitude)
                    // Makes the head look "alive" and floating even when formed
                    let noiseX = Math.sin(time + p.noiseOffset) * 2.5;
                    let noiseY = Math.cos(time + p.noiseOffset) * 2.5;

                    // Disable noise on mobile for steady image
                    if (window.innerWidth < 768) {
                        noiseX = 0;
                        noiseY = 0;
                    }

                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = 1.0;
                    // Draw square pixels for voxels
                    // Use slightly smaller size to create thin gaps (optional, helps "grid" look)
                    const drawSize = Math.max(1, p.size - 0.5);
                    ctx.fillRect(p.x + noiseX, p.y + noiseY, drawSize, drawSize);
                } else {
                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x < -1000 || p.x > 3000) p.vx *= -1;
                    if (p.y < -1000 || p.y > 3000) p.vy *= -1;

                    ctx.fillStyle = '#a46eff';
                    ctx.globalAlpha = 0.2;
                    ctx.fillRect(p.x, p.y, p.size, p.size);
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resizeCanvas);
        // Initial init is handled by onload
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.95 // Crisp
            }}
        />
    );
};

export default PixelHead;
