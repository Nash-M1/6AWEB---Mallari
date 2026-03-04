const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

const CONNECTION_STRING = "mongodb://localhost:27017/";
const DATABASENAME = "MyDb";
let database;

app.use((req, res, next) => {
  if (!database) {
    return res.status(503).json({ error: "Database not connected yet." });
  }
  next();
});

async function start() {
  try {
    const client = new MongoClient(CONNECTION_STRING, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });
    await client.connect();
    database = client.db(DATABASENAME);
    console.log("Connected to MongoDB!");
    app.listen(5038, () => {
      console.log("Server running on http://localhost:5038");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

start();

// Get all books
app.get("/api/books/GetBooks", async (req, res) => {
  try {
    const result = await database.collection("Books").find({}).toArray();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// Add book
app.post("/api/books/AddBook", multer().none(), async (req, res) => {
  try {
    await database.collection("Books").insertOne({
      id: String(Date.now()),
      title: req.body.title || "",
      desc: req.body.description || "",
      price: Number(req.body.price) || 0,
      author: req.body.author || "",
      genre: req.body.genre || "",
    });
    res.json("Added Successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to add book" });
  }
});

// Update book
app.put("/api/books/UpdateBook", multer().none(), async (req, res) => {
  try {
    await database.collection("Books").updateOne(
      { id: req.query.id },
      { $set: {
        title: req.body.title || "",
        desc: req.body.description || "",
        price: Number(req.body.price) || 0,
        author: req.body.author || "",
        genre: req.body.genre || "",
      }}
    );
    res.json("Updated Successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to update book" });
  }
});

// Delete book
app.delete("/api/books/DeleteBook", async (req, res) => {
  try {
    await database.collection("Books").deleteOne({ id: req.query.id });
    res.json("Deleted successfully!");
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
});