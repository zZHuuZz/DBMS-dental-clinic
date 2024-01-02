"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getAdmin = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Admins");
    const adminList = await pool.request().query(sqlQueries.GetAllAdmin);
    return adminList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

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

// const createPatient = async (
// 	HoTen,
// 	SDT,
// 	GioiTinh,
// 	NgaySinh,
// 	DiaChi,
// 	MatKhau
// ) => {
// 	try {
// 		let pool = await sql.connect(config.sql);
// 		const sqlQueries = await utils.loadSqlQueries("Patients");
// 		// const formattedDate = NgaySinh.split("T")[0];
// 		// console.log(NgaySinh);
// 		// Call the stored procedure to create a patient
// 		await pool
// 			.request()
// 			.input("HoTen", sql.NVarChar(50), HoTen)
// 			.input("SDT", sql.VarChar(10), SDT)
// 			.input("GioiTinh", sql.NVarChar(5), GioiTinh)
// 			// .input("NgaySinh", sql.DateTime2, new Date()) //sql.DateTime .input("NgaySinh", sql.VarChar(50), formattedDate)
// 			// .input("NgaySinh", sql.Date, new Date())
// 			// .input("NgaySinh", sql.DateTime, new Date(NgaySinh))
// 			.input("NgaySinh", sql.VarChar(50), NgaySinh)
// 			.input("DiaChi", sql.NVarChar(50), DiaChi)
// 			.input("MatKhau", sql.VarChar(8), MatKhau)
// 			.query`EXEC TaoTaiKhoanBenhNhan N'${HoTen}','${SDT}','${GioiTinh}','${NgaySinh}',N'${DiaChi}','${MatKhau}'`;
// 		// You need to create the stored procedure CreatePatient in your SQL database
// 	} catch (error) {
// 		console.log(error.message);
// 		throw error;
// 	}
// };

const deletePatientBySDT = async (patientSDT) => {
  try {
    // console.log("deletePatient API is called");
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Patients");
    // Modify the SQL query according to your database schema
    const result = await pool
      .request()
      .input("patientSDT", sql.VarChar, patientSDT)
      .query`EXEC XoaTaiKhoan @SDT = ${patientSDT};`;
    console.log("SQL Query Result:", result);
    return result.rowsAffected > 0; // Check if any rows were affected
  } catch (error) {
    console.log(error.message);
    throw new Error("Error deleting patient");
  }
};

const deleteEmployeeBySDT = async (employeeSDT) => {
  try {
    // console.log("deletePatient API is called");
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Employees");
    // Modify the SQL query according to your database schema
    const result = await pool
      .request()
      .input("employeeSDT", sql.VarChar, employeeSDT)
      .query`EXEC XoaTaiKhoan @SDT = ${employeeSDT};`;
    console.log("SQL Query Result:", result);
    return result.rowsAffected > 0; // Check if any rows were affected
  } catch (error) {
    console.log(error.message);
    throw new Error("Error deleting employee");
  }
};

const deleteDentistBySDT = async (userSDT) => {
  try {
    // console.log("deletePatient API is called");
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Users");
    // Modify the SQL query according to your database schema
    const result = await pool.request().input("userSDT", sql.VarChar, userSDT)
      .query`EXEC XoaTaiKhoan @SDT = ${userSDT};`;
    console.log("SQL Query Result:", result);
    return result.rowsAffected > 0; // Check if any rows were affected
  } catch (error) {
    console.log(error.message);
    throw new Error("Error deleting user");
  }
};

module.exports = {
  getAdmin,
  getDentist,
  getEmployee,
  getPatient,
  deletePatientBySDT,
  deleteEmployeeBySDT,
  deleteDentistBySDT,
  // createPatient,
};
