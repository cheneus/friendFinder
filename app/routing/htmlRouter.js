console.log("htmlRouter R")

const express = require('express');
const bodyParser = require('body-parser');

const path = require("path");

const friends = require("../data/friends.js");

const app = express();

var htmlRouter = express.Router();

htmlRouter.use(bodyParser.json());

htmlRouter.route('/')

// .all(function(req,res,next) {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       next();
// })
.get((req, res,next) => {
  res.sendFile(path.join(__dirname, "../../app/public/home.html"));
});

module.exports = htmlRouter