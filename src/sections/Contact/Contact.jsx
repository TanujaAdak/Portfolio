import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../../components/Icons";
import { personalInfo, emailJSConfig } from "../../constants/data";
import { fadeInLeft, fadeInRight } from "../../animations/variants";
import styles from "./Contact.module.css";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        formRef.current,
        emailJSConfig.publicKey
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  const contactItems = [
    { icon: <Mail size={16} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone size={16} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <MapPin size={16} />, label: "Location", value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className={styles.section}>
      {/* Background orb */}
      <div className={styles.bgOrb} />

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionLabel}>Reach Out</span>
          <h2 className={styles.sectionTitle}>Let's <span>Connect</span></h2>
          <p className={styles.sectionSubtitle}>
            Open to internships, research collaborations, and full-time roles. Let's build something meaningful together.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Left — info */}
          <motion.div
            className={styles.infoCol}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Info</h3>
              <div className={styles.infoList}>
                {contactItems.map(({ icon, label, value, href }) => (
                  <div key={label} className={styles.infoItem}>
                    <div className={styles.infoIcon}>{icon}</div>
                    <div>
                      <div className={styles.infoLabel}>{label}</div>
                      {href ? (
                        <a href={href} className={styles.infoValue}>{value}</a>
                      ) : (
                        <span className={styles.infoValue}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialRow}>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                  <GithubIcon size={18} />
                  GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                  <LinkedinIcon size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className={styles.availableCard}>
              <span className={styles.availDot} />
              <div>
                <div className={styles.availTitle}>Available for Work</div>
                <div className={styles.availSub}>Open to opportunities starting 2026</div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className={styles.formCol}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Collaboration"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Tanuja, I'd love to connect about..."
                  required
                  rows={5}
                  className={styles.textarea}
                />
              </div>

              <motion.button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "sending" ? (
                  <>
                    <div className={styles.spinner} />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={18} />
                    Sent Successfully!
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle size={18} />
                    Error — Try Again
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className={styles.footerText}>
            Crafted with ❤️ by <strong>Tanuja Adak</strong> · B.Tech CSE '26 · Raipur, India
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
