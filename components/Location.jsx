'use client' 
import { useState } from 'react'
import Image from 'next/image'
import { PeacockFeatherIcon, FluteIcon } from './ThemeIcons';

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationItems = [
  { name: 'NH 19 — Golden Quadrilateral', dist: 'CONNECTED' },
  { name: 'Mathura Junction Railway', dist: 'NEARBY' },
  { name: 'Yamuna Expressway', dist: 'DIRECT ACCESS' },
  { name: 'Jewar Intl Airport (upcoming)', dist: '~90 MIN' },
  { name: 'Delhi (via NH 19)', dist: '~2.5 HRS' },
  { name: 'Agra & Mathura', dist: 'ADJACENT' },
]

const Location = () => {
  return (
    <section id="location" style={{
      padding: '72px 0',
      background: '#EAE5DC', // Matched to the screenshot background
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
           <div className="ornament"><span className="feather">❋</span></div>
           <h2 style={{
             fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
             color: '#1E6D7A', letterSpacing: '0.1em', textTransform: 'capitalize', margin: 0,
             display: 'flex', alignItems: 'center', justifyContent: 'center',
           }}>
             <span className="heading-stick" style={{ color: '#1E6D7A', fontWeight: '800', marginRight: '10px' }}>||</span>
             <span style={{ color: 'var(--red, #ed1c24)' }}>Location</span>&nbsp;Advantages
             <span className="heading-stick" style={{ color: 'var(--red, #ed1c24)', fontWeight: '800', marginLeft: '10px' }}>||</span>
           </h2>
           <p className="devanagari" style={{color:'var(--gold-warm)',fontSize:'14px',margin:'14px 0 0',letterSpacing:'0.06em'}}>॥ स्थान लाभ ॥</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT — Accordion */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right" data-aos-delay="100">
            <div style={{ border: '1px solid #D5C2A8', background: '#EAE5DC' }}>



              {/* Table Header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                background: '#000000', color: '#fff',
                fontFamily: F_JOST, fontWeight: '600', fontSize: '13.5px',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                borderBottom: '1px solid #D5C2A8',
              }}>
                <div style={{ padding: '10px 16px', borderRight: '1px solid #D5C2A8' }}>LANDMARK</div>
                <div style={{ padding: '10px 16px', textAlign: 'center' }}>TIME / DISTANCE</div>
              </div>

              {/* Flat List */}
              <div style={{
                overflow: 'hidden',
              }}>
                {locationItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                    background: i % 2 === 0 ? '#F4EFE6' : '#EAE5DC',
                    color: '#684C1B', fontFamily: F_SANS,
                    fontSize: '13px', fontWeight: '600',
                    borderBottom: '1px solid #D5C2A8',
                  }}>
                    <div style={{ padding: '10px 16px', borderRight: '1px solid #D5C2A8', display: 'flex', alignItems: 'center' }}>
                      {item.name}
                    </div>
                    <div style={{ padding: '10px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ed1c24', fontWeight: '700' }}>
                      {item.dist}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" data-aos-delay="150" style={{ minHeight: '420px' }}>
            <div style={{
              overflow: 'hidden',
              border: '1px solid #D5C2A8',
              height: '100%', minHeight: '420px',
              position: 'relative',
              background: '#EAE5DC'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.376806436367!2d77.58636829999999!3d27.6128443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736d84f301d387%3A0xafcd6d7dac79c151!2sHero%20Homes%20-%20Vrindavan!5e0!3m2!1sen!2sin!4v1786696472902!5m2!1sen!2sin" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
