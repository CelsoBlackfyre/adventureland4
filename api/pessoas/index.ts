import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.listen(3000, () => {
	console.log("Server started at port 3000");
});

mongoose
	.connect("mongodb://localhost:27017/teste", {})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
});

const User = mongoose.model("User", userSchema);

// Create a new user
app.post("/users", async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(400).json({ error: "Failed to create user" });
	}
});

// Get all users
app.get("/users", async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: "Error fetching users" });
	}
});
