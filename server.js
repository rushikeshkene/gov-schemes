const express = require("express");
const cors = require("cors");
const path = require("path");

const schemes = require("./schemes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files from the CURRENT directory (since everything is together now)
app.use(express.static(__dirname));

// Get all schemes
app.get("/api/schemes", (req, res) => {
  res.json(schemes);
});

// Get single scheme by id
app.get("/api/schemes/:id", (req, res) => {
  const id = Number(req.params.id);
  const scheme = schemes.find((item) => item.id === id);
  if (!scheme) {
    return res.status(404).json({ message: "Scheme not found" });
  }
  res.json(scheme);
});

// Handle Feedback/Query Submission
app.post("/api/feedback", (req, res) => {
  const { name, contact, query } = req.body;
  console.log("📝 NEW FEEDBACK:", name, contact, query);
  res.status(200).json({ message: "Feedback submitted successfully." });
});

// Send index.html for other routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
