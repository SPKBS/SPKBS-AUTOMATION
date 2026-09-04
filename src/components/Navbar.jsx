import { motion } from "motion/react";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="navbar"
    >
      <div className="navbar-container">

        {/* SPKBS LOGO */}
        <motion.a
          href="#home"
          className="brand-logo"
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <img
            src="/images/spkbs-logo.png"
            alt="SPKBS Automation"
          />
        </motion.a>

        {/* NAVIGATION */}
        <nav className="nav-links">

          <a href="#home">Home</a>

          <a href="#solutions">Solutions</a>

          <a href="#industries">Industries</a>

          <a href="#partners">Partners</a>

          <a href="#training">Training</a>

          <a href="#contact">Contact</a>

        </nav>

      </div>
    </motion.header>
  );
}

export default Navbar;