'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { masterplanImages } from '../lib/images'
import { PeacockFeatherIcon, FluteIcon } from './ThemeIcons'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const plans = [
  { label: 'Site Master Plan', img: masterplanImages.masterPlan },
  { label: 'Plots Layout', img: masterplanImages.masterPlan },
  // { label: 'Cozy Villa',       img: masterplanImages.bhk2 },
  // { label: 'Spacious Bungalow',       img: masterplanImages.bhk3 },
  // { label: 'Duplex Villa',       img: masterplanImages.bhk45 },
]

const MasterPlan = ({ setIsOpen }) => {
  const [activePlan, setActivePlan] = useState(0)

  return (
    <section id="masterplan" style={{
      scrollMarginTop: '80px',
      padding: '56px 0',
      background: '#ffffff',
      borderBottom: '1px solid #f0f0f0',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }} data-aos="fade-up">
          <div className="ornament"><span className="feather">❋</span></div>
          <h2 style={{
            fontFamily: "var(--font-jost), Montserrat, sans-serif", fontWeight: '700', fontSize: '17px',
            color: '#1E6D7A', letterSpacing: '0.1em',
            textTransform: 'uppercase', margin: 0,
          }}>
            <span style={{ color: 'var(--red, #ed1c24)' }}>Floor Plans</span>&nbsp;&amp; Layout
          </h2>
          <p className="devanagari" style={{color:'var(--gold-warm)',fontSize:'14px',margin:'14px 0 0',letterSpacing:'0.06em'}}>॥ नक्शा ॥</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT — Tabs */}
          <div className="w-full lg:w-[32%]" data-aos="fade-right">
            <div style={{
              background: '#fff', borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              border: '1px solid #D5C2A8', overflow: 'hidden',
            }}>
              {/* Tab header */}
              <div style={{
                background: '#000000',
                padding: '16px 20px', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))',
                }} />
                <p style={{
                  fontFamily: F_JOST, fontWeight: '700', fontSize: '13px',
                  color: '#fff', margin: 0, letterSpacing: '0.06em', textTransform: 'uppercase'
                }}>
                  Select Floor Plan
                </p>
                <p style={{
                  fontFamily: F_SANS, fontSize: '11px',
                  color: 'rgba(255,255,255,0.5)', margin: '3px 0 0'
                }}>
                  Click to preview
                </p>
              </div>

              {/* Tabs */}
              {plans.map((plan, idx) => (
                <button key={idx} onClick={() => setActivePlan(idx)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '16px 20px',
                    background: activePlan === idx ? 'linear-gradient(90deg, rgba(30,109,122,0.05) 0%, #fff 100%)' : '#fff',
                    border: 'none',
                    borderLeft: activePlan === idx ? '3px solid #1E6D7A' : '3px solid transparent',
                    borderBottom: idx < plans.length - 1 ? '1px solid #f5f5f5' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {/* Number badge */}
                    <span style={{
                      width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                      background: activePlan === idx ? '#1E6D7A' : '#f3f4f6',
                      color: activePlan === idx ? '#fff' : '#9ca3af',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontFamily: F_JOST, fontWeight: '700',
                      boxShadow: activePlan === idx ? '0 4px 10px rgba(30,109,122,0.3)' : 'none',
                      transition: 'all 0.3s',
                    }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span style={{
                      fontSize: '14px', fontWeight: activePlan === idx ? '800' : '600', fontFamily: F_JOST,
                      color: activePlan === idx ? '#1E6D7A' : '#4b5563',
                      letterSpacing: '0.03em',
                      transition: 'color 0.3s',
                    }}>{plan.label}</span>
                  </div>
                  {/* Thematic Icon / Arrow */}
                  {activePlan === idx ? (
                    <PeacockFeatherIcon size={24} style={{ transform: 'rotate(-25deg)' }} />
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="#d1d5db"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  )}
                </button>
              ))}

              {/* Info box */}
              <div style={{
                margin: '16px', padding: '16px',
                background: 'rgba(213, 194, 168, 0.1)', borderRadius: '8px',
                border: '1px solid rgba(213, 194, 168, 0.4)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FluteIcon width={32} height={12} style={{ flexShrink: 0 }} />
                  <p style={{
                    fontFamily: F_SANS, fontSize: '11.5px', color: '#555',
                    margin: 0, lineHeight: 1.5, fontWeight: '500'
                  }}>
                    Register to receive detailed floor plans &amp; pricing directly to your inbox.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Image preview */}
          <div className="w-full lg:flex-1" data-aos="zoom-in">
            <div style={{
              position: 'relative', borderRadius: '8px', overflow: 'hidden',
              border: '1px solid #D5C2A8',
              boxShadow: '0 10px 36px var(--color-shadow-inner)',
              height: '100%', minHeight: '400px',
            }}>
              {/* Brand top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                background: 'linear-gradient(90deg, #1E6D7A, #15525C)', zIndex: 10,
              }} />

              {/* Plan label top-left */}
              <div style={{
                position: 'absolute', top: '16px', left: '16px', zIndex: 10,
                background: 'rgba(30, 109, 122, 0.9)', backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                boxShadow: '0 4px 12px rgba(30,109,122,0.3)'
              }}>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  {plans[activePlan].label}
                </span>
              </div>

              {/* Blurred image */}
              <Image src={plans[activePlan].img} alt={plans[activePlan].label} fill
                style={{ 
                  objectFit: 'cover', 
                  filter: 'blur(5px)', 
                  transform: 'scale(1.06)' 
                }} />

              {/* Horizontal Dark Strip overlay in center */}
              <div style={{
                position: 'absolute', top: '50%', left: 0, right: 0,
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(4px)',
                padding: '32px 20px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', zIndex: 5,
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}>
                <button onClick={() => setIsOpen(true)} className="btn-gold"
                  data-aos="zoom-in" data-aos-delay="200"
                  style={{ 
                    padding: '14px 36px', 
                    fontSize: '16px', 
                    letterSpacing: '0.05em', 
                    fontWeight: '700', 
                    borderRadius: '4px',
                    fontFamily: F_SANS,
                    color: '#fff',
                    background: 'var(--color-brand)',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                  }}>
                  Request {plans[activePlan].label} Layout
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MasterPlan
