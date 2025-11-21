import { useState, useMemo } from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ExperienceItem from "./components/ExperienceItem";
import ContactCard from "./components/ContactCard";
import CoreList from "./components/CoreList";

function App() {
  const [lang, setLang] = useState("en");
  const isAr = lang === "ar";

  const T = useMemo(
    () => ({
      nav: {
        summary: isAr ? "الملخص" : "Summary",
        competencies: isAr ? "الكفاءات" : "Competencies",
        experience: isAr ? "الخبرات" : "Experience",
        education: isAr ? "التعليم" : "Education",
        contact: isAr ? "التواصل" : "Contact",
      },
      summary: {
        title: isAr ? "الملخص التنفيذي" : "Executive Summary",
        subtitle: isAr
          ? "البروتوكول والدبلوماسية وعلاقات الشخصيات رفيعة المستوى في المملكة المتحدة وأوروبا والشرق الأوسط"
          : "Protocol, Diplomacy, and VVIP/HNW Client Relations across the UK, Europe, and the Middle East.",
        strengths: isAr ? "نِقَاط القوة" : "Strengths",
        characteristics: isAr ? "السمات" : "Characteristics",
      },
      competencies: {
        title: isAr ? "الكفاءات الأساسية" : "Core Competencies",
        items: isAr
          ? [
              "إدارة البروتوكول",
              "العلاقات الدولية",
              "إدارة علاقات الشخصيات رفيعة وذات الثروة العالية",
              "الدبلوماسية",
              "تطوير المشاريع",
              "إدارة المخاطر",
              "التواصل عبر الثقافات",
              "إدارة المكاتب",
              "الكتابة باللغة العربية والإنجليزية",
            ]
          : [
              "Protocol Management",
              "International Relations",
              "VVIP/HNW Client Management",
              "Diplomacy",
              "Project Development",
              "Risk Management",
              "Cross-Cultural Communication",
              "Office Management",
              "Arabic/English Bilingual Writing",
            ],
      },
      experience: {
        title: isAr ? "الخبرة المهنية" : "Professional Experience",
      },
      education: {
        title: isAr ? "التعليم والمهارات" : "Education & Skills",
        education: isAr ? "دبلوم عالٍ في علوم الحاسب" : "Higher Diploma in Computer Science",
        other: isAr ? "مهارات أخرى" : "Other Skills",
        skills: isAr
          ? [
              "كتابة تقارير قوية (العربية والإنجليزية)",
              "التعامل مع اجتماعات كبار الشخصيات",
              "خبرة في البروتوكول الدولي",
              "إجادة استخدام الحاسب",
              "معرفة باللوائح الأوروبية",
            ]
          : [
              "Strong report writing (Arabic & English)",
              "VIP meeting handling",
              "International Protocol expertise",
              "Computer proficiency",
              "Knowledge of European regulations",
            ],
      },
      references: {
        title: isAr ? "المراجع" : "References",
        caption: isAr ? "سفراء دولة قطر:" : "Ambassadors of the State of Qatar:",
        names: [
          "Khalid Al Mansouri",
          "Abdullah Falah Al Dosari",
          "Sheikh Meshal bin Hamad Al Thani",
          "Sultan Al Khater",
          "Ali bin Fahad Al Hajri",
          "Mr. Abdulla Fahad Ghorba Al Marri",
          "Sheikh Jassim bin Hamad bin Nasser Al Thani",
          "Sheikh Hamad bin Nasser Al Thani",
        ],
      },
      footer: {
        info: isAr
          ? "الميلاد: 1974 (الدوحة، قطر) • الجنسية: باكستان • الأبناء: 4"
          : "Born: 1974 (Doha, Qatar) • Nationality: Pakistan • Children: 4",
        interests: isAr
          ? "الأنشطة والاهتمامات: القراءة • تطوير الزراعة • الصيد • السفر • الكتابة"
          : "Activities & Interests: Reading • Agriculture development • Fishing • Travel • Writing",
      },
      name: isAr ? "جاسم سيد أمير" : "Jassim Syed Ameer",
    }),
    [isAr]
  );

  const dir = isAr ? "rtl" : "ltr";

  return (
    <div className={`min-h-screen ${isAr ? "font-['IBM_Plex_Sans_Arabic',system-ui,sans-serif]" : ""} bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900`} dir={dir}>
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-slate-900">{T.name}</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#summary">{T.nav.summary}</a>
            <a className="hover:text-slate-900" href="#competencies">{T.nav.competencies}</a>
            <a className="hover:text-slate-900" href="#experience">{T.nav.experience}</a>
            <a className="hover:text-slate-900" href="#education">{T.nav.education}</a>
            <a className="hover:text-slate-900" href="#contact">{T.nav.contact}</a>
          </nav>
          <button
            onClick={() => setLang(isAr ? "en" : "ar")}
            className="ml-4 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-slate-400"
          >
            {isAr ? "EN" : "ع"}
          </button>
        </div>
      </header>

      <Hero lang={lang} />

      <Section id="summary" title={T.summary.title} subtitle={T.summary.subtitle} light lang={lang}>
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-3 text-slate-700">
            <p>
              {isAr
                ? "أكثر من 24 عاماً من الخبرة الدولية في إدارة مكاتب القيادات التنفيذية ورئاسة مجلس الإدارة، وقيادة بروتوكول الوفود رفيعة المستوى، وبناء علاقات موثوقة مع العملاء ذوي الثروات العالية."
                : "24+ years of international experience managing C-suite and Chairman offices, leading protocol for VVIP delegations, and building trusted relationships with high-net-worth clients."}
            </p>
            <p>
              {isAr
                ? "متواصل ثنائي اللغة (العربية/الإنجليزية) معروف بالدقة تحت الضغط، والكتابة الواضحة، والقدرة على التعامل مع مسؤوليات سياسية وتجارية وبروتوكولية معقدة."
                : "Bilingual communicator (Arabic/English) known for precision under pressure, clear writing, and adept handling of complex political, business, and protocol responsibilities."}
            </p>
          </div>
          <div className="space-y-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <p className="text-sm text-slate-500">{T.summary.strengths}</p>
              <ul className="mt-1 text-sm text-slate-800 list-disc list-inside space-y-1">
                <li>{isAr ? "إدارة مكاتب التنفيذين" : "Executive office management"}</li>
                <li>{isAr ? "قيادة محافظ كبار العملاء" : "VIP banking portfolio leadership"}</li>
                <li>{isAr ? "اتصال عربي/إنجليزي" : "Arabic/English bilingual communication"}</li>
                <li>{isAr ? "البروتوكول والدبلوماسية" : "Diplomatic protocol and administration"}</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <p className="text-sm text-slate-500">{T.summary.characteristics}</p>
              <ul className="mt-1 text-sm text-slate-800 list-disc list-inside space-y-1">
                <li>{isAr ? "هادئ وفعّال تحت الضغط" : "Calm and effective under pressure"}</li>
                <li>{isAr ? "كاتب واضح وموجز" : "Clear, concise writer"}</li>
                <li>{isAr ? "تنفيذي إستراتيجي دقيق" : "Strategic, detail-oriented executor"}</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="competencies" title={T.competencies.title} light lang={lang}>
        <CoreList items={T.competencies.items} light lang={lang} />
      </Section>

      <Section id="experience" title={T.experience.title} light lang={lang}>
        <div className="space-y-4">
          <ExperienceItem
            lang={lang}
            light
            org={isAr ? "مصرف قطر الإسلامي" : "Qatar Islamic Bank (QIB)"}
            period={isAr ? "نوفمبر 2021 – حتى الآن" : "Nov 2021 – Present"}
            role={isAr ? "مدير علاقات، إدارة العملاء المميزين" : "Relationship Manager, Affluent Banking Division"}
            bullets={
              isAr
                ? [
                    "إدارة أكثر من 400 عميل مميز",
                    "تقديم خدمات متعددة تشمل التمويل الشخصي وتمويل السيارات والإجارة والمرابحة الدولية",
                    "استقطاب عملاء جدد وجلب ودائع جديدة",
                    "تنمية الودائع ودفع نمو المحفظة",
                  ]
                : [
                    "Manages 400+ VIP/Affluent clients",
                    "Provides multiple banking services including personal, vehicle, Ijara, and International Murabaha financing",
                    "On-boards new clients and attracts fresh funds",
                    "Generates deposits and drives portfolio growth",
                  ]
            }
          />

          <ExperienceItem
            lang={lang}
            light
            org={isAr ? "مجموعة المهـا للاستشارات (قطر)" : "Al Maha Consultancy Group (Qatar)"}
            period={isAr ? "يوليو 2020 – نوفمبر 2021" : "Jul 2020 – Nov 2021"}
            role={isAr ? "مدير مشاريع" : "Project Manager"}
            bullets={
              isAr
                ? [
                    "تطوير الأعمال وتعزيز العلاقات الداخلية والخارجية",
                    "إدخال عملاء جدد وتنسيق المشاريع",
                    "دعم تأسيس الشركات للأفراد والمجموعات في قطر",
                  ]
                : [
                    "Developed business and strengthened internal/external relations",
                    "Introduced new clients and coordinated projects",
                    "Supported company formation for individuals and groups in Qatar",
                  ]
            }
          />

          <ExperienceItem
            lang={lang}
            light
            org={isAr ? "مصرف قطر الأول" : "Qatar First Bank (QFB)"}
            period={isAr ? "أكتوبر 2009 – أبريل 2020" : "Oct 2009 – Apr 2020"}
            role={
              isAr
                ? "مدير مكتب رئيس مجلس الإدارة / البروتوكول والعلاقات الدولية"
                : "Manager, Chairman Office / Protocol & International Relations"
            }
            bullets={
              isAr
                ? [
                    "إدارة مكتب رئيس مجلس الإدارة والعمليات اليومية",
                    "الإشراف على البروتوكول واللوجستيات للضيوف رفيعي المستوى محلياً ودولياً",
                    "دعم مشاركة رئيس مجلس الإدارة في الفعاليات العالمية",
                    "عضو في صندوق التطهير بمصرف قطر الأول (الامتثال للقوانين المصرفية الدولية)",
                    "دعم المصرفية الخاصة في إدخال عملاء كبار واستثماراتهم",
                    "إعداد خطابات الجمعية العمومية ومرافقة رئيس المجلس دولياً",
                  ]
                : [
                    "Managed Chairman’s office and daily operations",
                    "Oversaw protocol & logistics for local and international VVIP guests",
                    "Supported Chairman’s participation in global events",
                    "Member of QFB Purification Fund (compliance with international banking laws)",
                    "Supported Private Banking in VIP client onboarding and investments",
                    "Prepared AGM speeches and accompanied Chairman internationally",
                  ]
            }
          />

          <ExperienceItem
            lang={lang}
            light
            org={isAr ? "سفارة قطر (لندن، المملكة المتحدة)" : "Embassy of Qatar (London, UK)"}
            period={isAr ? "مارس 2006 – أكتوبر 2009" : "Mar 2006 – Oct 2009"}
            role={isAr ? "مدير مكتب السفير" : "Manager – Ambassador’s Office"}
            bullets={
              isAr
                ? [
                    "إدارة مكتب السفير سعادة خالد راشد المنصوري",
                    "إعداد محاضر الاجتماعات والمذكرات (عربي/إنجليزي)",
                    "متابعة الإعلام والتطورات السياسية؛ تطبيق نظام الحضور",
                    "إعداد تقارير داعمة لأهداف السفارة",
                    "دور محوري في تسهيل زيارة سمو الأمير إلى لندن عام 2008",
                  ]
                : [
                    "Managed Ambassador H.E. Khalid Rashid Al Mansouri’s office",
                    "Prepared meeting minutes and briefings (Arabic/English)",
                    "Monitored media and political developments; implemented IT attendance system",
                    "Prepared key reports supporting Embassy objectives",
                    "Played major role in facilitating H.H. the Emir’s visit to London in 2008",
                  ]
            }
          />

          <ExperienceItem
            lang={lang}
            light
            org={isAr ? "سفارة قطر (بلجيكا)" : "Embassy of Qatar (Belgium)"}
            period={isAr ? "سبتمبر 2004 – فبراير 2006" : "Sept 2004 – Feb 2006"}
            role={isAr ? "إداري أول / مساعد السفير" : "Senior Administrator / Assistant to Ambassador"}
            bullets={
              isAr
                ? [
                    "حضور اجتماعات رفيعة المستوى مع السفير سعادة عبد الله فلاح الدوسري",
                    "إعداد تقارير حازت إشادة وزارة الخارجية",
                    "دعم زيارة سمو الأمير إلى بروكسل والبرلمان الأوروبي",
                    "إدارة المحاضر وإطلاق أول موقع إلكتروني للسفارة",
                  ]
                : [
                    "Attended high-level meetings with Ambassador H.E. Abdulla Falah Al Dosari",
                    "Prepared reports praised by MOFA",
                    "Supported visit of H.H. the Emir of Qatar to Brussels & European Parliament",
                    "Managed minutes and launched the Embassy’s first website",
                  ]
            }
          />

          <ExperienceItem
            lang={lang}
            light
            org={isAr ? "سفارة قطر (إيطاليا)" : "Embassy of Qatar (Italy)"}
            period={isAr ? "يونيو 2002 – أغسطس 2004" : "Jun 2002 – Aug 2004"}
            role={isAr ? "إداري أول" : "Senior Administrator"}
            bullets={
              isAr
                ? ["تنظيم أرشيف السفارة", "دعم فريق زيارة سمو الأمير", "إدارة المراسلات وإعداد التقارير"]
                : ["Organized Embassy archives", "Supported Emir’s visit task force", "Managed correspondence and prepared key reports"]
            }
          />

          <ExperienceItem
            lang={lang}
            light
            org={isAr ? "وزارة الخارجية (قطر)" : "Ministry of Foreign Affairs (Qatar)"}
            period={isAr ? "مارس 2001 – مايو 2002" : "Mar 2001 – May 2002"}
            role={isAr ? "إداري" : "Administrator"}
            bullets={
              isAr
                ? ["العمل في المالية والإدارة", "إدارة المراسلات اليومية (عربي/إنجليزي) وإعداد التقارير"]
                : ["Worked in finance and administration", "Managed daily letters (Arabic/English) and prepared reports"]
            }
          />

          <ExperienceItem
            lang={lang}
            light
            org={isAr ? "سفارة الإمارات (إسلام آباد، باكستان)" : "UAE Embassy (Islamabad, Pakistan)"}
            period={isAr ? "مايو 2000 – ديسمبر 2001" : "May 2000 – Dec 2001"}
            role={isAr ? "مساعد الملحق العسكري ومترجم" : "Assistant to Military Attaché & Translator"}
            bullets={
              isAr
                ? [
                    "إدارة مكتب الملحق العسكري وجدولة الاجتماعات",
                    "ترجمة التقارير الجيوسياسية والإعلامية (إنجليزي → عربي)",
                  ]
                : [
                    "Managed Military Attaché’s office and scheduled meetings with officials",
                    "Translated geopolitical and media reports (English → Arabic)",
                  ]
            }
          />

          <ExperienceItem
            lang={lang}
            light
            org={isAr ? "الغرفة الإسلامية للتجارة والصناعة – منظمة التعاون الإسلامي" : "Islamic Chamber of Commerce & Industry – OIC"}
            period={isAr ? "1998 – 2000" : "1998 – 2000"}
            role={isAr ? "مساعد للأمين العام" : "Assistant to the Secretary General"}
            bullets={
              isAr
                ? [
                    "دعم الأمين العام السيد عقيل الجاسم",
                    "إعداد التقارير والمحاضر؛ حضور اجتماعات دولية في آسيا وأفريقيا وأوروبا",
                    "الترقية بعد عام واحد",
                  ]
                : [
                    "Supported Secretary General Mr. Aqeel Al Jassim",
                    "Prepared reports and minutes; attended international meetings across Asia, Africa and Europe",
                    "Promoted after one year",
                  ]
            }
          />
        </div>
      </Section>

      <Section id="education" title={T.education.title} light lang={lang}>
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-slate-900 font-semibold mb-2">{isAr ? "التعليم" : "Education"}</h3>
            <p className="text-slate-700">{T.education.education}</p>
          </div>
          <div className="p-5 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-slate-900 font-semibold mb-2">{T.education.other}</h3>
            <ul className="text-slate-700 list-disc list-inside space-y-1 text-sm">
              {T.education.skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="references" title={T.references.title} light lang={lang}>
        <p className="text-slate-600 mb-4">{T.references.caption}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-800">
          {T.references.names.map((n) => (
            <div key={n} className="px-4 py-3 rounded-lg border border-slate-200 bg-white">{n}</div>
          ))}
        </div>
      </Section>

      <Section id="contact" title={isAr ? "التواصل" : "Contact"} light lang={lang}>
        <ContactCard lang={lang} light />
      </Section>

      <footer className="py-10 text-center text-slate-500 text-sm">
        <p>{T.footer.info}</p>
        <p className="mt-2">{T.footer.interests}</p>
      </footer>
    </div>
  );
}

export default App;
