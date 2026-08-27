import re

file_path = '/Users/mac/Desktop/tata-ghansoli-new-domain/app/page.js'

with open(file_path, 'r') as f:
    content = f.read()

animation_css = """
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .animate-gentle-pulse {
          animation: gentlePulse 2s infinite ease-in-out;
        }
"""

if 'gentlePulse' not in content:
    content = content.replace("</style>", f"{animation_css}</style>")
    with open(file_path, 'w') as f:
        f.write(content)
    print("Added animations")
