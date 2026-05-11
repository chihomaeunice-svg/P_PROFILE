import { useState } from 'react'
import useInView from '../../hooks/useInView'
import styles from './Contact.module.css'

const sectors = [
  'Real Estate Opportunities',
  'Investment Networking',
  'International Trade',
  'Project Facilitation',
  'Corporate Connections',
  'General Inquiry',
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', org: '', email: '', sector: '', message: '',
  })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactBg} />
      <div className="container">
        <div className={`${styles.layout} ${inView ? styles.visible : ''}`} ref={ref}>

          {/* Left */}
          <div className={styles.left}>
            <div className="section-label">Private Inquiry</div>
            <h2 className="section-heading">
              Begin the<br />Conversation
            </h2>
            <p className={styles.intro}>
              If you've arrived here through the right channels, you already understand the nature of this work. Reach out with clarity about your objectives and we'll determine if there is alignment.
            </p>
            <div className={styles.meta}>
              {[
                { label: 'Location', val: 'East Africa · International' },
                { label: 'Response', val: 'Within 48 hours' },
                { label: 'Direct Line', val: 'Available upon qualification' },
              ].map(m => (
                <div key={m.label} className={styles.metaItem}>
                  <span className={styles.metaLabel}>{m.label}</span>
                  <span className={styles.metaVal}>{m.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className={styles.right}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>Inquiry Received</h3>
                <p>Your message has been delivered securely. We will be in touch within 48 hours.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <Field label="Full Name" name="name" type="text"
                    placeholder="Your name" value={form.name} onChange={handleChange} required />
                  <Field label="Organization" name="org" type="text"
                    placeholder="Company or institution" value={form.org} onChange={handleChange} />
                </div>
                <div className={styles.row}>
                  <Field label="Email Address" name="email" type="email"
                    placeholder="Private email" value={form.email} onChange={handleChange} required />
                  <div className={styles.field}>
                    <label className={styles.label}>Area of Interest</label>
                    <div className={styles.selectWrap}>
                      <select
                        className={styles.select}
                        name="sector"
                        value={form.sector}
                        onChange={handleChange}
                      >
                        <option value="">Select a sector</option>
                        {sectors.map(s => <option key={s}>{s}</option>)}
                      </select>
                      <svg className={styles.selectArrow} viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.2"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Your Objectives</label>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    rows={5}
                    placeholder="Describe your goals and what you're looking to achieve. Be specific."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formFooter}>
                  <p className={styles.formNote}>All inquiries are treated with complete confidentiality.</p>
                  <button type="submit" className={styles.submit}>
                    <span>Submit Inquiry</span>
                    <span className={styles.arrow}>→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}
