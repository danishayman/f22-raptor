import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function TroubleshootingSection() {
  return (
    <section id="troubleshooting" className="py-20 px-4 bg-blueprint-blue/5">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Troubleshooting" subtitle="Common issues and solutions" />
        <div className="space-y-4">
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-2">Issue: Plane Won't Take Off</h3>
            <p className="text-xs">Check motor thrust, weight distribution, and control surface deflection.</p>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-2">Issue: Unstable Flight</h3>
            <p className="text-xs">Verify CG position, check for warped wings, adjust trim settings.</p>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-2">Issue: Poor Range</h3>
            <p className="text-xs">Inspect antenna placement, check receiver battery, verify transmitter settings.</p>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
