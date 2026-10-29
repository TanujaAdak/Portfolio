// ============================================================
// DATA.JS — Single source of truth for all portfolio content
// Edit this file to customize the portfolio for any person.
// ============================================================

export const personalInfo = {
  name: "Tanuja Adak",
  firstName: "Tanuja",
  lastName: "Adak",
  title: "ML Engineer & Full-Stack Developer",
  tagline: "Building intelligent systems at the intersection of AI and elegant interfaces.",
  bio: "Recent B.Tech CSE graduate specializing in Machine Learning and Full-Stack (MERN) development, backed by published IEEE research. Experienced in architecting end-to-end AI pipelines, deploying classification models, and building scalable web applications.",
  location: "Raipur, India",
  email: "adaktanuja@gmail.com",
  phone: "+91-79873 99719",
  linkedin: "https://www.linkedin.com/in/tanuja-adak/",
  github: "https://github.com/TanujaAdak",
  portfolio: "https://tanuja25-portfolio.vercel.app/",
  availableForWork: true,
  resumeLink: "#",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  Languages: ["Python", "JavaScript"],
  Frontend: ["React", "React Native", "HTML", "CSS", "Responsive UI Design"],
  Backend: ["REST APIs", "Express.js", "Node.js", "JWT Authentication"],
  "ML & AI": [
    "Machine Learning",
    "Data Preprocessing",
    "Deep Learning",
  ],
  Libraries: [
    "TensorFlow",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "FastAPI",
    "Groq Vision",
  ],
  Databases: ["PostgreSQL", "Firebase"],
  Tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Firebase"],
};

export const experiences = [
  {
    id: 1,
    role: "Machine Learning (ML) & Deep Learning Trainee",
    company: "IIIT Naya Raipur",
    type: "Internship",
    duration: "May 2025 – Jul 2025",
    location: "Raipur, India",
    description: [
      "Engineered a data preprocessing and feature extraction pipeline in Python to analyze raw PPG waveforms, achieving 89.7% classification accuracy using SVM and Random Forest models.",
      "Architected a cross-platform mobile application using React Native to facilitate real-time biometric signal monitoring and user data visualization.",
    ],
    tags: ["Python", "React Native", "SVM", "Random Forest"],
    color: "#4F46E5",
  },
];

export const projects = [
  {
    id: 1,
    title: "Algo Learner Studio",
    description:
      "Built an interactive visualizer for 15+ data structures and algorithms, including AVL Trees, Heaps, Graphs, Dynamic Programming, and Sorting Race, with frame-by-frame playback controls and synchronized pseudocode execution.",
    longDescription:
      "Integrated a zero-dependency Web Audio API synthesizer for pitch-scaled audio feedback during comparisons and rotations; implemented live Big-O time and space complexity telemetry.",
    tags: ["React", "JavaScript", "Web Audio API", "CSS"],
    github: "https://github.com/TanujaAdak/Algo-learner-studio",
    live: "#",
    duration: "Sep 2026 – Oct 2026",
    color: "#A6D957",
    gradient: "linear-gradient(135deg, #172210 0%, #233516 100%)",
    orbColor: "#A6D957",
    mockupLine1: "audioSynth.playPitch(freq);",
    mockupLine2: "  avlTree.rotateLeft(pivot);",
    featured: true,
  },
  {
    id: 2,
    title: "MittiCard: Soil Health App",
    description:
      "Developed an AI-powered mobile app that scans ICAR Soil Health Cards using Groq Vision OCR and delivers crop-specific fertilizer recommendations with cost estimates in Hindi and English.",
    longDescription:
      "Engineered an advisory system for 7 crops with NPK deficiency detection and soil health scoring (0–100), supported by a Node.js/Express and PostgreSQL backend with OTP authentication and Firebase push notifications.",
    tags: ["JavaScript", "React Native", "PostgreSQL", "Groq Vision"],
    github: "https://github.com/Rajkamal08/MittiCard",
    live: "#",
    duration: "Feb 2026 – Apr 2026",
    color: "#22C55E",
    gradient: "linear-gradient(135deg, #022c22 0%, #14532d 100%)",
    orbColor: "#22C55E",
    mockupLine1: "await groqVision.scanCard(img);",
    mockupLine2: "  advisory.computeNPK(deficiency);",
    featured: true,
  },
  {
    id: 3,
    title: "PPG Signal Quality Assessment",
    description:
      "Built an end-to-end biomedical signal processing pipeline that ingests raw PPG data, applies noise filtering, extracts multi-domain features, and classifies signal quality in real time.",
    longDescription:
      "Engineered a clinical machine learning pipeline using Butterworth DSP filters and 30+ statistical features, achieving 95% classification accuracy with a Random Forest model deployed via FastAPI.",
    tags: ["Python", "React Native", "SVM", "Random Forest"],
    github: "https://github.com/Rajkamal08/PPG-Signal-Quality-Assessment",
    live: "#",
    duration: "July 2025 – Aug 2025",
    color: "#38BDF8",
    gradient: "linear-gradient(135deg, #082f49 0%, #0c4a6e 100%)",
    orbColor: "#38BDF8",
    mockupLine1: "filtered = butterworth(rawPPG);",
    mockupLine2: "  accuracy = model.predict(features);",
    featured: true,
  },
];

export const publications = [
  {
    id: 1,
    title:
      "PPG Signal Quality Assessment & Artifact Detection for Smartphone Monitoring",
    journal: "TechRxiv (IEEE-supported preprint)",
    date: "September 2025",
    authors: "Tanuja Adak et al.",
    abstract:
      "A clinical machine learning pipeline for assessing PPG signal quality extracted from smartphone cameras using DSP filtering techniques and statistical feature engineering.",
    link: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.175756513.39439365/v1",
    badge: "IEEE Preprint",
    color: "#4F46E5",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning Training",
    issuer: "IIIT Naya Raipur",
    date: "Jul 2025",
    icon: "🎓",
    color: "#4F46E5",
  },
  {
    id: 2,
    title: "AI/ML Certification",
    issuer: "Infosys Springboard",
    date: "2025",
    icon: "🤖",
    color: "#22C55E",
  },
  {
    id: 3,
    title: "Web Development Certification",
    issuer: "CodeTech IT Solutions",
    date: "2024",
    icon: "💻",
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "Hackathon Finalist",
    issuer: "IDEA-FIESTA Hackathon",
    date: "2022",
    icon: "🏆",
    color: "#E11D48",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Krishna Vikas Institute of Technology, Raipur",
    duration: "2022 – 2026",
    cgpa: "7.2/10",
    icon: "🏛️",
  },
];

export const emailJSConfig = {
  serviceId: "YOUR_SERVICE_ID",   // ← Replace with your EmailJS service ID
  templateId: "YOUR_TEMPLATE_ID", // ← Replace with your EmailJS template ID
  publicKey: "YOUR_PUBLIC_KEY",   // ← Replace with your EmailJS public key
};
