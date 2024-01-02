"use strict";
const drugData = require("../data/drugs");
const config = require("../config");
const sql = require("mssql");

const getAllDrug = async (req, res, next) => {
	try {
		const druglist = await drugData.getDrug();
		res.send(druglist);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const drugMap = {};
const getDrugById = async (req, res, next) => {
	try {
		const druglist = await drugData.getDrug();
		for (const drug of druglist) {
			drugMap[drug.MaThuoc] = drug;
		}
		const drugId = req.params.MaThuoc;
		console.log("MaThuoc: ", drugMap[drugId]);
		const drug = drugMap[drugId];

		if (!drug) {
			res.status(404).send("Drug not found");
			return;
		}

		res.send(drug);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const createDrug = async (req, res, next) => {
	try {
		const requiredFields = [
			"MaThuoc",
			"NgayHetHan",
			"TenThuoc",
			"DonViTinh",
			"DonGia",
			"ChiDinh",
			"SoLuongTonKho",
			"ThaoTac",
		];
		for (const field of requiredFields) {
			if (!req.body[field]) {
				return res.status(400).json({ error: `${field} is required` });
			}
		}

		const pool = await sql.connect(config.sql);

		const { MaThuoc, NgayHetHan, ...rest } = req.body;

		const request = new sql.Request();

		const query = `
      EXEC QuanLyKhoThuoc
        @MaThuoc = ${parseInt(MaThuoc)},
        @NgayHetHan = '${NgayHetHan}',
        @TenThuoc = N'${rest.TenThuoc}',
        @DonViTinh = '${rest.DonViTinh}',
        @DonGia = ${parseFloat(rest.DonGia)},
        @ChiDinh = N'${rest.ChiDinh}',
        @SoLuongTonKho = ${parseFloat(rest.SoLuongTonKho)},
        @ThaoTac = 'ThemMoi';
    `;

		const result = await request.query(query);

		console.log("Stored Procedure Result:", result);

		res
			.status(201)
			.json({ success: true, message: "Drug created successfully" });
	} catch (err) {
		console.error("Error executing SQL query:", err);
		res.status(500).json({ success: false, error: err.message });
	}
};

const updateDrug = async (req, res, next) => {
	try {
		const requiredFields = [
			"MaThuoc",
			"NgayHetHan",
			"TenThuoc",
			"DonViTinh",
			"DonGia",
			"ChiDinh",
			"SoLuongTonKho",
		];
		for (const field of requiredFields) {
			if (!req.body[field]) {
				return res.status(400).json({ error: `${field} is required` });
			}
		}

		const pool = await sql.connect(config.sql);

		const { MaThuoc, NgayHetHan, ...rest } = req.body;

		const request = new sql.Request();

		const query = `
      EXEC QuanLyKhoThuoc
        @MaThuoc = ${parseInt(MaThuoc)},
        @NgayHetHan = '${NgayHetHan}',
        @TenThuoc = N'${rest.TenThuoc}',
        @DonViTinh = '${rest.DonViTinh}',
        @DonGia = ${parseFloat(rest.DonGia)},
        @ChiDinh = N'${rest.ChiDinh}',
        @SoLuongTonKho = ${parseFloat(rest.SoLuongTonKho)},
        @ThaoTac = 'CapNhat';
    `;

		const result = await request.query(query);

		console.log("Stored Procedure Result:", result);

		res
			.status(200)
			.json({ success: true, message: "Drug updated successfully" });
	} catch (err) {
		console.error("Error executing SQL query:", err);
		res.status(500).json({ success: false, error: err.message });
	}
};

//delete drug
const deleteDrug = async (req, res, next) => {
	try {
		// Extract drug ID from request parameters
		const drugId = req.params.MaThuoc;
		const exp = req.params.NgayHetHan;

		// Connect to the SQL Server database
		const pool = await sql.connect(config.sql);
		const request = new sql.Request();

		// Use parameterized query to avoid SQL injection
		const query = `
      EXEC XoaThuoc
      @MaThuoc = @drugId,
      @NgayHetHan = @exp;  
  `;

		request.input("drugId", sql.Int, parseInt(drugId));
		const parsedExp = new Date(exp);

		if (isNaN(parsedExp.getTime())) {
			throw new Error("Invalid date format");
		}

		request.input("exp", sql.DateTime, parsedExp);

		const result = await request.query(query);

		// Check the result of the stored procedure
		if (result.rowsAffected[0] > 0) {
			res
				.status(200)
				.json({ success: true, message: "Drug deleted successfully" });
		} else {
			res.status(404).json({
				success: false,
				error: "Drug not found or could not be deleted",
			});
		}
	} catch (err) {
		console.error("Error executing SQL query:", err);
		res.status(500).json({ success: false, error: err.message });
	}
};

// const deleteDrug = async (req, res, next) => {
//   try {
//     // Extract drug ID from request parameters
//     const drugId = req.params.MaThuoc;
//     const exp = req.params.NgayHetHan;

//     // Connect to the SQL Server database
//     const pool = await sql.connect(config.sql);
//     const request = new sql.Request();

//     // Use parameterized query to avoid SQL injection
//     const query = `
//       EXEC XoaThuoc
//       @MaThuoc = @drugId,
//       @NgayHetHan = @exp;
//   `;

//     // Add parameters to the request
//     request.input("drugId", sql.Int, parseInt(drugId));
//     request.input("exp", sql.DateTime, parseInt(exp));

//     const result = await request.query(query);

//     // Check the result of the stored procedure
//     if (result.rowsAffected[0] > 0) {
//       res
//         .status(200)
//         .json({ success: true, message: "Drug deleted successfully" });
//     } else {
//       res.status(404).json({
//         success: false,
//         error: "Drug not found or could not be deleted",
//       });
//     }
//   } catch (err) {
//     console.error("Error executing SQL query:", err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// };

module.exports = {
	getAllDrug,
	getDrugById,
	createDrug,
	updateDrug,
	deleteDrug,
};
