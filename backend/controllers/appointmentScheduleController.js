"use strict";
const appointmentScheduleData = require("../data/appointmentSchedules");
const getAllAppointmentSchedule = async (req, res, next) => {
  try {
    const appointmentScheduleList =
      await appointmentScheduleData.getAppointmentSchedule();
    res.send(appointmentScheduleList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllAppointmentSchedule,
};
