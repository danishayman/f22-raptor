import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-blueprint-blue/5">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Contact" subtitle="Get in touch" />
        <TextBlock>
          <div className="text-center space-y-4">
            <p>Questions about the build? Want to share your own RC plane project?</p>
            <div className="border-t border-cyan-400/30 pt-4 mt-4">
              <p className="text-cyan-400 text-xl">contact@rcplaneblueprint.com</p>
              <p className="text-cyan-200/60 mt-2">Response time: 24-48 hours</p>
            </div>
          </div>
        </TextBlock>
      </div>
    </section>
  );
}
