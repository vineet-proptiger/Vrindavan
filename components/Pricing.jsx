import { Check } from "lucide-react";
import { PeacockFeatherIcon, FluteIcon, DiyaIcon } from './ThemeIcons';

const F_SANS = "var(--font-sans), Open Sans, sans-serif";
const GOLD = "var(--color-gold, #C9A96E)";
const PRIMARY = "var(--color-primary, #3A2A0E)";

const units = [
  {
    // category: "The Garden Plots",
    type: "Premium Plots",
    size: "125 Sq.Yds",
    price: "1.10 Cr*",
    oldPrice: null,
    btnText: "Get Details",
    features: [
      <>Excellent Connectivity to<br /><span className="whitespace-nowrap">Vrindavan’s Key Destinations</span></>,
      "Premium Specifications",
      "Luxury Finishes",
    ],
  },
  {
    // category: "The Estate Plots",
    type: "Premium Plots",
    size: "150 Sq.Yds",
    price: "Price on Request",
    oldPrice: null,
    btnText: "Get Details",
    features: [
      <>Excellent Connectivity to<br /><span className="whitespace-nowrap">Vrindavan’s Key Destinations</span></>,
      "Premium Specifications",
      "Luxury Finishes",
    ],
  },
  {
    // category: "The Signature Plots",
    type: "Premium Plots",
    size: "200 Sq.Yds",
    price: "Price on Request",
    oldPrice: null,
    btnText: "Get Details",
    features: [
      <>Excellent Connectivity to<br /><span className="whitespace-nowrap">Vrindavan’s Key Destinations</span></>,
      "Premium Specifications",
      "Luxury Finishes",
    ],
  },
];

const CurvedCorners = ({ bg = 'var(--color-bg-muted)', color = '#D5C2A8' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopLeftRadius: '18px' },
  ]
  return corners.map((c, i) => (
    <span key={i} style={{ position: 'absolute', ...c, width: '22px', height: '22px', background: bg, display: 'block', zIndex: 20 }} />
  ))
}

const Pricing = ({ setIsOpen }) => {
  return (
    <section
      id="pricing"
      className="py-10 sm:py-14 px-4 md:px-8 relative overflow-hidden"
      style={{ scrollMarginTop: '80px', background: "var(--color-bg-muted)" }}
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`,
          filter: "blur(40px)"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* NEW HEADING STYLE */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="ornament"><span className="feather">❋</span></div>
          <h2 data-aos="flip-left" data-aos-delay="500" style={{
            fontFamily: "var(--font-jost), Montserrat, sans-serif", fontWeight: '700', fontSize: '17px',
            color: '#1E6D7A', letterSpacing: '0.1em',
            textTransform: 'capitalize', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span className="heading-stick" style={{ color: '#1E6D7A', fontWeight: '800', marginRight: '10px' }}>||</span>
            <span style={{ color: 'var(--red, #ed1c24)' }}>Configurations &amp;</span>&nbsp;Pricing
            <span className="heading-stick" style={{ color: 'var(--red, #ed1c24)', fontWeight: '800', marginLeft: '10px' }}>||</span>
          </h2>
          <p className="devanagari" style={{color:'var(--gold-warm)',fontSize:'14px',margin:'14px 0 0',letterSpacing:'0.06em'}}><DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /> ॥ अपना घर अपना धाम ॥ <DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /></p>
        </div>

        {/* DISTINCT PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 max-w-6xl mx-auto mt-10">
          {units.map((unit, idx) => {
            const isPopular = idx === 1;
            
            return (
              <div 
                key={idx} 
                className={`relative flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2`}
                data-aos="fade-up"
                data-aos-delay={(idx * 150) + 100}
                style={{
                  background: isPopular ? '#FFFDF2' : '#FFFFFF',
                  border: isPopular ? `2px solid #C9A96E` : `1px solid #D5C2A8`,
                  borderRadius: '16px',
                  padding: '40px 30px',
                  boxShadow: isPopular ? '0 20px 40px rgba(201,169,110,0.15)' : '0 10px 30px rgba(0,0,0,0.05)',
                  overflow: 'hidden'
                }}
              >
                {/* Popular Badge (Corner Ribbon) */}
                {isPopular && (
                  <div style={{
                    position: 'absolute', top: '24px', right: '-36px',
                    background: '#c8102e', color: '#fff',
                    padding: '6px 40px', transform: 'rotate(45deg)',
                    fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em',
                    boxShadow: '0 4px 10px rgba(200, 16, 46, 0.2)', fontFamily: F_SANS,
                    textAlign: 'center', zIndex: 10
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Title / Badges */}
                  <div className="mb-6 flex flex-wrap gap-2 items-center">
                    <span 
                      style={{ 
                        display: 'inline-flex',
                        background: 'rgba(201, 169, 110, 0.1)', 
                        color: isPopular ? '#c8102e' : '#1E6D7A',
                        padding: '6px 16px', 
                        borderRadius: '100px',
                        fontFamily: F_SANS,
                        fontSize: '12px',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        border: '1px solid rgba(201, 169, 110, 0.3)'
                      }}
                    >
                      {unit.type}
                    </span>
                  </div>
                  
                  <div className="flex items-end gap-2 mb-2">
                    <p className="text-2xl font-bold" style={{ fontFamily: F_SANS, color: PRIMARY }}>
                      {unit.size}
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className="mb-8 pb-8" style={{ borderBottom: `1px solid #f0ede6` }}>
                    <span className="text-[10px] uppercase tracking-[0.15em] font-medium block mb-2" style={{ fontFamily: F_SANS, color: '#9CA3AF' }}>Starting At</span>
                    <div className="flex items-baseline gap-3">
                      <p className={`font-extrabold whitespace-nowrap ${unit.price.length > 12 ? 'text-xl md:text-[22px]' : 'text-3xl md:text-4xl'}`} style={{ fontFamily: F_SANS, color: GOLD }}>
                        {unit.price}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-10">
                    {unit.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0 flex items-center justify-center">
                          <DiyaIcon size={16} />
                        </div>
                        <span className="font-medium text-[14px]" style={{ fontFamily: F_SANS, color: '#4A4540' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn-cta btn-red w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 font-bold flex justify-center items-center gap-2"
                  style={{ 
                    borderRadius: "8px", 
                    fontFamily: F_SANS,
                  }}
                >
                  {unit.btnText}
                </button>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Pricing;
