import React from 'react';

export default function QuickFacts({ setIsOpen }) {
  return (
    <>
      <section style={{'background': 'var(--cream-deep)', 'padding': '80px 24px', 'color': 'var(--ink)'}}>
  <div className="container">
    <div className="fact-grid">
      <div className="fact-cell">
        <div className="fact-num">80<span style={{'fontSize': '30px'}}>%</span></div>
        <div style={{'color': 'var(--ink-mute)', 'fontSize': '11px', 'textTransform': 'uppercase', 'letterSpacing': '3px', 'marginTop': '8px'}}>Open &amp; Green Spaces</div>
      </div>
      <div className="fact-cell">
        <div className="fact-num">RERA</div>
        <div style={{'color': 'var(--ink-mute)', 'fontSize': '11px', 'textTransform': 'uppercase', 'letterSpacing': '3px', 'marginTop': '8px'}}>Approved Project</div>
      </div>
      <div className="fact-cell">
        <div className="fact-num">100<span style={{'fontSize': '30px'}}>%</span></div>
        <div style={{'color': 'var(--ink-mute)', 'fontSize': '11px', 'textTransform': 'uppercase', 'letterSpacing': '3px', 'marginTop': '8px'}}>Freehold Plots</div>
      </div>
      <div className="fact-cell">
        <div className="fact-num">NH<span style={{'fontSize': '30px'}}>-19</span></div>
        <div style={{'color': 'var(--ink-mute)', 'fontSize': '11px', 'textTransform': 'uppercase', 'letterSpacing': '3px', 'marginTop': '8px'}}>Golden Quadrilateral</div>
      </div>
    </div>
    <div className="cta-row" style={{'marginTop': '50px'}}>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-red"><span className="ico">★</span> Free Site Visit</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-outline"><span className="ico">▶</span> 360° Tour</button>
    </div>
  </div>
</section>
    </>
  );
}
