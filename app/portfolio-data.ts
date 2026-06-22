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

// SITE CONTENT FILE
// Update profile details, publications, activities, and projects here.
// External links automatically open in a new tab throughout the site.

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
    order: 1,
    title: "Large language model enhanced embeddings for knowledge aware recommender systems",
    authors: ["Het Darshan Mehta", "Marco Polignano", "Giovanni Semeraro", "Ernesto William De Luca"],
    publicationType: "Journal Article",
    venue: "Discover Artificial Intelligence, Springer Nature, 2026",
    link: "https://doi.org/10.1007/s44163-026-01404-y",
    doi: "10.1007/s44163-026-01404-y",
    citation: "@article{Mehta2026Large,\n  author = {Mehta, Het Darshan and Polignano, Marco and Semeraro, Giovanni and De Luca, Ernesto William},\n  title = {Large language model enhanced embeddings for knowledge aware recommender systems},\n  journal = {Discover Artificial Intelligence},\n  year = {2026},\n  volume = {6},\n  number = {1},\n  pages = {477},\n  doi = {10.1007/s44163-026-01404-y},\n  url = {https://doi.org/10.1007/s44163-026-01404-y}\n}",
  },
  {
    order: 2,
    title: "When Multimodal Features Do Not Improve Fairness in Learning Systems",
    authors: ["Het Darshan Mehta", "Ernesto William De Luca"],
    publicationType: "Conference Workshop Paper",
    venue: "MAAI4AIED - Multimodal Affect in AI for Education Design, Application, and Ethical Implications, Festival of Learning 2026",
    citation: "Mehta, H. D., & De Luca, E. W. (2026). When multimodal features do not improve fairness in learning systems. MAAI4AIED - Multimodal Affect in AI for Education Design, Application, and Ethical Implications, Festival of Learning 2026.",
  },
  {
    order: 4,
    section: "student-supervision",
    title: "A Comprehensive Evaluation Framework for Multi-Level Bias Analysis in Graph-Based Personalization Systems",
    authors: ["Hrushikesh Ahire", "Gavin Rony Correia", "Pinky Sherwani", "Het Darshan Mehta", "Marco Polignano", "Giovanni Semeraro", "Ernesto William De Luca"],
    publicationType: "Workshop Paper",
    venue: "8th International Workshop on Explainable User Modeling and Personalised Systems, co-located with UMAP 2026, Gothenburg, Sweden",
    link: "https://ceur-ws.org/Vol-4206/ExUM-4.pdf",
    citation: "@inproceedings{ahire2026comprehensive,\n  title = {A Comprehensive Evaluation Framework for Multi-Level Bias Analysis in Graph-Based Personalization Systems},\n  author = {Ahire, Hrushikesh and Correia, Gavin Rony and Sherwani, Pinky and Mehta, Het Darshan and Polignano, Marco and Semeraro, Giovanni and De Luca, Ernesto William},\n  year = {2026}\n}",
  },
  {
    order: 3,
    title: "A Comprehensive Strategy to Bias and Mitigation in Human Resource Decision Systems",
    authors: ["Silvia D'Amicantonio", "Mishal Kizhakkam Kulangara", "Het Darshan Mehta", "Shalini Pal", "Marco Levantesi", "Marco Polignano", "Erasmo Purificato", "Ernesto William De Luca"],
    publicationType: "Workshop Paper",
    venue: "5th Italian Workshop on Explainable Artificial Intelligence, co-located with AIxIA 2024, Bolzano, Italy",
    link: "https://ricerca.uniba.it/handle/11586/550741",
    citation: "@inproceedings{d2024comprehensive,\n  title = {A comprehensive strategy to bias and mitigation in human resource decision systems},\n  author = {D’Amicantonio, Silvia and Kulangara, Mishal Kizhakkam and Mehta, Het Darshan and Pal, Shalini and Levantesi, Marco and Polignano, Marco and Purificato, Erasmo and De Luca, Ernesto William and others},\n  booktitle = {CEUR Workshop Proceedings},\n  year = {2024}\n}",
  },
];

