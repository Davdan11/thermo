const fs = require('fs');
// check if image contains 'Thermopompe' using some OCR or just dimensions
const buffer = fs.readFileSync('public/images/logo/logo-full.png');
// We don't have easy image reading in pure node without a library, 
// but we can just use the image directly!
console.log('Size:', buffer.length);
