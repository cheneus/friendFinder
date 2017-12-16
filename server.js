const express = require("express");
const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");
const mysql = require("mysql");
const morgan = require('morgan');
const path = require("path");
const fs = require("fs");
// routing 
const apiRouter = require('./app/routing/apiRouter.js')
const htmlRouter = require('./app/routing/htmlRouter.js')
const surveyRouter = require('./app/routing/surveyRouter.js')

// user JS
const friends = require("./app/data/friends.js");
// 
const app = express();
const PORT = 3000;

app.use(morgan('dev'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('app/public'));
app.use('/', htmlRouter)
app.use('/api', apiRouter)
app.use('/survey', surveyRouter)

// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
