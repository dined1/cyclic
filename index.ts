import bodyParser from "body-parser";
import express from "express";
import pg from "pg";

const app = express();
const path = require('path');
const db = require('@cyclic.sh/dynamodb')
require('dotenv').config()
const mysql = require('mysql2/promise')
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
// app.set('views', 'C:/expressjs-postgres/src/views')
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  const conn = await connection();
  const [rows, fields] = await conn.execute('SELECT tadoushi, jidoushi, translation FROM tajiverbs');
  res.render('ind', {
      subject: 'EJS template engine',
      name: 'Japanese',
      link: 'https://google.com',
      rows: rows
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

async function connection(){
    return await mysql.createConnection('mysql://ssd5r50ig8nfyabpmsoo:pscale_pw_iDozE5iVvuyvg20CuTzL0yYvuACBDWoMpA5hKiAL8fs@ap-northeast.connect.psdb.cloud/japanese?ssl={"rejectUnauthorized":true}');
}