"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TIMELINE_STEPS = [
    {
        title: "Sowing the Seeds",
        description: "Every herb begins life in our own Fletcher, NSW backyard garden. We cultivate native and heirloom varieties without synthetic pesticides, relying on the rich Australian soil and abundant sunshine.",
        image: "/artifacts/herb_rosemary.webp", // Or a gardening image if we generate one
    },
    {
        title: "The Patient Harvest",
        description: "We pick our botanicals at the precise moment of maximum potency—often at the break of dawn when the essential oils are most concentrated in the leaves and petals.",
        image: "/artifacts/herb_lavender.webp",
    },
    {
        title: "The Slow Infusion",
        description: "The raw herbs are carefully dried and steeped in cold-pressed carrier oils for weeks. This unhurried, gentle process draws out every drop of nourishing goodness without the use of harsh heat.",
        image: "/artifacts/golden_oil_botanical_hero.webp",
    },
    {
        title: "Hand-Poured Finish",
        description: "Every single bottle is strained, blended, and poured by hand in small batches. It's a labour of love, ensuring that what reaches your scalp is as pure as nature intended.",
        image: "/artifacts/fletcher_hero_bg.webp",
    },
];

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    return (
        <section ref={containerRef} className="py-24 md:py-40 bg-[var(--color-cream-dark)] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative">
                <div className="w-full flex flex-col items-center justify-center text-center mb-20">
                    <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4 pl-[0.3em]">
                        The Journey
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-foreground)]">
                        Seed to Bottle
                    </h3>
                </div>

                {/* The glowing line */}
                <div className="absolute left-6 md:left-1/2 top-40 bottom-0 w-[2px] bg-[var(--color-sage-light)]/30 -translate-x-1/2 hidden md:block" />
                <motion.div
                    style={{
                        scaleY: scrollYProgress,
                        transformOrigin: "top"
                    }}
                    className="absolute left-6 md:left-1/2 top-40 bottom-0 w-[2px] bg-[#D4AF37] -translate-x-1/2 hidden md:block origin-top"
                />

                <div className="space-y-24">
                    {TIMELINE_STEPS.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                                    <h4 className="text-2xl font-serif text-[var(--color-foreground)] mb-4">
                                        {step.title}
                                    </h4>
                                    <p className="text-[var(--color-sage-dark)] leading-relaxed font-sans">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Center Node / Image (Mobile top, Desktop centerish) */}
                                <div className="relative w-full md:w-auto flex justify-center flex-shrink-0 z-10">
                                    {/* Node indicator */}
                                    <div className="hidden md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-cream-dark)] border-2 border-[#D4AF37] z-20" />

                                    {/* Image Bubble */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white/50 relative bg-[var(--color-sage-light)]/20"
                                    >
                                        <div
                                            className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80"
                                            style={{ backgroundImage: `url('${step.image}')` }}
                                        />
                                    </motion.div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
