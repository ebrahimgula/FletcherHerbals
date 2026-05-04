"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative py-24 md:py-32 bg-[var(--color-cream-dark)] overflow-hidden"
    >
      {/* Decorative botanical SVG - top right */}
      <svg
        className="absolute top-0 right-0 w-64 h-64 opacity-[0.08] pointer-events-none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <g fill="none" stroke="#5A6850" strokeWidth="0.8">
          <path d="M50 5 Q 50 50, 50 95" />
          <path d="M50 20 Q 30 25, 20 35" />
          <path d="M50 30 Q 70 35, 80 45" />
          <path d="M50 40 Q 28 48, 18 60" />
          <path d="M50 50 Q 72 58, 82 70" />
          <path d="M50 60 Q 30 68, 22 80" />
        </g>
      </svg>

      {/* Decorative botanical SVG - bottom left */}
      <svg
        className="absolute bottom-0 left-0 w-56 h-56 opacity-[0.08] pointer-events-none rotate-180"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <g fill="none" stroke="#7C8A6E" strokeWidth="0.8">
          <path d="M50 10 C 30 30, 30 70, 50 90 C 70 70, 70 30, 50 10 Z" />
          <path d="M50 10 L 50 90" />
          <path d="M50 25 L 35 35 M50 35 L 33 45 M50 45 L 32 55 M50 55 L 33 65 M50 65 L 36 75" />
          <path d="M50 25 L 65 35 M50 35 L 67 45 M50 45 L 68 55 M50 55 L 67 65 M50 65 L 64 75" />
        </g>
      </svg>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#C26B4F] mb-4">
            Our Roots
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-foreground)] mb-6 leading-tight">
            Grandma&apos;s garden,
            <br />
            <span className="italic text-[#B89968]">in a jar</span>
          </h2>
          <div className="w-16 h-px bg-[#B89968] mx-auto" />
        </motion.div>

        {/* Story Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left: Quote / Pull text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 md:sticky md:top-24"
          >
            <div className="relative bg-[var(--color-cream)] rounded-2xl p-8 md:p-10 shadow-sm border border-[var(--color-sage-light)]/30">
              <span className="absolute -top-4 left-8 text-7xl font-serif text-[#C26B4F] leading-none">
                &ldquo;
              </span>
              <p className="font-serif italic text-xl md:text-2xl text-[var(--color-foreground)] leading-relaxed mb-6 mt-2">
                Rooted in grandma&apos;s garden, poured for your hair.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-[#B89968]" />
                <p className="font-serif italic text-base text-[#C26B4F]">
                  Est. 2022 · Fletcher, NSW
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Story text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 space-y-6"
          >
            <p className="font-serif text-lg md:text-xl text-[var(--color-foreground)] leading-relaxed">
              Our journey began in the garden of our beloved grandma — where
              she shared her age-old herbal beauty secrets, picking, drying,
              and infusing alongside us.
            </p>

            <p className="font-serif text-base md:text-lg text-[var(--color-sage-dark)] leading-relaxed">
              Inspired by her wisdom, we&apos;ve crafted a small line of
              homegrown hair oil that captures the essence of her nurturing
              love and timeless remedies — fostering beauty and well-being,
              naturally.
            </p>

            <p className="font-serif text-base md:text-lg text-[var(--color-sage-dark)] leading-relaxed">
              Every jar is a moment of slow beauty. Every drop, a return to
              ritual. We don&apos;t rush, we don&apos;t cut corners. We let
              the herbs do what they&apos;ve always done — quietly, patiently,
              powerfully.
            </p>

            {/* Values pills */}
            <div className="flex flex-wrap gap-3 pt-6">
              {[
                "Homegrown",
                "Hand-poured",
                "Small batch",
                "Family recipe",
              ].map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 rounded-full bg-[var(--color-cream)] border border-[var(--color-sage-light)]/60 text-sm font-sans text-[var(--color-sage-dark)]"
                >
                  {value}
                </span>
              ))}
            </div>

            {/* Signature */}
            <div className="pt-8 border-t border-[var(--color-sage-light)]/40">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-sage-dark)] mb-2">
                With love, from
              </p>
              <p className="font-serif italic text-3xl md:text-4xl text-[#C26B4F]">
                Fletcher Herbals
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
