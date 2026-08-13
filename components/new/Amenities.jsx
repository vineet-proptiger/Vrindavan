import React from 'react';

export default function Amenities({ setIsOpen }) {
  return (
    <>
      <section className="section-pad" style={{'background': 'var(--ivory)'}}>
  <div className="container">
    <div style={{'textAlign': 'center', 'marginBottom': '60px'}}>
      <div className="ornament ornament-gold"><span className="mark">❋</span></div>
      <p className="eyebrow" style={{'color': 'var(--red)'}}>The Privileges</p>
      <h2 className="h-display">An <em style={{'color': 'var(--red)', 'fontStyle': 'italic'}}>orchestra</em> of indulgences.</h2>
      <div className="divider"></div>
    </div>

    <div className="amen-list">
      <div className="amen-row"><span className="num">i</span><span className="title">Grand Clubhouse</span><span className="tag">Social anchor</span></div>
      <div className="amen-row"><span className="num">ii</span><span className="title">Resort-Style Pool</span><span className="tag">Leisure</span></div>
      <div className="amen-row amen-temple"><span className="num">॥</span><span className="title">Temple Complex</span><span className="tag">Sanctified</span></div>
      <div className="amen-row"><span className="num">iv</span><span className="title">Sports Arena</span><span className="tag">Active living</span></div>
      <div className="amen-row"><span className="num">v</span><span className="title">Wellness &amp; Yoga</span><span className="tag">Mindful</span></div>
      <div className="amen-row"><span className="num">vi</span><span className="title">Kids &amp; Senior Zones</span><span className="tag">For every age</span></div>
      <div className="amen-row"><span className="num">vii</span><span className="title">80% Open Greens</span><span className="tag">Botanical</span></div>
      <div className="amen-row"><span className="num">viii</span><span className="title">24×7 Smart Security</span><span className="tag">Protected</span></div>
    </div>

    <div className="cta-row" style={{'marginTop': '54px'}}>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-whatsapp"><span className="ico">✆</span> Explore Amenities</button>
      <button onClick={() => setIsOpen(true)} className="btn-cta btn-red"><span className="ico">★</span> Site Visit</button>
    </div>
  </div>
</section>
    </>
  );
}
