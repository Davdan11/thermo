const sharp = require('sharp');
sharp('/Users/daviddanjou/.gemini/antigravity-ide/brain/64e2c9af-6a00-4900-9b07-ff93cee5c0c1/screenshot.png')
  .extract({ left: 100, top: 1100, width: 1200, height: 800 })
  .toFile('/Users/daviddanjou/.gemini/antigravity-ide/brain/64e2c9af-6a00-4900-9b07-ff93cee5c0c1/screenshot-cropped.png')
  .catch(console.error);
