const sizeOf = require('image-size');
const dimensions = sizeOf('public/images/logo/logo-full.png');
console.log(dimensions.width, dimensions.height);
