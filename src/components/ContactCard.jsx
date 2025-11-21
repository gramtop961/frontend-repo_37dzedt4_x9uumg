import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function ContactCard({ lang = "en", light = false }) {
  const t = {
    en: {
      email: "Email",
      mobile: "Mobile",
      address: "Address",
      residency: "Residency",
    },
    ar: {
      email: "البريد الإلكتروني",
      mobile: "الجوال",
      address: "العنوان",
      residency: "الإقامة",
    },
  }[lang];

  const card = light ? "border-slate-200 bg-white hover:border-cyan-300" : "border-slate-800 bg-slate-800/40 hover:border-cyan-500/30";
  const label = light ? "text-slate-500" : "text-slate-400";
  const value = light ? "text-slate-900" : "text-white";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <div dir={dir} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <a href="mailto:qatar121@gmail.com" className={`p-5 rounded-xl border ${card} transition`}>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-cyan-600" />
          <div>
            <p className={`text-xs ${label}`}>{t.email}</p>
            <p className={`${value}`}>qatar121@gmail.com</p>
          </div>
        </div>
      </a>
      <a href="mailto:qatar121@hotmail.com" className={`p-5 rounded-xl border ${card} transition`}>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-cyan-600" />
          <div>
            <p className={`text-xs ${label}`}>{t.email}</p>
            <p className={`${value}`}>qatar121@hotmail.com</p>
          </div>
        </div>
      </a>
      <div className={`p-5 rounded-xl border ${card}`}>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-cyan-600" />
          <div>
            <p className={`text-xs ${label}`}>{t.mobile}</p>
            <p className={`${value}`}>77720025 / 55545802</p>
          </div>
        </div>
      </div>
      <div className={`p-5 rounded-xl border ${card}`}>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-cyan-600" />
          <div>
            <p className={`text-xs ${label}`}>{t.address}</p>
            <p className={`${value}`}>Villa 16, Al Frousia Street 4</p>
          </div>
        </div>
      </div>
      <div className={`p-5 rounded-xl border ${card} sm:col-span-2`}>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-cyan-600" />
          <div>
            <p className={`text-xs ${label}`}>{t.residency}</p>
            <p className={`${value}`}>Permanent Residency (Qatar) obtained November 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
