'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { masterplanImages } from '../lib/images'
import { PeacockFeatherIcon, FluteIcon, DiyaIcon } from './ThemeIcons'

import 'lucide-react'
import { Lock } from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const plans = [
  { label: 'Site Master Plan', img: masterplanImages.masterPlan },
  { label: 'Plots Layout', img: masterplanImages.masterPlan },
]

const MasterPlan = ({ setIsOpen }) => {
  const [activePlan, setActivePlan] = useState(0)

  return (
    <section id="masterplan" style={{
      scrollMarginTop: '80px',
      padding: '80px 0',
      background: '#FFFFFF',
      borderBottom: '1px solid #EAE5DC',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1100px]">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }} data-aos="fade-up">
          <div className="ornament"><span className="feather">❋</span></div>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
            color: '#1E6D7A', letterSpacing: '0.1em',
            textTransform: 'capitalize', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span className="heading-stick" style={{ color: '#1E6D7A', fontWeight: '800', marginRight: '10px' }}>||</span>
            <span style={{ color: 'var(--red, #ed1c24)' }}>Floor Plans</span>&nbsp;&amp; Layout
            <span className="heading-stick" style={{ color: 'var(--red, #ed1c24)', fontWeight: '800', marginLeft: '10px' }}>||</span>
          </h2>
          <p className="devanagari" style={{color:'var(--gold-warm)',fontSize:'14px',margin:'14px 0 0',letterSpacing:'0.06em'}}>
            <DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /> ॥ नक्शा ॥ <DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} />
          </p>
        </div>

        {/* Top Floating Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8" data-aos="fade-up" data-aos-delay="100">
          {plans.map((plan, idx) => (
            <button 
              key={idx} 
              onClick={() => setActivePlan(idx)}
              className="flex items-center justify-center gap-2 transition-all duration-300 rounded-full border px-4 py-2.5 md:px-6 md:py-3"
              style={{
                background: activePlan === idx ? '#1E6D7A' : '#FFFFFF',
                borderColor: activePlan === idx ? '#1E6D7A' : '#D5C2A8',
                boxShadow: activePlan === idx ? '0 10px 20px rgba(30,109,122,0.2)' : 'none',
              }}
            >
              <span className="whitespace-nowrap" style={{
                fontFamily: F_JOST, fontSize: 'clamp(12px, 3.5vw, 14px)', fontWeight: activePlan === idx ? '700' : '600',
                color: activePlan === idx ? '#FFFFFF' : '#4A4540',
                letterSpacing: '0.04em', textTransform: 'uppercase'
              }}>
                {plan.label}
              </span>
              {activePlan === idx && (
                <div className="flex-shrink-0 flex items-center justify-center">
                  <PeacockFeatherIcon size={16} style={{ transform: 'rotate(-25deg)', color: '#FFFFFF' }} />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Full-width Immersive Preview */}
        <div className="w-full relative" data-aos="zoom-in" data-aos-delay="200">
          <div className="relative rounded-2xl overflow-hidden border border-[#D5C2A8] shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-[280px] md:h-[500px] bg-[#FDF8F6]">
            
            {/* Blurred Background Image */}
            <Image src={plans[activePlan].img} alt={plans[activePlan].label} fill
              style={{ 
                objectFit: 'cover', 
                filter: 'blur(8px)', 
                transform: 'scale(1.05)' 
              }} />

            {/* Dark Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/20" />

            {/* DESKTOP Premium Frosted Glass Unlock Card */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px]">
              <div 
                className="p-10"
                style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(12px)',
                borderRadius: '20px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}>
                
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(200, 16, 46, 0.1)', color: '#c8102e' }}>
                  <Lock className="w-7 h-7" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: F_JOST, color: '#1E6D7A' }}>
                  {plans[activePlan].label} is Locked
                </h3>
                
                <p className="text-sm mb-8" style={{ fontFamily: F_SANS, color: '#4A4540', lineHeight: 1.5 }}>
                  Register to unlock and receive detailed floor plans, layouts, & pricing directly to your inbox.
                </p>

                <button 
                  onClick={() => setIsOpen(true)} 
                  className="btn-cta btn-red w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 font-bold flex justify-center items-center gap-2"
                  style={{ borderRadius: '8px', fontFamily: F_SANS }}
                >
                  Unlock Layout
                </button>
              </div>
            </div>

            {/* MOBILE ONLY Button */}
            <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[320px]">
              <button 
                onClick={() => setIsOpen(true)} 
                className="btn-cta btn-red w-full py-3.5 text-[13px] tracking-wider uppercase transition-all duration-300 font-bold flex justify-center items-center gap-2 shadow-xl"
                style={{ borderRadius: '8px', fontFamily: F_SANS }}
              >
                <Lock className="w-4 h-4" strokeWidth={2.5} />
                Unlock {plans[activePlan].label}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default MasterPlan
