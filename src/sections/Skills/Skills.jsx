import { motion } from "framer-motion";
import { skills } from "../../constants/data";
import { staggerContainer, tagVariant } from "../../animations/variants";
import styles from "./Skills.module.css";

const accentColors = {
  Languages: "#4F46E5",
  Frontend: "#22C55E",
  Backend: "#F59E0B",
  "ML & AI": "#E11D48",
  Libraries: "#8B5CF6",
  Databases: "#06B6D4",
  Tools: "#F97316",
};

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionLabel}>Expertise</span>
          <h2 className={styles.sectionTitle}>Technical <span>Skills</span></h2>
          <p className={styles.sectionSubtitle}>
            A curated set of technologies I use to build intelligent, scalable systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items], i) => {
            const color = accentColors[category] || "#4F46E5";
            return (
              <motion.div
                key={category}
                className={styles.categoryCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryDot} style={{ background: color, boxShadow: `0 0 10px ${color}80` }} />
                  <h3 className={styles.categoryName} style={{ color }}>
                    {category}
                  </h3>
                </div>

                <motion.div
                  className={styles.tagsWrapper}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      className={styles.skillTag}
                      variants={tagVariant}
                      whileHover={{
                        scale: 1.05,
                        color,
                        borderColor: `${color}60`,
                        background: `${color}0d`,
                      }}
                      style={{ borderColor: `${color}20` }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
