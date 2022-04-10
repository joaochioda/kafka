const express = require("express");

require("./database");

const app = express();

const consume = require("./controllers/ConsumerController");

const produce = require("./producer");

app.use(express.json());

app.post("/create-consume", function (req, res) {
  produce.produce("batata");
  res.send("Consumer created");
});

app.get("/", function (req, res) {
  console.log("hello");
  res.send("Hello World!");
});

consume.consumer();

module.exports = app;
