import React from 'react';

export default function FloatStack({ setIsOpen }) {
  return (
    <>
      <div className="float-stack">
        <a href="tel:+919718344024" className="float-btn float-red" aria-label="Call Now" title="Call Now" style={{ fontSize: '24px' }}>
          &#9638;
        </a>
        <button onClick={() => setIsOpen(true)} className="float-btn float-outline" aria-label="Enquiry Now" title="Enquiry Now" style={{ fontSize: '24px' }}>
          &#9654;
        </button>
        <a href="https://wa.me/919718344024?text=Hi%20I%20am%20interested%20in%20Hero%20Homes%20Plots%20in%20Vrindavan" target="_blank" rel="noopener noreferrer" className="float-btn float-wa" aria-label="WhatsApp" title="WhatsApp" style={{ fontSize: '24px' }}>
          &#10118;
        </a>
      </div>
    </>
  );
}

