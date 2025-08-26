import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content:
            "Give me 10 latest news headlines about basketball in JSON format with keys: title, description, url, image",
        },
      ],
      temperature: 0.7,
    });

    const text = response.choices[0].message.content;

    // Parse JSON safely
    let articles = [];
    try {
      articles = JSON.parse(text);
    } catch (err) {
      console.error("Error parsing AI response:", err);
    }

    res.status(200).json({ articles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch news" });
  }
}
