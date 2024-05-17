import mongoose from "mongoose";
import express from "express";
const item = mongoose.model("Item", {
	name: String,description: String});

const main = async () => {

	await mongoose.connect("mongodb://localhost:27017/teste",{});
	const PORT = process.env.PORT || 5000;
	const app = express();

	app.get("/api/next", async (req, res) => {
		try {
			const items = await item.find({});
			res.json(items);
		} catch (err) {
			console.log(err);
			res.status(500).json({ message: "deu ruim" });
		}
	});
			app.listen(PORT,()=>{
				console.log(`Rodando na porta ${PORT}`)
			})
}	

main().catch(console.error);