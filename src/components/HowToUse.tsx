"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: 1,
    title: "Warm",
    description:
      "Place the jar in a bowl of warm water for 2–3 minutes to gently activate the herbs.",
  },
  {
    number: 2,
    title: "Section",
    description:
      "Brush hair through and divide into four soft sections — easier to reach every part of the scalp.",
  },
  {
    number: 3,
    title: "Massage",
    description:
      "Apply a small amount to your fingertips and massage into the scalp in slow circles for 5–10 minutes.",
  },
  {
    number: 4,
    title: "Rest",
    description:
      "Cover with a warm towel or shower cap. Leave for at least an hour — or overnight for a deep treatment.",
  },
  {
    number: 5,
    title: "Wash",
    description:
      "Rinse with a mild, sulphate-free shampoo. Repeat 1–2 times a week for visible results.",
  },
];

export default function HowToUse() {
  return (
    <section id="how-to-use" className="relative py-24 md:py-32 bg-[var(--color-cream)] overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#B89968]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#C26B4F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#C26B4F] mb-4">
            How to Use
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-foreground)] mb-6 leading-tight">
            The Ritual
          </h2>
          <div className="w-16 h-px bg-[#B89968] mx-auto mb-6" />
          <p className="text-base md:text-lg text-[var(--color-sage-dark)] font-serif italic max-w-xl mx-auto leading-relaxed">
            Slow rituals make the best results. Set aside an hour for yourself
            — this is more than oil, it&apos;s a moment.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6 md:space-y-8">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex gap-6 md:gap-8"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#C26B4F] flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-serif text-[var(--color-cream)] font-bold">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1 md:pt-2">
                <h3 className="text-2xl md:text-3xl font-serif text-[var(--color-foreground)] mb-3 font-medium">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-[var(--color-sage-dark)] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tip Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-16 bg-[var(--color-sage)]/12 border-l-4 border-[#7C8A6E] px-6 md:px-8 py-6 md:py-8 rounded"
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#C26B4F] mb-3 font-bold">
            A Little Goes a Long Way
          </p>
          <p className="text-base md:text-lg text-[var(--color-sage-dark)] font-serif italic leading-relaxed">
            One jar lasts most rituals 6–8 weeks. Store in a cool, dry place
            — out of direct sunlight.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
