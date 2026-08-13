import React from 'react';

export default function Hero({ setIsOpen }) {
  return (
    <>
      <section className="hero">
  <div style={{'maxWidth': '980px'}}>
    <p className="devanagari" style={{'color': 'var(--gold-warm)', 'fontSize': '18px', 'margin': '0 0 22px', 'letterSpacing': '0.06em'}}>॥ श्री वृन्दावन धाम ॥</p>
    <div style={{'display': 'inline-block', 'borderTop': '1px solid var(--red)', 'borderBottom': '1px solid var(--red)', 'padding': '8px 28px', 'marginBottom': '36px'}}>
      <p className="eyebrow" style={{'color': 'var(--red)', 'margin': '0'}}>New Launch &nbsp;·&nbsp; Vrindavan, Mathura</p>
    </div>
    <h1 className="h-hero">Hero Homes <em style={{'color': 'var(--red)', 'fontStyle': 'italic'}}>Plots</em></h1>
    <p style={{'fontFamily': "'Cormorant Garamond',Georgia,serif", 'fontSize': '24px', 'margin': '0 0 14px', 'fontStyle': 'italic', 'fontWeight': '400', 'color': 'var(--ink-soft)'}}>The iconic life — in Lord Krishna's homeland.</p>
    <p style={{'fontSize': '13px', 'margin': '0 0 48px', 'letterSpacing': '4px', 'textTransform': 'uppercase', 'color': 'var(--ink-mute)', 'fontWeight': '500'}}>Freehold Residential Plots &nbsp;·&nbsp; Customizable Sizes &nbsp;·&nbsp; 80% Open Spaces</p>
    <div className="cta-row">
      <a href="https://wa.me/919718344024?text=Hi%20I%20am%20interested%20in%20Hero%20Homes%20Plots%20in%20Vrindavan" target="_blank" rel="noopener noreferrer" className="btn-cta btn-whatsapp"><span className="ico">✆</span> WHATSAPP</a>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-red"><span className="ico">📥</span> Get Brochure</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-outline"><span className="ico">▶</span> 360° Video Tour</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-red"><span className="ico">▦</span> Master Plan</button>
    </div>
  </div>
</section>
    </>
  );
}
