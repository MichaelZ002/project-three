const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect("mongodb://localhost/project3", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const seed = [{}];
