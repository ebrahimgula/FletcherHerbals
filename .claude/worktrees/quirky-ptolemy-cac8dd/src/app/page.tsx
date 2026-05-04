import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Origins from "@/components/Origins";
import BotanicalLibrary from "@/components/BotanicalLibrary";
import Timeline from "@/components/Timeline";
import RitualSection from "@/components/RitualSection";
import DosageCalculator from "@/components/DosageCalculator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-transparent">
        <Hero />
        <Origins />
        <Timeline />
        <BotanicalLibrary />
        {/* <RitualSection /> */}
        <DosageCalculator />
        <Footer />
      </main>
    </>
  );
}
