import React from 'react';

export default function Header({ setIsOpen }) {
  return (
    <>
      <header className="site-header">
  <img decoding="async" src="assets/08a746243f.png" alt="Hero Homes" />
  <div className="header-ctas">
    <button onClick={() => setIsOpen(true)} className="btn-cta btn-whatsapp"><span className="ico">✆</span> WhatsApp</button>
  </div>
</header>
    </>
  );
}
