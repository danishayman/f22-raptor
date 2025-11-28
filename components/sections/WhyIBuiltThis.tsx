import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function WhyIBuiltThisSection() {
  return (
    <section id="why-i-built-this" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Why I Built This" subtitle="Project motivation and objectives" />
        <TextBlock>
            <p className="mb-4">
            This project started as a stubborn childhood dream I never got to touch. I couldn&apos;t afford the cool stuff back then, so now I&apos;m giving that kid version of me what he always wanted, but in a way that feels more meaningful; building it myself instead of pulling a perfect toy out of a box.
            </p>
            <p className="mb-4">
            It&apos;s part nostalgia, part challenge. I wanted to push myself into hardware, into something real and hands-on, where mistakes have weight and learning comes from trial, error, and a bit of reckless curiosity. A new hobby born from the classic rule of <em>fuck around and find out</em>.
            </p>
            <p>
            Simple goal: bring a childhood dream to life with my own hands, and watch it soar.
            </p>
        </TextBlock>
      </div>
    </section>
  );
}
