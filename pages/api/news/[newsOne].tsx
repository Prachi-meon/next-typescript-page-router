import type { NextApiRequest, NextApiResponse } from "next";
import { newsData } from "../../../data/news";

type newsProps = {
  id: number;
  title: string;
  description: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<newsProps>
) {
  const { newsOne }: any = req.query;
  const news: any = newsData.find((ele) => ele.id === parseInt(newsOne));
  res.status(200).json(news);
}
