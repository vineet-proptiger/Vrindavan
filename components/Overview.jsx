'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'



/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

const infoItems = [
  { label: 'Years in Vrindavan Real Estate', value: '10+', bgColor: '#FFFDF2' },
  { label: '100% MVDA Approved',         value: 'Yes', bgColor: '#FDF8F6' },
  { label: 'Sq. Yards Delivered',     value: '5L+', bgColor: '#F4FAF4' },
]

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .overview-section { padding: 32px 0 48px; margin-top: -60px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .overview-section { padding: 72px 0 80px; margin-top: 0; } }
      `}} />
      <section
        id="overview"
        className="overview-section"
      style={{ 
        scrollMarginTop: '80px', 
        background: '#fff', 
        borderBottom: '1px solid #f0ede6',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Image Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('/images/about/about.webp')",
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.15,
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <p className="devanagari" style={{color:'var(--gold-warm)',fontSize:'16px',margin:'0 0 16px',letterSpacing:'0.08em'}}>॥ श्री राधे राधे ॥</p>
          <div className="ornament"><span className="feather">❋</span></div>
        </div>
      
      {/* ── Mobile Section Heading ── */}
      <div className="block lg:hidden" style={{ marginBottom: '32px', textAlign: 'left' }}>
        <p className="devanagari" style={{color:'var(--gold-warm)',fontSize:'15px',margin:'0 0 12px',letterSpacing:'0.06em'}}>॥ श्री वृन्दावन धाम ॥</p>
        <h2 data-aos="flip-right" data-aos-delay="500" style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#1E6D7A', letterSpacing: '0.1em',
          textTransform: 'uppercase', margin: '0 0 10px 0',
        }}>
          <span style={{ color: 'var(--red, #ed1c24)' }}>Welcome to</span>&nbsp;Hero Homes Plots in Vrindavan
        </h2>
        <h3 style={{
          fontFamily: F_JOST, fontWeight: '500', fontSize: '14px',
          color: '#C9A96E', letterSpacing: '0.05em',
          textTransform: 'capitalize', margin: '0 0 14px 0',
        }}>
          NH-44, Vrindavan, Mathura
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        
        {/* ── Left Side: Text Content ── */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          
          {/* ── Desktop Section Heading ── */}
          <div className="hidden lg:block" style={{ marginBottom: '40px', textAlign: 'left' }}>
            <p className="devanagari" style={{color:'var(--gold-warm)',fontSize:'15px',margin:'0 0 12px',letterSpacing:'0.06em'}}>॥ श्री वृन्दावन धाम ॥</p>
            <h2 data-aos="flip-right" data-aos-delay="500" style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
              color: '#1E6D7A', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 10px 0',
        }}>
              <span style={{ color: 'var(--red, #ed1c24)' }}>Welcome to</span>&nbsp;Hero Homes Plots in Vrindavan
            </h2>
            <h3 style={{
              fontFamily: F_JOST, fontWeight: '500', fontSize: '14px',
              color: '#C9A96E', letterSpacing: '0.05em',
              textTransform: 'capitalize', margin: '0 0 14px 0',
            }}>
              NH-44, Vrindavan, Mathura
            </h3>
          </div>
          
          {/* Paragraphs */}
          <div data-aos="flip-down" data-aos-delay="500" style={{
            fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
            lineHeight: 1.9,
            marginTop: 0, marginBottom: '24px',
            textAlign: 'justify',
          }}>
            {isExpanded ? (
              <>
                <p style={{ marginBottom: '16px', display: 'inline' }}>
                  Discover a lifestyle of elegance and spiritual serenity at <strong>Hero Homes Vrindavan</strong>, an exclusive residential development offering premium <strong>Residential Plots</strong>. Located right on the Delhi-Mathura Road (NH-44), near the prestigious <strong>GLA University</strong>, this gated township is carefully crafted to offer modern premium living in a peaceful environment.
                </p>
                <br /><br />
                <p style={{ display: 'inline' }}>
                  Spanning a sprawling area of approximately <strong>40 Acres</strong>, Hero Homes Vrindavan features meticulously planned layouts ranging from <strong>90 to 200 Sq. Yards &amp; Premium Villas</strong>. The project offers a robust modern infrastructure combined with peaceful landscaped open spaces, a high-end clubhouse, and premium amenities—making it an exceptional investment opportunity and self-living choice close to historical holy temples like Banke Bihari and ISKCON.{' '}
                </p>
                <button
                  onClick={() => setIsExpanded(false)}
                  style={{
                    fontFamily: F_JOST,
                    fontWeight: '700',
                    fontSize: '13.5px',
                    color: '#C9A96E',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0 0 0 4px',
                    textDecoration: 'underline',
                    display: 'inline',
                  }}
                >
                  Read Less
                </button>
              </>
            ) : (
              <>
                <p style={{ display: 'inline' }}>
                  Discover a lifestyle of elegance and spiritual serenity at <strong>Hero Homes Vrindavan</strong>, an exclusive residential development offering premium <strong>Residential Plots</strong>. Located right on the Delhi-Mathura Road (NH-44), near the prestigious <strong>GLA University</strong>, this gated township is carefully crafted to offer modern premium living in a peaceful environment...{' '}
                </p>
                <button
                  onClick={() => setIsExpanded(true)}
                  style={{
                    fontFamily: F_JOST,
                    fontWeight: '700',
                    fontSize: '13.5px',
                    color: '#C9A96E',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0 0 0 2px',
                    textDecoration: 'underline',
                    display: 'inline',
                  }}
                >
                  Read More
                </button>
              </>
            )}
          </div>

          {/* Info Box */}
          <div
            className="block mt-6 lg:mt-4"  
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="0"
            style={{
              position: 'relative',
              border: '1px solid #D5C2A8',
              overflow: 'hidden',
            }}
          >
            <CurvedCorners />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[1px]" style={{ background: '#D5C2A8' }}>
            {infoItems.map((item, i) => (
              <div key={i} className="flex flex-col justify-center px-6 py-5 sm:px-3 sm:py-[18px] text-left lg:text-center" style={{
                background: item.bgColor || '#fff',
              }}>
                <div 
                  data-aos="fade" 
                  data-aos-delay={600 + i * 150} 
                  data-aos-duration="800"
                  className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start lg:items-center w-full"
                >
                  <p 
                    className="mb-0 sm:mb-1.5"
                    style={{
                      fontFamily: F_JOST, fontSize: '11px', fontWeight: '600',
                      color: '#9E8B75', letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </p>
                  <p className="whitespace-normal" style={{
                    fontFamily: F_JOST, fontSize: '13.5px', fontWeight: '700',
                    color: '#3A2A0E', letterSpacing: '0.04em',
                    textTransform: 'uppercase', margin: 0,
                  }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>

        </div>

        {/* ── Right Side: Video ── */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-1 lg:order-2" data-aos="fade-left">
          <div className="relative w-full flex justify-center items-center">
            <div className="relative w-full lg:w-[90%] aspect-video sm:aspect-[4/3] mx-auto rounded-xl shadow-2xl overflow-hidden bg-[#e0d6c8]">
              <video 
                src="/videos/project-video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  </>
  )
}

export default Overview
