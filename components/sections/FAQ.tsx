import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="FAQ" subtitle="Frequently asked questions" />
        <div className="space-y-6">
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-3 text-xl">How much does it cost to build?</h3>
            <p>Total cost varies, but expect $100-300 depending on components chosen.</p>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-3 text-xl">How long does the build take?</h3>
            <p>Approximately 10-20 hours spread over a few weekends.</p>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-3 text-xl">Do I need prior experience?</h3>
            <p>No prior experience required, but patience and attention to detail are essential.</p>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-3 text-xl">What's the flight time?</h3>
            <p>Typically 8-15 minutes depending on battery size and flying style.</p>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
