import re

file_path = '/Users/mac/Desktop/tata-ghansoli-new-domain/app/page.js'

with open(file_path, 'r') as f:
    content = f.read()

# Add import if missing
if 'import { Phone, MessageSquare }' not in content:
    content = content.replace("import dynamic from 'next/dynamic'", "import dynamic from 'next/dynamic'\nimport { Phone, MessageSquare } from 'lucide-react'")

# Replace the sticky-bottom-bar block
new_bar = """<div className="fixed bottom-0 left-0 right-0 z-[100] flex shadow-[0_-4px_15px_rgba(0,0,0,0.1)] md:hidden">
        {/* WhatsApp - Left */}
        <a 
          href="https://wa.me/919718344024?text=Hi%2C%20I%20am%20interested%20in%20Tata%20Orbis%20Ghansoli" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 bg-[#25D366] text-white py-2.5 flex flex-col items-center justify-center gap-1 hover:bg-[#20bd5a] transition-colors"
        >
          <svg className="animate-gentle-pulse" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="text-[12px] font-medium tracking-wide">WhatsApp</span>
        </a>

        {/* Enquire Now - Middle */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="flex-1 bg-[#dfb557] text-[#111827] py-2.5 flex flex-col items-center justify-center gap-1 hover:brightness-105 transition-all"
        >
          <MessageSquare size={20} className="text-[#111827] animate-gentle-pulse" />
          <span className="text-[12px] font-bold tracking-wider uppercase">Enquire Now</span>
        </button>

        {/* Call Now - Right */}
        <a 
          href="tel:+919718344024" 
          className="flex-1 bg-[#0096FF] text-white py-2.5 flex flex-col items-center justify-center gap-1 hover:bg-[#0080FF] transition-colors"
        >
          <Phone size={20} className="text-white animate-phone-ring" />
          <span className="text-[12px] font-medium tracking-wide">Call Now</span>
        </a>
      </div>"""

# Replace the block from <div className="sticky-bottom-bar to the closing </div> before <div className="h-10 lg:hidden" />
pattern = r'<div className="sticky-bottom-bar.*?</svg>\s*<span[^>]*>WHATSAPP</span>\s*</a>\s*</div>\s*</div>'
content = re.sub(pattern, new_bar, content, flags=re.DOTALL)

with open(file_path, 'w') as f:
    f.write(content)

print("Updated page.js")
