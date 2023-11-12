const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, './src/images/');
const outputFile = path.join(__dirname, './src/images/images.js');

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Error reading images directory:', err);
    return;
  }

  let imports = '';
  let imageArray = 'const images = [';

  files.forEach((file, index) => {
      if(file == "images.js") return
    const imageName = `img${index}`;
    imports += `import ${imageName} from './${file}';\n`;
    imageArray += `${imageName}, `;
  });

  imageArray += '];\nexport default images;';

  const content = imports + '\n' + imageArray;

  fs.writeFile(outputFile, content, (err) => {
    if (err) {
      console.error('Error writing images.js:', err);
    } else {
      console.log('images.js generated successfully!');
    }
  });
});
