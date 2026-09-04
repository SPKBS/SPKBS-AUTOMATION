import { motion } from "motion/react";

function WhySpkbs() {
  const reasons = [
    {
      number: "01",
      title: "INDUSTRIAL EXPERIENCE",
      text: "Practical knowledge built around real industrial automation requirements and applications.",
    },
    {
      number: "02",
      title: "PRACTICAL APPROACH",
      text: "Learning and engineering focused on hands-on implementation rather than only theoretical concepts.",
    },
    {
      number: "03",
      title: "PROJECT BASED",
      text: "Real-world automation projects that connect programming, control systems and industrial applications.",
    },
    {
      number: "04",
      title: "INDUSTRY 4.0 READY",
      text: "Modern automation solutions combining PLC, HMI, SCADA, MES and IIoT technologies.",
    },
  ];

  return (
    <section id="why-spkbs" className="why-spkbs-section">

      {/* HEADER */}

      <div className="why-spkbs-header">

        <motion.div
          className="why-spkbs-number"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          05
        </motion.div>

        <div>

          <motion.p
            className="why-spkbs-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            WHY SPKBS AUTOMATION
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            ENGINEERED
            <span>FOR</span>
            REAL RESULTS
          </motion.h2>

        </div>

      </div>


      {/* MAIN STATEMENT */}

      <motion.div
        className="why-spkbs-statement"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <p>
          WE CONNECT
          <strong>INDUSTRIAL KNOWLEDGE</strong>
          WITH
          <strong>MODERN AUTOMATION.</strong>
        </p>
      </motion.div>


      {/* REASONS */}

      <div className="why-spkbs-list">

        {reasons.map((reason, index) => (
          <motion.div
            className="why-spkbs-item"
            key={reason.number}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <div className="why-item-number">
              {reason.number}
            </div>

            <div className="why-item-title">
              {reason.title}
            </div>

            <div className="why-item-text">
              {reason.text}
            </div>

            <div className="why-item-arrow">
              →
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default WhySpkbs;