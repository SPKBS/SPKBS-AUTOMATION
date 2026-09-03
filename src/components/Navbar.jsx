import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navbar() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logo appears after scrolling 120px
      if (window.scrollY > 120) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="navbar"
    >
      <div className="navbar-container">

        {/* NAVBAR LOGO */}
        <div className="navbar-logo-space">

          <AnimatePresence>

            {showLogo && (
              <motion.a
                href="/"
                className="brand-logo"

                initial={{
                  opacity: 0,
                  scale: 0.7,
                  x: -30,
                }}

                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}

                exit={{
                  opacity: 0,
                  scale: 0.7,
                  x: -30,
                }}

                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img
                  src="/images/spkbs-logo.png"
                  alt="SPKBS Automation"
                />
              </motion.a>
            )}

          </AnimatePresence>

        </div>


        {/* NAVIGATION */}
        <nav className="nav-links">

          <a href="/">Home</a>

          <a href="/automation">
            Automation
          </a>

          <a href="/industry-4">
            Industry 4.0
          </a>

          <a href="/training">
            Training
          </a>

          <a href="/projects">
            Projects
          </a>

          <a href="/about">
            About
          </a>

        </nav>

      </div>
    </motion.header>
  );
}

export default Navbar;