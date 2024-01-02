"use strict";
const config = require("../config");
const sql = require("mssql");
// nha si
const dentistData = require("../data/dentists");
const getAllDentist = async (req, res, next) => {
  try {
    const dentisList = await dentistData.getDentist();
    res.send(dentisList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const dentistMap = {};

const getDentistBySDT = async (req, res, next) => {
  try {
    const dentisList = await dentistData.getDentist();
    for (const dentist of dentisList) {
      dentistMap[dentist.SDT] = dentist;
    }
    const dentistSDT = req.params.SDT;
    console.log("SDT:", dentistMap[dentistSDT]);
    const dentist = dentistMap[dentistSDT];

    if (!dentist) {
      res.status(404).send("Dentist not found");
      return;
    }

    res.send(dentist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateInfDentist = async (req, res, next) => {
  try {
    const { SDT } = req.params;
    const { HoTen, GioiTinh, NgaySinh, DiaChi, ChuyenMon, BangCap } = req.body;

    // Connect to the SQL Server database
    const pool = await sql.connect(config.sql);
    const request = new sql.Request();

    // Call the stored procedure to update employee information
    const query = `
      EXEC CapNhatThongTinNhaSi
        @SDT = '${SDT}',
        @HoTen = N'${HoTen}',
        @GioiTinh = N'${GioiTinh}',
        @NgaySinh = '${NgaySinh}',
        @DiaChi = N'${DiaChi}',
        @ChuyenMon = N'${ChuyenMon}',
        @BangCap = '${BangCap}';
    `;

    const result = await request.query(query);

    // Check the result of the stored procedure
    if (result.rowsAffected[0] > 0) {
      res.status(200).json({
        success: true,
        message: "Employee information updated successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        error: "Employee not found or information could not be updated",
      });
    }
  } catch (err) {
    console.error("Error executing SQL query:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  getAllDentist,
  getDentistBySDT,
  updateInfDentist,
};
