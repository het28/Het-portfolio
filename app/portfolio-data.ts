import {
  BookOpen,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  Phone,
  Sparkles,
} from "lucide-react";

export const profile = {
  name: "Het Darshan Mehta",
  heroName: "HET MEHTA",
  role: "PhD Student | Scientific Researcher | AI Researcher",
  tagline: "AI Research | Recommender Systems | Knowledge Graphs",
  headline: "AI researcher and scientific researcher.",
  summary:
    "Scientific Researcher at the Leibniz Institute for Educational Media | Georg Eckert Institute and PhD student at Otto-von-Guericke University, working on algorithmic fairness, graph neural networks, recommender systems, and LLM-enhanced knowledge graphs.",
  availability:
    "Focused on AI fairness, human-centered AI, educational technology, and trustworthy recommender systems.",
  imagePath: "me-enhanced.png",
  resumePath: "resume.pdf",
  location: "Magdeburg / Braunschweig, Germany",
  email: "het.mehta@ovgu.de",
  phone: "+49 176 77595077",
};

export const navLinks = [
  { label: "About", href: "/" },
  { label: "Activities", href: "/activities" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
];

export const quickStats = [
  { value: "PhD", label: "AI Fairness Research" },
  { value: "2026", label: "Springer AI Publication" },
  { value: "GNNs", label: "Bias Detection" },
  { value: "LLMs", label: "Knowledge Graphs" },
];

export const highlights = [
  {
    icon: Microscope,
    title: "Scientific Researcher",
    detail:
      "Research work across artificial intelligence, educational media, and graph-based learning systems.",
  },
  {
    icon: BookOpen,
    title: "Published AI Research",
    detail:
      "Publications and projects across recommender systems, LLMs, NLP, and graph-based personalization.",
  },
  {
    icon: Sparkles,
    title: "Human-Centered AI Tutor",
    detail:
      "Tutored HCAI, HCNLP, and human-centered technology courses at Otto-von-Guericke University.",
  },
];

export const publications = [
  {
    title: "Large language model enhanced embeddings for knowledge aware recommender systems",
    venue: "Discover Artificial Intelligence, Springer Nature, 2026",
    description:
      "A two-phase framework using LLMs to construct and enrich knowledge graphs, then inject semantic embeddings into recommender models.",
    link: "https://link.springer.com/article/10.1007/s44163-026-01404-y",
    citation:
      "@article{mehta2026,
author = {Mehta, Darshan and Polignano, Marco and Semeraro, Giovanni and Luca, Ernesto William},
title = {Large language model enhanced embeddings for knowledge aware recommender systems},
journal = {Discover Artificial Intelligence},
year = {2026},
month = may,
volume = {6},
number = {1},
doi = {10.1007/s44163-026-01404-y},
url = {https://doi.org/10.1007/s44163-026-01404-y}
}",
  },
  {
    title: "A Comprehensive Strategy to Bias and Mitigation in Human Resource Decision Systems",
    venue: "XAI.it 2024, co-located with AIxIA 2024",
    description:
      "Study of bias sources, fairness definitions, mitigation strategies, and trade-offs in automated HR decision systems.",
    link: "https://hdl.handle.net/11586/550741",
    citation:
      "D'Amicantonio, S., Kizhakkam Kulangara, M., Mehta, H. D., Pal, S., Levantesi, M., Polignano, M., Purificato, E., & De Luca, E. W. (2024). A comprehensive strategy to bias and mitigation in human resource decision systems. XAI.it 2024.",
  },
  {
    title: "When Multimodal Features Do Not Improve Fairness in Learning Systems",
    venue: "MAAI4AIED, Festival of Learning 2026",
    description:
      "Research on fairness behavior in learning systems when multimodal features are introduced.",
    citation:
      "Mehta, H. D., & De Luca, E. W. (2026). When multimodal features do not improve fairness in learning systems. MAAI4AIED, Festival of Learning 2026.",
  },
  {
    title: "A Comprehensive Evaluation Framework for Multi-Level Bias Analysis in Graph-Based Personalization Systems",
    venue: "ACM UMAP 2026 Workshop",
    description:
      "Framework for analyzing multi-level bias in graph-based personalization and recommender systems.",
    citation:
      "Ahire, H., Correia, G. R., Sherwani, P., Mehta, H. D., Polignano, M., Semeraro, G., & De Luca, E. W. (2026). A comprehensive evaluation framework for multi-level bias analysis in graph-based personalization systems. ACM UMAP Workshop.",
  },
];

export const activities = {
  intro:
    "Academic activities, research engagement, teaching support, and workshop participation. Edit this section in app/portfolio-data.ts as Het adds chairing, committee, or reviewer roles.",
  chairing: [
    {
      title: "Academic Workshop Participation",
      role: "Research contributor",
      description:
        "Participated through accepted and submitted research work in AI, recommender systems, fairness, and educational technology venues.",
      link: "",
    },
  ],
  committees: [
    {
      title: "Human-Centered AI Teaching Support",
      role: "Tutor",
      description:
        "Supported Human-Centered AI, Human-Centered NLP, and Human-Centered Approaches and Technology courses at Otto-von-Guericke University.",
      link: "",
    },
    {
      title: "Educational Media Research",
      role: "Scientific researcher",
      description:
        "Contributes to research on bias detection, graph neural networks, and fairness-aware AI for educational media.",
      link: "https://www.hcai.ovgu.de/Staff/GEI/Het%2BDarshan%2BMehta.html",
    },
  ],
  reviewing: [
    {
      title: "Reviewer Roles",
      role: "To be updated",
      description:
        "Add confirmed journal, conference, or workshop reviewer roles here when available.",
      link: "",
    },
  ],
};

export const experiences = [
  {
    role: "Scientific Researcher",
    organization: "Leibniz Institute for Educational Media | Georg Eckert Institute",
    period: "Feb 2026 - Present",
    location: "Braunschweig, Germany",
    points: [
      "Measuring and evaluating algorithmic fairness in graph neural networks.",
      "Developing fairness-aware models for bias detection in educational textbooks.",
    ],
  },
  {
    role: "PhD Student",
    organization: "Otto-von-Guericke University",
    period: "Feb 2026 - Present",
    location: "Magdeburg, Germany",
    points: [
      "Researching multi-group and multi-class fairness for knowledge-aware recommender systems.",
    ],
  },
  {
    role: "Tutor: HCAI, HCNLP, HCAT",
    organization: "Otto-von-Guericke University",
    period: "Oct 2024 - Jan 2026",
    location: "Magdeburg, Germany",
    points: [
      "Supported teaching across Human-Centered AI, Natural Language Processing, and Human-Centered Approaches and Technology.",
    ],
  },
  {
    role: "Research Student",
    organization: "Leibniz Institute for Neurobiology",
    period: "May 2024 - Jan 2025",
    location: "Magdeburg, Germany",
    points: [
      "Measured and processed real-time brain signals at the Brain-Machine Interface AG.",
      "Supported neurofeedback software development for a mobile EEG device.",
    ],
  },
  {
    role: "Graduate Intern",
    organization: "Siemens Energy and Performance",
    period: "Dec 2022 - Aug 2023",
    location: "Mumbai, India",
    points: [
      "Designed digital twins for optimization of a pasteurization system at AMUL.",
      "Contributed to a factory digitization project at Hindustan Unilever, Pune.",
    ],
  },
];

export const education = [
  {
    degree: "PhD Student, Multi-group/Multi-class Fairness for Knowledge-Aware Recommender Systems",
    school: "Otto-von-Guericke University",
    period: "Feb 2026 - Present",
    location: "Magdeburg, Germany",
  },
  {
    degree: "M.Sc. Digital Engineering",
    school: "Otto-von-Guericke University",
    period: "Oct 2023 - Jan 2026",
    location: "Magdeburg, Germany",
  },
  {
    degree: "Erasmus+, Computer Science",
    school: "University of Bari Aldo Moro",
    period: "May 2025 - Oct 2025",
    location: "Bari, Italy",
  },
  {
    degree: "B.E. Electronics and Communication",
    school: "Dharmsinh Desai University",
    period: "2019 - 2023",
    location: "Nadiad, India",
  },
];

export const projects = [
  {
    title: "EUI LLM-KARS",
    description:
      "Enhanced user and item embeddings using LLM-generated knowledge graphs for knowledge-aware recommender systems.",
    tech: "LLMs | Knowledge Graphs | Recommender Systems",
    link: "https://link.springer.com/article/10.1007/s44163-026-01404-y",
  },
  {
    title: "Algorithmic Fairness in GNNs",
    description:
      "Evaluated GIN, GAT, and GCN fairness on adult graph data and implemented mitigation techniques.",
    tech: "GNNs | Fairness Metrics | Bias Mitigation",
  },
  {
    title: "OttoBot",
    description:
      "Transformer-based university information chatbot using web crawling, RAG, LangChain, and open-source LLM tooling.",
    tech: "NLP | RAG | LangChain | Transformers",
    link: "https://ghoshtathagata.de/project/OTTOBoT.pdf",
  },
  {
    title: "Deep Reinforcement Learning Traffic System",
    description:
      "Implemented Advantage Actor Critic models to optimize traffic control in simulation environments.",
    tech: "A2C | A3C | Simulation",
  },
  {
    title: "Real-time Sign Language Translator",
    description:
      "Used webcam input and CNNs to recognize hand gestures and convert them into speech-enabled text.",
    tech: "CNNs | Computer Vision | Accessibility",
  },
  {
    title: "AnyLogic Traffic Simulation",
    description:
      "Collaborated with the City of Magdeburg on agent-based modeling for intersection safety.",
    tech: "AnyLogic | Agent-Based Modeling",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C/C++", "MySQL", "HTML", "CSS"],
  },
  {
    title: "AI & Deep Learning",
    skills: ["PyTorch", "TensorFlow", "GNNs", "A2C", "A3C", "Graph Contrastive Learning"],
  },
  {
    title: "NLP & Recommenders",
    skills: ["RAG", "Sentence-BERT", "Transformers", "Fairness Metrics", "Bias Mitigation"],
  },
  {
    title: "Knowledge & Reasoning",
    skills: ["Knowledge Graphs", "Prompt Engineering", "CoT", "KGoT", "Tree-of-Thoughts"],
  },
  {
    title: "Tools",
    skills: ["Docker", "LangChain", "Neo4j", "Ollama", "CoppeliaSim", "OpenAI API"],
  },
  {
    title: "Languages Spoken",
    skills: ["English C1", "German A2", "Italian A1", "Hindi C2", "Gujarati C2"],
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "HCAI Profile",
    href: "https://www.hcai.ovgu.de/Staff/GEI/Het%2BDarshan%2BMehta.html",
    icon: BriefcaseBusiness,
  },
];

export const contactCards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}`, icon: Phone },
  { label: "Location", value: profile.location, href: "", icon: MapPin },
];

export const editHints = [
  "Change text, links, projects, skills, and publications in app/portfolio-data.ts.",
  "Replace the portrait at public/me-enhanced.png.",
  "Replace the CV at public/resume.pdf.",
  "Paste final GitHub and LinkedIn URLs into socialLinks.",
];
