import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function ToolsSection() {
  return (
    <section id="tools" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Tools" subtitle="Required equipment and instruments" />
        <TextBlock>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-cyan-400 font-bold mb-3 text-xl">Cutting Tools</h4>
              <p className="text-base">Utility knife, Scissors, Pliers</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-bold mb-3 text-xl">Measuring Tools</h4>
              <p className="text-base">Ruler, Measuring Tape</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-bold mb-3 text-xl">Assembly Tools</h4>
              <p className="text-base">Glue gun, Soldering iron, Screwdrivers</p>
            </div>
          </div>
        </TextBlock>
      </div>
    </section>
  );
}
