import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyIBuiltThisSection from "@/components/sections/WhyIBuiltThisSection";
import MaterialsSection from "@/components/sections/MaterialsSection";
import ToolsSection from "@/components/sections/ToolsSection";
import PlansSection from "@/components/sections/PlansSection";
import BuildProcessSection from "@/components/sections/BuildProcessSection";
import ElectronicsSection from "@/components/sections/ElectronicsSection";
import FirstFlightSection from "@/components/sections/FirstFlightSection";
import TroubleshootingSection from "@/components/sections/TroubleshootingSection";
import ModificationsSection from "@/components/sections/ModificationsSection";
import GallerySection from "@/components/sections/GallerySection";
import WhatILearnedSection from "@/components/sections/WhatILearnedSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <WhyIBuiltThisSection />
        <MaterialsSection />
        <ToolsSection />
        <PlansSection />
        <BuildProcessSection />
        <ElectronicsSection />
        <FirstFlightSection />
        <TroubleshootingSection />
        <ModificationsSection />
        <GallerySection />
        <WhatILearnedSection />
        <ResourcesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
