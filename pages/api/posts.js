// pages/api/posts.js

import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
	const client = new MongoClient(process.env.MONGODB_URI, {
		useNewUrlParser: true,

		useUnifiedTopology: true,
	});

	await client.connect();

	const db = client.db();

	switch (req.method) {
		case "GET":
			const posts = await db.collection("posts").find({}).toArray();

			res.status(200).json(posts);

			break;

		case "POST":
			const newPost = req.body;

			const result = await db.collection("posts").insertOne(newPost);

			res.status(201).json(result.ops[0]);

			break;

			break;

		case "PUT":
			const { id, ...data } = req.body;

			const result2 = await db.collection("posts").updateOne(
				{ _id: new ObjectId(id) },

				{ $set: data }
			);

			res.status(200).json(result2);

			break;
		case "DELETE":
			const result3 = await db.collection("posts").deleteOne({
				_id: new ObjectId(req.body.id),
			});

			res.status(200).json(result3);

			break;

			break;

		default:
			res.status(405).json({ error: "Unsupported HTTP method" });
	}

	await client.close();
}
