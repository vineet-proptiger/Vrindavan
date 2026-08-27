import re

file_path = '/Users/mac/Desktop/tata-ghansoli-new-domain/app/page.js'

with open(file_path, 'r') as f:
    content = f.read()

# Fix the template literal closing issue
# Currently it looks like:
#      `}
#        @keyframes gentlePulse {
# ...
#        .animate-gentle-pulse {
#          animation: gentlePulse 2s infinite ease-in-out;
#        }
#</style>

# I need to move the `} to be AFTER the gentlePulse block, right before </style>.

bad_pattern = r'`\}\s*(@keyframes gentlePulse.*?)\s*</style>'
replacement = r'\1\n      `}</style>'

new_content = re.sub(bad_pattern, replacement, content, flags=re.DOTALL)

with open(file_path, 'w') as f:
    f.write(new_content)

print("Fixed syntax error")
