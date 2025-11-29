export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/30 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-cyan-400 text-lg font-bold mb-3 tracking-wider">PROJECT</h3>
            <p className="text-base text-cyan-200/60">DIY RC Plane Guide</p>
            <p className="text-base text-cyan-200/60">Blueprint Edition</p>
          </div>
          <div>
            <h3 className="text-cyan-400 text-lg font-bold mb-3 tracking-wider">SPECS</h3>
            <p className="text-base text-cyan-200/60">Wingspan: TBD</p>
            <p className="text-base text-cyan-200/60">Weight: TBD</p>
          </div>
          <div>
            <h3 className="text-cyan-400 text-lg font-bold mb-3 tracking-wider">LINKS</h3>
            <p className="text-base text-cyan-200/60">Documentation</p>
            <p className="text-base text-cyan-200/60">Community</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-cyan-400/20 text-center">
          <p className="text-sm text-cyan-200/40">© F-22 Raptor DIY RC Plane. All specifications subject to modification.</p>
        </div>
      </div>
    </footer>
  );
}
