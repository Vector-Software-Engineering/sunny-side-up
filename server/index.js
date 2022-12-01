require('dotenv').config();
const path = require("path")
const express = require("express");
const axios = require('axios');
const logger = require('../middleware/logger.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, "../client/dist")));

app.all('/*', (req, res) => {
  const method = req.method;
  const url = req.path;

  console.log('method: ' + method);
  console.log('url: ' + url);

  axios({
    method: method,
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${url}`,
    data: req.body,
    headers: {
      Authorization: process.env.API_TOKEN
    }
  })
    .then((response) => {
      console.log(response);
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    })
});

app.listen(process.env.PORT, () => { console.log('listening on ' + process.env.PORT); });