const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:4200", // Allow only Angular app
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Enable CORS for all routes
app.use(cors(corsOptions));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Basic route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the Express server!" });
});

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

app.get("/books", (req, res) => {
  try {
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
