const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.REACT_APP_LOCALHOST_PROXY;

app.get("/api", (req, res) => {
  res.json({ message: "talking to server" });
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}!`);
});
