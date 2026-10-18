"use client";

import { useEffect, useState } from "react";
import { EMAIL, GITHUB, LINKEDIN, education, experience, projects, ui, type Lang } from "@/lib/content";

const STORAGE_KEY = "lang";

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");

  // Restore the saved choice, else follow the browser language. Runs after hydration so the static HTML stays English.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "fr") { setLang(saved); return; }
    } catch { /* storage unavailable */ }
    if (navigator.language?.toLowerCase().startsWith("fr")) setLang("fr");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  const other: Lang = lang === "en" ? "fr" : "en";

  return (
    <>
      <header className="top">
        <a className="brand" href="#about">Nidhal Kissoum</a>
        <nav aria-label="Sections">
          {(["about", "projects", "experience", "education", "contact"] as const).map((k) => (
            <a key={k} href={`#${k}`}>{ui.nav[k][lang]}</a>
          ))}
          <button type="button" className="lang" onClick={() => setLang(other)} lang={other} aria-label={`Switch language to ${other === "fr" ? "French" : "English"}`}>
            {ui.toggle[lang]}
          </button>
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <p className="eyebrow">{ui.location[lang]}</p>
          <h1>Nidhal Kissoum</h1>
          <p className="role">{ui.role[lang]}</p>
          <p className="lead">{ui.aboutBody[lang]}</p>
          <p className="links">
            <a href={GITHUB}>GitHub</a> <a href={LINKEDIN}>LinkedIn</a> <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </section>

        <section id="projects">
          <h2>{ui.nav.projects[lang]}</h2>
          <p className="muted">{ui.projectsIntro[lang]}</p>
          <ul className="grid">
            {projects.map((p) => (
              <li key={p.repo} className="card">
                <h3><a href={`${GITHUB}/${p.repo}`}>{p.repo}</a></h3>
                <p>{p.blurb[lang]}</p>
                <p className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</p>
                <a className="more" href={`${GITHUB}/${p.repo}`}>{ui.viewRepo[lang]}</a>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience">
          <h2>{ui.nav.experience[lang]}</h2>
          <ol className="timeline">
            {experience.map((j) => (
              <li key={j.role.en}>
                <h3>{j.role[lang]}</h3>
                <p className="muted">{j.org[lang]} &middot; {j.period[lang]}</p>
                {j.note && <p>{j.note[lang]}</p>}
              </li>
            ))}
          </ol>
        </section>

        <section id="education">
          <h2>{ui.nav.education[lang]}</h2>
          <div className="card">
            <h3>{education.degree[lang]}</h3>
            <p className="muted">{education.school} &middot; {education.year}</p>
          </div>
        </section>

        <section id="contact">
          <h2>{ui.nav.contact[lang]}</h2>
          <p>{ui.contactIntro[lang]}</p>
          <ul className="contact">
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a href={LINKEDIN}>linkedin.com/in/nidhal-kissoum</a></li>
            <li><a href={GITHUB}>github.com/nidhalom</a></li>
          </ul>
        </section>
      </main>

      <footer>{ui.footer[lang]}</footer>
    </>
  );
}
