console.log("apiRoute R");

const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const friends = require("../data/friends.js");

const app = express();

const apiRouter = express.Router();

apiRouter.use(bodyParser.json());

// apiRouter.route('/')
// function to be used
var getMatch = (user) => {
  var matchPool = []
  var theOne = []
  pool = friends.pool
  score = user.scores
  for (i = 1; i < pool.length; i++) {
    // console.log(`${i} is ${pool[i].name}`)
    matchScore = 0;
    for (j = 0; j < score.length; j++) {

      matchScore += Math.abs(pool[i].scores[j] - user.scores[j])

      if ((j + 1) === score.length) {
        matchPool.push(matchScore)
        pool[i].diff = matchScore
        console.log("in loop " + pool[i].diff)
      }
    }
    if ((i + 1) === pool.length) {
      console.log(theOne)
      let x = Math.min.apply(null, matchPool);
      for (n = 0; n < pool.length; n++) {
        if (pool[n].diff === x) {
          console.log(pool[n].diff)
          theOne.push(pool[n])
        }
      }
    }
  }
  return theOne
}
// ======================================
apiRouter.route('/friends')
  // .all(function(req, res, next) {
  //   res.writeHead(200, { 'Content-Type': 'text/plain' });
  //   next();
  // })

  .get((req, res, next) => {
    res.json(friends.pool)
  })

  .post((req, res, next) => {
    var userData = req.body;
    var score = req.body.scores;
    console.log("userScore", score)
    res.send(getMatch(userData))
  })

module.exports = apiRouter
