import { BadgeCheck, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_55%)]" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 sm:pt-28">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 rounded-full px-3 py-1 text-xs font-medium mb-5">
              <BadgeCheck className="w-4 h-4" />
              24+ years in Protocol, Diplomacy & HNW Relations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Jassim Syed Ameer
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Executive relationship leader with international experience across the UK, Europe and the Middle East. Expert in protocol management, VVIP/HNW client relations and strategic diplomacy.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-3 transition">
                Get in touch
              </a>
              <a href="#experience" className="inline-flex items-center justify-center rounded-lg border border-slate-700 hover:border-slate-600 text-slate-200 px-5 py-3 transition">
                View experience
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-slate-400">
              <Globe2 className="w-4 h-4" />
              <span className="text-sm">Arabic/English bilingual • Effective under pressure • Strong writer</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-blue-500/20 blur-2xl" />
              <div className="relative w-full h-full rounded-3xl border border-slate-700 bg-slate-800/40 backdrop-blur-md flex items-center justify-center shadow-2xl">
                <span className="text-cyan-300 text-6xl">JS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
