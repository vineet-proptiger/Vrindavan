'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Overview = dynamic(() => import('../components/Overview'), { ssr: true })
const CarouselSection = dynamic(() => import('../components/CarouselSection'), { ssr: false })
const Highlights = dynamic(() => import('../components/Highlights'), { ssr: true })
const Pricing = dynamic(() => import('../components/Pricing'), { ssr: true })
const Amenities = dynamic(() => import('../components/Amenities'), { ssr: true })
const Gallery = dynamic(() => import('../components/Gallery'), { ssr: false })
const Location = dynamic(() => import('../components/Location'), { ssr: true })
const MasterPlan = dynamic(() => import('../components/MasterPlan'), { ssr: true })
const AboutDeveloper = dynamic(() => import('../components/AboutDeveloper'), { ssr: true })
const Footer = dynamic(() => import('../components/Footer'), { ssr: true })
const EnquireModal = dynamic(() => import('../components/EnquireModal'), { ssr: false })
const AosInit = dynamic(() => import('../components/AosInit'), { ssr: false })
import FloatStack from '../components/new/FloatStack'

const exteriorImages = [
  { src: '/images/gallery-exterior/g1.webp', alt: 'Exterior View 1', title: 'Grand Elevation' },
  { src: '/images/gallery-exterior/g2.webp', alt: 'Exterior View 2', title: 'Lush Surroundings' },
  { src: '/images/gallery-exterior/g3.webp', alt: 'Exterior View 3', title: 'Premium Amenities' },
  { src: '/images/gallery-exterior/g4.webp', alt: 'Exterior View 4', title: 'Open Spaces' },
  { src: '/images/gallery-exterior/g5.webp', alt: 'Exterior View 5', title: 'Scenic Landscapes' },
  { src: '/images/gallery-exterior/g6.webp', alt: 'Exterior View 6', title: 'Evening View' },
];

const interiorImages = [
  { src: '/images/gallery-interior/i1.webp', alt: 'Interior View 1', title: 'Spacious Living Room' },
  { src: '/images/gallery-interior/i2.webp', alt: 'Interior View 2', title: 'Elegant Bedroom' },
  { src: '/images/gallery-interior/i3.webp', alt: 'Interior View 3', title: 'Modern Kitchen' },
  { src: '/images/gallery-interior/i4.webp', alt: 'Interior View 4', title: 'Luxury Finishes' },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="relative min-h-screen bg-white">
      <AosInit />
      <Navbar setIsOpen={setIsOpen} />
      <Hero setIsOpen={setIsOpen} />
      <Overview setIsOpen={setIsOpen} />
      
      <CarouselSection 
        setIsOpen={setIsOpen} 
        title={<><span style={{ color: 'var(--red, #ed1c24)' }}>GLIMPSES OF</span>&nbsp;THE EXTERIOR MASTERPIECE</>} 
        id="exterior-gallery" 
        images={exteriorImages} 
      />
      
      <CarouselSection 
        setIsOpen={setIsOpen} 
        title={<><span style={{ color: 'var(--red, #ed1c24)' }}>GLIMPSES OF</span>&nbsp;THE INTERIOR MASTERPIECE</>} 
        id="interior-gallery" 
        images={interiorImages} 
      />

      {/* <Amenities setIsOpen={setIsOpen} /> */}
      <Pricing setIsOpen={setIsOpen} />
      <Highlights setIsOpen={setIsOpen} />
      
      <Location />
      <MasterPlan setIsOpen={setIsOpen} />
      <AboutDeveloper setIsOpen={setIsOpen} />
      <Footer />
      <EnquireModal isOpen={isOpen} setIsOpen={setIsOpen} />
      
      {/* Floating Vertical Enquire Tab — Desktop only */}
      <div 
        className="btn-floating-tab hidden lg:flex"
        onClick={() => setIsOpen(true)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(90deg)' }}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        ENQUIRE NOW
      </div>
      
      {/* Sticky Bottom Bar for Mobile */}
      <FloatStack setIsOpen={setIsOpen} />
    </main>
  )
}
