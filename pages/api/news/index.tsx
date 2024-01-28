// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { newsData } from "../../../data/news";

type Data = Array<{
  id: number;
  title: string;
  description: string;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json(newsData);
  } else if (req.method === "POST") {
    const news = req.body;
    newsData.push({
      id: newsData.length + 1,
      title: news.title,
      description: news.description,
    });
    res.status(201).json(news);
  }
}
