const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("express").Router();
const app = express();
const tasksInfo = require('./routes/tasksInfo')
app.use(cors());
app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3000;
routes.get("/", (req, res) => {
  res.status(200).send("Welcome to airtribe course rating application");
});

routes.use('/tasks', tasksInfo);
app.listen(PORT, (err) => {
  if (!err) {
    console.log("Server started");
  } else {
    console.log("Some error has occured");
  }
});
