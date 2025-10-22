import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// ✅ Берём ключ Gemini из Firebase Config
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// ✅ Подключаем нужную модель
const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash-latest" });

// ✅ Обработка POST-запроса
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const prompt = `
      Ты — доброжелательный помощник по ментальному здоровью.
      Отвечай спокойно, эмпатично и естественно.
      Не используй шаблонные фразы и не давай медицинских советов.
      Сообщение пользователя: "${message}"
    `;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    console.log("✅ Gemini response:", reply);
    res.json({ reply });
  } catch (err) {
    console.error("❌ Gemini error:", err);
    res.status(500).json({ error: "Something went wrong with Gemini" });
  }
});

// ✅ Экспортируем функцию
export const api = functions.https.onRequest(app);
