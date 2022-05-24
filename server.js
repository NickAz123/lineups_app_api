const express = require("express");
const app = express();

const PORT = 5000;

app.get("/api", (req, res) => {
  res.json({ message: "talking to server" });
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}!`);
});
