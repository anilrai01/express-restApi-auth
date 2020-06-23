const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  post_title: {
    type: String,
    required: true,
  },
  post_desc: {
    type: String,
    required: true,
  },
  post_date: {
    type: Date,
    default: Date(),
  },
});

module.exports = mongoose.model("Post", postSchema);
