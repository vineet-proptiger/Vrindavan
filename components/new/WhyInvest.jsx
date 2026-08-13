import React from 'react';

export default function WhyInvest({ setIsOpen }) {
  return (
    <>
      <section className="section-pad parallax" style={{'background': "linear-gradient(rgba(250,246,240,0.82),rgba(250,246,240,0.94)),url('https://heroplots.in/wp-content/uploads/2026/05/hero-vrindavan-aerial-hero.webp') center/cover no-repeat", 'color': 'var(--ink)'}}>
  <div className="container" style={{'textAlign': 'center'}}>
    <p className="eyebrow" style={{'color': 'var(--red)'}}>The Privilege</p>
    <h2 className="h-display">A legacy, <em style={{'color': 'var(--red)', 'fontStyle': 'italic'}}>trusted</em>.</h2>
    <div className="divider" style={{'marginBottom': '60px'}}></div>
    <div className="why-grid">
      <div>
        <div style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '48px', 'color': 'var(--red)', 'marginBottom': '14px'}}>⌾</div>
        <h4 style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '22px', 'fontWeight': '500', 'margin': '0 0 12px', 'color': 'var(--ink)'}}>Hero Group Trust</h4>
        <p style={{'fontSize': '13px', 'color': 'var(--ink-mute)', 'margin': '0', 'fontWeight': '400'}}>A century-old name in Indian industry.</p>
      </div>
      <div>
        <div style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '48px', 'color': 'var(--peacock)', 'marginBottom': '14px'}}>↗</div>
        <h4 style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '22px', 'fontWeight': '500', 'margin': '0 0 12px', 'color': 'var(--ink)'}}>Jewar Airport Belt</h4>
        <p style={{'fontSize': '13px', 'color': 'var(--ink-mute)', 'margin': '0', 'fontWeight': '400'}}>High appreciation along the Yamuna Expressway.</p>
      </div>
      <div>
        <div style={{'fontFamily': "'Tiro Devanagari Hindi',serif", 'fontStyle': 'italic', 'fontSize': '42px', 'color': 'var(--gold-warm)', 'marginBottom': '14px', 'lineHeight': '1'}}>श्री</div>
        <h4 style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '22px', 'fontWeight': '500', 'margin': '0 0 12px', 'color': 'var(--ink)'}}>Spiritual Sanctity</h4>
        <p style={{'fontSize': '13px', 'color': 'var(--ink-mute)', 'margin': '0', 'fontWeight': '400'}}>A home in Lord Krishna's holy land.</p>
      </div>
      <div>
        <div style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '48px', 'color': 'var(--red)', 'marginBottom': '14px'}}>◈</div>
        <h4 style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '22px', 'fontWeight': '500', 'margin': '0 0 12px', 'color': 'var(--ink)'}}>Freehold &amp; RERA</h4>
        <p style={{'fontSize': '13px', 'color': 'var(--ink-mute)', 'margin': '0', 'fontWeight': '400'}}>Pristine titles. RERA-approved community.</p>
      </div>
    </div>
    <div className="cta-row" style={{'marginTop': '60px'}}>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-whatsapp"><span className="ico">✆</span> Book a Site Visit</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-red"><span className="ico">★</span> Pre-Launch Offers</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-outline"><span className="ico">▦</span> Master Plan</button>
    </div>
  </div>
</section>
    </>
  );
}
