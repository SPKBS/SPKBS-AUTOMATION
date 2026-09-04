import { motion } from "motion/react";

function Training() {
  const programs = [
    {
      number: "01",
      duration: "45 DAYS",
      title: "DIGITAL AUTOMATION ENGINEER",
      description:
        "Practical industrial automation training covering PLC, HMI, SCADA, VFD, industrial communication and real-world automation applications.",
    },
    {
      number: "02",
      duration: "60 DAYS",
      title: "SMART FACTORY ENGINEER",
      description:
        "Advanced Industry 4.0 training focused on connected automation, SCADA, MES, IIoT, industrial data and smart factory technologies.",
    },
  ];

  return (
    <section id="training" className="training-section">

      <div className="training-header">

        <motion.div
          className="training-number"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          06
        </motion.div>

        <div className="training-heading">

          <motion.p
            className="training-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            INDUSTRY 4.0 TRAINING
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
            BUILD
            <span>INDUSTRIAL</span>
            EXPERTS
          </motion.h2>

        </div>

      </div>


      <motion.div
        className="training-intro"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          PRACTICAL TRAINING FOR
          <strong>REAL INDUSTRIAL APPLICATIONS.</strong>
        </p>

        <span>
          PLC • HMI • SCADA • VFD • MES • IIoT • INDUSTRY 4.0
        </span>
      </motion.div>


      <div className="training-programs">

        {programs.map((program, index) => (
          <motion.article
            className="training-program"
            key={program.number}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <div className="training-program-top">
              <span>{program.number}</span>

              <strong>{program.duration}</strong>
            </div>


            <div className="training-program-content">

              <motion.h3
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15 + 0.2,
                }}
              >
                {program.title}
              </motion.h3>


              <motion.div
                className="training-program-line"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15 + 0.35,
                }}
              />


              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15 + 0.45,
                }}
              >
                {program.description}
              </motion.p>

            </div>


            <div className="training-program-bottom">
              <span>PROJECT-BASED LEARNING</span>

              <span className="training-arrow">→</span>
            </div>

          </motion.article>
        ))}

      </div>


      <motion.div
        className="training-projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >


      </motion.div>

    </section>
  );
}

export default Training;