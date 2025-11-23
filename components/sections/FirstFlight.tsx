import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";

export default function FirstFlightSection() {
  return (
    <section id="first-flight" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="First Flight" subtitle="Pre-flight checks and maiden flight" />
        <div className="space-y-6">
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-4 text-xl">Pre-Flight Checklist</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Control surface movement check</li>
              <li>CG (Center of Gravity) verification</li>
              <li>Battery charge level</li>
              <li>Weather conditions assessment</li>
            </ul>
          </TextBlock>
          <ImageBlock label="First Flight Documentation" aspectRatio="video" />
        </div>
      </div>
    </section>
  );
}
