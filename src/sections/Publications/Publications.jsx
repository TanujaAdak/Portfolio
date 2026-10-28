import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award } from "lucide-react";
import { publications, certifications } from "../../constants/data";
import { staggerContainer, fadeInUp } from "../../animations/variants";
import styles from "./Publications.module.css";

const Publications = () => {
  return (
    <section id="publications" className={styles.section}>
      <div className={styles.container}>
        {/* Research Publication Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.block}
        >
          <div className={styles.blockHeader}>
            <span className={styles.sectionLabel}>Scholarly Contributions</span>
            <h2 className={styles.sectionTitle}>
              Research & <span className={styles.accentText}>Publications</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Peer-reviewed and preprint contributions advancing biomedical signal processing.
            </p>
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
                <div className={styles.pubTop}>
                  <span className={styles.pubBadge}>
                    <BookOpen size={12} />
                    {pub.badge}
                  </span>
                  <span className={styles.pubDate}>{pub.date}</span>
                </div>

                <h3 className={styles.pubTitle}>{pub.title}</h3>

                <div className={styles.pubMetaRow}>
                  <span className={styles.pubAuthors}>{pub.authors}</span>
                  <span className={styles.metaDivider}>•</span>
                  <span className={styles.pubJournal}>{pub.journal}</span>
                </div>

                <p className={styles.pubAbstract}>{pub.abstract}</p>

                <div className={styles.pubActionRow}>
                  {pub.link && pub.link !== "#" ? (
                    <a
                      href={pub.link}
                      className={styles.pubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read research paper: ${pub.title}`}
                    >
                      <ExternalLink size={14} /> Read Paper
                    </a>
                  ) : (
                    <span
                      className={`${styles.pubLink} ${styles.pubLinkDisabled}`}
                      title="Preprint manuscript link pending"
                      aria-disabled="true"
                    >
                      <ExternalLink size={14} /> TechRxiv Preprint Available
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.block}
        >
          <div className={styles.blockHeader}>
            <span className={styles.sectionLabel}>Credentials & Awards</span>
            <h2 className={styles.sectionTitle}>
              Verified <span className={styles.accentText}>Certifications</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Industry, academic, and competitive recognitions in Machine Learning and Web Development.
            </p>
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
              >
                <div className={styles.certIconWrapper}>
                  <Award size={18} className={styles.awardIcon} />
                </div>
                <div className={styles.certContent}>
                  <h4 className={styles.certTitle}>{cert.title}</h4>
                  <div className={styles.certMeta}>
                    <span className={styles.certIssuer}>{cert.issuer}</span>
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
