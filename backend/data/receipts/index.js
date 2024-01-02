"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getReceipt = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Receipts");
    const receiptList = await pool.request().query(sqlQueries.GetAllReceipt);
    return receiptList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getReceipt,
};
