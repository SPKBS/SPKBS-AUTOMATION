import { motion } from "motion/react";

function Solutions() {
  const solutions = [
    {
      number: "01",
      title: "PLC AUTOMATION",
      description:
        "PLC-based control systems for reliable machine and process automation.",
    },
    {
      number: "02",
      title: "HMI SYSTEMS",
      description:
        "Operator interfaces designed for clear machine control and process visualization.",
    },
    {
      number: "03",
      title: "SCADA",
      description:
        "Supervisory monitoring and data visualization for industrial operations.",
    },
    {
      number: "04",
      title: "VFD & DRIVES",
      description:
        "Motor control and variable-speed solutions for efficient industrial applications.",
    },
    {
      number: "05",
      title: "MES",
      description:
        "Production information and manufacturing management solutions.",
    },
    {
      number: "06",
      title: "IIoT / INDUSTRY 4.0",
      description:
        "Connected industrial systems that bring machines, data and decision-making together.",
    },
  ];

  return (
    <section id="solutions" className="solutions-section">

      {/* SECTION HEADER */}
      <div className="solutions-header">

        <motion.div
          className="solutions-number"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          02
        </motion.div>

        <div className="solutions-heading">

          <motion.p
            className="solutions-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            WHAT WE DO
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
            INDUSTRIAL
            <span>AUTOMATION</span>
            SOLUTIONS
          </motion.h2>

        </div>

      </div>

      {/* SOLUTIONS LIST */}
      <div className="solutions-list">

        {solutions.map((solution, index) => (
          <motion.div
            className="solution-item"
            key={solution.number}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
            }}
          >

            <div className="solution-number">
              {solution.number}
            </div>

            <div className="solution-title">
              {solution.title}
            </div>

            <div className="solution-description">
              {solution.description}
            </div>

            <div className="solution-arrow">
              →
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Solutions;