import { useEffect } from "react";

const LINKEDIN = "https://www.linkedin.com/in/elaineschou/";

const focusAreas = [
  { title: "Liquid credit (IG/HY/EM)", text: "Investment grade, high yield, and emerging market credit." },
  { title: "AI-driven investment research", text: "Integrating AI-driven tools to enhance the investment process and uncover opportunities." },
  { title: "Investment risk & stress testing", text: "Risk assessment tools, stress testing, and scenario analysis." },
  { title: "Structured credit (CLO/CDO/CDS)", text: "Structured credit research, trading, and portfolio management: corporate CDS, CDX, iTRAXX, CDOs, and CLOs." },
  { title: "ESG integration", text: "Incorporating ESG considerations into decision-making frameworks." },
  { title: "Fundamental credit analysis", text: "Company analysis and financial modeling, advising on new issues, corporate events, special situations and distressed securities." },
];

type Role = { title: string; org?: string; dates: string; place?: string; bullets: string[] };

const roles: Role[] = [
  {
    title: "Liquid Credit (IG/HY/EM)",
    org: "MEAG New York Corporation",
    dates: "Apr 2016 – Present",
    place: "New York",
    bullets: [
      "Spearhead AI initiatives to improve investment process and generate alphas.",
      "Develop and utilize both quantitative and qualitative tools to uncover trends and relative value opportunities.",
      "Identify macroeconomic, political, and secular themes to generate thematic trade ideas across various sectors.",
      "Integrate ESG factors and new technologies into investment processes.",
      "Conduct company analysis and financial modeling, advising on new issues, corporate events, special situations and distressed securities.",
    ],
  },
  {
    title: "Senior Investment Risk Manager",
    org: "MEAG New York Corporation",
    dates: "2012 – 2016",
    bullets: [
      "Served as deputy CRO, participating in Investment Committees and overseeing comprehensive risk functions.",
      "Conducted in-depth fundamental and quantitative research on distressed and special situation credits, generating positive excess returns.",
      "Developed and implemented risk assessment tools and stress testing scenarios to enhance portfolio performance and risk management.",
    ],
  },
];

const genworth: Role[] = [
  {
    title: "Senior Investment Manager",
    dates: "2010 – Jan 2012",
    bullets: [
      "Managed investment risk across corporate placements, structured products, and commercial real estate.",
      "Enhanced credit surveillance processes and developed early warning signals for corporate credits.",
      "Collaborated with vendors like BlackRock and KMV to co-develop risk analytics.",
      "Designed stress testing and scenario analysis to improve risk-adjusted returns and investment policies.",
    ],
  },
  {
    title: "Structured Credit Trader & Portfolio Manager",
    dates: "2007 – 2010",
    bullets: [
      "Researched, traded, and monitored Structured Credit, focusing on corporate CDS, CDX, iTRAXX, and CDOs.",
      "Successfully built the business case for a new CLO asset class, gaining investment committee approval.",
      "Managed a CLO portfolio exceeding $300mm and co-managed three synthetic CDOs valued at $300mm.",
      "Collaborated with Credit Research to optimize relative value substitution trades, enhancing portfolio performance.",
    ],
  },
];

const earlier: Role[] = [
  {
    title: "Associate (Leadership Program / ACE Award recipient)",
    org: "S&P Global Ratings",
    dates: "2005 – 2007",
    bullets: [
      "Conducted formal comprehensive credit training across sovereign, corporate, and structured credits.",
      "Researched and rated Securitizations/Structured Finance deals, focusing on Asset-Backed Securities.",
      "Spearheaded improvements in rating methodology and cash-flow modeling for ABS deals.",
      "Mentored junior analysts and managed large-scale projects within the firm.",
    ],
  },
  {
    title: "Securities Analyst",
    org: "BKF Capital Group, Inc.",
    dates: "2003 – 2004",
    bullets: [
      "Conducted fundamental research for a $2.5B Multi-Strategy Hedge Fund, focusing on Event Driven, Distressed, and Global Macro strategies.",
      "Assessed the fundamental value of securities and identified catalysts for price dislocation.",
      "Engaged in in-depth interviews with company managers and stakeholders to gain operational insights.",
      "Collaborated with traders to analyze securities across capital structures and design effective trading strategies.",
    ],
  },
];

const degrees = [
  {
    school: "Columbia Business School",
    degree: "MBA with Honors, Finance & Economics (Investment Management / Value Investing)",
    notes: ["Winner of Quantitative Case Competition", "Dean's List", "VP Mentoring, Columbia Investment Management Association"],
  },
  {
    school: "New York University School of Law",
    degree: "LL.M (Master of Laws)",
    notes: [],
  },
  {
    school: "National Taiwan University",
    degree: "Bachelor of Laws (LL.B.), Law in Finance & Economics",
    notes: ["President, Student Bar Association", "Scholar, National Science Foundation", "Counselor, Public Legal Aid Center"],
  },
];

const licenses = [
  { name: "CFA Charterholder", issuer: "CFA Institute" },
  { name: "Admitted Lawyer, New York Bar", issuer: "" },
  { name: "Admitted Lawyer, Taiwan Bar", issuer: "Ministry of Justice" },
  { name: "Risk Management Certificate", issuer: "PRMIA" },
];

const certificates = [
  { name: "Application of AI, InsurTech, and Real Estate Technology", issuer: "The Wharton School" },
  { name: "ESG and Climate Change", issuer: "The Wharton School" },
  { name: "Decentralized Finance (DeFi) Infrastructure", issuer: "Duke University" },
  { name: "Python", issuer: "Kaggle" },
  { name: "The Art of Creative Disruption: Master Lateral Thinking in the Age of AI", issuer: "LinkedIn (2025)" },
];

