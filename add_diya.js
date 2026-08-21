const fs = require('fs');
const path = require('path');

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
  
  if (content.includes('devanagari') && content.includes('॥')) {
    const themeIconImportRegex = /import\s+\{([^}]+)\}\s+from\s+['"]([^'"]*ThemeIcons)['"]/g;
    let hasThemeIcons = false;
    
    content = content.replace(themeIconImportRegex, (match, imports, importPath) => {
      hasThemeIcons = true;
      if (!imports.includes('DiyaIcon')) {
        return `import { ${imports.trim()}, DiyaIcon } from '${importPath}'`;
      }
      return match;
    });

    if (!hasThemeIcons) {
      let relativePath = path.relative(path.dirname(file), 'components/ThemeIcons');
      if (!relativePath.startsWith('.')) relativePath = './' + relativePath;
      
      const importStatement = `import { DiyaIcon } from '${relativePath}';\n`;
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const nextLine = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, nextLine + 1) + importStatement + content.slice(nextLine + 1);
      } else {
        content = importStatement + content;
      }
    }

    // Now replace devanagari text wrapped in tags
    // >॥ text ॥< 
    // And also we should make sure we don't duplicate if it already has DiyaIcon
    if (!content.includes('<DiyaIcon')) {
      content = content.replace(/>\s*(॥\s*[^॥<>]+?\s*॥)\s*</g, '><DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /> $1 <DiyaIcon size={20} style={{ transform: "translateY(-3px)", display: "inline-block", margin: "0 10px" }} /></');
      fs.writeFileSync(file, content, 'utf-8');
      console.log('Updated', file);
    }
  }
});
