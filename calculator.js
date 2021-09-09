const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  res.send("thanks for sending that!");
});

app.listen(3000);
