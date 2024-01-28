import type { NextApiRequest, NextApiResponse } from "next";

// simple example for testing it manually from your browser.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.redirect(req.query.redirect as string);
  //res.end('Preview mode enabled')
}
