import SectionHeader from "@/components/SectionHeader";
import ImageBlock from "@/components/ImageBlock";

export default function GallerySection() {
  const galleryImages = [
    { src: "/Gallery/1.jpg", label: "Board Cutouts", figNumber: "23" },
    { src: "/Gallery/2.jpg", label: "Electronic Assembly", figNumber: "24" },
    { src: "/Gallery/3.jpg", label: "Circuit Assembled", figNumber: "24" },
    { src: "/Gallery/4.jpg", label: "Complete Setup", figNumber: "25" },
    { src: "/Gallery/5.jpg", label: "Simulator Training", figNumber: "25" },
    { src: "/Gallery/6.jpg", label: "First Flight", figNumber: "26" },
  ];

  return (
    <section id="gallery" className="py-12 md:py-20 px-4 bg-blueprint-blue/5">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Gallery" subtitle="Build photos and flight footage" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <ImageBlock 
              key={index}
              src={image.src}
              label={image.label}
              figNumber={image.figNumber}
              aspectRatio="3/4"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
