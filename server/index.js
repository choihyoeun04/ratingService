const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

const app = express();
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
