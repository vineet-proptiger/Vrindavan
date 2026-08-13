import React from 'react';

export default function FloatStack({ setIsOpen }) {
  return (
    <>
      <div className="float-stack">
  <button onClick={() => setIsOpen(true)} className="float-btn float-red">▦</button>
  <button onClick={() => setIsOpen(true)} className="float-btn float-outline">▶</button>
  <button onClick={() => setIsOpen(true)} className="float-btn float-wa">✆</button>
</div>
    </>
  );
}
