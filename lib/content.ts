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
  role: { en: "Full-Stack Engineer (Go / Next.js / Java) and AI engineering", fr: "Ingénieur Full-Stack (Go / Next.js / Java) et ingénierie IA" } satisfies L,
  location: { en: "Algiers, Algeria", fr: "Alger, Algérie" } satisfies L,
  aboutBody: {
    en: "I am a full-stack engineer based in Algiers. I work with Go on the backend and Next.js on the frontend, I also work with Java, and I have modernised a Liferay front end into a single-page application driven by a JavaScript state machine and JSON endpoints. Alongside that I build AI engineering projects: retrieval-augmented generation, agents and evaluation, plus EEG signal classification from my Master's research.",
    fr: "Je suis ingénieur full-stack basé à Alger. Je travaille avec Go côté backend et Next.js côté frontend, j'utilise aussi Java, et j'ai modernisé un front-end Liferay en application monopage pilotée par une machine à états JavaScript et des endpoints JSON. En parallèle, je construis des projets d'ingénierie IA : génération augmentée par la recherche (RAG), agents et évaluation, ainsi que la classification de signaux EEG issue de mes recherches de Master.",
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
  { repo: "sandbox-research", tags: ["Research", "Python"], blurb: { en: "Crypto strategy research engine: survivorship-free backtests, pre-registered experiments, independent audits.", fr: "Moteur de recherche de stratégies crypto : backtests sans biais de survie, expériences pré-enregistrées, audits indépendants." } },
  { repo: "gold-price-forecast", path: "ai-engineering-lab/tree/main/ml/gold-price-forecast", tags: ["Forecasting"], blurb: { en: "Gold price forecasting experiments.", fr: "Expériences de prévision du prix de l'or." } },
  { repo: "eegnet-pytorch", path: "ai-engineering-lab/tree/main/eeg-bci/eegnet-pytorch", tags: ["PyTorch", "EEG"], blurb: { en: "Clean PyTorch reimplementation of EEGNet with group-wise splits and a window-leakage demo.", fr: "Réimplémentation PyTorch d'EEGNet avec découpage par groupes et démonstration de fuite entre fenêtres." } },
  { repo: "go-url-shortener", path: "go-backend-lab/tree/main/go-url-shortener", tags: ["Go", "Backend"], blurb: { en: "URL shortener in Go: base62 IDs, click counting, expiry, per-IP rate limiting, pluggable store.", fr: "Raccourcisseur d'URL en Go : identifiants base62, comptage de clics, expiration, limitation par IP, stockage interchangeable." } },
];

export type Job = { role: L; org: L; period: L; note?: L };

export const experience: Job[] = [
  { role: { en: "Full-Stack Engineer", fr: "Ingénieur Full-Stack" }, org: { en: "Government agency", fr: "Agence gouvernementale" }, period: { en: "Dec 2025 - present", fr: "Déc. 2025 - aujourd'hui" }, note: { en: "Go backend and Next.js frontend.", fr: "Backend Go et frontend Next.js." } },
  { role: { en: "Part-time Lecturer, Technical English", fr: "Enseignant vacataire, anglais technique" }, org: { en: "USTHB", fr: "USTHB" }, period: { en: "Sep 2025 - present", fr: "Sept. 2025 - aujourd'hui" } },
  { role: { en: "Freelance Media Buyer", fr: "Media buyer freelance" }, org: { en: "Self-employed", fr: "Indépendant" }, period: { en: "2022 - 2025", fr: "2022 - 2025" } },
];

export const education = {
  degree: { en: "Master's in Computer Science, AI & Bioinformatics", fr: "Master en Informatique, IA et Bioinformatique" } satisfies L,
  school: "USTHB",
  year: "2025",
};
