interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8 pb-4 border-b border-cyan-400/30">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 tracking-wider uppercase mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-cyan-200/60 tracking-wide">{subtitle}</p>
      )}
    </div>
  );
}
