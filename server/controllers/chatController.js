import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const chatHandler = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "El mensaje es requerido" });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
    });

    const response = completion.data.choices[0].message.content;
    res.status(200).json({ response });
  } catch (error) {
    console.error("Error en OpenAI:", error);
    res.status(500).json({ error: "Error en la API de OpenAI" });
  }
};
