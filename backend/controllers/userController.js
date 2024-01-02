"use strict";
const userData = require("../data/users");

const config = require("../config");
const sql = require("mssql");

const getAllUser = async (req, res, next) => {
	try {
		const userlist = await userData.getUser();
		res.send(userlist);
	} catch (error) {
		res.status(400).send(error.message);
	}
};
const userMap = {};

const getUserBySDT = async (req, res, next) => {
	try {
		const userlist = await userData.getUser();
		for (const user of userlist) {
			userMap[user.SDT] = user;
		}
		const userSDT = req.params.SDT;
		console.log("SDT:", userMap[userSDT]);
		const user = userMap[userSDT];

		if (!user) {
			res.status(404).send("User not found");
			return;
		}

		res.send(user);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const createUser = async (req, res, next) => {
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

const changPWByAllUser = async (req, res, next) => {
	try {
		const { SDT, OldPassword, NewPassword } = req.body;

		// Connect to the SQL Server database
		const pool = await sql.connect(config.sql);
		const request = new sql.Request();

		// Call the stored procedure to change the patient's password
		const query = `
          EXEC DoiMatKhau
              @SDT = '${SDT}',
              @OldPassword = '${OldPassword}',
              @NewPassword = '${NewPassword}';
      `;

		const result = await request.query(query);

		// Check the result of the stored procedure
		if (result.rowsAffected[0] > 0) {
			res.status(200).json({
				success: true,
				message: "Password changed successfully",
			});
		} else {
			res.status(404).json({
				success: false,
				error: "User not found or password could not be changed",
			});
		}
	} catch (err) {
		console.error("Error executing SQL query:", err);
		res.status(500).json({ success: false, error: err.message });
	}
};

const forgotPassword = async (req, res, next) => {
	try {
		const { SDT, NewPassword } = req.body;

		// Connect to the SQL Server database
		const pool = await sql.connect(config.sql);
		const request = new sql.Request();

		// Call the stored procedure to reset the password
		const query = `
          EXEC QuenMatKhau
              @SDT = '${SDT}',
              @NewPassword = '${NewPassword}';
      `;

		const result = await request.query(query);

		// Check the result of the stored procedure
		if (
			result.rowsAffected[0] > 0 ||
			result.rowsAffected[1] > 0 ||
			result.rowsAffected[2] > 0
		) {
			console.log("Password reset successfully");
			res.status(200).json({
				success: true,
				message: "Password reset successfully",
			});
		} else {
			console.error("User not found or password could not be reset");
			console.error("Stored Procedure Result:", result);

			res.status(404).json({
				success: false,
				error: "User not found or password could not be reset",
			});
		}
	} catch (err) {
		console.error("Error executing SQL query:", err);
		res.status(500).json({ success: false, error: err.message });
	}
};

// const deleteAllUser = async (req, res, next) => {};
module.exports = {
	getAllUser,
	getUserBySDT,
	createUser,
	changPWByAllUser,
	forgotPassword,
	// deleteAllUser,
};
