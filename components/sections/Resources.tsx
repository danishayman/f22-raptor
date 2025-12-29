import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-12 md:py-20 px-4 bg-blueprint-blue/5">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Resources" subtitle="Helpful links and references" />

        {/* Video Reference */}
        <div className="mb-8">
          <h3 className="text-cyan-400 font-bold mb-4 text-lg md:text-xl">Video Reference</h3>
          <div className="relative w-full overflow-hidden rounded-lg border border-cyan-500/30" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Ya9bT2I4-AY"
              title="F-22 Foam Board RC Airplane"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-4 text-lg md:text-xl">Online Communities</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li><a href="https://www.flitetest.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 underline transition-colors">FliteTest</a></li>
              <li><a href="https://www.reddit.com/r/RCPlanes" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 underline transition-colors">r/RCPlanes</a></li>
            </ul>
          </TextBlock>
          <TextBlock>
            <h3 className="text-cyan-400 font-bold mb-4 text-lg md:text-xl">Suppliers</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li><a href="https://shopee.com.my/alexkeechengfu/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 underline transition-colors">Uncle Alex RC World</a></li>
              <li><a href="https://www.flitetest.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 underline transition-colors">Flite Test Store</a></li>
              <li><a href="https://shopee.com.my/amelycheok/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 underline transition-colors">Toys Park Shopee</a></li>
            </ul>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
