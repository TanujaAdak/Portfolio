import { useScroll, motion } from "framer-motion";
import styles from "./ScrollProgressBar.module.css";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles.bar}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;
