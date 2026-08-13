import React from 'react';

export default function PlotTiers({ setIsOpen }) {
  return (
    <>
      <section className="section-pad" style={{'background': '#ffffff', 'color': 'var(--ink)'}}>
  <div className="container">
    <div style={{'textAlign': 'center', 'marginBottom': '70px'}}>
      <div className="ornament"><span className="feather">❋</span></div>
      <p className="eyebrow" style={{'color': 'var(--red)'}}>Bespoke Plot Sizes</p>
      <h2 className="h-display">Plots crafted for <em style={{'color': 'var(--red)', 'fontStyle': 'italic'}}>connoisseurs</em>.</h2>
      <p className="devanagari" style={{'color': 'var(--gold-warm)', 'fontSize': '14px', 'margin': '14px 0 0', 'letterSpacing': '0.06em'}}>॥ अपना घर अपना धाम ॥</p>
    </div>
    <div className="plot-grid">

      <div className="plot-card">
        <p style={{'color': 'var(--ink-mute)', 'fontSize': '11px', 'letterSpacing': '3px', 'textTransform': 'uppercase', 'margin': '0 0 18px'}}>The Garden Plots</p>
        <div style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '34px', 'color': 'var(--ink)', 'margin': '0 0 6px'}}>Cozy Villa</div>
        <div style={{'color': 'var(--ink-mute)', 'fontSize': '12px', 'letterSpacing': '2px', 'textTransform': 'uppercase', 'margin': '0 0 24px'}}>Sizes Coming Soon</div>
        <div style={{'width': '30px', 'height': '1px', 'background': 'var(--ink-mute)', 'margin': '0 auto 24px'}}></div>
        <div style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '30px', 'color': 'var(--ink-soft)', 'margin': '0 0 26px'}}>On Request</div>
        <button onClick={() => setIsOpen(true)} className="btn-cta btn-whatsapp"><span className="ico">✆</span> Enquire</button>
      </div>

      <div className="plot-card">
        <p style={{'color': 'var(--red)', 'fontSize': '11px', 'letterSpacing': '3px', 'textTransform': 'uppercase', 'margin': '0 0 18px'}}>The Estate Plots</p>
        <div style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '34px', 'color': 'var(--ink)', 'margin': '0 0 6px'}}>Spacious Bungalow</div>
        <div style={{'color': 'var(--ink-mute)', 'fontSize': '12px', 'letterSpacing': '2px', 'textTransform': 'uppercase', 'margin': '0 0 24px'}}>Sizes Coming Soon</div>
        <div style={{'width': '30px', 'height': '1px', 'background': 'var(--red)', 'margin': '0 auto 24px'}}></div>
        <div style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '30px', 'color': 'var(--red)', 'margin': '0 0 26px'}}>On Request</div>
        <button onClick={() => setIsOpen(true)} className="btn-cta btn-whatsapp"><span className="ico">✆</span> Enquire</button>
      </div>

      <div className="plot-card">
        <p style={{'color': 'var(--ink-mute)', 'fontSize': '11px', 'letterSpacing': '3px', 'textTransform': 'uppercase', 'margin': '0 0 18px'}}>The Signature Plots</p>
        <div style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '34px', 'color': 'var(--ink)', 'margin': '0 0 6px'}}>Duplex Villa</div>
        <div style={{'color': 'var(--ink-mute)', 'fontSize': '12px', 'letterSpacing': '2px', 'textTransform': 'uppercase', 'margin': '0 0 24px'}}>Sizes Coming Soon</div>
        <div style={{'width': '30px', 'height': '1px', 'background': 'var(--ink-mute)', 'margin': '0 auto 24px'}}></div>
        <div style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '30px', 'color': 'var(--ink-soft)', 'margin': '0 0 26px'}}>On Request</div>
        <button onClick={() => setIsOpen(true)} className="btn-cta btn-whatsapp"><span className="ico">✆</span> Enquire</button>
      </div>

    </div>
    <p style={{'textAlign': 'center', 'marginTop': '30px', 'fontSize': '11px', 'color': 'var(--ink-mute)', 'letterSpacing': '2px'}}>*Plot sizes and pricing announced shortly. Pre-launch EOI bookings open. T&amp;C apply.</p>
    <div className="cta-row" style={{'marginTop': '30px'}}>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-whatsapp"><span className="ico">✆</span> Pre-Launch Price List</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-red"><span className="ico">▦</span> Master Plan</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-outline"><span className="ico">▶</span> 360° Tour</button>
    </div>
  </div>
</section>
    </>
  );
}
