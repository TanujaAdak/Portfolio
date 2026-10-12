import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { publications, certifications } from "../../constants/data";
import { staggerContainer, fadeInUp } from "../../animations/variants";
import styles from "./Publications.module.css";

const Publications = () => {
  return (
    <section id="publications" className={styles.section}>
      <div className={styles.container}>
        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.block}
        >
          <div className={styles.blockHeader}>
            <span className={styles.sectionLabel}>Research</span>
            <h2 className={styles.sectionTitle}>Publications</h2>
          </div>

          <motion.div
            className={styles.pubGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {publications.map((pub) => (
              <motion.div key={pub.id} className={styles.pubCard} variants={fadeInUp}>
                <div className={styles.pubGlow} />
                <div className={styles.pubTop}>
                  <span className={styles.pubBadge} style={{ color: pub.color, borderColor: `${pub.color}40`, background: `${pub.color}10` }}>
                    <BookOpen size={11} /> {pub.badge}
                  </span>
                  <span className={styles.pubDate}>{pub.date}</span>
                </div>
                <h3 className={styles.pubTitle}>{pub.title}</h3>
                <p className={styles.pubAuthors}>{pub.authors}</p>
                <p className={styles.pubJournal}>{pub.journal}</p>
                <p className={styles.pubAbstract}>{pub.abstract}</p>
                <a href={pub.link} className={styles.pubLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} /> Read Paper
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.block}
        >
          <div className={styles.blockHeader}>
            <span className={styles.sectionLabel}>Achievements</span>
            <h2 className={styles.sectionTitle}>Certifications</h2>
          </div>

          <motion.div
            className={styles.certGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                className={styles.certCard}
                variants={fadeInUp}
                whileHover={{ y: -4, borderColor: `${cert.color}60` }}
                transition={{ duration: 0.25 }}
              >
                <div className={styles.certIcon}>{cert.icon}</div>
                <div className={styles.certContent}>
                  <h4 className={styles.certTitle}>{cert.title}</h4>
                  <div className={styles.certMeta}>
                    <span className={styles.certIssuer} style={{ color: cert.color }}>{cert.issuer}</span>
                    <span className={styles.certDate}>{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
