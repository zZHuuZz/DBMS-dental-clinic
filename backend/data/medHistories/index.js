"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getMedHistory = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("MedHistories");
    const medHistoryList = await pool
      .request()
      .query(sqlQueries.GetAllMedHistory);
    return medHistoryList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getMedHistory,
};
