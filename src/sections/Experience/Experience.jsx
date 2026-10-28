import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, GraduationCap } from "lucide-react";
import { experiences, education } from "../../constants/data";
import { fadeInUp, staggerContainer, lineVariant } from "../../animations/variants";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Track Record</span>
          <h2 className={styles.sectionTitle}>
            Experience & <span className={styles.accentText}>Education</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Hands-on machine learning traineeship and computer science engineering foundation.
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* Work Experience */}
          <div className={styles.timelineBlock}>
            <motion.h3
              className={styles.blockTitle}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Briefcase size={16} className={styles.blockIcon} />
              Work Experience
            </motion.h3>

            <motion.div
              className={styles.timeline}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  className={styles.timelineItem}
                  variants={fadeInUp}
                >
                  <div className={styles.timelineLeft}>
                    <div className={styles.dot} />
                    {i < experiences.length - 1 && (
                      <motion.div
                        className={styles.line}
                        variants={lineVariant}
                      />
                    )}
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.itemHeader}>
                      <div>
                        <h4 className={styles.role}>{exp.role}</h4>
                        <div className={styles.companyRow}>
                          <span className={styles.company}>{exp.company}</span>
                          <span className={styles.typeBadge}>{exp.type}</span>
                        </div>
                      </div>
                      <div className={styles.metaRight}>
                        <span className={styles.metaItem}>
                          <Calendar size={11} />
                          {exp.duration}
                        </span>
                        <span className={styles.metaItem}>
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className={styles.descList}>
                      {exp.description.map((point, j) => (
                        <li key={j} className={styles.descItem}>
                          <span className={styles.bullet} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.tags}>
                      {exp.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div className={styles.timelineBlock}>
            <motion.h3
              className={styles.blockTitle}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap size={16} className={styles.blockIcon} />
              Education
            </motion.h3>

            <motion.div
              className={styles.timeline}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  className={styles.timelineItem}
                  variants={fadeInUp}
                >
                  <div className={styles.timelineLeft}>
                    <div className={styles.dot} />
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.itemHeader}>
                      <div>
                        <h4 className={styles.role}>{edu.degree}</h4>
                        <span className={styles.company}>{edu.institution}</span>
                      </div>
                      <div className={styles.metaRight}>
                        <span className={styles.metaItem}>
                          <Calendar size={11} /> {edu.duration}
                        </span>
                        <span className={styles.cgpaBadge}>
                          CGPA: <strong>{edu.cgpa}</strong>
                        </span>
                      </div>
                    </div>
                    <p className={styles.eduDesc}>
                      Focused on algorithms, data structures, machine learning, and full-stack software development.
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
