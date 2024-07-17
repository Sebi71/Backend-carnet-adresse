const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/carnet-adresses");

app.get("/", (req, res) => {
    res.send("ok");
  });

app.use((req, res) => {
  res.status(404).send("Page introuvable");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})