export const activities = {
  intro:
    "Teaching and peer-review activities.",
  teaching: [
    {
      title: "Human-Centered Artificial Intelligence",
      role: "Teaching Assistant · Summer Semester 2024 – Present",
      description: "Teaching support for the Human-Centered Artificial Intelligence course at Otto von Guericke University Magdeburg.",
      link: "",
    },
    {
      title: "Human-Centered Approaches and Technologies",
      role: "Teaching Assistant · Summer Semester 2024 – Present",
      description: "Teaching support for the Human-Centered Approaches and Technologies course at Otto von Guericke University Magdeburg.",
      link: "",
    },
    {
      title: "Human-Centered Natural Language Processing (HCNLP)",
      role: "Tutor - October 2025 to January 2026",
      description: "Tutor at Otto von Guericke University Magdeburg.",
      link: "",
    },
    {
      title: "Human-Centered Approaches and Technology (HCAT)",
      role: "Tutor - October 2025 to January 2026",
      description: "Tutor at Otto von Guericke University Magdeburg.",
      link: "",
    },
    {
      title: "Human-Centered Artificial Intelligence (HCAI)",
      role: "Tutor - April 2025 to September 2025",
      description: "Tutor at Otto von Guericke University Magdeburg.",
      link: "",
    },
    {
      title: "Human-Centered Natural Language Processing (HCNLP)",
      role: "Tutor - November 2024 to May 2025",
      description: "Tutor at Otto von Guericke University Magdeburg.",
      link: "",
    },
    {
      title: "Human-Centered Approaches and Technology (HCAT)",
      role: "Tutor - October 2024 to February 2025",
      description: "Tutor at Otto von Guericke University Magdeburg.",
      link: "",
    },
  ],
  reviewing: [
    {
      title: "Data Mining and Knowledge Discovery",
      role: "Journal Reviewer",
      description: "Peer reviewer for Data Mining and Knowledge Discovery (DMKD).",
      link: "",
    },
  ],
  programCommittees: [
    {
      title: "RecSys 2026: 20th ACM Conference on Recommender Systems",
      role: "Program Committee Member",
      description: "Program committee service for the 20th ACM Conference on Recommender Systems.",
      link: "https://recsys.acm.org/recsys26",
    },
    {
      title: "WWW 2026: The ACM Web Conference 2026",
      role: "Program Committee Member",
      description: "Program committee service for The ACM Web Conference 2026.",
      link: "https://www2026.thewebconf.org/",
    },
    {
      title: "CIKM'26: The 35th ACM International Conference on Information and Knowledge Management",
      role: "Program Committee Member",
      description: "Program committee service for the 35th ACM International Conference on Information and Knowledge Management.",
      link: "https://cikm2026.org/",
    },
    {
      title: "UMAP 2026: 34th ACM International Conference on User Modeling, Adaptation and Personalization",
      role: "Program Committee Member",
      description: "Program committee service for the 34th ACM International Conference on User Modeling, Adaptation and Personalization.",
      link: "https://www.um.org/umap2026/",
    },
    {
      title: "XAI.it 2026: 6th Workshop on Explainable AI, Generative and Agentic Systems: Trust, Transparency, and Human Oversight",
      role: "Program Committee Member",
      description: "Program committee service for the XAI.it 2026 workshop.",
      link: "https://xai-it.github.io/",
    },
    {
      title: "AIED 2026: 27th International Conference on Artificial Intelligence in Education",
      role: "Program Committee Member",
      description: "Program committee service for the 27th International Conference on Artificial Intelligence in Education.",
      link: "https://aied-conference.com/2026",
    },
  ],
};

