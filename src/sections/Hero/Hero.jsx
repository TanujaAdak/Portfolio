import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../../components/Icons";
import { personalInfo } from "../../constants/data";
import MagneticButton from "../../components/MagneticButton/MagneticButton";
import { staggerContainer, textReveal, fadeInUp } from "../../animations/variants";
import styles from "./Hero.module.css";

const FloatingOrb = ({ color, size, x, y, delay }) => (
  <motion.div
    className={styles.floatingOrb}
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{ duration: 6 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      {/* Background orbs */}
      <FloatingOrb color="#4F46E5" size="600px" x="-10%" y="-10%" delay={0} />
      <FloatingOrb color="#22C55E" size="400px" x="60%" y="30%" delay={2} />
      <FloatingOrb color="#E11D48" size="300px" x="20%" y="60%" delay={4} />

      {/* Grid overlay */}
      <div className={styles.gridOverlay} />

      <motion.div className={styles.container} style={{ y, opacity }}>
        {/* Status badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={styles.badgeDot} />
          <Sparkles size={12} />
          <span>Available for opportunities</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          className={styles.headlineWrapper}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.lineClip}>
            <motion.h1 className={styles.headline} variants={textReveal}>
              Hi, I'm <span className={styles.gradient}>Tanuja</span>
            </motion.h1>
          </div>
          <div className={styles.lineClip}>
            <motion.h1 className={`${styles.headline} ${styles.outlineText}`} variants={textReveal}>
              Adak.
            </motion.h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          {personalInfo.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <MagneticButton
            variant="primary"
            onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
          >
            <ExternalLink size={16} />
            View Projects
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            href={`mailto:${personalInfo.email}`}
          >
            <Mail size={16} />
            Get In Touch
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          className={styles.socials}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <GithubIcon size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className={styles.socialLink}>
            <Mail size={18} />
          </a>
          <div className={styles.socialLine} />
          <span className={styles.socialLabel}>{personalInfo.location}</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <ArrowDown size={14} color="#555" />
      </motion.div>

      {/* Stats */}
      <motion.div
        className={styles.stats}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        {[
          { value: "3+", label: "Projects" },
          { value: "95%", label: "Best Accuracy" },
          { value: "1", label: "IEEE Preprint" },
          { value: "5+", label: "Certifications" },
        ].map(({ value, label }) => (
          <div key={label} className={styles.stat}>
            <span className={styles.statValue}>{value}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
