// pages/index.tsx

import { connectToDatabase } from "../lib/mongodb";

export default function Mongo() {
	// Example usage of connectToDatabase
	async function fetchData() {
		const { db } = await connectToDatabase();
		const collection = db.collection("myCollection");
		const data = await collection.find().toArray();
		console.log(data);
	}

	fetchData();

	return (
		<div>
			<h1>Hello Next.js</h1>
		</div>
	);
}
