import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/Hero";
import WhyIBuiltThisSection from "@/components/sections/WhyIBuiltThis";
import MaterialsSection from "@/components/sections/Materials";
import ToolsSection from "@/components/sections/Tools";
import PlansSection from "@/components/sections/Plans";
import BuildProcessSection from "@/components/sections/BuildProcess";
import ElectronicsSection from "@/components/sections/Electronics";
import FirstFlightSection from "@/components/sections/FirstFlight";
import TroubleshootingSection from "@/components/sections/Troubleshooting";
import ModificationsSection from "@/components/sections/Modifications";
import GallerySection from "@/components/sections/Gallery";
import WhatILearnedSection from "@/components/sections/WhatILearned";
import ResourcesSection from "@/components/sections/Resources";
import FAQSection from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/Contact";

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
