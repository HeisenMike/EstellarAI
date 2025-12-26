import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuPhone, LuCalendar, LuTrendingUp, LuCreditCard, LuStar } from "react-icons/lu";
import styles from './Position.module.css';

const blueprintSteps = [
    {
        icon: <LuPhone />,
        step: "1. 24/7 Voice AI Agent",
        title: "Capture Every Call Instantly",
        desc: "Your AI voice agent answers every call right away, day or night, with natural, human-sounding conversation. It can book, reschedule, and cancel appointments automatically while answering customer inquiries clearly and consistently. The system handles multiple calls at the same time, so every caller is attended to promptly. It collects key details, qualifies leads, and keeps your business responsive even when you are unavailable. This ensures more appointments are booked, more questions are answered, and every opportunity is captured efficiently.",
        benefit: "Capture every emergency job and high-value lead, even at 2 AM.",
        span: "col-span-2",
        video: "/ai voice service card.mp4",
        thumbnail: "/thumbnails/ai_voice_thumb.jpg",
        mobileSlides: [
            "/slides/slide1_v2.png",
            "/slides/slide2.png",
            "/slides/slide3_v2.png"
        ]
    },
    {
        icon: <LuCalendar />,
        step: "2. Smart Appointment Booking",
        title: "Zero-Friction Calendar Management",
        desc: "Books, confirms, and reschedules appointments directly into your calendar with real-time sync, automated confirmations, and instant customer notifications.",
        benefit: "Eliminate double-bookings, no-shows, and phone tag completely.",
        span: "col-span-1",
        video: "/CalendarService.mp4",
        thumbnail: "/thumbnails/calendar_thumb.jpg",
        mobileSlides: [
            "/slides/calendar_slide1.png",
            "/slides/calendar_slide2.png"
        ],
        mobileObjectFit: "cover"
    },
    {
        icon: <LuTrendingUp />,
        step: "3. Visual Sales Pipeline (CRM)",
        title: "Track Every Dollar of Revenue",
        desc: "Automatically track every estimate and job from \"New Lead\" to \"Paid Invoice\" on a simple, visual CRM board.",
        benefit: "Turn 70-80% of missed calls into booked appointments.",
        span: "col-span-1",
        video: "/Pipeline.mp4",
        thumbnail: "/thumbnails/pipeline_thumb.jpg"
    },
    {
        icon: <LuCreditCard />,
        step: "4. Payment & Invoice Automation",
        title: "Get Paid Faster, Stress Less",
        desc: "Sends digital invoices, processes payments, and handles automated payment reminders after every job, including recurring payment setups for plans.",
        benefit: "Reduce outstanding invoices and eliminate awkward payment conversations.",
        span: "col-span-1",
        video: "/Invoicing.mp4",
        thumbnail: "/thumbnails/invoicing_thumb.jpg"
    },
    {
        icon: <LuStar />,
        step: "5. Reputation Management",
        title: "Dominate Local Search",
        desc: "Automatically requests 5-star reviews after successful jobs with smart timing.",
        benefit: "Generate more 5-star reviews, boost reputation, and attract premium customers.",
        span: "col-span-1",
        video: "/Review Request.mp4",
        thumbnail: "/thumbnails/review_thumb.jpg"
    }
];

// Carousel variants
const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const MobileCarousel = ({ slides, objectFit = "contain" }) => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, so we cycle them 0 -> 1 -> 2 -> 0
    const imageIndex = Math.abs(page % slides.length);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className={styles.carouselContainer}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={slides[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className={styles.carouselSlide}
                    alt="Service slide"
                    style={{ objectFit: objectFit }}
                />
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className={styles.dotsContainer}>
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        className={`${styles.dot} ${idx === imageIndex ? styles.activeDot : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

// Main Component
const Position = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.headline}>The <span className={styles.lightItalic}>5-Step Blueprint</span> That <br /> Automates Your Entire Business Cycle</h2>
                    <h3 className={styles.subheadline}>From the very first ring to the final 5-star review, Estellar AI handles it all.</h3>
                </div>

                <div className={styles.bentoGrid}>
                    {blueprintSteps.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} ${styles[item.span] || ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(164, 110, 255, 0.15)" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {/* {index === 0 && <PixelHead />} */}
                            <div className={styles.iconBox}>
                                {item.icon}
                            </div>
                            <p className={styles.stepNum}>{item.step}</p>
                            <h4 className={styles.cardTitle}>{item.title}</h4>
                            <p className={styles.desc}>{item.desc}</p>
                            <div className={styles.divider}></div>
                            <p className={styles.benefit}><strong>Benefit:</strong> {item.benefit}</p>

                            {/* Video on Desktop, Thumbnail on Mobile */}
                            {!isMobile && item.video && (
                                <video
                                    className={styles.cardVideo}
                                    src={item.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            )}

                            {isMobile && item.mobileSlides ? (
                                <MobileCarousel
                                    slides={item.mobileSlides}
                                    objectFit={item.mobileObjectFit || "contain"}
                                />
                            ) : (
                                isMobile && item.thumbnail && (
                                    <img
                                        src={item.thumbnail}
                                        className={styles.cardVideo}
                                        alt={item.title}
                                        style={{ opacity: 1, objectFit: 'cover' }}
                                    />
                                )
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Position;
