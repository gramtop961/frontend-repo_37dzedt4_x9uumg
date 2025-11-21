export default function CoreList({ items, light = false, lang = "en" }) {
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <div dir={dir} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((it, i) => (
        <div
          key={i}
          className={`px-4 py-3 rounded-lg border ${light ? "border-slate-200 bg-white text-slate-800" : "border-slate-800 bg-slate-800/50 text-slate-200"}`}
        >
          {it}
        </div>
      ))}
    </div>
  );
}
