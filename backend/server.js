import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple API route
app.get('/getData', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
