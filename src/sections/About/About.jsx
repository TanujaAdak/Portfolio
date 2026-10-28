import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Activity, Code, Award, Sparkles } from "lucide-react";
import { personalInfo, education } from "../../constants/data";
import { fadeInUp, staggerContainer } from "../../animations/variants";
import styles from "./About.module.css";

const About = () => {
  const currentEdu = education[0];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Background & Philosophy</span>
          <h2 className={styles.sectionTitle}>
            About <span className={styles.accentText}>Me</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Bridging clinical data science, machine learning algorithms, and production full-stack systems.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className={styles.bentoGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Main Story Card (Wide) */}
          <motion.div className={styles.mainCard} variants={fadeInUp}>
            <div className={styles.cardHeader}>
              <span className={styles.cardBadge}>
                <Sparkles size={12} />
                Engineering Profile
              </span>
              <span className={styles.cardMono}>BIO // OVERVIEW</span>
            </div>

            <h3 className={styles.storyHeading}>
              Architecting intelligent AI pipelines and scalable web applications from Raipur, India.
            </h3>

            <p className={styles.bioText}>{personalInfo.bio}</p>

            <div className={styles.metaRow}>
              <div className={styles.metaPill}>
                <Briefcase size={14} className={styles.pillIcon} />
                <span>{personalInfo.title}</span>
              </div>
              <div className={styles.metaPill}>
                <MapPin size={14} className={styles.pillIcon} />
                <span>{personalInfo.location}</span>
              </div>
              {currentEdu && (
                <div className={styles.metaPill}>
                  <GraduationCap size={14} className={styles.pillIcon} />
                  <span>{currentEdu.degree} (CGPA: {currentEdu.cgpa})</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Research & Signal Processing Card */}
          <motion.div className={styles.featureCard} variants={fadeInUp}>
            <div className={styles.featureIconWrapper}>
              <Activity size={20} className={styles.featureIcon} />
            </div>
            <span className={styles.featureTag}>RESEARCH & ML</span>
            <h4 className={styles.featureTitle}>Biomedical DSP & Classification</h4>
            <p className={styles.featureDesc}>
              Published IEEE preprint researcher in PPG signal processing, achieving 95% clinical classification accuracy using Butterworth DSP filters and Random Forest models.
            </p>
            <div className={styles.featureFooter}>
              <span className={styles.footerHighlight}>95% Accuracy Milestone</span>
            </div>
          </motion.div>

          {/* Full-Stack Architecture Card */}
          <motion.div className={styles.featureCard} variants={fadeInUp}>
            <div className={styles.featureIconWrapper}>
              <Code size={20} className={styles.featureIcon} />
            </div>
            <span className={styles.featureTag}>FULL-STACK CRAFT</span>
            <h4 className={styles.featureTitle}>Cross-Platform & Web Systems</h4>
            <p className={styles.featureDesc}>
              Building reactive interfaces and resilient backends with React, React Native, Node.js, Express, PostgreSQL, Groq Vision OCR, and Web Audio API.
            </p>
            <div className={styles.featureFooter}>
              <span className={styles.footerHighlight}>MERN + Native Mobile</span>
            </div>
          </motion.div>

          {/* Training & Credentials Card */}
          <motion.div className={styles.featureCard} variants={fadeInUp}>
            <div className={styles.featureIconWrapper}>
              <Award size={20} className={styles.featureIcon} />
            </div>
            <span className={styles.featureTag}>ACCREDITATIONS</span>
            <h4 className={styles.featureTitle}>IIIT Naya Raipur & Industry Certs</h4>
            <p className={styles.featureDesc}>
              Formal ML/DL traineeship at IIIT Naya Raipur, Infosys Springboard AI/ML certified, and IDEA-FIESTA Hackathon finalist.
            </p>
            <div className={styles.featureFooter}>
              <span className={styles.footerHighlight}>Verified Credentials</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
