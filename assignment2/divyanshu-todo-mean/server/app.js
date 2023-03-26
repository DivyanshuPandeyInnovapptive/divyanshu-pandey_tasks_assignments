const express = require("express");
const bodyParser = require("body-parser");
const todoRouter = require("./routes/TodoRoutes");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.use("/api/todos", todoRouter);

module.exports = app;
