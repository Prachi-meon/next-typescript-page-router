import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const redirectURL = req?.query?.redirect as string;
  res.clearPreviewData();
  res.redirect(redirectURL);
  //res.end("Preview mode disabled");
}
