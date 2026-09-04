import { motion } from "motion/react";

function Industries() {
  const industries = [
    {
      number: "01",
      title: "ADVANCE MANUFACTURING",
      description:
        "Industrial automation solutions for production systems, machine control, process monitoring and connected manufacturing operations.",
    },
    {
      number: "02",
      title: "AUTOMOTIVE EXCELLENCE",
      description:
        "Automation and control solutions supporting automotive production, assembly, material handling and manufacturing processes.",
    },
  ];

  return (
    <section id="industries" className="industries-section">

      {/* HEADER */}

      <div className="industries-header">

        <motion.div
          className="industries-number"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          03
        </motion.div>

        <div className="industries-heading">

          <motion.p
            className="industries-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            INDUSTRIES WE SERVE
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
            BUILT FOR
            <span>INDUSTRY</span>
            PERFORMANCE
          </motion.h2>

        </div>

      </div>


      {/* INDUSTRIES */}

      <div className="industries-grid">

        {industries.map((industry, index) => (
          <motion.article
            className="industry-card"
            key={industry.number}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <div className="industry-top">

              <span className="industry-number">
                {industry.number}
              </span>

              <span className="industry-arrow">
                ↗
              </span>

            </div>


            <div className="industry-content">

              <motion.h3
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15 + 0.2,
                }}
              >
                {industry.title}
              </motion.h3>

              <motion.div
                className="industry-line"
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
                {industry.description}
              </motion.p>

            </div>


            <div className="industry-bottom">
              <span>EXPLORE INDUSTRY</span>
            </div>

          </motion.article>
        ))}

      </div>

    </section>
  );
}

export default Industries;