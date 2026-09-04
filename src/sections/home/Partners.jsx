import { motion } from "motion/react";

function Partners() {
  return (
    <section id="partners" className="partners-section">

      <div className="partners-header">

        <motion.div
          className="partners-number"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          04
        </motion.div>

        <div className="partners-heading">

          <motion.p
            className="partners-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            TECHNOLOGY PARTNER
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            POWERED BY
            <span>INDUSTRIAL</span>
            TECHNOLOGY
          </motion.h2>

        </div>

      </div>


      {/* PARTNER */}

      <motion.div
        className="partner-showcase"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        <div className="partner-number">
          01
        </div>

        <div className="partner-logo-wrap">

          <motion.img
            src="/images/ignition-logo.png"
            alt="Ignition by Inductive Automation"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            whileHover={{
              scale: 1.05,
            }}
          />

        </div>

        <div className="partner-info">

          <motion.h3
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            IGNITION
          </motion.h3>

          <motion.div
            className="partner-line"
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
          >
            Industrial automation platform for SCADA, HMI,
            IIoT and MES applications, enabling connected
            and scalable industrial operations.
          </motion.p>

        </div>

        <div className="partner-arrow">
          ↗
        </div>

      </motion.div>

    </section>
  );
}

export default Partners;