import { MapPin, Navigation } from 'lucide-react'
import { DiyaIcon } from './ThemeIcons'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationItems = [
  { name: 'NH 19 — Golden Quadrilateral', dist: 'Connected' },
  { name: 'Mathura Junction Railway', dist: 'Nearby' },
  { name: 'Yamuna Expressway', dist: 'Direct Access' },
  { name: 'Jewar Intl Airport', dist: '~90 Min (Upcoming)' },
  { name: 'Delhi (via NH 19)', dist: '~2.5 Hrs' },
  { name: 'Agra & Mathura', dist: 'Adjacent' },
]

const Location = () => {
  return (
    <section id="location" style={{
      padding: '80px 0',
      background: '#FFFFFF', 
      position: 'relative'
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">

        {/* Section Header */}
        <div style={{ marginBottom: '50px', textAlign: 'center' }} data-aos="fade-up">
           <div className="ornament"><span className="feather">❋</span></div>
           <h2 style={{
             fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
             color: '#1E6D7A', letterSpacing: '0.1em', textTransform: 'capitalize', margin: 0,
             display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center',
           }}>
             <span className="heading-stick" style={{ color: '#1E6D7A', fontWeight: '800', marginRight: '10px' }}>||</span>
             <span style={{ color: 'var(--red, #ed1c24)' }}>Location</span>&nbsp;Advantages
             <span className="heading-stick" style={{ color: 'var(--red, #ed1c24)', fontWeight: '800', marginLeft: '10px' }}>||</span>
           </h2>
           <p className="devanagari" style={{color:'var(--gold-warm)',fontSize:'14px',margin:'14px 0 0',letterSpacing:'0.06em'}}><DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /> ॥ स्थान लाभ ॥ <DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /></p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT — Map */}
          <div className="w-full lg:w-[55%]" data-aos="fade-right" data-aos-delay="100">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#D5C2A8]" style={{ height: '100%', minHeight: '350px', background: '#FDF8F6' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.376806436367!2d77.58636829999999!3d27.6128443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736d84f301d387%3A0xafcd6d7dac79c151!2sHero%20Homes%20-%20Vrindavan!5e0!3m2!1sen!2sin!4v1786696472902!5m2!1sen!2sin" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              
              {/* Floating Get Directions Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 20,
              }}>
                <a 
                  href="https://maps.google.com/?q=Hero+Homes+-+Vrindavan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta btn-red flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm shadow-xl"
                  style={{ 
                    fontFamily: F_SANS,
                    whiteSpace: 'nowrap',
                    margin: 0
                  }}
                >
                  <Navigation size={16} /> Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Location Points */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center" data-aos="fade-left" data-aos-delay="200">
            <h3 className="mb-5 font-bold text-xl" style={{ fontFamily: F_JOST, color: '#3A2A0E' }}>
              Seamlessly Connected to the World
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {locationItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 px-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{ background: '#FFFDF2', border: '1px solid #EAE5DC' }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm" style={{ background: '#1E6D7A', color: '#FFF' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-0.5" style={{ fontFamily: F_SANS, color: '#3A2A0E' }}>{item.name}</h4>
                    <p className="text-[11px] font-bold uppercase tracking-widest" style={{ fontFamily: F_SANS, color: '#c8102e' }}>{item.dist}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
