import SectionHeader from "@/components/SectionHeader";
import ImageBlock from "@/components/ImageBlock";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-12 md:py-20 px-4 bg-blueprint-blue/5">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Gallery" subtitle="Build photos and flight footage" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ImageBlock label="Build Photo 1" aspectRatio="square" />
          <ImageBlock label="Build Photo 2" aspectRatio="square" />
          <ImageBlock label="Build Photo 3" aspectRatio="square" />
          <ImageBlock label="Flight Photo 1" aspectRatio="square" />
          <ImageBlock label="Flight Photo 2" aspectRatio="square" />
          <ImageBlock label="Flight Photo 3" aspectRatio="square" />
        </div>
      </div>
    </section>
  );
}
