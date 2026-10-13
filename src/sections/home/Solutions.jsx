import { motion } from "motion/react";

function Solutions() {
  const solutions = [
    {
      number: "01",
      title: "PLC AUTOMATION",
      description:
        "Reliable machine sequencing, process control and PLC programming built around your production requirements.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",
      alt: "Industrial engineer working beside automation equipment",
    },
    {
      number: "02",
      title: "HMI SYSTEMS",
      description:
        "Clear operator experiences that bring machine states, alarms and process context into view.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=85",
      alt: "Engineer monitoring a digital industrial control system",
    },
    {
      number: "03",
      title: "SCADA",
      description:
        "Plant-wide visualization, alarms and data that help teams act with confidence.",
      image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=900&q=85",
      alt: "Manufacturing facility with connected equipment",
    },
    {
      number: "04",
      title: "VFD & DRIVES",
      description:
        "Smarter motor control for dependable operation, process flexibility and energy awareness.",
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=85",
      alt: "Modern automated production machinery",
    },
    {
      number: "05",
      title: "MES",
      description:
        "Connect production activity with quality, traceability and manufacturing performance.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85",
      alt: "Technician working with connected manufacturing equipment",
    },
    {
      number: "06",
      title: "IIoT / INDUSTRY 4.0",
      description:
        "Bring machine data to the edge and build a connected foundation for Industry 4.0.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",
      alt: "Industrial automation sensors and equipment",
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
            CONNECTED INDUSTRIAL AUTOMATION
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
            Explore key
            <span>capabilities.</span>
          </motion.h2>

        </div>

      </div>

      <p className="section-intro">From machine control to connected production data, SPKBS brings the essential building blocks of a smarter plant together.</p>

      {/* SOLUTIONS GRID */}
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

            <div className="solution-image"><img src={solution.image} alt={solution.alt} loading="lazy"/><span>{solution.number}</span><span className="image-arrow">↗</span></div>
            <div className="solution-copy"><div className="solution-title">{solution.title}</div><div className="solution-description">{solution.description}</div><a href="#contact" aria-label={`Discuss ${solution.title}`}>Discuss this capability <span>→</span></a></div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Solutions;
