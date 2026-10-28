import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, ExternalLink, Sparkles, BookOpen, Award, Code, MapPin, Activity } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../../components/Icons";
import { personalInfo } from "../../constants/data";
import MagneticButton from "../../components/MagneticButton/MagneticButton";
import styles from "./Hero.module.css";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);

  // Factual metrics with Peak Accuracy removed per request
  const metrics = [
    {
      value: "3+",
      label: "Key Projects",
      accent: "#A6D957",
    },
    {
      value: "1",
      label: "IEEE Preprint",
      accent: "#38BDF8",
    },
    {
      value: "4",
      label: "Certifications",
      accent: "#F59E0B",
    },
  ];

  const coreStack = [
    "Python",
    "React",
    "React Native",
    "TensorFlow",
    "scikit-learn",
    "Node.js",
    "PostgreSQL",
    "FastAPI",
  ];

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      {/* Ambient background glow & fine grid */}
      <div className={styles.ambientAura} />
      <div className={styles.gridOverlay} />

      <motion.div className={styles.container} style={{ y, opacity }}>
        {/* Left Column: Narrative & Primary CTAs */}
        <div className={styles.heroContent}>
          {/* Status Badge */}
          <motion.div
            className={styles.statusBadge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <span className={styles.pulseDot} />
            <Sparkles size={11} className={styles.badgeSparkle} />
            <span>Available for full-time & research opportunities</span>
          </motion.div>

          {/* Headline Lockup */}
          <div className={styles.headlineGroup}>
            <motion.h1
              className={styles.headline}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <span className={styles.greeting}>Hi, I'm </span>
              <span className={styles.nameAccent}>Tanuja</span>{" "}
              <span className={styles.namePrimary}>Adak</span>
            </motion.h1>

            <motion.p
              className={styles.roleTitle}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35 }}
            >
              Machine Learning Engineer & Full-Stack Developer
            </motion.p>
          </div>

          {/* Narrative Bio */}
          <motion.p
            className={styles.narrative}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            Recent B.Tech CSE graduate specializing in Machine Learning and Full-Stack development, backed by published IEEE research. Building intelligent systems, data pipelines, and production web applications.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            className={styles.actionsRow}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <MagneticButton
              variant="primary"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ExternalLink size={15} />
              View Projects
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              href={`mailto:${personalInfo.email}`}
            >
              <Mail size={15} />
              Get In Touch
            </MagneticButton>
          </motion.div>

          {/* Social Links & Location Bar */}
          <motion.div
            className={styles.socialBar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.socialLink}
              aria-label="Send email"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            <div className={styles.dividerDot} />
            <div className={styles.locationTag}>
              <MapPin size={13} />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Animated Engineering Highlights & Metrics Card */}
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className={styles.cardFloatingWrapper}>
            {/* Ambient breathing backglow */}
            <div className={styles.cardBackglow} />

            <div className={styles.profileCard}>
              {/* Top scanning accent laser beam */}
              <div className={styles.scanBeam} />

              {/* Header with Avatar & Status */}
              <div className={styles.cardHeader}>
                <div className={styles.cardUser}>
                  <div className={styles.avatarBadge}>
                    <span>TA</span>
                  </div>
                  <div className={styles.userInfo}>
                    <span className={styles.userName}>Tanuja Adak</span>
                    <span className={styles.userRole}>ML & Full-Stack Engineer</span>
                  </div>
                </div>
                <div className={styles.statusPill}>
                  <span className={styles.onlineDot}>
                    <span className={styles.pingRing} />
                  </span>
                  <span>Open for Roles</span>
                  {/* Subtle live wave equalizer bars */}
                  <span className={styles.liveEqualizer} aria-hidden="true">
                    <span className={styles.eqBar} style={{ animationDelay: "0ms" }} />
                    <span className={styles.eqBar} style={{ animationDelay: "220ms" }} />
                    <span className={styles.eqBar} style={{ animationDelay: "440ms" }} />
                  </span>
                </div>
              </div>

              {/* Live telemetry activity ticker */}
              <div className={styles.telemetryStrip}>
                <div className={styles.telemetryTag}>
                  <Activity size={12} className={styles.telemetryPulse} />
                  <span>ACTIVE PIPELINE</span>
                </div>
                <div className={styles.telemetryDivider} />
                <span className={styles.telemetryText}>Signal DSP • Groq Vision • Full-Stack</span>
              </div>

              {/* Career Highlights */}
              <div className={styles.highlightList}>
                <a
                  href="https://github.com/Rajkamal08/PPG-Signal-Quality-Assessment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.highlightItem}
                  title="View PPG Signal Quality Assessment on GitHub"
                >
                  <div className={styles.highlightIcon}>
                    <BookOpen size={16} />
                  </div>
                  <div className={styles.highlightText}>
                    <span className={styles.highlightTitle}>Published IEEE Preprint</span>
                    <span className={styles.highlightSub}>TechRxiv • Biomedical Signal Processing</span>
                  </div>
                  <span className={styles.highlightBadge}>Verified</span>
                </a>

                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>
                    <Award size={16} />
                  </div>
                  <div className={styles.highlightText}>
                    <span className={styles.highlightTitle}>ML & Deep Learning Trainee</span>
                    <span className={styles.highlightSub}>IIIT Naya Raipur • Feature Extraction & Mobile</span>
                  </div>
                  <span className={styles.highlightBadge}>Research</span>
                </div>

                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>
                    <Code size={16} />
                  </div>
                  <div className={styles.highlightText}>
                    <span className={styles.highlightTitle}>B.Tech Computer Science</span>
                    <span className={styles.highlightSub}>Krishna Vikas Institute of Tech (CGPA 7.5)</span>
                  </div>
                  <span className={styles.highlightBadge}>Degree</span>
                </div>
              </div>

              {/* Core Tech Stack Badges */}
              <div className={styles.stackRow}>
                {coreStack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* 3 Metrics Deck (Peak Accuracy Removed) */}
              <div className={styles.metricDeck}>
                {metrics.map((item) => (
                  <div key={item.label} className={styles.metricItem}>
                    <span className={styles.metricNum} style={{ color: item.accent }}>
                      {item.value}
                    </span>
                    <span className={styles.metricTxt}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Cue */}
      <motion.button
        type="button"
        className={styles.scrollCue}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <span className={styles.scrollCueText}>Explore My Work</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} className={styles.scrollArrow} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
