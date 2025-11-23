import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";

export default function CADImagesSection() {
  return (
    <section id="cad-images" className="py-12 md:py-20 px-4 bg-blueprint-blue/10">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="CAD Images" subtitle="3D models and renderings" />
        <div className="space-y-6">
          <ImageBlock label="CAD Model" aspectRatio="video" figNumber="03" />
          <TextBlock>
            <p>Computer-aided design models and technical renderings of the F-22 Raptor build.</p>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
