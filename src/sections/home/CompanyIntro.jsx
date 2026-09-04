import { motion } from "motion/react";

function CompanyIntro() {
  return (
    <section className="company-intro-section">

      <div className="company-intro-container">

        {/* SECTION NUMBER */}
        <motion.div
          className="company-intro-number"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          01
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="company-intro-content">

          <motion.p
            className="company-intro-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            SPKBS AUTOMATION
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
            ENGINEERING
            <span>THE FUTURE</span>
            OF AUTOMATION
          </motion.h2>

          <motion.div
            className="company-intro-line"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          <motion.p
            className="company-intro-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            SPKBS Automation delivers industrial automation,
            engineering solutions and Industry 4.0 technologies
            designed to improve productivity, connectivity and
            operational efficiency.
          </motion.p>

          <motion.p
            className="company-intro-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
          >
            With practical industrial experience and a
            project-oriented approach, we connect automation
            technology with real-world industrial requirements.
          </motion.p>

          {/* STATS */}
          <motion.div
            className="company-intro-stats"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.7,
            }}
          >

            <div className="company-stat">
              <strong>14+</strong>
              <span>YEARS EXPERIENCE</span>
            </div>

            <div className="company-stat">
              <strong>PLC</strong>
              <span>AUTOMATION</span>
            </div>

            <div className="company-stat">
              <strong>IIoT</strong>
              <span>INDUSTRY 4.0</span>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default CompanyIntro;