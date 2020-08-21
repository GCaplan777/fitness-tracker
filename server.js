const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", {
//   useNewUrlParser: true,
// });

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

// routes
app.use(require("./routes/apiroutes.js"));

// use html routes maybe refer to Starwars html

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
