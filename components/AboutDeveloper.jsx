'use client'
import React, { useState, useEffect, useRef } from 'react'
import { PROJECT_ID, PROJECT_NAME, API_ENDPOINT, SHEET_NAME, SECRET_KEY, CITY_DISPLAY } from '../lib/config'
import { buildTrackingFields } from '../lib/formMeta'

const GOLD = 'var(--color-gold)'
const GOLD_DARK = 'var(--color-gold-dark)'
const PRIMARY = 'var(--color-primary)'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTyping(true)
        } else {
          setIsTyping(false)
          setDisplayedText('')
        }
      },
      { threshold: 0.2 }
    )
    if (textRef.current) observer.observe(textRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isTyping) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i))
      i += 4
      if (i > text.length + 4) clearInterval(interval)
    }, 10) // Speed of typing
    return () => clearInterval(interval)
  }, [isTyping, text])

  return (
    <span ref={textRef} style={{ display: 'block', minHeight: '150px' }}>
      {displayedText}
      <span className="animate-pulse" style={{ color: 'var(--color-gold)' }}>|</span>
    </span>
  )
}

const ContactForm = () => {
  const [form, setForm] = useState({ fullname: '', phone: '', email: '', honeypot: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handle = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name === 'phone' ? value.replace(/\D/g, '') : value })
  }

  const submit = async (e) => {
    e.preventDefault()
    if (form.phone.length !== 10) { setError('Enter valid 10-digit number'); return }
    if (!/^[6-9]\d{9}$/.test(form.phone)) { setError('Phone number must start with 6, 7, 8, or 9'); return }
    if (form.honeypot) {
      setSuccess(true)
      return
    }
    setError(''); setLoading(true)
    const tracking = buildTrackingFields()
    const payload = new FormData()
    payload.append('fullname', form.fullname)
    payload.append('phone', form.phone)
    payload.append('email', form.email || '')
    payload.append('projectId', PROJECT_ID)
    payload.append('projectName', PROJECT_NAME)
    payload.append('form_name', 'Developer Section Form')
    payload.append('sheet_name', SHEET_NAME)
    payload.append('secret', SECRET_KEY)
    payload.append('city', CITY_DISPLAY)
    Object.entries(tracking).forEach(([k, v]) => payload.append(k, v))
    try {
      const res = await fetch(API_ENDPOINT, { method: 'POST', body: payload })
      const data = await res.json()
      if (data.status) {
        setSuccess(true)
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || []
          const nameParts = form.fullname.trim().split(' ')
          window.dataLayer.push({
            event: 'lead_submit_success', form_name: 'Developer Section Form',
            user_data: {
              email: form.email.trim() || undefined, phone: `+91${form.phone}`,
              first_name: nameParts[0] || '', last_name: nameParts.slice(1).join(' ') || ''
            }
          })
        }
      } else setError(data.msg || 'Something went wrong.')
    } catch { setError('Network error. Please try again.') }
    finally { setLoading(false) }
  }

  if (success) return (
    <div style={{ padding: '40px 0', textAlign: 'center' }}>
      <div style={{
        width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-gold-bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px'
      }}>
        <svg width="28" height="28" fill="none" stroke={GOLD_DARK} strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p style={{ fontWeight: '700', fontSize: '18px', color: 'var(--color-text)', fontFamily: F_SANS }}>Thank You!</p>
      <p style={{ color: '#666', fontSize: '14px', marginTop: '6px', fontFamily: F_SANS }}>Our team will contact you shortly.</p>
    </div>
  )

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div>
        <label style={{
          display: 'block', fontSize: '11px', fontWeight: '700', color: '#6b7280',
          fontFamily: F_JOST, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px'
        }}>Full Name <span style={{ color: GOLD }}>*</span></label>
        <input name="fullname" required value={form.fullname} onChange={handle} placeholder="Enter full name"
          className="form-input" style={{ fontFamily: F_SANS, width: '100%' }} />
      </div>

      <div>
        <label style={{
          display: 'block', fontSize: '11px', fontWeight: '700', color: '#6b7280',
          fontFamily: F_JOST, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px'
        }}>Email Address</label>
        <input name="email" value={form.email} onChange={handle} placeholder="Email Id (optional)"
          className="form-input" style={{ fontFamily: F_SANS, width: '100%' }} />
      </div>

      <div>
        <label style={{
          display: 'block', fontSize: '11px', fontWeight: '700', color: '#6b7280',
          fontFamily: F_JOST, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px'
        }}>Mobile Number <span style={{ color: GOLD }}>*</span></label>
        <input name="phone" required value={form.phone} onChange={handle}
          placeholder="10-digit mobile number" maxLength={10}
          className="form-input" style={{ fontFamily: F_SANS, width: '100%' }} />
      </div>

      {/* Honeypot field - invisible to humans, bots will fill it */}
      <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <input type="text" name="honeypot" tabIndex="-1" autoComplete="off" value={form.honeypot} onChange={handle} />
      </div>

      {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}

      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
        <input type="checkbox" required defaultChecked style={{ accentColor: GOLD, marginTop: '2px', flexShrink: 0 }} />
        <span style={{ fontSize: '12px', color: '#777', fontFamily: F_SANS, lineHeight: 1.5 }}>
          I authorize the developer &amp; its representatives to contact me via Email / SMS / WhatsApp / Call.
        </span>
      </label>

      <button type="submit" disabled={loading}
        className="btn-gold w-full"
        style={{ padding: '14px', marginTop: '4px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        {loading ? 'Submitting...' : 'Submit Details'}
      </button>
    </form>
  )
}

