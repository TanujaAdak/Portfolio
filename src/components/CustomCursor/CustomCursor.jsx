import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "hover"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Instant dot */}
      <div
        className={styles.dot}
        style={{ left: position.x, top: position.y }}
      />
      {/* Trailing ring */}
      <motion.div
        className={`${styles.ring} ${isHovering ? styles.ringExpanded : ""}`}
        animate={{ left: position.x, top: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 18, mass: 0.5 }}
      />
    </>
  );
};

export default CustomCursor;
