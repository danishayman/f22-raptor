import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";

export default function ElectronicsSection() {
  return (
    <section id="electronics" className="py-12 md:py-20 px-4 bg-blueprint-blue/5">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Electronics" subtitle="Avionics and control systems" />
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
          <TextBlock className="md:col-span-3">
            <h3 className="text-cyan-400 font-bold mb-4 text-lg md:text-xl">Required Components</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>ESC (Electronic Speed Controller)</li>
              <li>1806/2280kv Brushless Motor</li>
              <li>FlySky FS-i6 Transmitter</li>
              <li>FlySky FS-iA6 Receiver</li>
              <li>9G Servo Motors (x2)</li>
              <li>3S 600mAh 40C LiPo Battery</li>
            </ul>
          </TextBlock>
          <ImageBlock src="/circuit_image.png" label="Wiring Diagram" figNumber="1" aspectRatio="video" className="md:col-span-4" />
        </div>
      </div>
    </section>
  );
}
