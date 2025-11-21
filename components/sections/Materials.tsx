import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function MaterialsSection() {
  return (
    <section id="materials" className="py-20 px-4 bg-blueprint-blue/5">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Materials" subtitle="Complete bill of materials" />
        <div className="grid md:grid-cols-2 gap-6">
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-3">Airframe Materials</h3>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>MPPF Board</li>
              <li>Push Rods</li>
              <li>Carbon Fiber Rods</li>
              <li>Control Horns</li>
              <li>Linkage Stopper</li>
              <li>Servo Mounts</li>
              <li>5045 Propeller</li>
            </ul>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-3">Adhesives & Finishing</h3>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Hot Glue</li>
              <li>Super glue</li>
              <li>Masking Tape</li>
              <li>Spray Paint (Optional)</li>
            </ul>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
