import React from 'react';

export default function Location({ setIsOpen }) {
  return (
    <>
      <section className="section-pad" style={{'background': 'var(--ivory)'}}>
  <div className="container">
    <div style={{'textAlign': 'center', 'marginBottom': '60px'}}>
      <p className="eyebrow" style={{'color': 'var(--red)'}}>The Address</p>
      <h2 className="h-display">At the <em style={{'color': 'var(--red)', 'fontStyle': 'italic'}}>heart</em> of the holy valley.</h2>
      <div className="divider"></div>
    </div>
    <div className="grid-loc">
      <div>
        <img decoding="async" src="assets/03c7027ff7.webp" alt="Hero Homes Vrindavan Location" style={{'width': '100%', 'boxShadow': '0 30px 60px rgba(0,0,0,0.18)', 'background': '#fff'}} />
      </div>
      <div>
        <p style={{'color': 'var(--ink-soft)', 'fontSize': '15px', 'margin': '0 0 24px', 'fontWeight': '400'}}>Set in Vrindavan, Lord Krishna's homeland — with seamless access via NH 19 (the Golden Quadrilateral), the upcoming Delhi–Mumbai Expressway and Yamuna Expressway, plus IGI &amp; the new Jewar Airport.</p>
        <ul style={{'listStyle': 'none', 'padding': '0', 'margin': '0 0 30px'}}>
          <li style={{'padding': '18px 0', 'borderBottom': '1px solid var(--rule)', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': '10px'}}><span style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '19px', 'color': 'var(--ink)'}}>NH 19 — Golden Quadrilateral</span><span style={{'color': 'var(--red)', 'fontSize': '12px', 'letterSpacing': '2px', 'textTransform': 'uppercase', 'fontWeight': '600'}}>Connected</span></li>
          <li style={{'padding': '18px 0', 'borderBottom': '1px solid var(--rule)', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': '10px'}}><span style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '19px', 'color': 'var(--ink)'}}>Mathura Junction Railway</span><span style={{'color': 'var(--red)', 'fontSize': '12px', 'letterSpacing': '2px', 'textTransform': 'uppercase', 'fontWeight': '600'}}>Nearby</span></li>
          <li style={{'padding': '18px 0', 'borderBottom': '1px solid var(--rule)', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': '10px'}}><span style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '19px', 'color': 'var(--ink)'}}>Yamuna Expressway</span><span style={{'color': 'var(--red)', 'fontSize': '12px', 'letterSpacing': '2px', 'textTransform': 'uppercase', 'fontWeight': '600'}}>Direct Access</span></li>
          <li style={{'padding': '18px 0', 'borderBottom': '1px solid var(--rule)', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': '10px'}}><span style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '19px', 'color': 'var(--ink)'}}>Jewar Intl Airport (upcoming)</span><span style={{'color': 'var(--red)', 'fontSize': '12px', 'letterSpacing': '2px', 'textTransform': 'uppercase', 'fontWeight': '600'}}>~90 min</span></li>
          <li style={{'padding': '18px 0', 'borderBottom': '1px solid var(--rule)', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': '10px'}}><span style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '19px', 'color': 'var(--ink)'}}>Delhi (via NH 19)</span><span style={{'color': 'var(--red)', 'fontSize': '12px', 'letterSpacing': '2px', 'textTransform': 'uppercase', 'fontWeight': '600'}}>~2.5 hrs</span></li>
          <li style={{'padding': '18px 0', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': '10px'}}><span style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '19px', 'color': 'var(--ink)'}}>Agra &amp; Mathura</span><span style={{'color': 'var(--red)', 'fontSize': '12px', 'letterSpacing': '2px', 'textTransform': 'uppercase', 'fontWeight': '600'}}>Adjacent</span></li>
        </ul>
        <div style={{'display': 'flex', 'gap': '12px', 'flexWrap': 'wrap'}}>
          <button onClick={() => setIsOpen(true)} className="btn-cta btn-whatsapp"><span className="ico">✆</span> Get Location Map</button>
          <button onClick={() => setIsOpen(true)} className="btn-cta btn-red"><span className="ico">★</span> Free Site Visit</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
