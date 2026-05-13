import { useState } from 'react'
import useInView from '../hooks/useInView'
import styles from './ContactPage.module.css'

const sectors = [
  'Real Estate Opportunities',
  'Investment Networking',
  'International Trade',
  'Project Facilitation',
  'Corporate Connections',
  'General Inquiry',
]

export default function ContactPage() {
  const [ref, inView] = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', org: '', email: '', sector: '', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroBody}>
            <div className="section-label">Private Inquiry</div>
            <h1 className={styles.heroTitle}>Begin the Conversation</h1>
            <p className={styles.heroSub}>
              Direct access to Peter Mushi — strategic business developer and connector based in East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className={styles.content}>
        <div className="container">
          <div className={`${styles.layout} ${inView ? styles.visible : ''}`} ref={ref}>

            {/* Personal Details Card */}
            <div className={styles.details}>
              <div className={styles.profileCard}>
                <div className={styles.avatar}>PM</div>
                <div className={styles.profileInfo}>
                  <h2 className={styles.name}>Peter Mushi</h2>
                  <p className={styles.role}>Strategic Business Developer & Connector</p>
                  <p className={styles.location}>
                    <span className={styles.locDot} /> East Africa · International
                  </p>
                </div>
              </div>

              <div className={styles.contactItems}>
                <a href="tel:+255786792165" className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M3 4a1 1 0 011-1h2.5l1 3-1.5 1.5a11 11 0 005.5 5.5L13 11.5l3 1V15a1 1 0 01-1 1A13 13 0 013 4z" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                  </div>
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Phone</span>
                    <span className={styles.contactVal}>+255 786 792 165</span>
                  </div>
                </a>

                <a href="mailto:tycorn99@gmail.com" className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="4" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                  </div>
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactVal}>tycorn99@gmail.com</span>
                  </div>
                </a>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                  </div>
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Based in</span>
                    <span className={styles.contactVal}>East Africa · International</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Response Time</span>
                    <span className={styles.contactVal}>Within 48 hours</span>
                  </div>
                </div>
              </div>

              <div className={styles.note}>
                <span className={styles.noteDash}>—</span>
                All inquiries are treated with complete confidentiality.
              </div>
            </div>

            {/* Form */}
            <div className={styles.formWrap}>
              {submitted ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Inquiry Received</h3>
                  <p>Peter will review your message and respond within 48 hours.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formHeader}>
                    <div className="section-label">Send a Message</div>
                  </div>
                  <div className={styles.row}>
                    <Field label="Full Name"     name="name"  type="text"  placeholder="Your full name"         value={form.name}  onChange={handleChange} required />
                    <Field label="Organization"  name="org"   type="text"  placeholder="Company or institution"  value={form.org}   onChange={handleChange} />
                  </div>
                  <div className={styles.row}>
                    <Field label="Email Address" name="email" type="email" placeholder="Your email address"      value={form.email} onChange={handleChange} required />
                    <div className={styles.field}>
                      <label className={styles.label}>Area of Interest</label>
                      <div className={styles.selectWrap}>
                        <select className={styles.select} name="sector" value={form.sector} onChange={handleChange}>
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
                      name="message" rows={5}
                      placeholder="Describe your goals clearly. What are you looking to achieve and what is your timeline?"
                      value={form.message} onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formFooter}>
                    <p className={styles.formNote}>Confidential. Reviewed personally by Peter Mushi.</p>
                    <button type="submit" className={styles.submit}>
                      <span>Send to Peter</span>
                      <span>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

function Field({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type={type} name={name}
        placeholder={placeholder} value={value} onChange={onChange} required={required} />
    </div>
  )
}
