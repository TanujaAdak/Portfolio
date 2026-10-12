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
  bio: "I'm a Computer Science student specializing in Machine Learning, Deep Learning, and Full-Stack Development. I love crafting end-to-end systems — from signal processing pipelines to production-ready mobile apps — that solve real-world problems with precision.",
  location: "Raipur, India",
  email: "adaktanuja@gmail.com",
  phone: "+91-79873 99719",
  linkedin: "https://www.linkedin.com/in/tanuja-adak",
  github: "https://github.com/tanuja-adak",
  portfolio: "#",
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
  Frontend: ["React.js", "React Native", "HTML5", "CSS3", "Responsive Design"],
  Backend: ["REST APIs", "Express.js", "Node.js", "JWT Authentication"],
  "ML & AI": [
    "Machine Learning",
    "Deep Learning",
    "Data Preprocessing",
    "TF-IDF",
    "NLP",
    "Computer Vision",
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
  Tools: ["VS Code", "Jupyter Notebook", "Google Colab", "Git", "GitHub"],
};

export const experiences = [
  {
    id: 1,
    role: "Machine Learning (ML) & Deep Learning Trainee",
    company: "IIT Naya Raipur",
    type: "Internship",
    duration: "May 2025 – Jul 2025",
    location: "Raipur, India",
    description: [
      "Engineered a data preprocessing and feature extraction pipeline in Python to analyze raw PPG waveforms, achieving 89.7% classification accuracy using SVM and Random Forest models.",
      "Architected a cross-platform mobile application using React Native to facilitate real-time biometric signal monitoring and user data visualization.",
      "Integrated predictive ML models with the React Native frontend via REST APIs, ensuring seamless real-time data synchronization and live feedback.",
    ],
    tags: ["Python", "ML", "React Native", "REST APIs", "SVM", "Random Forest"],
    color: "#4F46E5",
  },
];

export const projects = [
  {
    id: 1,
    title: "MilliCard — Soil Health App",
    description:
      "An AI-powered mobile app that scans ICAR Soil Health Cards using Groq Vision OCR and delivers crop-specific fertilizer recommendations with cost estimates in Hindi and English.",
    longDescription:
      "Developed an advisory system for 7 crops with NPK deficiency detection and soil health scoring (0–100), supported by a Node.js/Express and PostgreSQL backend with OTP authentication and Firebase push notifications.",
    tags: ["JavaScript", "React Native", "PostgreSQL", "Groq Vision", "Node.js", "Firebase"],
    github: "#",
    live: "#",
    duration: "Feb 2026 – Apr 2026",
    color: "#22C55E",
    gradient: "linear-gradient(135deg, #022c22 0%, #14532d 100%)",
    orbColor: "#22C55E",
    featured: true,
  },
  {
    id: 2,
    title: "Fake News Detection System",
    description:
      "A full NLP pipeline — raw text ingestion, tokenization, stopword removal, TF-IDF vectorization — to classify news articles as real or fake with high precision.",
    longDescription:
      "Evaluated multiple classifiers including Logistic Regression, Naïve Bayes, and SVM. Selected the best-performing model based on F1-score and accuracy metrics.",
    tags: ["Python", "scikit-learn", "TF-IDF", "Logistic Regression", "NLP", "Naïve Bayes"],
    github: "#",
    live: "#",
    duration: "Dec 2025 – Jan 2026",
    color: "#E11D48",
    gradient: "linear-gradient(135deg, #1f0010 0%, #4c0519 100%)",
    orbColor: "#E11D48",
    featured: true,
  },
  {
    id: 3,
    title: "PPG Signal Quality Assessment",
    description:
      "A full-stack cardiovascular health app that extracts raw PPG optical signals directly from a smartphone camera using custom Kotlin native hardware bridges.",
    longDescription:
      "Engineered a clinical ML pipeline using Butterworth DSP filters and 30+ statistical features, achieving 95% classification accuracy with a Random Forest model deployed via FastAPI.",
    tags: ["React", "FastAPI", "Kotlin", "scikit-learn", "Random Forest", "DSP"],
    github: "#",
    live: "#",
    duration: "Jul 2025 – Aug 2025",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #1c1200 0%, #451a03 100%)",
    orbColor: "#F59E0B",
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
    link: "#",
    badge: "IEEE Preprint",
    color: "#4F46E5",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Certificate in Artificial Intelligence & Machine Learning",
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
  {
    id: 5,
    title: "Hackathon Participant",
    issuer: "R1CODE FIESTA",
    date: "2024",
    icon: "⚡",
    color: "#8B5CF6",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Krishna Vikas Institute of Technology, Raipur",
    duration: "2022 – 2026",
    cgpa: "7.5/10",
    icon: "🏛️",
  },
];

export const emailJSConfig = {
  serviceId: "YOUR_SERVICE_ID",   // ← Replace with your EmailJS service ID
  templateId: "YOUR_TEMPLATE_ID", // ← Replace with your EmailJS template ID
  publicKey: "YOUR_PUBLIC_KEY",   // ← Replace with your EmailJS public key
};
