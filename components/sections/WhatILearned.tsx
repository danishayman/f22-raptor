import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function WhatILearnedSection() {
  return (
    <section id="what-i-learned" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="What I Learned" subtitle="Key takeaways and insights" />
        <TextBlock>
          <div className="space-y-4">
            <p><strong className="text-cyan-400">Lesson 1:</strong> Simulation is cheaper compared to real-world testing. (learned that the hard way)</p>
            <p><strong className="text-cyan-400">Lesson 2:</strong> Take time with the build - dont get too excited and rush.</p>
            <p><strong className="text-cyan-400">Lesson 3:</strong> Test electronics thoroughly before final assembly. Disassembling is time-consuming.</p>
            <p><strong className="text-cyan-400">Lesson 4:</strong> Weather plays a significant role in flight performance and safety.</p>
            <p><strong className="text-cyan-400">Lesson 5 (most important):</strong> Never give up. Crashing is part of it. I literally crashed 7 times before succeeding :D. Find out what's wrong, improvise, forget how much it hurts, and try again.</p>
          </div>
          <div className="pt-8 text-center">
            <span className="italic text-gray-400 text-sm">"Icarus laughed as he fell, for he knew that falling meant he had soared."</span>
          </div>
        </TextBlock>
      </div>
    </section>
  );
}
