const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { StatusCodes} = require("http-status-codes"); //package qui permet de gérer les erreurs
const contactRoutes = require("./routes/contact.routes");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/carnet-adresses");

app.use("/contacts", contactRoutes);

app.use((req, res) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .send("Page introuvable");
});

app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Erreur serveur");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
