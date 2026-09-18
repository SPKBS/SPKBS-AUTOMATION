import { motion } from "motion/react";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdzs_ZXR99VMpA_wiKcfJgNSKY-D-xAeFQt47tsxuSpJLK0vg/viewform?usp=publish-editor";

function LogoHero() {
  return (
    <section id="home" className="logo-hero">

      {/* TRAINING REGISTRATION BUTTON */}
      <motion.a
        href={REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="home-registration-button"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span>TRAINING REGISTRATION</span>
        <strong>↗</strong>
      </motion.a>


      <div className="home-hero-content">

        <motion.p
          className="home-hero-label"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          SPKBS AUTOMATION
        </motion.p>


        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          INDUSTRIAL
          <span>AUTOMATION</span>
        </motion.h1>


        <motion.div
          className="home-hero-line"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        />


        <motion.div
          className="home-hero-tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <strong>DRIVE SMARTER</strong>

          <span>•</span>

          <strong>BUILD BETTER</strong>
        </motion.div>


        <motion.p
          className="home-hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          INDUSTRIAL AUTOMATION • DIGITALIZATION • INDUSTRY 4.0
        </motion.p>


        <motion.div
          className="home-hero-bottom"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

      </div>


      <motion.div
        className="home-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 0.8,
        }}
      >
        <span>SCROLL TO EXPLORE</span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          ↓
        </motion.div>
      </motion.div>

    </section>
  );
}

export default LogoHero;