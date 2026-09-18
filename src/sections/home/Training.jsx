import { motion } from "motion/react";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdzs_ZXR99VMpA_wiKcfJgNSKY-D-xAeFQt47tsxuSpJLK0vg/viewform?usp=publish-editor";

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

      {/* =========================
          TRAINING HEADER
      ========================= */}

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


      {/* =========================
          TRAINING INTRO
      ========================= */}

      <motion.div
        className="training-intro"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="training-intro-content">

          <p>
            PRACTICAL TRAINING FOR
            <strong>REAL INDUSTRIAL APPLICATIONS.</strong>
          </p>

          <span>
            PLC • HMI • SCADA • VFD • MES • IIoT • INDUSTRY 4.0
          </span>

        </div>


        {/* =========================
            TRAINING REGISTRATION
        ========================= */}

        <motion.div
          className="training-registration"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >

            <div>

              <small>
                START YOUR AUTOMATION CAREER
              </small>

              <span>
                TRAINING REGISTRATION
              </span>

            </div>


            <strong>
              ↗
            </strong>

          </a>

        </motion.div>

      </motion.div>


      {/* =========================
          TRAINING PROGRAMS
      ========================= */}

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

            {/* PROGRAM TOP */}

            <div className="training-program-top">

              <span>
                {program.number}
              </span>

              <strong>
                {program.duration}
              </strong>

            </div>


            {/* PROGRAM CONTENT */}

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


            {/* PROGRAM BOTTOM */}

            <div className="training-program-bottom">

              <span>
                PROJECT-BASED LEARNING
              </span>

              <span className="training-arrow">
                →
              </span>

            </div>

          </motion.article>

        ))}

      </div>


      {/* =========================
          PROJECT FOCUS
      ========================= */}

      <motion.div
        className="training-projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="training-projects-title">

          <span>
            PROJECT FOCUS
          </span>

          <h3>
            LEARN BY
            <strong>BUILDING.</strong>
          </h3>

        </div>


        <div className="training-project-list">

          <span>TANK LEVEL CONTROL</span>

          <span>CONVEYOR AUTOMATION</span>

          <span>MOTOR & VFD CONTROL</span>

          <span>PROCESS AUTOMATION</span>

          <span>PLC-HMI INTEGRATION</span>

          <span>SCADA MONITORING</span>

          <span>IIoT DASHBOARD</span>

          <span>ENERGY MONITORING</span>

        </div>

      </motion.div>

    </section>
  );
}

export default Training;