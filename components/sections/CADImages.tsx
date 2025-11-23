import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";

export default function CADImagesSection() {
  return (
    <section id="cad-images" className="py-12 md:py-20 px-4 bg-blueprint-blue/10">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="CAD Images" subtitle="3D models and renderings" />
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageBlock src="/CAD-images/f22_4.png" label="3D Model View 1" aspectRatio="custom" figNumber="03" />
            <ImageBlock src="/CAD-images/f22_3.png" label="3D Model View 2" aspectRatio="custom" figNumber="04" />
            <ImageBlock src="/CAD-images/f22_front.png" label="Front View" aspectRatio="custom" figNumber="05" />
            <ImageBlock src="/CAD-images/f22_side.png" label="Side View" aspectRatio="custom" figNumber="06" />
            <ImageBlock src="/CAD-images/f22_top.png" label="Top View" aspectRatio="custom" figNumber="07" />
            <ImageBlock src="/CAD-images/f22_layout.png" label="Layout View" aspectRatio="custom" figNumber="08" />
          </div>
          <TextBlock>
            <p>Computer-aided design models and technical renderings of the F-22 Raptor build.</p>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
