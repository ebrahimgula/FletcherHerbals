"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Only apply scale animation on desktop and if motion is not reduced
  const jarScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion || isMobile ? [1, 1] : [1, 1.3]
  );

  useEffect(() => {
    // Check mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Check motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      window.removeEventListener("resize", checkMobile);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-between bg-[var(--color-cream)] pt-4 md:pt-6 pb-6 md:pb-12 px-6"
    >

      {/* Top Section: Logo & Typography */}
      <div className="flex flex-col items-center justify-center w-full z-20 mt-4 md:mt-8">

        {/* Logo Image - Scaled exactly as original but positioned at the top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : isMobile ? 0.6 : 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-[150px] h-[150px] md:w-[220px] md:h-[220px] mb-0 drop-shadow-sm"
        >
          <Image
            src="/artifacts/fletcher_logo.webp"
            alt="Fletcher Herbals"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Hero Title & Subtext */}
        <div className="text-center max-w-2xl mx-auto space-y-4 -mt-4 md:-mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : isMobile ? 0.6 : 1,
              delay: prefersReducedMotion ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-[var(--color-foreground)] tracking-tight leading-tight"
          >
            The essence of <br className="hidden md:block" /> <span className="italic text-[#D4AF37]">slow beauty.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : isMobile ? 0.6 : 1,
              delay: prefersReducedMotion ? 0 : isMobile ? 0.2 : 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-base md:text-lg text-[var(--color-sage-dark)] font-sans mx-auto leading-relaxed max-w-xl px-4"
          >
            Step into the world of nostalgia and rediscover the age-old secrets
            of hair care. Inspired by the wisdom of our Grandma.
          </motion.p>
        </div>
      </div>

      {/* Center Section: The Hero Jar */}
      <motion.div
        style={{ scale: jarScale }}
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : isMobile ? 0.8 : 1.5,
          delay: prefersReducedMotion ? 0 : isMobile ? 0.2 : 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative w-full h-[35vh] md:h-[45vh] lg:h-[50vh] flex items-center justify-center z-10 my-4 md:my-6"
      >
        {/* Subtle ambient shadow behind the jar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#D4AF37]/5 rounded-full blur-[80px] z-0" />

        <Image
          src="/artifacts/Hero_jar.webp"
          alt="Fletcher Herbals Golden Oil"
          fill
          className="object-contain drop-shadow-[0_20px_50px_rgba(43,58,47,0.15)] z-10"
          priority
        />
      </motion.div>



    </section>
  );
}
