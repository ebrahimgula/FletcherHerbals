"use client";

import { motion } from "framer-motion";

const TIMELINE_STEPS = [
  {
    number: "01",
    title: "Sown",
    subtitle: "From Seed",
    description:
      "Native and heirloom herbs cultivated in our Fletcher, NSW garden. No synthetic pesticides — just rich Australian soil and patient sunlight.",
  },
  {
    number: "02",
    title: "Harvested",
    subtitle: "At Dawn",
    description:
      "Picked at the precise moment of maximum potency — often at the break of dawn when essential oils are most concentrated in the leaves.",
  },
  {
    number: "03",
    title: "Infused",
    subtitle: "Slowly",
    description:
      "Carefully dried and steeped in cold-pressed carrier oils for weeks. An unhurried, gentle process — never rushed with heat.",
  },
  {
    number: "04",
    title: "Poured",
    subtitle: "By Hand",
    description:
      "Every bottle strained, blended, and hand-poured in small batches. A labour of love, as pure as nature intended.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-cream-dark)] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#C26B4F] mb-4">
            The Journey
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-foreground)] mb-6 leading-tight">
            Seed to Bottle
          </h2>
          <div className="w-16 h-px bg-[#B89968] mx-auto mb-6" />
          <p className="text-base md:text-lg text-[var(--color-sage-dark)] font-serif italic max-w-xl mx-auto leading-relaxed">
            Four patient steps, repeated with care, in every jar we make.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-sage-light)]/30 rounded-2xl overflow-hidden shadow-sm">
          {TIMELINE_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-[var(--color-cream)] p-8 md:p-10 flex flex-col group hover:bg-[var(--color-cream-dark)]/30 transition-colors duration-500"
            >
              {/* Number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-serif text-5xl md:text-6xl text-[#C26B4F]/80 leading-none">
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-[#B89968]/40" />
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-serif text-[var(--color-foreground)] leading-none mb-1">
                {step.title}
              </h3>
              <p className="font-serif italic text-base text-[var(--color-sage-dark)] mb-6">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm md:text-[15px] text-[var(--color-sage-dark)] leading-relaxed font-sans">
                {step.description}
              </p>

              {/* Connector arrow on desktop */}
              {index < TIMELINE_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[var(--color-cream-dark)] border border-[#B89968]/40 items-center justify-center text-[#C26B4F] text-xs">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="font-serif italic text-lg md:text-xl text-[var(--color-sage-dark)]">
            From our backyard, to your bathroom shelf.
          </p>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#B89968] mt-3">
            Est. 2022 · Fletcher, NSW
          </p>
        </motion.div>
      </div>
    </section>
  );
}
