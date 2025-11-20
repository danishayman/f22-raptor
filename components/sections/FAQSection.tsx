import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="FAQ" subtitle="Frequently asked questions" />
        <div className="space-y-4">
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-2">How much does it cost to build?</h3>
            <p className="text-xs">Total cost varies, but expect $100-300 depending on components chosen.</p>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-2">How long does the build take?</h3>
            <p className="text-xs">Approximately 10-20 hours spread over a few weekends.</p>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-2">Do I need prior experience?</h3>
            <p className="text-xs">No prior experience required, but patience and attention to detail are essential.</p>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-2">What's the flight time?</h3>
            <p className="text-xs">Typically 8-15 minutes depending on battery size and flying style.</p>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
