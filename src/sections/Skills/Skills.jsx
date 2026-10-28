import { motion } from "framer-motion";
import { Terminal, Layout, Server, Brain, Cpu, Database, Wrench } from "lucide-react";
import { skills } from "../../constants/data";
import { staggerContainer, tagVariant } from "../../animations/variants";
import styles from "./Skills.module.css";

const categoryIcons = {
  Languages: Terminal,
  Frontend: Layout,
  Backend: Server,
  "ML & AI": Brain,
  Libraries: Cpu,
  Databases: Database,
  Tools: Wrench,
};

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Technical Stack</span>
          <h2 className={styles.sectionTitle}>
            Technical <span className={styles.accentText}>Skills</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            A rigorous engineering toolkit spanning data science pipelines, neural architectures, and full-stack web platforms.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items], i) => {
            const Icon = categoryIcons[category] || Terminal;

            return (
              <motion.div
                key={category}
                className={styles.categoryCard}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <div className={styles.categoryHeader}>
                  <div className={styles.iconWrapper}>
                    <Icon size={16} className={styles.icon} />
                  </div>
                  <h3 className={styles.categoryName}>{category}</h3>
                  <span className={styles.countBadge}>{items.length}</span>
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
