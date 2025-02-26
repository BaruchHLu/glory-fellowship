import { Request, Response } from "express";
import { getAnswer } from "../services/openaiService";

export const askQuestion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { question } = req.body;
    if (!question) {
      res.status(400).json({ message: "Question is required" });
      return;
    }

    const answer: string = await getAnswer(question);
    res.json({ answer });
  } catch (error) {
    console.error("Error in askQuestion:", error);
    res.status(500).json({ message: "Error processing request" });
  }
};
