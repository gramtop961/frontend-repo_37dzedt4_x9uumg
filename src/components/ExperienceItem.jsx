export default function ExperienceItem({ org, period, role, bullets, lang = "en", light = false }) {
  const textBase = light ? "text-slate-700" : "text-slate-300";
  const titleClr = light ? "text-slate-900" : "text-white";
  const badgeClr = light ? "text-cyan-700" : "text-cyan-300";
  const card = light ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-800/40";
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <div dir={dir} className={`p-5 rounded-xl border ${card}`}>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className={`${titleClr} font-semibold`}>{org}</h3>
        <span className={`${light ? "text-slate-500" : "text-slate-400"} text-xs`}>{period}</span>
      </div>
      <p className={`${badgeClr} mt-1 text-sm`}>{role}</p>
      <ul className={`mt-3 list-disc list-inside space-y-1.5 ${textBase} text-sm`}>
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
