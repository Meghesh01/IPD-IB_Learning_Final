const mongoose = require("mongoose");

const level1Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const Level1 = mongoose.model("Level1", level1Schema);

module.exports = Level1;
