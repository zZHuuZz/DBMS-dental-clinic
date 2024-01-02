"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getDentist = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Dentists");
    const dentistList = await pool.request().query(sqlQueries.GetAllDentist);
    return dentistList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getDentist,
};
