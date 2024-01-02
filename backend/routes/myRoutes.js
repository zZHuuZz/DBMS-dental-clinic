"use strict";

const express = require("express");
const userControll = require("../controllers/userController");
const serviceControll = require("../controllers/serviceController");
const employeeController = require("../controllers/employeeController");
const patientController = require("../controllers/patientController");
const dentistController = require("../controllers/dentistController");
const drugController = require("../controllers/drugController");
const adminController = require("../controllers/adminController");
const receiptController = require("../controllers/receiptController");
const appointmentScheduleController = require("../controllers/appointmentScheduleController");
const medHistoryController = require("../controllers/medHistoryController");

const router = express.Router();

// get user
const {
	getAllUser,
	getUserBySDT,
	createUser,
	updateUser,
	changPWByAllUser,
	forgotPassword,
} = userControll;

//http://localhost:5000/api/users/getAllUser
router.get("/users/getAllUser", getAllUser); //DONE
router.get("/users/getUserBySDT/:SDT", getUserBySDT);
router.post("/users/createUser", createUser);

router.put("/employees/changePassword", changPWByAllUser);
router.put("/dentists/changePassword", changPWByAllUser);
router.put("/patients/changePassword", changPWByAllUser);

router.put("/employees/forgotPassword", forgotPassword);
router.put("/dentists/forgotPassword", forgotPassword);
router.put("/patients/forgotPassword", forgotPassword);

// NHAN VIEN
const {
	getAllEmployee,
	getEmployeeBySDT,
	updateInfPatientByEmployee,
	updateInfEmployee,
	updateInfDentistByEmployee,
	changePaymentStatus,
} = employeeController;
// http://localhost:5000/api/employees/getAllEmployee
router.get("/employees/getAllEmployee", getAllEmployee);
router.get("/employees/getEmployeeBySDT/:SDT", getEmployeeBySDT);
router.put("/employees/updateInf/:SDT", updateInfEmployee);
router.put(
	"/employees/updateInfPatientByEmployee/:SDT",
	updateInfPatientByEmployee
);
router.put(
	"/employees/updateInfDentistByEmployee/:SDT",
	updateInfDentistByEmployee
);
router.put("/employees/changePaymentStatus", changePaymentStatus);
// NHA SI
const { getAllDentist, getDentistBySDT, updateInfDentist } = dentistController;
router.get("/dentists/getAllDentist", getAllDentist);
router.get("/dentists/getDentistBySDT/:SDT", getDentistBySDT);
router.put("/dentists/updateInf/:SDT", updateInfDentist);

// BENH NHAN
const { getAllPatient, getPatientBySDT, updateInfPatient } = patientController;
// http://localhost:5000/api/patients/getAllPatient
router.get("/patients/getAllPatient", getAllPatient); //DONE
//http://localhost:5000/api/patients/getPatientBySDT/0123456780
router.get("/patients/getPatientBySDT/:SDT", getPatientBySDT);
// http://localhost:5000/api/patients/deletePatient/0123456780
//"message": "Error deleting patient"
router.put("/patients/updateInf/:SDT", updateInfPatient);

// qtv
const {
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
	getAllAdmin,
	getAllDentistByAdmin,
	getAllEmployeeByAdmin,
	getAllPatientByAdmin,
	updateInfPatientByAdmin,
	updateInfEmployeeByAdmin,
	updateInfDentistByAdmin,
	updateInfAdmin,
	updateEmployeeStatusByAdmin,
} = adminController;

router.get("/admins/getAllAdmin", getAllAdmin);
router.get("/admins/getAllDentistByAdmin", getAllDentistByAdmin);
router.get("/admins/getAllEmployeeByAdmin", getAllEmployeeByAdmin);
router.get("/admins/getAllPatientByAdmin", getAllPatientByAdmin);

router.get("/admins/getAdminBySDT/:SDT", getAdminBySDT);
router.get("/admins/getEmployeeBySDT/:SDT", getEmployeeBySDTByAdmin);
router.get("/admins/getDentistBySDT/:SDT", getDentistBySDTByAdmin);
router.get("/admins/getPatientBySDT/:SDT", getPatientBySDTByAdmin);

router.post("/admins/createPatientByAdmin", createPatientByAdmin);
router.post("/admins/createEmployeeByAdmin", createEmployeeByAdmin);
router.post("/admins/createDentistByAdmin", createDentistByAdmin);

router.delete("/admins/deletePatient/:SDT", deletePatientByAdmin);
router.delete("/admins/deleteEmployee/:SDT", deleteEmployeeByAdmin);
router.delete("/admins/deleteDentist/:SDT", deleteDentistByAdmin);

router.put("/admins/updateInfPatient/:SDT", updateInfPatientByAdmin);
router.put("/admins/updateInfEmployee/:SDT", updateInfEmployeeByAdmin);
router.put("/admins/updateInfDentist/:SDT", updateInfDentistByAdmin);
router.put("/admins/updateInfAdmin/:SDT", updateInfAdmin);

router.put("/admins/updatEmployeeStatus", updateEmployeeStatusByAdmin);
// get service
const {
	getAllService,
	getServiceById,
	createService,
	deleteService,
	updateService,

	getAllServiceUsage,
} = serviceControll;

router.get("/services/getAllService", getAllService); //DONE
router.get("/services/getServiceById/:MaDichVu", getServiceById); //DONE
// router.delete("/services/deleteService/:MaDichVu", deleteService);

// service_usages
router.get("/services_usages/getAllServiceUsage", getAllServiceUsage);

// drug
const { getAllDrug, getDrugById, updateDrug, createDrug, deleteDrug } =
	drugController;
router.get("/admins/drugs/getAllDrug", getAllDrug);
router.get("/employees/drugs/getAllDrug", getAllDrug);
router.get("/dentists/drugs/getAllDrug", getAllDrug);

router.get("/admins/drugs/getDrugByID/:MaThuoc", getDrugById);
router.get("/employees/drugs/getDrugByID/:MaThuoc", getDrugById);
router.get("/dentists/drugs/getDrugByID/:MaThuoc", getDrugById);

router.post("/admins/drugs/createDrug", createDrug);

router.put("/admins/drugs/updateDrug/:MaThuoc", updateDrug);
// Define a route for deleting a drug
router.delete("/admins/drugs/deleteDrug/:MaThuoc/:NgayHetHan", deleteDrug);

// receipt
const { getReceipt } = receiptController;
router.get("/receipts/getReceipt", getReceipt);

// lich hen appointmentSchedule
const { getAllAppointmentSchedule } = appointmentScheduleController;
router.get(
	"/appointmentSchedule/getAllAppointmentSchedule",
	getAllAppointmentSchedule
);

//lich su kham benh - ho so benh an
const { getAllMedHistory, getMedHistoryByID } = medHistoryController;
router.get("/employees/medHistory/getAllMedHistory", getAllMedHistory);
router.get("/employees/medHistory/getMedHistoryByID/:ID", getMedHistoryByID);

module.exports = {
	routes: router,
};
