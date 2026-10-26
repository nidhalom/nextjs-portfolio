export type Lang = "en" | "fr";
type L = Record<Lang, string>;

export const GITHUB = "https://github.com/nidhalom";
export const EMAIL = "nidhalm01@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/nidhal-kissoum";

export const ui = {
  nav: {
    about: { en: "About", fr: "À propos" },
    projects: { en: "Projects", fr: "Projets" },
    experience: { en: "Experience", fr: "Expérience" },
    education: { en: "Education", fr: "Formation" },
    contact: { en: "Contact", fr: "Contact" },
  } satisfies Record<string, L>,
  role: { en: "AI Engineer & Full-Stack Developer (RAG · AI agents · PyTorch · Go / Next.js)", fr: "Ingénieur IA & Développeur Full-Stack (RAG · agents IA · PyTorch · Go / Next.js)" } satisfies L,
  location: { en: "Algiers, Algeria", fr: "Alger, Algérie" } satisfies L,
  aboutBody: {
    en: "I am an AI engineer and full-stack developer based in Algiers, with a Master's in Computer Science specialised in Artificial Intelligence and Bioinformatics (USTHB, 2025). I build AI systems end to end: retrieval-augmented generation that checks its own evidence, GraphRAG, tool-using AI agents, evaluation, and EEG brain-signal classification from my Master's research. My day job is full-stack engineering on a production government platform (Go backend, Next.js frontend, Java/Liferay), which is why my AI projects ship with real APIs, interfaces and tests.",
    fr: "Je suis ingénieur IA et développeur full-stack basé à Alger, titulaire d'un Master en Informatique spécialité Intelligence Artificielle et Bio-informatique (USTHB, 2025). Je construis des systèmes d'IA de bout en bout : RAG qui vérifie ses propres sources, GraphRAG, agents IA à outils, évaluation, et classification de signaux cérébraux EEG issue de mon Master. Au quotidien, je suis ingénieur full-stack sur une plateforme gouvernementale en production (backend Go, frontend Next.js, Java/Liferay) — c'est pourquoi mes projets IA arrivent avec de vraies API, interfaces et tests.",
  } satisfies L,
  projectsIntro: { en: "Selected repositories on GitHub.", fr: "Dépôts sélectionnés sur GitHub." } satisfies L,
  viewRepo: { en: "View on GitHub", fr: "Voir sur GitHub" } satisfies L,
  present: { en: "present", fr: "aujourd'hui" } satisfies L,
  contactIntro: { en: "The best way to reach me is by email or LinkedIn.", fr: "Le meilleur moyen de me joindre est l'e-mail ou LinkedIn." } satisfies L,
  footer: { en: "Built with Next.js, exported as a static site.", fr: "Construit avec Next.js, exporté en site statique." } satisfies L,
  toggle: { en: "Français", fr: "English" } satisfies L,
};

export type Project = { repo: string; path?: string; tags: string[]; blurb: L };

// Blurbs are kept deliberately descriptive and modest; see each repository's README for details.
export const projects: Project[] = [
  { repo: "veritas-agentic-rag", tags: ["RAG", "Agents"], blurb: { en: "Agentic RAG that verifies its own evidence before answering, and says it doesn't know when the documents don't support an answer.", fr: "RAG agentique qui vérifie ses preuves avant de répondre et dit qu'il ne sait pas quand les documents ne suffisent pas." } },
  { repo: "neuro-graphrag", tags: ["GraphRAG", "EEG"], blurb: { en: "GraphRAG for brain-computer-interface research: EEG/BCI abstracts turned into a knowledge graph for multi-hop questions.", fr: "GraphRAG pour la recherche sur les interfaces cerveau-machine : résumés EEG/BCI transformés en graphe de connaissances pour les questions multi-sauts." } },
  { repo: "adpilot-media-buyer-agent", tags: ["Agent", "Media buying"], blurb: { en: "Agent that analyses an ads export and recommends what to kill or scale. Recommends only; never touches a live account.", fr: "Agent qui analyse un export publicitaire et recommande quoi couper ou accélérer. Il recommande seulement et ne touche jamais à un compte réel." } },
  { repo: "dzshop-agent", tags: ["Agent", "E-commerce"], blurb: { en: "Customer-service and COD order agent for small Algerian shops (Darija, Arabic, French), built against a mock backend.", fr: "Agent de service client et de commandes COD pour petites boutiques algériennes (darija, arabe, français), sur un backend simulé." } },
  { repo: "sandbox-research", tags: ["Research", "Python"], blurb: { en: "Crypto strategy research engine: survivorship-free backtests, pre-registered experiments, re-checked results.", fr: "Moteur de recherche de stratégies crypto : backtests sans biais de survie, expériences pré-enregistrées, résultats revérifiés." } },
  { repo: "starrocket-flight-replay", tags: ["Three.js", "Data viz"], blurb: { en: "3D flight replay for my student rocketry team: import altimeter data, save and compare flights.", fr: "Rejeu 3D des vols de mon équipe étudiante de fusées : import de données d'altimètre, sauvegarde et comparaison de vols." } },
];

export type Job = { role: L; org: L; period: L; note?: L };

export const experience: Job[] = [
  { role: { en: "Full-Stack Engineer", fr: "Ingénieur Full-Stack" }, org: { en: "CNRC, Algeria's National Trade Register Centre (public institution, Ministry of Commerce)", fr: "CNRC, Centre National du Registre de Commerce (établissement public, ministère du Commerce)" }, period: { en: "Dec 2025 - present", fr: "Déc. 2025 - aujourd'hui" }, note: { en: "Go backend and Next.js frontend.", fr: "Backend Go et frontend Next.js." } },
  { role: { en: "Part-time Lecturer, Technical English", fr: "Enseignant vacataire, anglais technique" }, org: { en: "USTHB", fr: "USTHB" }, period: { en: "Sep 2025 - present", fr: "Sept. 2025 - aujourd'hui" } },
  { role: { en: "Freelance Media Buyer", fr: "Media buyer freelance" }, org: { en: "Self-employed", fr: "Indépendant" }, period: { en: "2022 - 2025", fr: "2022 - 2025" } },
];

export const education = {
  degree: { en: "Master's in Computer Science, AI & Bioinformatics", fr: "Master en Informatique, IA et Bioinformatique" } satisfies L,
  school: "USTHB",
  year: "2025",
};
