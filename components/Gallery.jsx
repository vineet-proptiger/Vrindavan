'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { galleryInteriorImages, galleryExteriorImages } from '../lib/images'
import { PeacockFeatherIcon, FluteIcon, DiyaIcon } from './ThemeIcons';

const galleryImages = [...galleryExteriorImages, ...galleryInteriorImages]

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const ArcIcon = () => (
  <svg width="28" height="14" viewBox="0 0 28 14" fill="none"
    style={{ display: 'inline-block', marginRight: '10px', verticalAlign: 'middle', marginBottom: '3px' }}>
    <path d="M2 12 Q14 2 26 12" stroke="#684C1B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
)

const Gallery = ({ setIsOpen }) => {
  const [showAll, setShowAll] = useState(false)
  const [selectedImgIndex, setSelectedImgIndex] = useState(null)

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedImgIndex === null) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImgIndex(null)
      if (e.key === 'ArrowRight') setSelectedImgIndex((prev) => (prev + 1) % galleryImages.length)
      if (e.key === 'ArrowLeft') setSelectedImgIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImgIndex])

  const openLightbox = (imgSrc) => {
    const idx = galleryImages.findIndex(img => img.src === imgSrc)
    setSelectedImgIndex(idx !== -1 ? idx : 0)
  }

  const nextLightboxImg = (e) => {
    e.stopPropagation()
    setSelectedImgIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevLightboxImg = (e) => {
    e.stopPropagation()
    setSelectedImgIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  // Show first 8 images initially, show all 14 if showAll is true
  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 8)

  return (
    <section id="gallery" style={{
      padding: '72px 0',
      background: '#fff',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* ── Header Row ── */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex flex-col items-center gap-3">
            <div className="ornament"><span className="feather">❋</span></div>
            <h2 data-aos="flip-left" data-aos-delay="500" style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
              color: '#1E6D7A', letterSpacing: '0.1em', textTransform: 'capitalize', margin: 0,
            }} className="text-center"><span className="heading-stick" style={{ color: '#1E6D7A', fontWeight: '800', marginRight: '10px' }}>||</span>
            <span style={{ color: 'var(--red, #ed1c24)' }}>Hero Homes Plots</span>&nbsp;in Vrindavan GALLERY
            <span className="heading-stick" style={{ color: 'var(--red, #ed1c24)', fontWeight: '800', marginLeft: '10px' }}>||</span></h2>
            <p className="devanagari" style={{color:'var(--gold-warm)',fontSize:'14px',margin:'4px 0 0',letterSpacing:'0.06em'}}><DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /> ॥ गैलरी ॥ <DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /></p>
          </div>
        </div>

        {/* ── Premium Art-Gallery Grid ── */}
        <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 transition-all duration-500 ease-in-out">
          {visibleImages.map((img, idx) => (
            <div 
              key={idx}
              className="relative w-full cursor-pointer group rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 bg-white" 
              style={{ padding: '8px', border: '1px solid #EAE5DC' }}
              onClick={() => openLightbox(img.src)}
            >
              <div className="relative w-full overflow-hidden rounded-xl bg-gray-100" style={{ aspectRatio: '3/4' }}>
                <Image 
                  src={img.src} 
                  alt={img.alt || 'Gallery Image'} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Always-on subtle gradient at the bottom for contrast */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-1/2 opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                  }}
                />

                {/* Floating Frosted Glass Label */}
                <div className="absolute inset-x-3 bottom-3 md:inset-x-4 md:bottom-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    transform: 'translateY(10px)',
                    opacity: 0.9,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }} className="group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-white/90">
                    <span 
                      style={{ 
                        color: '#FFFFFF', 
                        fontFamily: F_JOST, 
                        fontSize: '13px', 
                        fontWeight: '600', 
                        letterSpacing: '0.06em', 
                        textTransform: 'uppercase',
                        display: 'block',
                        transition: 'color 0.4s'
                      }}
                      className="group-hover:text-[#1E6D7A]"
                    >
                      {img.alt ? img.alt.replace('Hero Homes Plots in Vrindavan - ', '') : 'VIEW PREVIEW'}
                    </span>
                  </div>
                </div>

                {/* Hover Reveal 'View Icon' */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Show More / Less Button ── */}
        {galleryImages.length > 8 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center justify-center gap-2 transition-all duration-300"
              style={{
                fontFamily: F_JOST,
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.15em',
                color: '#684C1B',
                border: '1px solid #D5C2A8',
                padding: '14px 36px',
                background: 'transparent',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#684C1B'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#684C1B'
              }}
            >
              {showAll ? 'SHOW LESS' : 'VIEW ALL GALLERY'}
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* ── Lightbox Modal ── */}
      {selectedImgIndex !== null && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImgIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-[10000] p-2 bg-black/40 rounded-full"
            onClick={() => setSelectedImgIndex(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Left Arrow */}
          <button 
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-[10000] p-2 bg-black/40 rounded-full"
            onClick={prevLightboxImg}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-[10000] p-2 bg-black/40 rounded-full"
            onClick={nextLightboxImg}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          {/* Image Counter */}
          <div 
            className="absolute top-6 left-6 text-white/70 font-medium tracking-widest text-xs p-2 bg-black/40 rounded"
            style={{ fontFamily: F_JOST }}
          >
            {selectedImgIndex + 1} / {galleryImages.length}
          </div>

          {/* Center Content */}
          <div className="relative w-full max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center">
            <img 
              src={galleryImages[selectedImgIndex].src} 
              alt={galleryImages[selectedImgIndex].alt || 'Gallery Preview'} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl transition-all duration-300 rounded"
              onClick={(e) => e.stopPropagation()} 
            />
            {/* Alt Text Caption */}
            <div 
              className="mt-4 text-center text-white/80 text-xs md:text-sm tracking-wide max-w-[80vw]"
              style={{ fontFamily: F_JOST }}
            >
              {galleryImages[selectedImgIndex].alt}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
