import { NextApiRequest, NextApiResponse } from "next";

export default async function getHandler(
	req: NextApiRequest,
	res: NextApiResponse<{ message: string }>
) {
	res.status(200).json({ message: "Hello from Next.js!" });
}
