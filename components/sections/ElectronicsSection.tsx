import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";

export default function ElectronicsSection() {
  return (
    <section id="electronics" className="py-20 px-4 bg-blueprint-blue/5">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Electronics" subtitle="Avionics and control systems" />
        <div className="grid md:grid-cols-2 gap-6">
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-3">Required Components</h3>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>ESC (Electronic Speed Controller)</li>
              <li>Brushless motor</li>
              <li>Receiver & transmitter</li>
              <li>Servo motors (x4)</li>
              <li>LiPo battery</li>
            </ul>
          </TextBlock>
          <ImageBlock label="Wiring Diagram" aspectRatio="square" />
        </div>
      </div>
    </section>
  );
}
