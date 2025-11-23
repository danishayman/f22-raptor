import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function ModificationsSection() {
  return (
    <section id="modifications" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Modifications" subtitle="Upgrades and customizations" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-4 text-xl">Performance Mods</h3>
            <p className="mb-3">Suggestions for improving flight characteristics:</p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Upgraded motor and prop</li>
              <li>Ailerons for better control</li>
              <li>Flaps for slower landing</li>
            </ul>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-4 text-xl">Aesthetic Mods</h3>
            <p className="mb-3">Visual enhancements:</p>
            <ul className="list-disc list-inside space-y-2 text-base">
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
