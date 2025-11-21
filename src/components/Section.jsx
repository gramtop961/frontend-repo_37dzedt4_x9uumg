export default function Section({ id, title, subtitle, children, light = false, lang = "en" }) {
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <section id={id} dir={dir} className={`py-14 sm:py-20 border-t ${light ? "border-slate-200/80" : "border-slate-800/60"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${light ? "text-slate-900" : "text-white"}`}>{title}</h2>
          {subtitle && (
            <p className={`${light ? "text-slate-600" : "text-slate-400"} mt-2 max-w-3xl`}>{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
