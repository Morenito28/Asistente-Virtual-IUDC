import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // Importa CORS para permitir solicitudes desde diferentes orígenes

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Habilita CORS
app.use(bodyParser.json());

// Endpoint raíz para verificar que el servidor está corriendo
app.get("/", (req, res) => {
  res.status(200).send("Servidor funcionando correctamente en el endpoint raíz.");
});

// Ruta de prueba para el endpoint /api/chat
app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "El mensaje es requerido" });
  }

  res.status(200).json({ response: `Recibí tu mensaje: ${message}` });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Inicia el servidor
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
  });
  