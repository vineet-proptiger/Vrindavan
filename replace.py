import os
import re

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        return
        
    original = content
    # Replace the project name
    content = re.sub(r'(?i)NBR Soul of The Season', 'Mahindra Mahalunge', content)
    content = re.sub(r'(?i)Soul of the Seasons', 'Mahindra Mahalunge', content)
    content = re.sub(r'(?i)NBR Group', 'Mahindra Lifespaces', content)
    
    # Specific for the whatsapp link where URL encoding is used
    content = content.replace('NBR%20Soul%20of%20The%20Season', 'Mahindra%20Mahalunge')
    
    # Also replace Sarjapur Road / Bangalore with NH-44, Vrindavan, Mathura
    content = re.sub(r'(?i)Sarjapur Road', 'Baner NX', content)
    
    # In footer: Bangalore -> Pune, Gunjur -> Pune
    content = re.sub(r'(?i)Bangalore', 'Pune', content)
    content = re.sub(r'(?i)Gunjur', 'Pune', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('.'):
    if 'node_modules' in dirs:
        dirs.remove('node_modules')
    if '.next' in dirs:
        dirs.remove('.next')
    if '.git' in dirs:
        dirs.remove('.git')
        
    for file in files:
        if file.endswith(('.js', '.jsx', '.json', '.md', '.html', '.css')):
            filepath = os.path.join(root, file)
            replace_in_file(filepath)
