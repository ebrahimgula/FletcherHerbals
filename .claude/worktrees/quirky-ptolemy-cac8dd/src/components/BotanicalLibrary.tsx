"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const INGREDIENTS = [
  {
    name: "Rosemary",
    benefit: "Improves thickness & growth; prevents dandruff.",
    image: "/artifacts/herb_rosemary.webp",
  },
  {
    name: "Lavender",
    benefit: "Calming aroma; reduces dandruff & inflammation.",
    image: "/artifacts/herb_lavender.webp",
  },
  {
    name: "Hibiscus",
    benefit: "Rich in antioxidants; prevents hair fall & adds shine.",
    image: "/artifacts/herb_hibiscus.webp",
  },
  {
    name: "Curry Leaves",
    benefit: "Source of Vitamin C & B; prevents premature greying.",
    image: "/artifacts/herb_curry_leaves.webp",
  },
  {
    name: "Coconut Oil",
    benefit:
      "A superb moisturiser that can prevent protein loss in the hair, reduce damage, and promote hair health.",
    image: "/artifacts/ingredient_coconut_oil.webp",
  },
  {
    name: "Castor Oil",
    benefit:
      "Rich in ricinoleic acid which can help moisturise the scalp, promote hair growth, and improve hair thickness.",
    image: "/artifacts/ingredient_castor_oil.webp",
  },
  {
    name: "Peppermint Oil",
    benefit:
      "Has a cooling effect on the scalp and can stimulate hair follicles, promoting hair growth.",
    image: "/artifacts/ingredient_peppermint_oil.webp",
  },
];

export default function BotanicalLibrary() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      ref={targetRef}
      className="relative bg-[var(--color-cream-dark)] transition-colors duration-1000 md:h-[300vh]"
    >
      {/* Desktop: Sticky scroll version */}
      <div className="hidden md:block sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-20 left-6 md:left-20 z-20 transition-all duration-1000 bg-[var(--color-cream-dark)]/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl max-w-xs md:max-w-md">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-[var(--color-foreground)] mb-4"
          >
            The Botanical
            <br />
            Powerhouse
          </motion.h2>
          <p className="font-sans text-[var(--color-sage-dark)] max-w-sm mt-4 text-base md:text-lg">
            Discover the raw, organic ingredients grown in our Fletcher garden,
            meticulously combined to heal and nourish.
          </p>
        </div>

        <motion.div
          style={{ x }}
          className="flex gap-16 pl-[100vw] pr-[20vw] mt-20"
        >
          {INGREDIENTS.map((herb, idx) => (
            <motion.div
              key={idx}
              className="group relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden glassmorphism flex-shrink-0 flex items-center justify-center bg-white/40 cursor-pointer transition-all duration-1000 ease-out"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] scale-100 opacity-90 mix-blend-multiply group-hover:scale-110 group-hover:rotate-1"
                style={{ backgroundImage: `url('${herb.image}')` }}
              />

              {/* Tooltip Overlay */}
              <div className="absolute inset-0 bg-[var(--color-sage-dark)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8">
                <motion.h3 className="text-3xl font-serif text-[var(--color-cream)] mb-2">
                  {herb.name}
                </motion.h3>
                <motion.p className="font-sans text-[var(--color-cream-dark)] text-lg leading-relaxed">
                  {herb.benefit}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile: Vertical Grid */}
      <div className="md:hidden py-20 px-6">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-serif text-[var(--color-foreground)] mb-4"
          >
            The Botanical
            <br />
            Powerhouse
          </motion.h2>
          <p className="font-sans text-[var(--color-sage-dark)] mt-4 text-base">
            Discover the raw, organic ingredients grown in our Fletcher garden,
            meticulously combined to heal and nourish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {INGREDIENTS.map((herb, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden glassmorphism flex items-center justify-center bg-white/40 cursor-pointer transition-all"
            >
              {/* Image */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90 mix-blend-multiply group-active:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url('${herb.image}')` }}
              />

              {/* Tooltip Overlay */}
              <div className="absolute inset-0 bg-[var(--color-sage-dark)]/95 opacity-0 group-active:opacity-100 sm:group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-serif text-[var(--color-cream)] mb-2">
                  {herb.name}
                </h3>
                <p className="font-sans text-[var(--color-cream-dark)] text-sm leading-relaxed">
                  {herb.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
