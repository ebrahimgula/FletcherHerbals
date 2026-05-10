import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Origins from "@/components/Origins";
import BotanicalLibrary from "@/components/BotanicalLibrary";
import Timeline from "@/components/Timeline";
import FindYourMatch from "@/components/FindYourMatch";
import HowToUse from "@/components/HowToUse";
import Testimonials from "@/components/Testimonials";
import OurStory from "@/components/OurStory";
import FAQ from "@/components/FAQ";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import MobileOrderBar from "@/components/MobileOrderBar";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-transparent">
        <Hero />
        <Origins />
        <Timeline />
        <BotanicalLibrary />
        <FindYourMatch />
        <HowToUse />
        <Testimonials />
        <OurStory />
        <FAQ />
        <OrderSection />
        <Footer />
      </main>
      <MobileOrderBar />
      <BackToTop />
    </>
  );
}
