"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getServiceUsage = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Service_Usages");
    const serviceUsageList = await pool
      .request()
      .query(sqlQueries.GetAllServiceUsage);
    return serviceUsageList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getServiceUsage,
};
