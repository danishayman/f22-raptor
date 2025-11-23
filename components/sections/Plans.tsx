import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";

export default function PlansSection() {
  return (
    <section id="plans" className="py-12 md:py-20 px-4 bg-blueprint-blue/5">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Plans" subtitle="Technical drawings and specifications" />
        <div className="space-y-6 max-w-3xl mx-auto">
          <ImageBlock src="/plans.jpg" label="F-22 Raptor Plans" aspectRatio="custom" figNumber="02" />
          <TextBlock>
            <p>Download links: <a href="https://drive.google.com/drive/folders/16CLa1liDK_uY1aA51o0VirKp5OXex-s8?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Google Drive Folder</a></p>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
