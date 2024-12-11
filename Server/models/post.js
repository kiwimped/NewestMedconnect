// This will go in out models/post.js

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  context: String,
  fromName: String,
  toName: String,
  date: { type: Date, default: Date.now },
  rate: Number,
});

const PostReview = mongoose.model("PostReview", postSchema);
module.exports = PostReview;