"use client";

import { motion } from "framer-motion";

export default function Origins() {
  return (
    <section id="origins" className="relative w-full py-24 md:py-40 bg-[var(--color-cream)] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
            Backyard to Bottle
          </h2>

          <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-foreground)] leading-tight">
            Rooted in our Fletcher garden. <br /> Handcrafted for you.
          </h3>

          <p className="text-lg text-[var(--color-sage-dark)] font-sans leading-relaxed">
            We believe that true nourishment cannot be rushed or mass-produced.
            Fletcher Herbals is profoundly, completely home-grown and home-made.
          </p>

          <p className="text-lg text-[var(--color-sage-dark)] font-sans leading-relaxed">
            Every single herb that goes into our golden oil is meticulously
            hand-tended in our own backyard garden in Fletcher, NSW. We wait
            patiently for the perfect harvest, slowly infuse the raw botanicals,
            and hand-pour every single bottle. It’s slow beauty—crafted with the
            wisdom of generations past, straight from our home to yours.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]"></div>
            <span className="italic font-serif text-[var(--color-sage)] text-xl">
              100% Homemade
            </span>
          </div>
        </motion.div>

        {/* Visual / Image Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative w-full aspect-square md:aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[15s] hover:scale-110"
            style={{
              backgroundImage:
                "url('/artifacts/golden_oil_botanical_hero.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)]/20 to-transparent"></div>
          <div className="absolute inset-0 border-[10px] border-[var(--color-cream)]/10 rounded-t-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
