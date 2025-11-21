export default function ExperienceItem({ org, period, role, bullets }) {
  return (
    <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/40">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-white font-semibold">{org}</h3>
        <span className="text-xs text-slate-400">{period}</span>
      </div>
      <p className="text-cyan-300 mt-1 text-sm">{role}</p>
      <ul className="mt-3 list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
