"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getService = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Services");
    const serviceList = await pool.request().query(sqlQueries.GetAllService);
    return serviceList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

// const deleteServiceById = async (serviceId) => {
//   try {
//     // console.log("deleteService API is called");
//     let pool = await sql.connect(config.sql);
//     const sqlQueries = await utils.loadSqlQueries("Services");
//     // Modify the SQL query according to your database schema
//     const result = await pool.request().input("serviceId", sql.Int, serviceId)
//       .query`EXEC XoaDichVu @MaDV = ${serviceId};`;
//     console.log("SQL Query Result:", result);
//     return result.rowsAffected > 0; // Check if any rows were affected
//   } catch (error) {
//     console.log(error.message);
//     throw new Error("Error deleting service");
//   }
// };

module.exports = {
  getService,
  //   deleteServiceById,
};
