import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/Hero";
import WhyIBuiltThisSection from "@/components/sections/WhyIBuiltThis";
import MaterialsSection from "@/components/sections/Materials";
import ToolsSection from "@/components/sections/Tools";
import PlansSection from "@/components/sections/Plans";
import BuildProcessSection from "@/components/sections/BuildProcess";
import ElectronicsSection from "@/components/sections/Electronics";
import GallerySection from "@/components/sections/Gallery";
import WhatILearnedSection from "@/components/sections/WhatILearned";
import ResourcesSection from "@/components/sections/Resources";

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
        <GallerySection />
        <WhatILearnedSection />
        <ResourcesSection />
      </main>
      <Footer />
    </>
  );
}
