import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function WhatILearnedSection() {
  return (
    <section id="what-i-learned" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="What I Learned" subtitle="Key takeaways and insights" />
        <TextBlock>
          <div className="space-y-4">
            <p><strong className="text-cyan-400">Lesson 1:</strong> Proper CG is critical for stable flight.</p>
            <p><strong className="text-cyan-400">Lesson 2:</strong> Take time with the build - rushing leads to mistakes.</p>
            <p><strong className="text-cyan-400">Lesson 3:</strong> Test electronics before final assembly.</p>
            <p><strong className="text-cyan-400">Lesson 4:</strong> Weather conditions matter more than you think.</p>
          </div>
        </TextBlock>
      </div>
    </section>
  );
}
