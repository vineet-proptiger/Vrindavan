import React from 'react';
import { DiyaIcon } from '../ThemeIcons';

export default function Philosophy({ setIsOpen }) {
  return (
    <>
      <section className="section-pad" style={{'background': 'var(--ivory)'}}>
  <div className="container grid-2">
    <div>
      <p className="devanagari" style={{'color': 'var(--gold-warm)', 'fontSize': '15px', 'margin': '0 0 12px'}}><DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /> ॥ श्री राधे ॥ <DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /></p>
      <p className="eyebrow" style={{'color': 'var(--red)'}}>The Philosophy</p>
      <h2 className="h-display">A canvas, <em style={{'color': 'var(--red)'}}>yours to design</em>.<br/>A land, <em style={{'color': 'var(--peacock)', 'fontStyle': 'italic'}}>divinely blessed</em>.</h2>
      <div style={{'width': '50px', 'height': '2px', 'background': 'var(--red)', 'marginBottom': '32px'}}></div>
      <p style={{'fontSize': '16px', 'color': 'var(--ink-soft)', 'margin': '0 0 20px', 'fontWeight': '400'}}>A holistic planned township in Vrindavan — Lord Krishna's homeland — where Hero Group has reimagined plotted living with biophilic design, 80% open spaces, and the engineering rigour of one of India's most trusted business houses.</p>
      <p style={{'fontSize': '16px', 'color': 'var(--ink-soft)', 'margin': '0 0 20px', 'fontWeight': '400'}}>Here, plots aren't merely parcels of land. They are freehold, customizable canvases — design a villa, a bungalow, or a multi-storey home for your family, all within a serene, RERA-approved community.</p>
      <p style={{'fontFamily': "'Cormorant Garamond',serif", 'fontStyle': 'italic', 'fontSize': '22px', 'color': 'var(--ink)', 'margin': '30px 0'}}>— Own a piece of the holy valley. Build the home you've always envisioned.</p>
      <div style={{'display': 'flex', 'gap': '12px', 'flexWrap': 'wrap'}}>
        <button onClick={() => setIsOpen(true)} className="btn-cta btn-whatsapp"><span className="ico">✆</span> WhatsApp Us</button>
        <button onClick={() => setIsOpen(true)} className="btn-cta btn-red"><span className="ico">▦</span> Master Plan</button>
      </div>
    </div>
    <div>
      <video 
        src="/videos/project-video.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{'width': '100%', 'boxShadow': '0 30px 60px rgba(0,0,0,0.18)', 'borderRadius': '8px'}} 
      />
    </div>
  </div>
</section>
    </>
  );
}
