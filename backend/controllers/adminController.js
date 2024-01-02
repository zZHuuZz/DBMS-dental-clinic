"use strict";
const adminData = require("../data/admins");
const patientData = require("../data/admins/index");
const employeeData = require("../data/admins/index");
const dentistData = require("../data/admins/index");
const userData = require("../data/admins/index");

const config = require("../config");
const sql = require("mssql");

const getAllAdmin = async (req, res, next) => {
  try {
    const adminlist = await adminData.getAdmin();
    res.send(adminlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const adminMap = {};
const employeeMap = {};
const dentistMap = {};
const patientMap = {};

const getAdminBySDT = async (req, res, next) => {
  try {
    const admintlist = await adminData.getAdmin();
    for (const admin of admintlist) {
      adminMap[admin.SDT] = admin;
    }
    const adminSDT = req.params.SDT;
    console.log("SDT:", adminMap[adminSDT]);
    const admin = adminMap[adminSDT];

    if (!admin) {
      res.status(404).send("Admin not found");
      return;
    }

    res.send(admin);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getDentistBySDTByAdmin = async (req, res, next) => {
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

const getEmployeeBySDTByAdmin = async (req, res, next) => {
  try {
    const employeelist = await employeeData.getEmployee();
    for (const employee of employeelist) {
      employeeMap[employee.SDT] = employee;
    }
    const employeeSDT = req.params.SDT;
    console.log("SDT:", employeeMap[employeeSDT]);
    const employee = employeeMap[employeeSDT];

    if (!employee) {
      res.status(404).send("Employee not found");
      return;
    }

    res.send(employee);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPatientBySDTByAdmin = async (req, res, next) => {
  try {
    const patientlist = await patientData.getPatient();
    for (const patient of patientlist) {
      patientMap[patient.SDT] = patient;
    }
    const patientSDT = req.params.SDT;
    console.log("SDT:", patientMap[patientSDT]);
    const patient = patientMap[patientSDT];

    if (!patient) {
      res.status(404).send("Patient not found");
      return;
    }

    res.send(patient);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// const createPatientByAdmin = async (req, res, next) => {
//   try {
//     const { HoTen, SDT, GioiTinh, NgaySinh, DiaChi, MatKhau } = req.body;

//     // Call the function to create a patient in the data layer
//     await patientData.createPatient(
//       HoTen,
//       SDT,
//       GioiTinh,
//       NgaySinh,
//       DiaChi,
//       MatKhau
//     );

//     res.status(201).send("Patient created successfully");
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

const createPatientByAdmin = async (req, res, next) => {
  try {
    const requiredFields = [
      "HoTen",
      "SDT",
      "GioiTinh",
      "NgaySinh",
      "DiaChi",
      "MatKhau",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    const pool = await sql.connect(config.sql);

    const {
      HoTen = "Bệnh nhân mới",
      NgaySinh = "1990-01-01",
      ...rest
    } = req.body;

    const request = new sql.Request();

    const query = `
      EXEC TaoTaiKhoanBenhNhan
        @HoTen = N'${HoTen}',
        @SDT = '${rest.SDT}',
        @GioiTinh = N'${rest.GioiTinh.toLowerCase() === "male" ? "Nam" : "Nữ"}',
        @NgaySinh = '${NgaySinh}',
        @DiaChi = N'${rest.DiaChi}',
        @MatKhau = N'${rest.MatKhau}';
    `;

    const result = await request.query(query);

    console.log("Stored Procedure Result:", result);

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error("Error executing SQL query:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};
//admins/createEmployeeByAdmin
const createEmployeeByAdmin = async (req, res, next) => {
  try {
    const requiredFields = [
      "HoTen",
      "SDT",
      "GioiTinh",
      "DiaChi",
      "TinhTrangHoatDong",
      "ViTri",
      "MatKhau",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    const pool = await sql.connect(config.sql);

    const {
      HoTen = "Nhân Viên mới",
      NgaySinh = "1990-01-01",
      ...rest
    } = req.body;

    const request = new sql.Request();

    const query = `
      EXEC TaoTaiKhoanNhanVien
        @HoTen = N'${HoTen}',
        @SDT = '${rest.SDT}',
        @GioiTinh = N'${rest.GioiTinh.toLowerCase() === "male" ? "Nam" : "Nữ"}',
        @DiaChi = N'${rest.DiaChi}',
        @TinhTrangHoatDong = N'${rest.TinhTrangHoatDong}',
        @ViTri = N'${rest.ViTri}',
        @MatKhau = N'${rest.MatKhau}';
    `;

    const result = await request.query(query);

    console.log("Stored Procedure Result:", result);

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error("Error executing SQL query:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

//admins/createDentistByAdmin
const createDentistByAdmin = async (req, res, next) => {
  try {
    const requiredFields = [
      "HoTen",
      "SDT",
      "GioiTinh",
      "NgaySinh",
      "DiaChi",
      "ChuyenMon",
      "BangCap",
      "MatKhau",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    const pool = await sql.connect(config.sql);

    const { HoTen = "Nha Sĩ mới", NgaySinh = "1990-01-01", ...rest } = req.body;

    const request = new sql.Request();

    const query = `
      EXEC TaoTaiKhoanNhaSi
        @HoTen = N'${HoTen}',
        @SDT = '${rest.SDT}',
        @GioiTinh = N'${rest.GioiTinh.toLowerCase() === "male" ? "Nam" : "Nữ"}',
        @NgaySinh = '${NgaySinh}',
        @DiaChi = N'${rest.DiaChi}',
        @ChuyenMon = N'${rest.ChuyenMon}',
        @BangCap = N'${rest.BangCap}',
        @MatKhau = N'${rest.MatKhau}';
    `;

    const result = await request.query(query);

    console.log("Stored Procedure Result:", result);

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error("Error executing SQL query:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// delete user
const deletePatientByAdmin = async (req, res, next) => {
  try {
    // console.log("deletePatient API is called");
    const patientSDT = req.params.SDT; // Assuming patientSDT is part of the URL parameters
    // Perform validation or additional checks if needed
    // console.log("Deleting patient with ID:", patientSDT);
    const deletedP = await patientData.deletePatientBySDT(patientSDT);
    console.log(deletedP);

    res.send({ message: "Patient deleted successfully", deletedP });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteEmployeeByAdmin = async (req, res, next) => {
  try {
    // console.log("deleteEmployee API is called");
    const employeeSDT = req.params.SDT; // Assuming employeeSDT is part of the URL parameters
    // Perform validation or additional checks if needed
    // console.log("Deleting employee with ID:", employeeSDT);
    const deletedEm = await employeeData.deleteEmployeeBySDT(employeeSDT);
    console.log(deletedEm);

    res.send({ message: "Employee deleted successfully", deletedEm });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteDentistByAdmin = async (req, res, next) => {
  try {
    // console.log("deleteUser API is called");
    const userSDT = req.params.SDT; // Assuming userSDT is part of the URL parameters
    // Perform validation or additional checks if needed
    // console.log("Deleting patient with ID:", userSDT);
    const deletedUser = await userData.deleteDentistBySDT(userSDT);
    console.log(deletedUser);

    res.send({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getAllDentistByAdmin = async (req, res, next) => {
  try {
    const dentisList = await dentistData.getDentist();
    res.send(dentisList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllEmployeeByAdmin = async (req, res, next) => {
  try {
    const employeelist = await employeeData.getEmployee();
    res.send(employeelist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllPatientByAdmin = async (req, res, next) => {
  try {
    const patientlist = await patientData.getPatient();
    res.send(patientlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateInfPatientByAdmin = async (req, res, next) => {
  try {
    const { SDT } = req.params;
    const { HoTen, GioiTinh, NgaySinh, DiaChi } = req.body;

    // Connect to the SQL Server database
    const pool = await sql.connect(config.sql);
    const request = new sql.Request();

    // Call the stored procedure to update patient information
    const query = `
      EXEC CapNhatThongTin
        @SDT = '${SDT}',
        @HoTen = N'${HoTen}',
        @GioiTinh = N'${GioiTinh}',
        @NgaySinh = '${NgaySinh}',
        @DiaChi = N'${DiaChi}';
    `;

    const result = await request.query(query);

    // Check the result of the stored procedure
    if (result.rowsAffected[0] > 0) {
      res.status(200).json({
        success: true,
        message: "Patient information updated successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        error: "Patient not found or information could not be updated",
      });
    }
  } catch (err) {
    console.error("Error executing SQL query:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

const updateInfEmployeeByAdmin = async (req, res, next) => {
  try {
    const { SDT } = req.params;
    const { HoTen, GioiTinh, DiaChi, ViTri } = req.body;

    // Connect to the SQL Server database
    const pool = await sql.connect(config.sql);
    const request = new sql.Request();

    // Call the stored procedure to update employee information
    const query = `
      EXEC CapNhatThongTinNhanVien
        @SDT = '${SDT}',
        @HoTen = N'${HoTen}',
        @GioiTinh = N'${GioiTinh}',
        @DiaChi = N'${DiaChi}',
        @ViTri = N'${ViTri}';
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

const updateInfDentistByAdmin = async (req, res, next) => {
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

const updateInfAdmin = async (req, res, next) => {
  try {
    const { SDT } = req.params;
    const { HoTen, Email } = req.body;

    // Connect to the SQL Server database
    const pool = await sql.connect(config.sql);
    const request = new sql.Request();

    // Call the stored procedure to update admin information
    const query = `
      EXEC CapNhatThongTinQTV
        @SDT = '${SDT}',
        @HoTen = N'${HoTen}',
        @Email = N'${Email}';
    `;

    const result = await request.query(query);

    // Check the result of the stored procedure
    if (result.rowsAffected[0] > 0) {
      res.status(200).json({
        success: true,
        message: "Admin information updated successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        error: "Admin not found or information could not be updated",
      });
    }
  } catch (err) {
    console.error("Error executing SQL query:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

const updateEmployeeStatusByAdmin = async (req, res, next) => {
  try {
    const { MaNhanVien, TinhTrangHoatDong } = req.body;

    // Connect to the SQL Server database
    const pool = await sql.connect(config.sql);
    const request = new sql.Request();

    const query = `
            EXEC CapNhatTinhTrangHoatDongNhanVien
                @MaNhanVien = ${MaNhanVien},
                @TinhTrangHoatDong = N'${TinhTrangHoatDong}';
        `;

    const result = await request.query(query);

    // Check the result of the stored procedure
    if (result.rowsAffected[0] > 0) {
      console.log("Work status updated successfully");
      res.status(200).json({
        success: true,
        message: "Work status updated successfully",
      });
    } else {
      console.error("Employee not found or work status could not be updated");
      console.error("Stored Procedure Result:", result);

      res.status(404).json({
        success: false,
        error: "Employee not found or work status could not be updated",
      });
    }
  } catch (err) {
    console.error("Error executing SQL query:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  getAllAdmin,
  getAllDentistByAdmin,
  getAllEmployeeByAdmin,
  getAllPatientByAdmin,

  getAdminBySDT,
  getDentistBySDTByAdmin,
  getEmployeeBySDTByAdmin,
  getPatientBySDTByAdmin,

  createPatientByAdmin,
  createEmployeeByAdmin,
  createDentistByAdmin,

  deletePatientByAdmin,
  deleteEmployeeByAdmin,
  deleteDentistByAdmin,

  updateInfPatientByAdmin,
  updateInfEmployeeByAdmin,
  updateInfDentistByAdmin,
  updateInfAdmin,

  updateEmployeeStatusByAdmin,
};
