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
  { src: '/images/gallery-exterior/g1.webp', alt: 'Exterior View 1', title: 'Grand Entrance Gate' },
  { src: '/images/gallery-exterior/g2.webp', alt: 'Exterior View 2', title: 'Township Arial View' },
  { src: '/images/gallery-exterior/g3.webp', alt: 'Exterior View 3', title: 'Clubhouse & Swimming Pool' },
  { src: '/images/gallery-exterior/g4.webp', alt: 'Exterior View 4', title: 'Pedestrian Pathways' },
  { src: '/images/gallery-exterior/g5.webp', alt: 'Exterior View 5', title: 'Palatial Clubhouse Entrance' },
  { src: '/images/gallery-exterior/g6.webp', alt: 'Exterior View 6', title: 'Parks & Kids Play Area' },
  { src: '/images/gallery-exterior/g7.webp', alt: 'Exterior View 7', title: 'Yoga & Meditation Pavilion' },
  { src: '/images/gallery-exterior/g8.webp', alt: 'Exterior View 8', title: 'Landscaped Gardens' },
  { src: '/images/gallery-exterior/g9.webp', alt: 'Exterior View 9', title: 'Aerial Masterplan' },
];

const interiorImages = [
  { src: '/images/gallery-interior/i1.webp', alt: 'Interior View 1', title: 'Indoor Games Room' },
  { src: '/images/gallery-interior/i2.webp', alt: 'Interior View 2', title: 'Luxury Living Area' },
  { src: '/images/gallery-interior/i3.webp', alt: 'Interior View 3', title: 'Modern Living Room' },
  { src: '/images/gallery-interior/i4.webp', alt: 'Interior View 4', title: 'Elegant Living Space' },
  { src: '/images/gallery-interior/i5.webp', alt: 'Interior View 5', title: 'Spacious Balcony View' },
  { src: '/images/gallery-interior/i6.webp', alt: 'Interior View 6', title: 'Designer Lounge Area' },
  { src: '/images/gallery-interior/i7.webp', alt: 'Interior View 7', title: 'Panoramic Skyline View' },
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
      
      {/* <CarouselSection 
        setIsOpen={setIsOpen} 
        title={<><span style={{ color: 'var(--red, #ed1c24)' }}>GLIMPSES OF</span>&nbsp;THE INTERIOR MASTERPIECE</>} 
        id="interior-gallery" 
        images={interiorImages} 
      /> */}

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
