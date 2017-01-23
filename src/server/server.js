const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const emailCtrl = require('./emailCtrl.js');

const app = express();

const PORT = 80;

app.use(bodyParser.urlencoded({extended: true}), bodyParser.json());
app.use(express.static(path.join(__dirname, './../client')));

app.post('/contact', (req, res) => {
  emailCtrl.contactUs(req.body);
  res.redirect('/#contact');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
