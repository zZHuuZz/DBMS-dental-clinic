"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getPatient = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Patients");
    const userList = await pool.request().query(sqlQueries.GetAllPatient);
    return userList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getPatient,
};
