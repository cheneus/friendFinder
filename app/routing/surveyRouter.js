console.log("surveyRouter R")

const express = require('express');
const bodyParser = require('body-parser');

const path = require("path");

const friends = require("../data/friends.js");

const app = express();

const surveyRouter = express.Router();

surveyRouter.use(bodyParser.json());


surveyRouter.route('/')
  // .all(function(req, res, next) {
  //   res.writeHead(200, { 'Content-Type': 'text/plain' });
  //   next();
  // })

  .get((req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  })

module.exports = surveyRouter