const languages = [
  { name: "English", level: "Full professional" },
  { name: "Mandarin Chinese", level: "Native / bilingual" },
  { name: "Taiwanese Hokkien", level: "Native / bilingual" },
  { name: "Japanese", level: "Elementary" },
];

const nav = [
  ["about", "About"],
  ["focus", "Focus"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["more", "Languages & Board"],
];

function RoleBlock({ role }: { role: Role }) {
  return (
    <div className="role">
      <div className="role-head">
        <h4>{role.title}</h4>
        <span className="dates">{role.dates}</span>
      </div>
      {role.place && <p className="meta">{role.place}</p>}
      <ul>
        {role.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Job({ role }: { role: Role }) {
  return (
    <li className="job">
      {role.org && <p className="org">{role.org}</p>}
      <RoleBlock role={role} />
    </li>
  );
}

export default function App() {
  useEffect(() => {
    const go = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      document.getElementById(id)?.scrollIntoView();
    };
    const raf = requestAnimationFrame(go);
    document.fonts?.ready.then(go);
    window.addEventListener("hashchange", go);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", go);
    };
  }, []);

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>('nav[aria-label="Primary"]');
    const list = nav?.querySelector("ul");
    if (!nav || !list) return;
    const update = () => {
      const max = list.scrollWidth - list.clientWidth;
      nav.dataset.scrollStart = String(list.scrollLeft > 1);
      nav.dataset.scrollEnd = String(max <= 1 || list.scrollLeft >= max - 1);
    };
    update();
    list.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      list.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap bar">
          <a className="brand" href="#top" aria-label="Elaine Chou, home">
            <span className="monogram" aria-hidden="true">EC</span>
            <span>Elaine Chou</span>
          </a>
          <nav aria-label="Primary">
            <ul>
              {nav.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap">
            <p className="eyebrow">New York</p>
            <h1>Elaine Chou, CFA, Esq.</h1>
            <p className="lede">
              Liquid credit investing, credit research, and AI in the investment process.
            </p>
            <p className="sub">Liquid Credit (IG/HY/EM) at MEAG New York.</p>
            <a className="button" href={LINKEDIN} rel="me noopener noreferrer" target="_blank" aria-label="Connect with Elaine Chou on LinkedIn (opens in a new tab)">
              Connect on LinkedIn
            </a>
          </div>
        </section>

        <section id="about" aria-labelledby="about-h">
          <div className="wrap narrow">
            <h2 id="about-h">About</h2>
            <p>
              With over a decade at MEAG New York Corporation, I focus on liquid credit investment, leveraging my CFA designation, MBA, and LL.M to excel in asset management, quantamental research, and investment strategies. I spearhead the integration of AI-driven tools to enhance the investment process and uncover opportunities, while incorporating ESG considerations into decision-making frameworks.
            </p>
            <p>
              Collaborating with stakeholders across technology and business, I analyze macroeconomic, political, and thematic trends to identify risk-adjusted opportunities across sectors. My dedication to optimizing portfolio performance aligns with organizational goals and drives value in corporate credit, derivatives, and structured products.
            </p>
          </div>
        </section>

        <section id="focus" className="tint" aria-labelledby="focus-h">
          <div className="wrap">
            <h2 id="focus-h">Focus areas</h2>
            <ul className="cards">
              {focusAreas.map((f) => (
                <li key={f.title} className="card">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" aria-labelledby="exp-h">
          <div className="wrap narrow">
            <h2 id="exp-h">Experience</h2>
            <ol className="timeline">
              {roles.map((r) => (
                <Job key={r.title} role={r} />
              ))}
              <li className="job">
                <p className="org">Genworth Financial</p>
                <p className="meta">Spin-off from GE; ~$70B AUM</p>
                {genworth.map((r) => (
                  <RoleBlock key={r.title} role={r} />
                ))}
              </li>
              {earlier.map((r) => (
                <Job key={r.title} role={r} />
              ))}
            </ol>
          </div>
        </section>

        <section id="education" className="tint" aria-labelledby="edu-h">
          <div className="wrap">
            <h2 id="edu-h">Education &amp; credentials</h2>
            <div className="cols">
              <div>
                <h3>Education</h3>
                <ul className="plain">
                  {degrees.map((d) => (
                    <li key={d.school}>
                      <p className="strong">{d.school}</p>
                      <p>{d.degree}</p>
                      {d.notes.length > 0 && (
                        <ul className="notes">
                          {d.notes.map((n) => (
                            <li key={n}>{n}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Licenses &amp; certifications</h3>
                <ul className="plain">
                  {licenses.map((l) => (
                    <li key={l.name}>
                      <p className="strong">{l.name}</p>
                      {l.issuer && <p className="meta">{l.issuer}</p>}
                    </li>
                  ))}
                </ul>
                <h3>Continuing education</h3>
                <ul className="plain">
                  {certificates.map((c) => (
                    <li key={c.name}>
                      <p className="strong">{c.name}</p>
                      <p className="meta">{c.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="more" aria-labelledby="more-h">
          <div className="wrap">
            <h2 id="more-h">Languages &amp; Board</h2>
            <div className="cols">
              <div>
                <h3>Languages</h3>
                <ul className="plain">
                  {languages.map((l) => (
                    <li key={l.name}>
                      <span className="strong">{l.name}</span> <span className="meta">— {l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Board</h3>
                <p className="strong">Board Member, Last Miles Now Foundation</p>
                <p className="meta">Education</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap foot">
          <a href={LINKEDIN} rel="me noopener noreferrer" target="_blank" aria-label="Elaine Chou on LinkedIn (opens in a new tab)">
            LinkedIn
          </a>
          <p>© Elaine Chou</p>
        </div>
      </footer>
    </>
  );
}
