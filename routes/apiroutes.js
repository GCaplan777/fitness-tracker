var express = require("express");
var router = express.Router();

const Workout = require("../models/index.js");
// Add exercises to a previous workout plan.

// Add new exercises to a new workout plan.

// View multiple the combined weight of multiple exercises on the stats page.

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
