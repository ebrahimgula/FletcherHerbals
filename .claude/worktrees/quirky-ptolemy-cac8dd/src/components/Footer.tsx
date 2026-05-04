"use client";

import { Leaf, HandHeart, Sprout } from "lucide-react";

export default function Footer() {
  const trustSignals = [
    {
      icon: <Leaf className="w-8 h-8 mb-4" strokeWidth={1.5} />,
      title: "100% Natural",
    },
    {
      icon: <HandHeart className="w-8 h-8 mb-4" strokeWidth={1.5} />,
      title: "Handmade",
    },
    {
      icon: <Sprout className="w-8 h-8 mb-4" strokeWidth={1.5} />,
      title: "Homegrown Herbs",
    },
  ];

  return (
    <footer className="bg-[var(--color-sage-dark)] text-[var(--color-cream)] pt-20 pb-20 md:pb-32 px-6">
      <div className="container mx-auto">
        {/* Trust Signals */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-20 border-b border-white/20 pb-20">
          {trustSignals.map((signal, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm mb-2">
                {signal.icon}
              </div>
              <h4 className="font-serif text-2xl tracking-wide">
                {signal.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-white/70 font-light text-sm">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-serif text-3xl text-white mb-2 italic">
              fletcher
            </h2>
            <p>Homegrown in Fletcher, NSW 2287</p>
            <p className="mt-4 text-xs">Email: hello@fletcherherbals.com</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-serif text-sm uppercase tracking-wide mb-2">
                Shop
              </h3>
              <a href="#" className="hover:text-white transition-colors">
                Our Products
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Gift Sets
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Bundle Deals
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-white font-serif text-sm uppercase tracking-wide mb-2">
                Learn
              </h3>
              <a href="#origins" className="hover:text-white transition-colors">
                Our Story
              </a>
              <a href="#botanical" className="hover:text-white transition-colors">
                Ingredients
              </a>
              <a href="#dosage" className="hover:text-white transition-colors">
                How to Use
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-white font-serif text-sm uppercase tracking-wide mb-2">
                Support
              </h3>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="mb-4">
              &copy; {new Date().getFullYear()} Fletcher Herbals. All rights reserved.
            </p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://instagram.com/fletcherherbals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/fletcherherbals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
