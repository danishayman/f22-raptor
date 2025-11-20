import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function ToolsSection() {
  return (
    <section id="tools" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Tools" subtitle="Required equipment and instruments" />
        <TextBlock>
          <div className="grid md:grid-cols-3 gap-4 text-xs">
            <div>
              <h4 className="text-cyan-400 font-bold mb-2">Cutting Tools</h4>
              <p>Utility knife, hot wire cutter, saw</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-bold mb-2">Measuring Tools</h4>
              <p>Ruler, calipers, protractor</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-bold mb-2">Assembly Tools</h4>
              <p>Glue gun, soldering iron, screwdrivers</p>
            </div>
          </div>
        </TextBlock>
      </div>
    </section>
  );
}
