import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-20 px-4 bg-blueprint-blue/5">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Resources" subtitle="Helpful links and references" />
        <div className="grid md:grid-cols-2 gap-6">
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-3">Online Communities</h3>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>RC Groups Forums</li>
              <li>FliteTest Community</li>
              <li>r/radiocontrol</li>
            </ul>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-3">Suppliers</h3>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>HobbyKing</li>
              <li>Flite Test Store</li>
              <li>Amazon (various)</li>
            </ul>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
