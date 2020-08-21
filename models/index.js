const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the schema

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter info",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter info",
      },
      duration: {
        type: Number,
        required: "Enter info",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

// create the model
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
