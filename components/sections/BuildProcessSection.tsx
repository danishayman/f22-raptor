import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";

export default function BuildProcessSection() {
  return (
    <section id="build-process" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Build Process" subtitle="Step-by-step construction guide" />
        <div className="space-y-8">
          <div>
            <h3 className="text-cyan-400 text-lg font-bold mb-4">STEP 1: Wing Construction</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ImageBlock label="Wing Assembly" aspectRatio="square" />
              <TextBlock>
                <p className="text-xs">Detailed instructions for wing construction, including cutting patterns and assembly sequence.</p>
              </TextBlock>
            </div>
          </div>
          <div>
            <h3 className="text-cyan-400 text-lg font-bold mb-4">STEP 2: Fuselage Assembly</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <TextBlock>
                <p className="text-xs">Instructions for building the fuselage structure and mounting points.</p>
              </TextBlock>
              <ImageBlock label="Fuselage Frame" aspectRatio="square" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
