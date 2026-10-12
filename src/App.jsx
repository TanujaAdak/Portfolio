import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader/Preloader";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Publications from "./sections/Publications/Publications";
import Contact from "./sections/Contact/Contact";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <ScrollProgressBar />

      <AnimatePresence mode="wait">
        {loading && <Preloader isLoading={loading} key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <div className="section-divider" />
            <Projects />
            <div className="section-divider" />
            <Experience />
            <div className="section-divider" />
            <Skills />
            <div className="section-divider" />
            <Publications />
            <div className="section-divider" />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}

export default App;
