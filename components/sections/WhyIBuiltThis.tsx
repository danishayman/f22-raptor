import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function WhyIBuiltThisSection() {
  return (
    <section id="why-i-built-this" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Why I Built This" subtitle="Project motivation and objectives" />
        <TextBlock>
          <p className="mb-4">This section will contain the story and motivation behind building this RC plane.</p>
          <p>Placeholder content for personal experience, challenges faced, and goals achieved.</p>
        </TextBlock>
      </div>
    </section>
  );
}
