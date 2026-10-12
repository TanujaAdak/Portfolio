import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./MagneticButton.module.css";

const MagneticButton = ({ children, className = "", onClick, href, variant = "primary" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.35;
    const deltaY = (e.clientY - centerY) * 0.35;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      className={`${styles.wrapper} ${styles[variant]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
    >
      <Tag
        className={styles.btn}
        onClick={onClick}
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default MagneticButton;
