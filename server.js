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
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.static('app/public'));
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "wish_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

app.use('/', htmlRouter)
app.use('/api', apiRouter)
app.use('/survey', surveyRouter)

// Root get route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// app.get("/survey", (req, res) => {
//   res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

// app.get("/api/friends", (req, res) => {
//   // res.sendFile(path.join(__dirname, "/app/data/friends.js"));

// })

// // Create New Characters - takes in JSON input
// app.post("/api/friends", (req, res) => {
  

//   // var addDiff = (matchScore) => {
//   //   this.name = name;
//   //   this.photo =  photo;
//   //   this.scores = scores;
//   //   this.tempDiff =  matchScore;
//   // }



//   console.log( getMatch(userData) )
//   res.send( getMatch(userData))
//   // console.log(`pool = ${friends.pool}`)


//   // newReservation.customerName = newReservation.name.replace(/\s+/g, "").toLowerCase();
// })
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
