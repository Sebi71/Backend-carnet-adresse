const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contact.routes");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/carnet-adresses");

app.use("/contacts", contactRoutes);

app.use((req, res) => {
  res.status(404).send("Page introuvable");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})