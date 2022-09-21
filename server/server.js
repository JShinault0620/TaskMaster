// Package depencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import orgRoutes from "./routes/org.js";

dotenv.config();

// Server setup
const PORT = process.env.PORT | 5000;
const app = express();
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("TaskMaster");
});

app.use("/organizations", orgRoutes);

// DB Connect
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Listening
app.listen(PORT, () => {
  console.log("Server listening at", PORT);
});