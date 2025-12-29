import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function WhyIBuiltThisSection() {
  return (
    <section id="why-i-built-this" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Why I Built This" subtitle="Project motivation and objectives" />
        <TextBlock>
          <p className="mb-4">
            This started as a stubborn childhood dream I couldn&apos;t afford back then. Now I&apos;m giving that kid what he always wanted, but building it myself instead of pulling a perfect toy out of a box.
          </p>
          <p>
            Part nostalgia, part challenge. The more you fuck around, the more you found out. Simple goal: bring a dream to life with my own hands and watch it soar.
          </p>
        </TextBlock>
      </div>
    </section>
  );
}
