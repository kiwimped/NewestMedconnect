// models/appointment.js
const mongoose = require('mongoose');

// Define the appointment schema
const postSchema = new mongoose.Schema({
  title: String,
  context: String,
  fromName: String,
  toName: String,
  date: { type: Date, default: Date.now },
  rate: Number,
});

// Create and export the model
const Poster = mongoose.model('PostReview', postSchema);
module.exports = Poster;
