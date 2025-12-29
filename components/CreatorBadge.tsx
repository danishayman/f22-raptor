export default function CreatorBadge() {
    return (
        <a
            href="https://danishaiman.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '1rem',
                right: '1rem',
                zIndex: 9999,
            }}
            className="flex items-center gap-2 
                 bg-[#0A1A2F]/95 backdrop-blur-sm 
                 border border-cyan-400/50 
                 px-3 py-2 md:px-4 md:py-2.5
                 text-xs md:text-sm
                 text-cyan-200/80 hover:text-cyan-400 
                 hover:border-cyan-400 
                 transition-all duration-300 
                 rounded-full shadow-lg shadow-cyan-900/20
                 hover:shadow-cyan-400/20"
        >
            <span className="text-cyan-400/60">Created by</span>
            <span className="font-semibold text-cyan-400">@danishayman</span>
        </a>
    );
}
