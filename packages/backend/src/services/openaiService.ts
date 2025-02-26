import axios from "axios";

export const getAnswer = async (question: string): Promise<string> => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      },
      {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw new Error("Failed to get response from OpenAI API");
  }
};
