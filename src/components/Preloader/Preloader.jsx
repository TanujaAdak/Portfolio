import { motion, AnimatePresence } from "framer-motion";
import { preloaderVariants, preloaderBarVariants } from "../../animations/variants";
import styles from "./Preloader.module.css";

const Preloader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.preloader}
          variants={preloaderVariants}
          initial="initial"
          exit="exit"
        >
          <div className={styles.content}>
            <motion.div
              className={styles.logoWrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className={styles.logoText}>TA</span>
              <span className={styles.logoTagline}>Loading Portfolio...</span>
            </motion.div>
            <div className={styles.barTrack}>
              <motion.div
                className={styles.bar}
                variants={preloaderBarVariants}
                initial="initial"
                animate="animate"
              />
            </div>
          </div>
          <div className={styles.grid}>
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className={styles.gridCell}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.06, 0] }}
                transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
