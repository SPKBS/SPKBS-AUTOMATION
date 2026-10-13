import { motion } from "motion/react";
import PlantScene from "./PlantScene";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdzs_ZXR99VMpA_wiKcfJgNSKY-D-xAeFQt47tsxuSpJLK0vg/viewform?usp=publish-editor";

function LogoHero() {
  return (
    <section id="home" className="logo-hero">
      <div className="hero-grid">
        <div className="home-hero-content">
          <motion.p className="home-hero-label" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
            <span className="eyebrow-mark" /> SPKBS AUTOMATION <span className="hero-location">CHENGALPATTU · INDIA</span>
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08 }}>
            From shop floor<br />to <span>smart factory.</span>
          </motion.h1>
          <motion.p className="hero-lede" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .2 }}>
            We connect machines, controls and data to help manufacturers run smarter, more visible operations—from PLC logic on the line to IIoT insights across the plant.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .3 }}>
            <a className="button-primary" href="#solutions">Explore our solutions <span>↘</span></a>
            <a className="button-text" href="#contact">Talk to an automation expert <span>↗</span></a>
          </motion.div>
          <motion.div className="hero-capabilities" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>
            <span><i className="status-dot" /> PLC CONTROL</span><b />
            <span>SCADA / HMI</span><b />
            <span>INDUSTRIAL IIoT</span>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .18 }}>
          <PlantScene />
          <div className="hero-photo-note"><span>SMART PRODUCTION</span><strong>Every signal has a purpose.</strong></div>
        </motion.div>
      </div>
      <div className="hero-bottomline"><span>CONTROL · CONNECT · OPTIMIZE</span><a href="#company">DISCOVER SPKBS <span>↓</span></a></div>
      <a className="hero-registration-link" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Training registration ↗</a>
    </section>
  );
}

export default LogoHero;