// Current activity data, ordered newest to oldest. Keep future additions in this block.
export const activityData = {
  intro: "Teaching, peer-review, and programme-committee activities.",
  teaching: [
    { title: "Human-Centered Artificial Intelligence (HCAI)", role: "April to September 2025", link: "" },
    { title: "Human-Centered Natural Language Processing (HCNLP)", role: "October 2024 to March 2025; October 2025 to March 2026", link: "" },
    { title: "Human-Centered Approaches and Technology (HCAT)", role: "October 2024 to March 2025; October 2025 to March 2026", link: "" },
  ],
  reviewing: [
    { title: "WIREs Data Mining and Knowledge Discovery", role: "Journal Reviewer - Q1 Journal", link: "" },
  ],
  programCommittees: [
    { title: "RecSys 2026: 20th ACM Conference on Recommender Systems", role: "Program Committee Member - 2026", link: "https://recsys.acm.org/recsys26" },
    { title: "WWW 2026: The ACM Web Conference 2026", role: "Program Committee Member - 2026", link: "https://www2026.thewebconf.org/" },
    { title: "CIKM 2026: The 35th ACM International Conference on Information and Knowledge Management", role: "Program Committee Member - 2026", link: "https://cikm2026.org/" },
    { title: "UMAP 2026: 34th ACM International Conference on User Modeling, Adaptation and Personalization", role: "Program Committee Member - 2026", link: "https://www.um.org/umap2026/" },
    { title: "XAI.it 2026: 6th Workshop on Explainable AI, Generative and Agentic Systems: Trust, Transparency, and Human Oversight", role: "Program Committee Member - 2026", link: "https://xai-it.github.io/" },
    { title: "AIED 2026: 27th International Conference on Artificial Intelligence in Education", role: "Program Committee Member - 2026", link: "https://aied-conference.com/2026" },
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

export const pinnedProjects = [
  {
    title: "MEG-RW",
    description:
      "Multi-Group Exposure calibrated Graph Reweighting for Fairness in Recommendation.",
    tech: "Python | Fairness | Recommender Systems",
    link: "https://github.com/het28/MEG-RW",
  },
  {
    title: "MMRec-FAIR",
    description:
      "Fairness in multimodal recommender systems.",
    tech: "Python | Multimodal Recommendation | Fairness",
    link: "https://github.com/het28/MMRec-FAIR",
  },
  {
    title: "EUI_LLM_KARS",
    description:
      "Knowledge-aware recommender system combining knowledge graph embeddings and large language models.",
    tech: "Python | LLMs | Knowledge Graphs",
    link: "https://github.com/het28/EUI_LLM_KARS",
  },
  {
    title: "LLM-KG-Extraction",
    description:
      "Pipeline for extracting and evaluating knowledge graphs from the MovieLens 1M dataset with large language models.",
    tech: "Python | LLMs | Knowledge Graphs",
    link: "https://github.com/het28/LLM-KG-Extraction",
  },
  {
    title: "Deep-Reinforcement-Learning-A2C-",
    description:
      "An implementation of Advantage Actor Critic (A2C) reinforcement learning.",
    tech: "Python | Reinforcement Learning | A2C",
    link: "https://github.com/het28/Deep-Reinforcement-Learning-A2C-",
  },
  {
    title: "Evaluating-Algorithmic-Fairness-in-GNNs",
    description:
      "Evaluation of algorithmic fairness in graph neural networks using the Adult dataset and mitigation strategies.",
    tech: "Jupyter Notebook | GNNs | Fairness",
    link: "https://github.com/het28/Evaluating-Algorithmic-Fairness-in-GNNs",
  },
];

export const projects = pinnedProjects;

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
    title: "Frameworks & Developer Tools",
    skills: ["Docker", "LangChain", "Neo4j", "Ollama", "CoppeliaSim", "OpenAI API"],
  },
  {
    title: "Libraries & APIs",
    skills: ["Sentence-Transformers", "Transformers", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn", "Together AI APIs"],
  },
];

export const spokenLanguages = ["English C1", "German A2", "Italian A1", "Hindi C2", "Gujarati C2"];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/het28",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/het-mehta2801/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=y3MZoYoAAAAJ&hl=en",
    icon: GraduationCap,
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
  { label: "ORCID", value: "0009-0000-8372-3877", href: "https://orcid.org/0009-0000-8372-3877", icon: BookOpen },
  { label: "Location", value: profile.location, href: "", icon: MapPin },
];

export const editHints = [
  "Change text, links, projects, skills, and publications in app/portfolio-data.ts.",
  "Replace the portrait at public/me-enhanced.png.",
  "Replace the CV at public/resume.pdf.",
  "Paste final GitHub and LinkedIn URLs into socialLinks.",
];
