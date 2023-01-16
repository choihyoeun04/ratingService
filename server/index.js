const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const app = express();
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
//app.use(require("./routes/record"));
// get driver connection
//const dbo = require("./db/conn");
 
//app.listen(port, () => {
  // perform a database connection when server starts
  //dbo.connectToServer(function (err) {
  // if (err) console.error(err);
 //
 // });
//});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const workers = require('./workers.json');


app.use(express.static(path.resolve(__dirname, '../app/build')));


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/workers", (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(workers));
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});;

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/');




