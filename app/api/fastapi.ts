// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const { question } = req.body;
      const response = await axios.get("http://localhost:8000/", {
        method: "GET",
        params: JSON.stringify({ question: req.body }),
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: "Error calling FastAPI" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
