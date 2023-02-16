import bodyParser from "body-parser";
import express from "express";
import pg from "pg";

const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send(`Hello, World!`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
