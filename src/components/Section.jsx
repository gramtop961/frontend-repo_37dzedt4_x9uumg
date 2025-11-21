export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14 sm:py-20 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-slate-400 max-w-3xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
