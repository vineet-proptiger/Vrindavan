'use client'
import React from 'react'
import Link from 'next/link'
import { PeacockFeatherIcon, FluteIcon } from './ThemeIcons';


const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer style={{ background: '#000000', color: '#fff' }}>

    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 24px 32px', textAlign: 'center' }}>
      <p className="devanagari" style={{color:'var(--gold-warm)',fontSize:'16px',margin:'0 0 16px',letterSpacing:'0.08em'}}>॥ हरे कृष्ण हरे कृष्ण ॥</p>
      <h2 style={{ fontSize: '24px', fontWeight: '800', fontFamily: F_JOST, marginBottom: '6px', textTransform: 'capitalize', letterSpacing: '0.05em' }} data-aos="fade-in">
        <span className="heading-stick" style={{ color: '#1E6D7A', fontWeight: '800', marginRight: '10px' }}>||</span>
        <span style={{ color: 'var(--red, #ed1c24)' }}>About</span>&nbsp;Developer
        <span className="heading-stick" style={{ color: 'var(--red, #ed1c24)', fontWeight: '800', marginLeft: '10px' }}>||</span>
      </h2>
      <div className="ornament ornament-gold" style={{margin:'12px auto 16px'}}><span className="feather">❋</span></div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-4">
        <span className="h-[1px] w-8 bg-[var(--color-gold-dark)] hidden md:block"></span>
        <span className="text-[var(--color-gold-dark)] text-xs md:text-sm font-bold tracking-widest uppercase text-center" style={{ fontFamily: 'var(--font-sans), Open Sans, sans-serif' }}>
          Premium Plots — NH-44, Vrindavan, Mathura
        </span>
        <span className="h-[1px] w-8 bg-[var(--color-gold-dark)] hidden md:block"></span>
      </div>

      <div className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-3xl mx-auto text-center" style={{ fontFamily: 'var(--font-sans), Open Sans, sans-serif' }}>
        <p>
          Hero Homes Realty is one of India’s most respected business organisation. While the Hero name is widely acknowledged for its leadership in the two-wheeler industry, Hero Enterprise has even diversified into multiple sectors, including real estate, with Hero Realty Limited at the forefront of its housing initiatives. Hero Realty carries forward the same values that define the larger Hero Group—trust, transparency, customer focus, and innovation.
        </p>
      </div>
      
      {/* RERA Block */}
      <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '10px 24px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', marginTop: '24px' }}>
        <span style={{ fontFamily: F_SANS, fontSize: '14px', color: '#aaa' }}>RERA No : </span>
        <strong style={{ fontFamily: F_JOST, fontSize: '15px', color: '#fff', letterSpacing: '0.04em', wordBreak: 'break-word' }}>Comming Soon</strong>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
      <p style={{ fontSize: '13px', color: '#888', fontFamily: F_SANS }}>
        &copy; 2026 Hero Homes Plots in Vrindavan. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <Link href="/privacy-policy" style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_SANS }}>
          Privacy Policy
        </Link>
      </div>
    </div>

    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px 20px', textAlign: 'center' }}>
      <p style={{ fontSize: '10.5px', color: '#999', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
        <strong style={{ color: '#bbb' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>
    </div>
  </footer>
)

export default Footer
