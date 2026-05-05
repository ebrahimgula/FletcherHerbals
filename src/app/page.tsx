import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Origins from "@/components/Origins";
import BotanicalLibrary from "@/components/BotanicalLibrary";
import Timeline from "@/components/Timeline";
import OurStory from "@/components/OurStory";
import OrderSection from "@/components/OrderSection";
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
        <OurStory />
        <OrderSection />
        <Footer />
      </main>
    </>
  );
}
