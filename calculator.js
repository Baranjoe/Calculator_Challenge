const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("HEllo, world!");
});

app.listen(3000);
