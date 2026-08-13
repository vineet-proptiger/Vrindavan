import re
import os

page_path = '/Users/mac/Desktop/Vrindavan/app/page.js'
comp_dir = '/Users/mac/Desktop/Vrindavan/components/new'

os.makedirs(comp_dir, exist_ok=True)

with open(page_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define sections
sections = [
    ("TopStrip", r"(<div style={{'background': '#ffffff', 'color': 'var\(--red\)'.*?</div>)"),
    ("Header", r"\{\/\* ===== HEADER ===== \*\/\}\s*(<header.*?</header>)"),
    ("Hero", r"\{\/\* ===== HERO ===== \*\/\}\s*(<section className=\"hero\".*?</section>)"),
    ("SignatureStrip", r"\{\/\* ===== SIGNATURE STRIP ===== \*\/\}\s*(<section style=\{\{'background': '#ffffff', 'padding': '70px 24px'.*?</section>)"),
    ("QuickFacts", r"\{\/\* ===== QUICK FACTS ===== \*\/\}\s*(<section style=\{\{'background': 'var\(--cream-deep\)'.*?</section>)"),
    ("Philosophy", r"\{\/\* ===== AERIAL FULL-BLEED ===== \*\/\}\s*\{\/\* ===== PHILOSOPHY ===== \*\/\}\s*(<section className=\"section-pad\" style=\{\{'background': 'var\(--ivory\)'\}\}>.*?</section>)"),
    ("PlotTiers", r"\{\/\* ===== CONFIGURATIONS \/ PLOT TIERS ===== \*\/\}\s*(<section className=\"section-pad\" style=\{\{'background': '#ffffff', 'color': 'var\(--ink\)'\}\}>.*?</section>)"),
    ("Amenities", r"\{\/\* ===== AMENITIES — COMPACT 2-COL LIST ===== \*\/\}\s*(<section className=\"section-pad\" style=\{\{'background': 'var\(--ivory\)'\}\}>.*?</section>)"),
    ("VideoTour", r"\{\/\* ===== 360° VIDEO TOUR ===== \*\/\}\s*(<section className=\"video-section\">.*?</section>)"),
    ("MasterPlan", r"\{\/\* ===== MASTER PLAN ===== \*\/\}\s*(<section className=\"section-pad\" style=\{\{'background': '#ffffff', 'color': 'var\(--ink\)'\}\}>.*?</section>)"),
    ("Location", r"\{\/\* ===== LOCATION ===== \*\/\}\s*(<section className=\"section-pad\" style=\{\{'background': 'var\(--ivory\)'\}\}>.*?</section>)"),
    ("Gallery", r"\{\/\* ===== GALLERY ===== \*\/\}\s*(<section className=\"section-pad\" style=\{\{'background': 'var\(--cream-deep\)'.*?</section>)"),
    ("WhyInvest", r"\{\/\* ===== WHY INVEST — LIGHT PARALLAX ===== \*\/\}\s*(<section className=\"section-pad parallax\".*?</section>)"),
    ("Footer", r"\{\/\* ===== FOOTER ===== \*\/\}\s*(<footer.*?</footer>)"),
    ("FloatStack", r"(<div className=\"float-stack\">.*?</div>)"),
]

components_code = ""
imports = ""
new_page_content = content

for name, pattern in sections:
    match = re.search(pattern, new_page_content, re.DOTALL)
    if match:
        block = match.group(0)
        jsx_content = match.group(1)
        
        # Create Component file
        comp_code = f"""import React from 'react';

export default function {name}({{ setIsOpen }}) {{
  return (
    <>
      {jsx_content}
    </>
  );
}}
"""
        with open(os.path.join(comp_dir, f"{name}.jsx"), "w", encoding="utf-8") as f:
            f.write(comp_code)
            
        imports += f"import {name} from '../components/new/{name}';\n"
        
        # Replace block in page_content with component call
        if name in ['Header', 'Hero', 'PlotTiers', 'QuickFacts', 'Philosophy', 'Amenities', 'VideoTour', 'MasterPlan', 'Location', 'Gallery', 'WhyInvest', 'FloatStack']:
             new_page_content = new_page_content.replace(block, f"<{name} setIsOpen={{setIsOpen}} />")
        else:
             new_page_content = new_page_content.replace(block, f"<{name} />")
             
             
# Add imports to top of file
new_page_content = new_page_content.replace("import Head from 'next/head'", f"import Head from 'next/head'\n{imports}")

with open(page_path, 'w', encoding='utf-8') as f:
    f.write(new_page_content)

print("Split completed successfully.")
