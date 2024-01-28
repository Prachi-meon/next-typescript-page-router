import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (session) {
    res.status(200).json({ message: "success", session });
  } else {
    res.status(401).json({ error: "Unauthorized user" });
  }
};

export default handler;
