"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getDrug = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Drugs");
    const drugList = await pool.request().query(sqlQueries.GetAllDrug);
    return drugList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getDrug,
};
