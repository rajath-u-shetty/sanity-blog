import type { NextApiRequest, NextApiResponse } from "next";

export default function exit(req: NextApiRequest, res: NextApiResponse) {
    res.clearPreviewData({}),
    res.writeHead(307, {location: "/"});
    res.end();
}