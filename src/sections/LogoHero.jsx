import { motion } from "motion/react";

function LogoHero() {
  return (
    <section className="logo-hero">

      {/* LOGO */}
      <motion.div
        className="animated-logo"
        initial={{
          opacity: 0,
          scale: 0.75,
          y: -40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <img
          src="/images/spkbs-logo.png"
          alt="SPKBS Automation"
          className="hero-logo-image"
        />
      </motion.div>

      {/* TEXT BELOW LOGO */}
      <div className="logo-bottom-text">

        {/* INDUSTRIAL AUTOMATION */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          INDUSTRIAL AUTOMATION
        </motion.h2>

        {/* GOLD LINE */}
        <motion.div
          className="logo-line"
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 120,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* TAGLINE */}
        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          DRIVE SMARTER
          <span>•</span>
          BUILD BETTER
        </motion.p>

        {/* BLACK SECTION DIVIDER */}
        <motion.div
          className="black-section-line"
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: "100%",
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        <div className="hero-empty-space"></div>

      </div>

    </section>
  );
}

export default LogoHero;