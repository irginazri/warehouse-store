require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const Router = require("./src/Routes/Router");

const app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));
// ROUTER API
app.use("/api", Router);

app.listen(port, () => {
  console.log(`SERVER RUNNING`);
});
