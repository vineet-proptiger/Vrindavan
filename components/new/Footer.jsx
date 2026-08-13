import React from 'react';

export default function Footer({ setIsOpen }) {
  return (
    <>
      <footer style={{'background': '#ffffff', 'color': 'var(--ink-mute)', 'padding': '70px 24px 30px', 'textAlign': 'center', 'borderTop': '1px solid var(--rule)'}}>
  <div style={{'maxWidth': '900px', 'margin': '0 auto'}}>
    <img decoding="async" src="assets/08a746243f.png" alt="Hero Homes" style={{'height': '50px', 'margin': '0 auto 28px'}} />
    <p className="devanagari" style={{'color': 'var(--gold-warm)', 'fontSize': '16px', 'margin': '0 0 14px', 'letterSpacing': '0.08em'}}>॥ श्री वृन्दावन धाम ॥</p>
    <p style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '22px', 'fontStyle': 'italic', 'color': 'var(--red)', 'margin': '0 0 24px'}}>Hero Homes Plots Vrindavan</p>
    <p style={{'margin': '0 0 26px', 'fontSize': '13px', 'letterSpacing': '2px', 'color': 'var(--ink-soft)'}}>Vrindavan · Mathura · Uttar Pradesh</p>
    <div style={{'height': '1px', 'background': 'var(--rule)', 'margin': '30px 0'}}></div>
    <p style={{'fontSize': '10px', 'color': 'var(--ink-mute)', 'margin': '0 0 8px', 'lineHeight': '1.8', 'letterSpacing': '0.5px'}}>
      A RERA-approved residential plotted development by Hero Group. Disclaimer: This site is operated by an authorized channel partner of Hero Homes for marketing and informational purposes only. The content does not constitute an offer or contract. All renders, plans, and prices are indicative and subject to change without notice. Please verify all particulars with the developer and the official RERA portal before any commitment.
    </p>
    <p style={{'fontSize': '10px', 'color': 'var(--ink-mute)', 'margin': '0', 'letterSpacing': '1px'}}>© 2026 Hero Homes Plots Vrindavan · All Rights Reserved</p>
  </div>
</footer>
    </>
  );
}
