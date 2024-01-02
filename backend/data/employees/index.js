"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getEmployee = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Employees");
    const userList = await pool.request().query(sqlQueries.GetAllEmployee);
    return userList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getEmployee,
};
