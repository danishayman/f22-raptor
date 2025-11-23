import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";

export default function PlansSection() {
  return (
    <section id="plans" className="py-20 px-4 bg-blueprint-blue/5">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Plans" subtitle="Technical drawings and specifications" />
        <div className="space-y-6">
          <ImageBlock label="Wing Schematic" aspectRatio="wide" />
          <ImageBlock label="Fuselage Cross-Section" aspectRatio="video" />
          <TextBlock>
            <p>Download links and detailed measurements will be provided here.</p>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
