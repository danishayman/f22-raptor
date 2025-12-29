interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 pb-6 border-b border-cyan-400/30">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-wider uppercase mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-cyan-200/60 tracking-wide">{subtitle}</p>
      )}
    </div>
  );
}
