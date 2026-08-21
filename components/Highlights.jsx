'use client'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const BORDER_COLOR = '#D5C2A8'
const BG = 'var(--color-cream-bg)' // #EAE5D9


/* Curved concave notch at each corner of the border box */
const CurvedCorners = ({ bg = BG }) => {
  const corners = [
    // top-left  → curve goes bottom-right
    {
      top: '-1px', left: '-1px',
      borderRight: `1px solid ${BORDER_COLOR}`,
      borderBottom: `1px solid ${BORDER_COLOR}`,
      borderBottomRightRadius: '18px'
    },
    // top-right → curve goes bottom-left
    {
      top: '-1px', right: '-1px',
      borderLeft: `1px solid ${BORDER_COLOR}`,
      borderBottom: `1px solid ${BORDER_COLOR}`,
      borderBottomLeftRadius: '18px'
    },
    // bottom-left → curve goes top-right
    {
      bottom: '-1px', left: '-1px',
      borderRight: `1px solid ${BORDER_COLOR}`,
      borderTop: `1px solid ${BORDER_COLOR}`,
      borderTopRightRadius: '18px'
    },
    // bottom-right → curve goes top-left
    {
      bottom: '-1px', right: '-1px',
      borderLeft: `1px solid ${BORDER_COLOR}`,
      borderTop: `1px solid ${BORDER_COLOR}`,
      borderTopLeftRadius: '18px'
    },
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

import { Landmark, TrendingUp, Plane, HardHat, ShieldCheck, Users } from 'lucide-react'
import { PeacockFeatherIcon, FluteIcon, DiyaIcon } from './ThemeIcons';

const highlights = [
  { 
    title: 'Banke Bihari Corridor — ₹500 Cr', 
    desc: 'UP Govt\'s ambitious development covers 5–5.5 acres around the temple, improving infrastructure — comparable to Kashi Vishwanath Corridor.', 
    Icon: Landmark,
    tag: 'ACTIVE DEVELOPMENT',
    tagColor: '#2F855A',
    iconBg: '#E83E8C' // Pink
  },
  { 
    title: 'Land Prices Up 5× in a Decade', 
    desc: 'Vrindavan plot prices have appreciated nearly 5 times over the last 10 years, with 15–25% annual returns in 2025–26, outperforming most cities.', 
    Icon: TrendingUp,
    tag: 'INVESTMENT DATA',
    tagColor: '#D69E2E',
    iconBg: '#0D6EFD' // Blue
  },
  { 
    title: 'Jewar Airport & Connectivity', 
    desc: 'Noida International Airport (Jewar) is just 1.5 hours from Vrindavan. Combined with Yamuna Expressway, buyers reach with unmatched ease.', 
    Icon: Plane,
    tag: 'INFRASTRUCTURE',
    tagColor: '#3182CE',
    iconBg: '#198754' // Green
  },
  { 
    title: '₹30,000 Cr Braj Master Plan', 
    desc: 'Massive infrastructure plan includes roads, heritage conservation, and urban development — acknowledging demand with upward circle-rate revision.', 
    Icon: HardHat,
    tag: 'GOVERNMENT BACKED',
    tagColor: '#E53E3E',
    iconBg: '#FD7E14' // Orange
  },
  { 
    title: '100% MVDA Approved Plots', 
    desc: 'Secure your future with 100% MVDA approved residential plots and townships. Experience a perfect blend where spiritual living meets smart investment.', 
    Icon: ShieldCheck,
    tag: 'VERIFIED ASSET',
    tagColor: '#2F855A',
    iconBg: '#6F42C1' // Purple
  },
  { 
    title: 'A Trusted Legacy of 10+ Years', 
    desc: 'Backed by 10+ years of trust in Vrindavan real estate, having delivered 5L+ sq. yards to over 3,000 happy families and investors with transparency.', 
    Icon: Users,
    tag: 'PROVEN RECORD',
    tagColor: '#D69E2E',
    iconBg: '#0DCAF0' // Cyan/Teal
  },
]

const Highlights = ({ setIsOpen }) => (
  <section id="highlights" className="relative" style={{ padding: '60px 0 72px' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      .highlights-bg {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-image: url('/images/highlights/smDevice.webp');
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        z-index: 1;
      }
      @media (min-width: 768px) {
        .highlights-bg {
          background-image: url('/images/highlights/bigDevice.webp');
        }
      }
      .highlights-overlay {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0, 0, 0, 0.75);
        z-index: 2;
      }
    `}} />

    <div className="highlights-bg"></div>
    <div className="highlights-overlay"></div>

    <div className="relative z-10 px-4 sm:px-8" style={{ maxWidth: '1100px', margin: '0 auto' }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="ornament"><span className="feather">❋</span></div>
        <h2 data-aos="flip-left" data-aos-delay="300" style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#1E6D7A', letterSpacing: '0.1em',
          textTransform: 'capitalize', margin: 0,
          display: 'block',
        }}>
          <span className="heading-stick" style={{ color: '#1E6D7A', fontWeight: '800', marginRight: '10px' }}>||</span>
          <span style={{ color: 'var(--red, #ed1c24)' }}>Designed for Comfort,</span>&nbsp;Wellness &amp; Leisure 
          <span className="heading-stick" style={{ color: 'var(--red, #ed1c24)', fontWeight: '800', marginLeft: '10px' }}>||</span>
        </h2>
        <p className="devanagari" style={{color:'var(--gold-warm)',fontSize:'14px',margin:'14px 0 0',letterSpacing:'0.06em'}}><DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /> ॥ सुख सुविधा ॥ <DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /></p>
      </div>

      {/* Grid container with translucent border */}
      <div
        style={{
          position: 'relative',
          border: `1px solid rgba(255, 255, 255, 0.2)`,
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px]" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
          {highlights.map(({ title, desc, Icon, tag, tagColor, iconBg }, i) => (
            <div key={i} data-aos="flip-left" data-aos-delay={i * 100} style={{
              padding: '36px 20px 28px',
              textAlign: 'center',
              background: 'rgba(0, 0, 0, 0.4)',
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
              {/* Colorful circle with Lucide Icon */}
              <div style={{
                width: '70px', height: '70px', borderRadius: '50%',
                background: iconBg || 'var(--color-brand)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 12px ${iconBg || '#D4A843'}60`
              }}>
                <Icon color="#ffffff" size={32} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: F_JOST, fontSize: '13.5px', fontWeight: '700',
                color: '#FFFFFF', letterSpacing: '0.1em',
                textTransform: 'uppercase', margin: '0 0 12px',
                minHeight: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>{title}</h3>

              {/* Description */}
              <p style={{
                fontFamily: F_SANS, fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.65, margin: '0 0 20px',
                flexGrow: 1
              }}>{desc}</p>

              {/* Tag */}
              {tag && (
                <div style={{
                  display: 'inline-block',
                  background: `${iconBg}33`, // 20% opacity of icon color
                  color: iconBg, // using iconBg for brighter contrast on dark mode
                  padding: '6px 12px',
                  borderRadius: '100px',
                  fontSize: '10.5px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: F_SANS
                }}>
                  {tag}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
)

export default Highlights
