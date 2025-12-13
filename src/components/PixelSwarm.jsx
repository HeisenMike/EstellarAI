import React, { useEffect, useRef } from 'react';

const PixelSwarm = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = window.innerWidth < 768 ? 800 : 2500; // Much denser

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    // Base position relative to the wave center
                    offsetY: (Math.random() - 0.5) * 300, // Spread of the wave (concentrated but thick)
                    vx: Math.random() * 0.5 + 0.2,
                    size: Math.random() * 2 + 1.5,
                    // Phase for the wave movement
                    wavePhase: Math.random() * Math.PI * 2,
                    blinkPhase: Math.random() * Math.PI * 2,
                    blinkSpeed: Math.random() * 0.05 + 0.02
                });
            }
        };

        const draw = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#a46eff';

            const amplitude = 120;
            const wavelength = 0.002;
            const speed = 0.0015;
            const centerY = canvas.height / 2 + 50;

            particles.forEach(p => {
                // Helix / Twist Effect
                // We use two interfering waves to create a "twisting" look
                const t = time * speed;
                const x = p.x * wavelength;

                // Primary wave (Sine)
                const wave1 = Math.sin(x + t + p.wavePhase) * amplitude;

                // Secondary modulating wave (Cosine) - creates the "bottle" or "twist" shape envelope
                const twistEnvelope = Math.cos(x * 0.5 + t * 0.5);

                // Apply twist to the spread
                const twistedSpread = p.offsetY * twistEnvelope;

                // Final Y
                p.y = centerY + wave1 + twistedSpread;

                // Move horizontally
                p.x += p.vx;

                if (p.x > canvas.width) {
                    p.x = 0;
                }

                // Dynamic opacity based on "depth" (simulated by twist envelope)
                const depth = Math.sin(x * 0.5 + t * 0.5 + p.wavePhase);
                const opacity = Math.max(0.1, (depth + 1) / 2 * 0.8); // 0.1 to 0.9

                ctx.globalAlpha = opacity;
                ctx.fillRect(p.x, p.y, p.size, p.size);
            });

            animationFrameId = requestAnimationFrame((t) => draw(t));
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        draw(0);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
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
                zIndex: 0, // Behind content but in front of base background
                pointerEvents: 'none'
            }}
        />
    );
};

export default PixelSwarm;
