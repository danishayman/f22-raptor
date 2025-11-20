import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function ModificationsSection() {
  return (
    <section id="modifications" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Modifications" subtitle="Upgrades and customizations" />
        <div className="grid md:grid-cols-2 gap-6">
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-3">Performance Mods</h3>
            <p className="text-xs mb-2">Suggestions for improving flight characteristics:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Upgraded motor and prop</li>
              <li>Ailerons for better control</li>
              <li>Flaps for slower landing</li>
            </ul>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-3">Aesthetic Mods</h3>
            <p className="text-xs mb-2">Visual enhancements:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Custom paint schemes</li>
              <li>LED lighting</li>
              <li>Decals and markings</li>
            </ul>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
