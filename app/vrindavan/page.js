'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import TopStrip from '../../components/new/TopStrip';
import Header from '../../components/new/Header';
import Hero from '../../components/new/Hero';
import SignatureStrip from '../../components/new/SignatureStrip';
import QuickFacts from '../../components/new/QuickFacts';
import Philosophy from '../../components/new/Philosophy';
import PlotTiers from '../../components/new/PlotTiers';
import Amenities from '../../components/new/Amenities';
import VideoTour from '../../components/new/VideoTour';
import MasterPlan from '../../components/new/MasterPlan';
import Location from '../../components/new/Location';
import Gallery from '../../components/new/Gallery';
import WhyInvest from '../../components/new/WhyInvest';
import Footer from '../../components/new/Footer';
import FloatStack from '../../components/new/FloatStack';


const EnquireModal = dynamic(() => import('../../components/EnquireModal'), { ssr: false })

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const initialTimer = setTimeout(() => setIsOpen(true), 15000)
    return () => clearTimeout(initialTimer)
  }, [])

  useEffect(() => {
    let intervalTimer;
    if (!isOpen) {
      intervalTimer = setTimeout(() => setIsOpen(true), 30000)
    }
    return () => clearTimeout(intervalTimer)
  }, [isOpen])

  useEffect(() => {
    var sels = '.fact-cell, .plot-card, .amen-row, .why-grid > div, .gallery-top img, .gallery-bot img, .grid-2 > div, .grid-loc > div, .signature-quote, .h-display, .h-hero, .video-card';
    var els = document.querySelectorAll(sels);
    els.forEach(function(el){ el.classList.add('reveal'); });
    if(!('IntersectionObserver' in window)){ els.forEach(function(el){ el.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
    els.forEach(function(el){ io.observe(el); });
  }, [])

  return (
    <>
      <main className="relative min-h-screen bg-white">
        {/* Extracted Content */}
        
<TopStrip />

<Header setIsOpen={setIsOpen} />

<Hero setIsOpen={setIsOpen} />

<SignatureStrip />

<QuickFacts setIsOpen={setIsOpen} />

<Philosophy setIsOpen={setIsOpen} />

<PlotTiers setIsOpen={setIsOpen} />

<Amenities setIsOpen={setIsOpen} />

<VideoTour setIsOpen={setIsOpen} />

<MasterPlan setIsOpen={setIsOpen} />

<Location setIsOpen={setIsOpen} />

<Gallery setIsOpen={setIsOpen} />

<WhyInvest setIsOpen={setIsOpen} />

<Footer />


        
<FloatStack setIsOpen={setIsOpen} />


      </main>
      <EnquireModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
