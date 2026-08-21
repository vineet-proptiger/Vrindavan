import React from 'react';
import { DiyaIcon } from '../ThemeIcons';

export default function SignatureStrip({ setIsOpen }) {
  return (
    <>
      <section style={{'background': '#ffffff', 'padding': '70px 24px', 'textAlign': 'center', 'borderBottom': '1px solid var(--rule)'}}>
  <div className="ornament"><span className="feather">❋</span></div>
  <p className="signature-quote" style={{'fontFamily': "'Cormorant Garamond',serif", 'fontSize': '28px', 'fontStyle': 'italic', 'margin': '0 auto', 'color': 'var(--ink)', 'maxWidth': '880px', 'lineHeight': '1.5'}}>"A holistic township in the holy valley of Vrindavan — where modern luxury meets centuries of spiritual heritage, all anchored by the Hero Group's century-old name."</p>
  <p className="devanagari" style={{'color': 'var(--gold-warm)', 'fontSize': '16px', 'margin': '24px 0 0', 'letterSpacing': '0.08em'}}><DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /> ॥ हरे कृष्ण हरे कृष्ण ॥ <DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /></p>
</section>
    </>
  );
}
