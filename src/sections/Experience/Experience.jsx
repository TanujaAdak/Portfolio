import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionLabel}>Career</span>
          <h2 className={styles.sectionTitle}>Experience & <span>Education</span></h2>
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
              <Briefcase size={16} />
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
                    <div className={styles.dot} style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}60` }} />
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
                          <span className={styles.company} style={{ color: exp.color }}>{exp.company}</span>
                          <span className={styles.type}>{exp.type}</span>
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
                          <span className={styles.bullet} style={{ background: exp.color }} />
                          {point}
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
              🎓 Education
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
                    <div className={styles.dot} style={{ borderColor: "#4F46E5", boxShadow: "0 0 12px #4F46E560" }} />
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.itemHeader}>
                      <div>
                        <h4 className={styles.role}>{edu.degree}</h4>
                        <span className={styles.company} style={{ color: "#4F46E5" }}>{edu.institution}</span>
                      </div>
                      <div className={styles.metaRight}>
                        <span className={styles.metaItem}>
                          <Calendar size={11} /> {edu.duration}
                        </span>
                        <span className={styles.cgpa}>
                          CGPA: <strong>{edu.cgpa}</strong>
                        </span>
                      </div>
                    </div>
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
