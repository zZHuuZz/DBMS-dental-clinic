"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getAppointmentSchedule = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("AppointmentSchedules");
    const appointmentScheduleList = await pool
      .request()
      .query(sqlQueries.GetAllAppointmentSchedule);
    return appointmentScheduleList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAppointmentSchedule,
};
