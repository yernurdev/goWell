import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// ✅ Берём ключ из functions.config()
const apiKey = functions.config().gemini?.key;

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY is not set in Firebase config!");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const prompt = `
      Ты — эмпатичный AI-помощник по ментальному здоровью.
      Отвечай коротко, спокойно, естественно.
      Ты должен отвечать и поддерживать и не давать медицинские советы. ты не врач.
      Если ситуация серьёзная, порекомендуй обратиться к специалисту.
      Пользователь: "${message}"
    `;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    console.log("✅ Gemini response:", reply);
    res.json({ reply });
  } catch (err) {
    console.error("❌ Gemini error:", err);
    res.status(500).json({ error: err.message || "Gemini error" });
  }
});

export const api = functions.https.onRequest(app);
