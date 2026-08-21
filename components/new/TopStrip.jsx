import React from 'react';
import { DiyaIcon } from '../ThemeIcons';

export default function TopStrip({ setIsOpen }) {
  return (
    <>
      <div style={{'background': '#ffffff', 'color': 'var(--red)', 'textAlign': 'center', 'padding': '11px 12px', 'fontSize': '12px', 'letterSpacing': '3px', 'textTransform': 'uppercase', 'borderBottom': '1px solid var(--rule)'}} className="top-strip-text">
  <span className="devanagari" style={{'color': 'var(--gold-warm)', 'textTransform': 'none', 'letterSpacing': '0.05em', 'marginRight': '14px'}}><DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /> ॥ राधे राधे ॥ <DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /></span> Bookings Open <span className="sep">&nbsp;·&nbsp;</span> Pre-Launch Offer <span className="sep">&nbsp;·&nbsp;</span> RERA Approved
</div>
    </>
  );
}
