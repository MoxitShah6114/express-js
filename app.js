const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});
app.get("/marksheet", (req, res) => {
  res.sendFile(__dirname + "/marksheet.html");
});
app.get("/process", (req, res) => {
  var a = req.query.sub1;
  var b = req.query.sub2;
  var c = req.query.sub3;
  var d = req.query.sub4;
  var msg = `<table border="1">
  <tr>
    <th>Subject</th>
    <th>Marks</th>
    </tr>
    <tr>
    <td>Subject 1</td>
    <td>${a}</td>
    </tr>
    <tr>
    <td>Subject 2</td>
    <td>${b}</td>
    </tr>
    <tr>
    <td>Subject 3</td>
    <td>${c}</td>
    </tr>
    <tr>
    <td>Subject 4</td>
    <td>${d}</td>
    </tr>
    <tr>
    <td>Total</td>
    <td>${parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d)}</td>
    </tr>`;
  res.send(msg);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
