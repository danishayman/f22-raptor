interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function TextBlock({ children, className = "" }: TextBlockProps) {
  return (
    <div className={`border border-cyan-400/30 bg-blueprint-blue/20 p-8 rounded-sm ${className}`}>
      <div className="text-cyan-100/90 text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
}
