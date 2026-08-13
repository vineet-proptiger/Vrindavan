import React from 'react';

export default function MasterPlan({ setIsOpen }) {
  return (
    <>
      <section className="section-pad" style={{'background': '#ffffff', 'color': 'var(--ink)'}}>
  <div className="container" style={{'textAlign': 'center'}}>
    <p className="eyebrow" style={{'color': 'var(--red)'}}>The Master Plan</p>
    <h2 className="h-display">A planned <em style={{'color': 'var(--red)', 'fontStyle': 'italic'}}>tapestry</em>.</h2>
    <div className="divider" style={{'marginBottom': '50px'}}></div>
    <img decoding="async" src="assets/03c7027ff7.webp" alt="Hero Homes Vrindavan Master Plan" style={{'width': '100%', 'maxWidth': '1100px', 'margin': '0 auto', 'border': '1px solid var(--rule)', 'background': '#fff', 'boxShadow': '0 30px 60px rgba(0,0,0,0.12)'}} />
    <div className="cta-row" style={{'marginTop': '40px'}}>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-whatsapp"><span className="ico">✆</span> Get Master Plan</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-red"><span className="ico">▦</span> Plot Layouts</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-outline"><span className="ico">▶</span> 360° Tour</button>
    </div>
  </div>
</section>
    </>
  );
}
