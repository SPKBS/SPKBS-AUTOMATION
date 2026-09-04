import { motion } from "motion/react";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-header">

        <motion.div
          className="contact-number"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          07
        </motion.div>

        <div className="contact-heading">

          <motion.p
            className="contact-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            CONTACT SPKBS AUTOMATION
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
            LET'S BUILD
            <span>SMARTER</span>
            SYSTEMS.
          </motion.h2>

        </div>

      </div>


      <div className="contact-main">

        <motion.div
          className="contact-message"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            HAVE AN AUTOMATION PROJECT,
            TRAINING REQUIREMENT OR
            INDUSTRIAL CHALLENGE?
          </p>

          <strong>
            TALK TO SPKBS AUTOMATION.
          </strong>
        </motion.div>


        <motion.div
          className="contact-details"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >

          <div className="contact-detail">
            <span>EMAIL</span>

            <a href="mailto:info@kbsautomation.com">
              info@kbsautomation.com
            </a>
          </div>


          <div className="contact-detail">
            <span>PHONE</span>

            <a href="tel:+919344328959">
              +91 9344328959
            </a>
          </div>


          <div className="contact-detail">
            <span>LOCATION</span>

            <p>
              CHENGALPATTU, TAMILNADU, INDIA
            </p>
          </div>

        </motion.div>

      </div>


      <motion.div
        className="contact-cta"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        <a href="mailto:">
          START A CONVERSATION
          <span>↗</span>
        </a>

      </motion.div>


      <footer className="site-footer">

        <div className="footer-brand">
          <img
            src="/images/spkbs-logo.png"
            alt="SPKBS Automation"
          />

          <p>
            DRIVE SMARTER • BUILD BETTER
          </p>
        </div>


        <div className="footer-right">
          <span>
            INDUSTRIAL AUTOMATION
          </span>

          <span>
            © {new Date().getFullYear()} SPKBS AUTOMATION
          </span>
        </div>

      </footer>

    </section>
  );
}

export default Contact;