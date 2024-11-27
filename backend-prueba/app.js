const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const tesseract = require('tesseract.js');
const math = require('mathjs');  // Usado para resolver la ecuación

const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configuración para manejar archivos con Multer
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Guardar en la carpeta 'uploads'
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Usar un nombre único para cada archivo
  }
});

const upload = multer({ storage: storage });

// Ruta para la raíz (/)
app.get('/', (req, res) => {
  res.send('¡Hola! El servidor está funcionando correctamente.');
});

// Ruta para procesar la imagen y resolver la ecuación
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Paso 1: Usamos Tesseract.js para extraer texto de la imagen
    const result = await tesseract.recognize(
      req.file.path,
      'eng',
      {
        logger: (m) => console.log(m),
      }
    );

    // Paso 2: El texto extraído será la ecuación que debemos resolver
    const equation = result.data.text.trim();
    console.log('Ecuación extraída:', equation);

    // Paso 3: Intentamos resolver la ecuación con math.js
    try {
      const answer = math.evaluate(equation); // Resolver la ecuación
      console.log('Resultado:', answer);
      res.json({ equation, answer });
    } catch (error) {
      console.error('Error al resolver la ecuación:', error);
      res.status(500).send('No se pudo resolver la ecuación.');
    }
  } catch (error) {
    console.error('Error al procesar la imagen:', error);
    res.status(500).send('Error processing the image');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
