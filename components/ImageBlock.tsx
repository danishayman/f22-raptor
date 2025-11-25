import Image from "next/image";

interface ImageBlockProps {
  src?: string;
  label?: string;
  figNumber?: string;
  aspectRatio?: "video" | "square" | "wide" | "custom";
  className?: string;
  width?: number;
  height?: number;
}

export default function ImageBlock({ 
  src,
  label = "Image Placeholder",
  figNumber = "XX",
  aspectRatio = "video",
  className = "",
  width,
  height
}: ImageBlockProps) {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    custom: "aspect-[1.385/1]"
  }[aspectRatio];

  return (
    <div className={`border-2 border-cyan-400/50 bg-blueprint-blue/10 p-6 ${className}`}>
      <div className={`${aspectClass} border border-dashed border-cyan-400/30 flex items-center justify-center relative overflow-hidden`}>
        {src ? (
          <Image 
            src={src} 
            alt={label} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        ) : (
          <>
            {/* Blueprint grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
            
            {/* Crosshairs */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-400/20"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-400/20"></div>
            
            {/* Label */}
            <div className="relative z-10 text-center">
              <div className="text-cyan-400/60 text-base uppercase tracking-wider">{label}</div>
              <div className="text-cyan-400/40 text-sm mt-1">[ Blueprint Frame ]</div>
            </div>
          </>
        )}
      </div>
      <div className="mt-3 text-sm text-cyan-200/40 text-center font-semibold">FIG. {figNumber} - {label}</div>
    </div>
  );
}
