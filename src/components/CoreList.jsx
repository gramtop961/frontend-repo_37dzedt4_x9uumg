export default function CoreList({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((it, i) => (
        <div key={i} className="px-4 py-3 rounded-lg border border-slate-800 bg-slate-800/50 text-slate-200">
          {it}
        </div>
      ))}
    </div>
  );
}
