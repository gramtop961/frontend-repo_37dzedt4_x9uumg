import Hero from "./components/Hero";
import Section from "./components/Section";
import ExperienceItem from "./components/ExperienceItem";
import ContactCard from "./components/ContactCard";
import CoreList from "./components/CoreList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-white">Jassim Syed Ameer</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a className="hover:text-white" href="#summary">Summary</a>
            <a className="hover:text-white" href="#competencies">Competencies</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#education">Education</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <Hero />

      <Section id="summary" title="Executive Summary" subtitle="Protocol, Diplomacy, and VVIP/HNW Client Relations across the UK, Europe, and the Middle East.">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-3 text-slate-300">
            <p>
              24+ years of international experience managing C-suite and Chairman offices, leading protocol for VVIP delegations, and building trusted relationships with high-net-worth clients.
            </p>
            <p>
              Bilingual communicator (Arabic/English) known for precision under pressure, clear writing, and adept handling of complex political, business, and protocol responsibilities.
            </p>
          </div>
          <div className="space-y-2">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-800/40">
              <p className="text-sm text-slate-400">Strengths</p>
              <ul className="mt-1 text-sm text-slate-200 list-disc list-inside space-y-1">
                <li>Executive office management</li>
                <li>VIP banking portfolio leadership</li>
                <li>Arabic/English bilingual communication</li>
                <li>Diplomatic protocol and administration</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-800/40">
              <p className="text-sm text-slate-400">Characteristics</p>
              <ul className="mt-1 text-sm text-slate-200 list-disc list-inside space-y-1">
                <li>Calm and effective under pressure</li>
                <li>Clear, concise writer</li>
                <li>Strategic, detail-oriented executor</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="competencies" title="Core Competencies">
        <CoreList
          items={[
            "Protocol Management",
            "International Relations",
            "VVIP/HNW Client Management",
            "Diplomacy",
            "Project Development",
            "Risk Management",
            "Cross-Cultural Communication",
            "Office Management",
            "Arabic/English Bilingual Writing",
          ]}
        />
      </Section>

      <Section id="experience" title="Professional Experience">
        <div className="space-y-4">
          <ExperienceItem
            org="Qatar Islamic Bank (QIB)"
            period="Nov 2021 – Present"
            role="Relationship Manager, Affluent Banking Division"
            bullets={[
              "Manages 400+ VIP/Affluent clients",
              "Provides multiple banking services including personal, vehicle, Ijara, and International Murabaha financing",
              "On-boards new clients and attracts fresh funds",
              "Generates deposits and drives portfolio growth",
            ]}
          />

          <ExperienceItem
            org="Al Maha Consultancy Group (Qatar)"
            period="Jul 2020 – Nov 2021"
            role="Project Manager"
            bullets={[
              "Developed business and strengthened internal/external relations",
              "Introduced new clients and coordinated projects",
              "Supported company formation for individuals and groups in Qatar",
            ]}
          />

          <ExperienceItem
            org="Qatar First Bank (QFB)"
            period="Oct 2009 – Apr 2020"
            role="Manager, Chairman Office / Protocol & International Relations"
            bullets={[
              "Managed Chairman’s office and daily operations",
              "Oversaw protocol & logistics for local and international VVIP guests",
              "Supported Chairman’s participation in global events",
              "Member of QFB Purification Fund (compliance with international banking laws)",
              "Supported Private Banking in VIP client onboarding and investments",
              "Prepared AGM speeches and accompanied Chairman internationally",
            ]}
          />

          <ExperienceItem
            org="Embassy of Qatar (London, UK)"
            period="Mar 2006 – Oct 2009"
            role="Manager – Ambassador’s Office"
            bullets={[
              "Managed Ambassador H.E. Khalid Rashid Al Mansouri’s office",
              "Prepared meeting minutes and briefings (Arabic/English)",
              "Monitored media and political developments; implemented IT attendance system",
              "Prepared key reports supporting Embassy objectives",
              "Played major role in facilitating H.H. the Emir’s visit to London in 2008",
            ]}
          />

          <ExperienceItem
            org="Embassy of Qatar (Belgium)"
            period="Sept 2004 – Feb 2006"
            role="Senior Administrator / Assistant to Ambassador"
            bullets={[
              "Attended high-level meetings with Ambassador H.E. Abdulla Falah Al Dosari",
              "Prepared reports praised by MOFA",
              "Supported visit of H.H. the Emir of Qatar to Brussels & European Parliament",
              "Managed minutes and launched the Embassy’s first website",
            ]}
          />

          <ExperienceItem
            org="Embassy of Qatar (Italy)"
            period="Jun 2002 – Aug 2004"
            role="Senior Administrator"
            bullets={[
              "Organized Embassy archives",
              "Supported Emir’s visit task force",
              "Managed correspondence and prepared key reports",
            ]}
          />

          <ExperienceItem
            org="Ministry of Foreign Affairs (Qatar)"
            period="Mar 2001 – May 2002"
            role="Administrator"
            bullets={[
              "Worked in finance and administration",
              "Managed daily letters (Arabic/English) and prepared reports",
            ]}
          />

          <ExperienceItem
            org="UAE Embassy (Islamabad, Pakistan)"
            period="May 2000 – Dec 2001"
            role="Assistant to Military Attaché & Translator"
            bullets={[
              "Managed Military Attaché’s office and scheduled meetings with officials",
              "Translated geopolitical and media reports (English → Arabic)",
            ]}
          />

          <ExperienceItem
            org="Islamic Chamber of Commerce & Industry – OIC"
            period="1998 – 2000"
            role="Assistant to the Secretary General"
            bullets={[
              "Supported Secretary General Mr. Aqeel Al Jassim",
              "Prepared reports and minutes; attended international meetings across Asia, Africa and Europe",
              "Promoted after one year",
            ]}
          />
        </div>
      </Section>

      <Section id="education" title="Education & Skills">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/40">
            <h3 className="text-white font-semibold mb-2">Education</h3>
            <p className="text-slate-300">Higher Diploma in Computer Science</p>
          </div>
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/40">
            <h3 className="text-white font-semibold mb-2">Other Skills</h3>
            <ul className="text-slate-300 list-disc list-inside space-y-1 text-sm">
              <li>Strong report writing (Arabic & English)</li>
              <li>VIP meeting handling</li>
              <li>International Protocol expertise</li>
              <li>Computer proficiency</li>
              <li>Knowledge of European regulations</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="references" title="References">
        <p className="text-slate-300 mb-4">Ambassadors of the State of Qatar:</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-200">
          {[
            "Khalid Al Mansouri",
            "Abdullah Falah Al Dosari",
            "Sheikh Meshal bin Hamad Al Thani",
            "Sultan Al Khater",
            "Ali bin Fahad Al Hajri",
            "Mr. Abdulla Fahad Ghorba Al Marri",
            "Sheikh Jassim bin Hamad bin Nasser Al Thani",
            "Sheikh Hamad bin Nasser Al Thani",
          ].map((n) => (
            <div key={n} className="px-4 py-3 rounded-lg border border-slate-800 bg-slate-800/50">{n}</div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <ContactCard />
      </Section>

      <footer className="py-10 text-center text-slate-500 text-sm">
        <p>Born: 1974 (Doha, Qatar) • Nationality: Pakistan • Children: 4</p>
        <p className="mt-2">Activities & Interests: Reading • Agriculture development • Fishing • Travel • Writing</p>
      </footer>
    </div>
  );
}

export default App;
