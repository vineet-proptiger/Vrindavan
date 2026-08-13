import React from 'react';

export default function VideoTour({ setIsOpen }) {
  return (
    <>
      <section className="video-section">
  <div className="container" style={{'textAlign': 'center'}}>
    <p className="eyebrow" style={{'color': 'var(--red)'}}>360° Video Tour</p>
    <h2 className="h-display">A film, <em style={{'color': 'var(--red)', 'fontStyle': 'italic'}}>not a brochure</em>.</h2>
    <div className="divider" style={{'marginBottom': '14px'}}></div>
    <p style={{'color': 'var(--ink-soft)', 'fontSize': '14px', 'letterSpacing': '0.04em', 'fontStyle': 'italic', 'fontFamily': "'Cormorant Garamond',serif"}}>Walk through Hero Homes Plots — connectivity, masterplan &amp; amenities — in 90 seconds on WhatsApp.</p>
    <button onClick={() => setIsOpen(true)} className="video-card">
      <img decoding="async" src="assets/764613ef8c.webp" alt="Hero Homes Vrindavan — 360° video tour preview" />
      <div className="play-wrap">
        <span className="play-btn" aria-hidden="true">▶</span>
        <span className="video-caption-over">Watch the 360° Tour<small>On WhatsApp · 90 Seconds</small></span>
      </div>
    </button>
  </div>
</section>
    </>
  );
}
