import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <a href="mailto:qatar121@gmail.com" className="p-5 rounded-xl border border-slate-800 bg-slate-800/40 hover:border-cyan-500/30 transition">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-cyan-400" />
          <div>
            <p className="text-slate-400 text-xs">Email</p>
            <p className="text-white">qatar121@gmail.com</p>
          </div>
        </div>
      </a>
      <a href="mailto:qatar121@hotmail.com" className="p-5 rounded-xl border border-slate-800 bg-slate-800/40 hover:border-cyan-500/30 transition">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-cyan-400" />
          <div>
            <p className="text-slate-400 text-xs">Email</p>
            <p className="text-white">qatar121@hotmail.com</p>
          </div>
        </div>
      </a>
      <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/40">
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-cyan-400" />
          <div>
            <p className="text-slate-400 text-xs">Mobile</p>
            <p className="text-white">77720025 / 55545802</p>
          </div>
        </div>
      </div>
      <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/40">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-cyan-400" />
          <div>
            <p className="text-slate-400 text-xs">Address</p>
            <p className="text-white">Villa 16, Al Frousia Street 4</p>
          </div>
        </div>
      </div>
      <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/40 sm:col-span-2">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-cyan-400" />
          <div>
            <p className="text-slate-400 text-xs">Residency</p>
            <p className="text-white">Permanent Residency (Qatar) obtained November 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