const AboutDeveloper = ({ setIsOpen }) => (
  <section id="developer" className="py-10 sm:py-14 bg-[var(--color-bg-muted)] border-b border-gray-100">
    <div className="container mx-auto px-4 md:px-8">

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }} data-aos="fade-up">
        <h2 style={{
          fontFamily: "var(--font-jost), Montserrat, sans-serif", fontWeight: '700', fontSize: '17px',
          color: '#684C1B', letterSpacing: '0.1em',
          textTransform: 'uppercase', margin: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          Need Assistance?
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">

        {/* Left — Info Card */}
        <div style={{
          background: '#fff',
          display: 'flex', flexDirection: 'column', height: '100%',
          borderRadius: '8px', overflow: 'hidden',
          boxShadow: '0 4px 24px var(--color-shadow-card)',
          border: '1px solid #D5C2A8',
        }} data-aos="fade-right" data-aos-delay="100">

          {/* Dark Header */}
          <div style={{
            background: '#000000',
            padding: '18px 24px', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', position: 'relative' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px'
              }}>
                💬
              </div>
              <div>
                <h3 style={{ fontFamily: F_JOST, fontWeight: '800', fontSize: '18px', color: '#fff', margin: '0 0 2px', letterSpacing: '-0.01em' }}>
                  Still Have Questions?
                </h3>
                <p style={{ fontFamily: F_JOST, fontWeight: '500', fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  Let's Talk.
                </p>
              </div>
            </div>
          </div>

          {/* White Body */}
          <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ color: '#555', fontFamily: F_SANS, lineHeight: 1.6, fontSize: '15px', margin: '0 0 24px', textAlign: 'left' }}>
                Tell us what you're looking for — plot, villa, investment or retirement home. We'll match you to the right project and arrange a free site visit.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                {[
                  { title: '100% MVDA Approved', desc: 'Every project. Zero legal risk.', icon: '✅' },
                  { title: 'Free Pickup for Site Visit', desc: 'We arrange transport from your hotel/location.', icon: '🚗' },
                  { title: 'Callback in 30 Minutes', desc: 'Our expert calls you — no waiting around.', icon: '📞' },
                  { title: 'Zero Obligation', desc: 'No pressure. No hidden charges.', icon: '🔒' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '6px', background: 'var(--color-bg-muted)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      border: '1px solid var(--color-gold-light)', fontSize: '16px'
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: F_JOST, fontWeight: '700', fontSize: '15px', color: '#3A2A0E', margin: '0 0 2px' }}>{item.title}</h4>
                      <p style={{ fontFamily: F_SANS, fontSize: '13px', color: '#666', margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => setIsOpen(true)}
              className="btn-gold"
              data-aos="zoom-in" data-aos-delay="400"
              style={{ padding: '11px 28px', fontSize: '14px', width: '100%', fontWeight: '600' }}>
              Request a Callback
            </button>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div style={{
          background: '#fff', borderRadius: '8px',
          boxShadow: '0 4px 24px var(--color-shadow-card)',
          border: '1px solid #D5C2A8',
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column', height: '100%',
        }} data-aos="fade-left" data-aos-delay="200">

          {/* Form Header */}
          <div style={{
            background: '#000000',
            padding: '18px 24px', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))',
            }} />
            <h3 style={{
              fontFamily: F_JOST, fontWeight: '800', fontSize: '18px',
              color: '#fff', margin: '0 0 4px', letterSpacing: '-0.01em'
            }}>
              Book Site Visit Today
            </h3>
            <p style={{ fontFamily: F_SANS, fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
              Register now to get the best deal &amp; book your site visit
            </p>
          </div>

          {/* Form Body */}
          <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default AboutDeveloper
