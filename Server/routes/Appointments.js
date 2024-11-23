const express = require('express');
const Appointment = require('../models/Appointment'); 
const router = express.Router();

router.post('/appointments', async (req, res) => {
  try {
    const { date, time, patientName, reason } = req.body;

    const newAppointment = new Appointment({ date, time, patientName, reason });

    await newAppointment.save();
    res.status(201).send('Appointment stored successfully');
  } catch (error) {
    res.status(500).json({ message: 'Error saving appointment', error });
  }
});

router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments', error });
  }
});

router.delete('/appointments', async (req, res) => {
  try {
    const { id } = req.params;
    await Appointment.findByIdAndDelete(id);
    res.send('Appointment deleted successfully');
  } catch (error) {
    res.status(500).json({ message: 'Error deleting appointment', error });
  }
});

router.put('/appointments', async (req, res) => {
  try {
    const { id } = req.params;
    const { date, time, patientName, reason } = req.body;

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { date, time, patientName, reason },
      { new: true }
    );

    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating appointment', error });
  }
}); 

module.exports = router;
