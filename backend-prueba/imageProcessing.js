const Tesseract = require('tesseract.js');

async function processImage(imagePath) {
  try {
    const result = await Tesseract.recognize(imagePath, 'eng', {
      logger: (m) => console.log(m),
    });
    const equation = result.data.text.trim();
    return equation; // Devuelve la ecuación reconocida
  } catch (error) {
    throw new Error('Error processing the image');
  }
}

module.exports = { processImage };
