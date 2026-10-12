import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { GithubIcon } from "../../components/Icons";
import Tilt from "react-parallax-tilt";
import { projects } from "../../constants/data";
import { staggerContainer, fadeInUp } from "../../animations/variants";
import styles from "./Projects.module.css";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div variants={fadeInUp}>
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareEnable={true}
        glareMaxOpacity={0.08}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="20px"
        transitionSpeed={600}
        className={styles.tiltWrapper}
      >
        <div className={styles.card}>
          {/* Animated background orb */}
          <motion.div
            className={styles.colorOrb}
            style={{ background: `radial-gradient(circle, ${project.orbColor}40 0%, transparent 70%)` }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
          />

          {/* Card header with visual mockup */}
          <div className={styles.cardVisual} style={{ background: project.gradient }}>
            <div className={styles.mockupContainer}>
              <div className={styles.mockupCard}>
                <div className={styles.mockupDots}>
                  <span style={{ background: "#E11D48" }} />
                  <span style={{ background: "#F59E0B" }} />
                  <span style={{ background: "#22C55E" }} />
                </div>
                <div className={styles.mockupCode}>
                  <span style={{ color: project.color }}>{`// ${project.title}`}</span>
                  <span style={{ color: "#888" }}>{"const result = await"}</span>
                  <span style={{ color: "#e5e5e5" }}>{"  ai.predict(data)"}</span>
                  <span style={{ color: project.color }}>{"// ✓ " + (project.duration.split("–")[1]?.trim() || "Done")}</span>
                </div>
              </div>
            </div>
            {/* Gradient fade mask */}
            <div className={styles.visualFade} />
          </div>

          {/* Shimmer on hover */}
          <div className={styles.shimmer} />

          {/* Content */}
          <div className={styles.cardBody}>
            <div className={styles.cardMeta}>
              <span className={styles.duration}>
                <Calendar size={11} />
                {project.duration}
              </span>
              {project.featured && (
                <span className={styles.featuredBadge} style={{ color: project.color, borderColor: `${project.color}40` }}>
                  Featured
                </span>
              )}
            </div>

            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDesc}>{project.description}</p>
            <p className={styles.cardLongDesc}>{project.longDescription}</p>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag} style={{ color: project.color, borderColor: `${project.color}30`, background: `${project.color}08` }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.cardLinks}>
              <a href={project.github} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                <GithubIcon size={15} />
                Code
              </a>
              <a href={project.live} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={15} />
                Demo
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionLabel}>Portfolio</span>
          <h2 className={styles.sectionTitle}>Selected <span>Projects</span></h2>
          <p className={styles.sectionSubtitle}>
            End-to-end systems spanning mobile apps, NLP pipelines, and biomedical signal processing.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
