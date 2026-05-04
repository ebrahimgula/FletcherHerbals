"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Droplet, Info } from "lucide-react";

type QuizState = {
    hairType: string | null;
    scalpType: string | null;
    goal: string | null;
};

export default function DosageCalculator() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<QuizState>({
        hairType: null,
        scalpType: null,
        goal: null,
    });

    const calculateDosage = () => {
        let drops = 3;
        let frequency = "once a week";
        let instructions = "massage into scalp for 10 minutes before washing.";

        // Factor in hair type
        if (answers.hairType === "Coarse/Thick") drops += 2;
        if (answers.hairType === "Fine/Thin") drops -= 1;

        // Factor in scalp type
        if (answers.scalpType === "Dry/Flaky") {
            drops += 1;
            frequency = "twice a week";
            instructions = "apply overnight for deep hydration.";
        }
        if (answers.scalpType === "Oily") {
            drops -= 1;
            frequency = "once a fortnight";
            instructions = "apply only to mid-lengths and ends, avoiding roots.";
        }

        // Factor in goal
        if (answers.goal === "Hair Growth") {
            frequency = "twice a week";
            instructions = "focus entirely on scalp massage to stimulate blood flow.";
        }
        if (answers.goal === "Deep Repair") {
            drops += 1;
            instructions = "warm oil slightly and apply as a hot oil treatment.";
        }

        return { drops: Math.max(1, drops), frequency, instructions };
    };

    const currentResult = step === 3 ? calculateDosage() : null;

    const handleNext = (field: keyof QuizState, value: string) => {
        setAnswers((prev) => ({ ...prev, [field]: value }));
        setStep((prev) => prev + 1);
    };

    const reset = () => {
        setAnswers({ hairType: null, scalpType: null, goal: null });
        setStep(0);
    };

    return (
        <section className="py-24 bg-[#1A251D] text-white overflow-hidden relative">
            {/* Background botanical hint */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-sage-dark)]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-terracotta)]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                <div className="text-center mb-12">
                    <Droplet className="w-8 h-8 mx-auto text-[#D4AF37] mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-serif mb-4">
                        The Apothecary's Measure
                    </h2>
                    <p className="text-[var(--color-cream-dark)] text-lg max-w-xl mx-auto font-light">
                        Every ritual is personal. Tell us about your hair, and we will prescribe the perfect golden measure for your needs.
                    </p>
                </div>

                <div className="glassmorphism rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md h-[450px] md:h-[500px] flex flex-col justify-center relative overflow-hidden">
                    <AnimatePresence mode="popLayout" initial={false}>

                        {/* Step 0: Start */}
                        {step === 0 && (
                            <motion.div
                                key="step-0"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="text-center space-y-8 absolute w-full inset-y-0 flex flex-col justify-center items-center"
                            >
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-8 py-4 bg-[var(--color-sage)] hover:bg-[var(--color-sage-dark)] text-white rounded-full uppercase tracking-widest text-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                                >
                                    Find Your Measure
                                </button>
                            </motion.div>
                        )}

                        {/* Step 1: Hair Type */}
                        {step === 1 && (
                            <motion.div
                                key="step-1"
                                initial={{ opacity: 0, x: 40, filter: "blur(5px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -40, filter: "blur(5px)", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-6 absolute w-full top-1/2 -translate-y-1/2 px-8 md:px-12"
                            >
                                <h3 className="text-2xl font-serif text-center mb-8 text-[#D4AF37]">
                                    1. What is your natural hair texture?
                                </h3>
                                <div className="grid gap-4">
                                    {["Fine/Thin", "Medium/Normal", "Coarse/Thick"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => handleNext("hairType", opt)}
                                            className="w-full p-4 border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all text-left font-light tracking-wide"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Scalp Type */}
                        {step === 2 && (
                            <motion.div
                                key="step-2"
                                initial={{ opacity: 0, x: 40, filter: "blur(5px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -40, filter: "blur(5px)", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-6 absolute w-full top-1/2 -translate-y-1/2 px-8 md:px-12"
                            >
                                <h3 className="text-2xl font-serif text-center mb-8 text-[#D4AF37]">
                                    2. How does your scalp usually feel?
                                </h3>
                                <div className="grid gap-4">
                                    {["Dry/Flaky", "Balanced", "Oily"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => handleNext("scalpType", opt)}
                                            className="w-full p-4 border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all text-left font-light tracking-wide"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Goal */}
                        {step === 3 && (
                            <motion.div
                                key="step-3"
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", y: 20 }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="text-center space-y-8 absolute w-full top-1/2 -translate-y-1/2 px-8 md:px-12"
                            >
                                <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 mb-4"
                                >
                                    <Droplet className="text-[#D4AF37] fill-[#D4AF37] w-6 h-6" />
                                </motion.div>

                                <h3 className="text-3xl font-serif text-white">Your Golden Measure</h3>

                                <div className="bg-black/20 rounded-2xl p-6 border border-white/5 text-left space-y-4">
                                    <p className="text-lg text-[var(--color-cream)]">
                                        <span className="text-[#D4AF37] font-semibold text-2xl mr-2">{currentResult?.drops} drops</span>
                                        {currentResult?.frequency}.
                                    </p>
                                    <p className="text-white/70 font-light leading-relaxed">
                                        <span className="font-medium text-white/90">Ritual: </span>
                                        {currentResult?.instructions}
                                    </p>
                                </div>

                                <div className="pt-6 flex justify-center items-center gap-2 text-sm text-white/40 font-light">
                                    <Info className="w-4 h-4" />
                                    <p>Based on your {answers.hairType?.toLowerCase()} hair and {answers.goal?.toLowerCase() || answers.scalpType?.toLowerCase()} scalp needs.</p>
                                </div>

                                <button
                                    onClick={reset}
                                    className="mt-8 text-sm text-white/50 hover:text-white underline underline-offset-4 transition-colors"
                                >
                                    Recalculate
                                </button>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
