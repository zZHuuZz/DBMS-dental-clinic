"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getUser = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Users");
    const userList = await pool.request().query(sqlQueries.GetAllUser);
    return userList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getUser,
};
