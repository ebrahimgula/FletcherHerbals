"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    title: "1. Warm",
    description:
      "Experience the tactile sensation of warming the oil in your hands. Let the botanical aromas awaken.",
    color: "from-[var(--color-terracotta)]/40 to-transparent",
  },
  {
    title: "2. Massage",
    description:
      "Stimulate blood flow at the scalp. Take slow, deliberate circles, allowing the herbs to penetrate.",
    color: "from-[var(--color-sage-light)]/30 to-transparent",
  },
  {
    title: "3. Absorb",
    description:
      "The deep-conditioning phase. Leave for 1 hour or overnight for profound strengthening and renewal.",
    color: "from-[var(--color-rose)]/20 to-transparent",
  },
];

function RitualStep({
  step,
  index,
  scrollYProgress,
}: {
  step: (typeof STEPS)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const stepOpacity = useTransform(
    scrollYProgress,
    [Math.max(0, (index - 0.5) * 0.33), index * 0.33, (index + 0.5) * 0.33],
    [0, 1, 0],
  );

  const stepY = useTransform(
    scrollYProgress,
    [Math.max(0, (index - 0.5) * 0.33), index * 0.33, (index + 0.5) * 0.33],
    [50, 0, -50],
  );

  return (
    <motion.div
      style={{ opacity: stepOpacity, y: stepY }}
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full glassmorphism p-10 md:p-14 rounded-[2rem] border-white/10"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-[2rem] opacity-50`}
      />
      <div className="relative z-10">
        <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
          {step.title}
        </h3>
        <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function RitualSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background darkness mapping
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1]);

  return (
    <section
      id="ritual"
      ref={containerRef}
      className="relative h-[400vh] bg-[var(--color-cream-dark)]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Abstract Background Visual */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 mix-blend-multiply"
          style={{ backgroundImage: "url('/artifacts/ritual_warm_amber.webp')" }}
        />

        {/* Dark Mode Transition Layer */}
        <motion.div
          className="absolute inset-0 z-0 bg-[#1A1A1A]"
          style={{ opacity: bgOpacity }}
        />

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col md:flex-row items-center md:items-stretch py-20">
          {/* Left Column: Title */}
          <div className="w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-serif text-[var(--color-cream)] drop-shadow-lg md:drop-shadow-none md:text-[var(--color-foreground)] transition-colors duration-1000"
              style={{
                color: useTransform(
                  scrollYProgress,
                  [0, 0.3],
                  ["var(--color-foreground)", "var(--color-cream)"],
                ),
              }}
            >
              The
              <br />
              <span className="italic">Ancient</span>
              <br />
              Ritual
            </motion.h2>
          </div>

          {/* Right Column: Steps */}
          <div className="w-full md:w-1/2 flex flex-col justify-center relative">
            {STEPS.map((step, index) => (
              <RitualStep
                key={index}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
