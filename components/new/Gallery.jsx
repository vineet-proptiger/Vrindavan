import React from 'react';

export default function Gallery({ setIsOpen }) {
  return (
    <>
      <section className="section-pad" style={{'background': 'var(--cream-deep)', 'color': 'var(--ink)'}}>
  <div className="container">
    <div style={{'textAlign': 'center', 'marginBottom': '60px'}}>
      <p className="eyebrow" style={{'color': 'var(--red)'}}>From Every Angle</p>
      <h2 className="h-display">A <em style={{'color': 'var(--red)', 'fontStyle': 'italic'}}>cinematic</em> portrait.</h2>
      <div className="divider"></div>
    </div>

    <div className="gallery-top">
      <img decoding="async" src="assets/1c839fbacd.webp" alt="Hero Homes Vrindavan View 1" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover', 'gridRow': '1/3'}} />
      <img decoding="async" src="assets/094ab98948.webp" alt="Hero Homes Vrindavan View 2" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} />
      <img decoding="async" src="assets/c147fbce24.webp" alt="Hero Homes Vrindavan View 3" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} />
    </div>
    <div className="gallery-bot">
      <img decoding="async" src="assets/dfedf4bc7e.webp" alt="Hero Homes Vrindavan View 4" style={{'width': '100%', 'height': '260px', 'objectFit': 'cover'}} />
      <img decoding="async" src="assets/ecf565a758.webp" alt="Hero Homes Vrindavan View 5" style={{'width': '100%', 'height': '260px', 'objectFit': 'cover'}} />
      <img decoding="async" src="assets/31942c40e9.webp" alt="Hero Homes Vrindavan View 6" style={{'width': '100%', 'height': '260px', 'objectFit': 'cover'}} />
    </div>

    <div className="cta-row" style={{'marginTop': '50px'}}>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-whatsapp"><span className="ico">✆</span> Download Gallery</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-outline"><span className="ico">▶</span> 360° Video Tour</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-red"><span className="ico">▦</span> Master Plan</button>
    </div>
  </div>
</section>
    </>
  );
}
