// models/appointment.js
const mongoose = require('mongoose');

// Define the appointment schema
const appointmentSchema = new mongoose.Schema({
  date: String,
  time: String,
  patientName: String,
  reason: String,
});

// Create and export the model
const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
