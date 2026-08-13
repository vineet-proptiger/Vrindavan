import React from 'react';

export default function TopStrip({ setIsOpen }) {
  return (
    <>
      <div style={{'background': '#ffffff', 'color': 'var(--red)', 'textAlign': 'center', 'padding': '11px 12px', 'fontSize': '12px', 'letterSpacing': '3px', 'textTransform': 'uppercase', 'borderBottom': '1px solid var(--rule)'}} className="top-strip-text">
  <span className="devanagari" style={{'color': 'var(--gold-warm)', 'textTransform': 'none', 'letterSpacing': '0.05em', 'marginRight': '14px'}}>॥ राधे राधे ॥</span> Bookings Open <span className="sep">&nbsp;·&nbsp;</span> Pre-Launch Offer <span className="sep">&nbsp;·&nbsp;</span> RERA Approved
</div>
    </>
  );
}
