import "dotenv/config";
import functions from "firebase-functions";
import OpenAI from "openai";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Проверяем, что ключ API доступен
const apiKey = process.env.OPENAI_API_KEY || functions.config().openai?.key;
if (!apiKey) {
  console.error("OpenAI API key is not configured.");
}

const openai = new OpenAI({ apiKey });

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Ты — дружелюбный помощник по ментальному здоровью." },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;
    console.log("✅ OpenAI response:", reply);

    // Отправляем ответ ОДИН раз
    res.json({ reply: reply });

  } catch (err) {
    console.error("Error calling OpenAI:", err.message);
    res.status(500).json({ error: "Something went wrong with the AI service" });
  }
});

export const api = functions.https.onRequest(app);