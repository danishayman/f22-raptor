interface ImageBlockProps {
  label?: string;
  aspectRatio?: "video" | "square" | "wide";
  className?: string;
}

export default function ImageBlock({ 
  label = "Image Placeholder", 
  aspectRatio = "video",
  className = "" 
}: ImageBlockProps) {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]"
  }[aspectRatio];

  return (
    <div className={`border-2 border-cyan-400/50 bg-blueprint-blue/10 p-4 ${className}`}>
      <div className={`${aspectClass} border border-dashed border-cyan-400/30 flex items-center justify-center relative overflow-hidden`}>
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
        
        {/* Crosshairs */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-400/20"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-400/20"></div>
        
        {/* Label */}
        <div className="relative z-10 text-center">
          <div className="text-cyan-400/60 text-xs uppercase tracking-wider">{label}</div>
          <div className="text-cyan-400/40 text-xs mt-1">[ Blueprint Frame ]</div>
        </div>
      </div>
      <div className="mt-2 text-xs text-cyan-200/40 text-center">FIG. XX - {label}</div>
    </div>
  );
}
