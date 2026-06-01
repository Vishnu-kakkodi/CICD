const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Backend Running",
    environment: process.env.NODE_ENV,
    port: process.env.PORT
  });
});

app.get("/health", (req, res) => {
  res.send("API Healthy");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});