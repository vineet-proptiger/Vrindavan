const fs = require('fs');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.jsx')) {
      files.push(name);
    }
  }
  return files;
}

const files = getFiles('components');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (content.includes('<//')) {
    content = content.replace(/<\/\//g, '</');
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Fixed syntax in', file);
  }
});
