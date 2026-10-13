import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      const nextScrolled = currentScrollY > 20;
      setIsScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));

      const delta = currentScrollY - lastScrollY;
      if (Math.abs(delta) > 10) {
        const nextHidden = delta > 0 && currentScrollY > 80;
        setIsHidden((prev) => (prev !== nextHidden ? nextHidden : prev));
        lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled, isHidden };
}

