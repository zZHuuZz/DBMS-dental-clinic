"use strict";
const medHistoryData = require("../data/medHistories");
const config = require("../config");
const sql = require("mssql");

// const getAllMedHistory = async (req, res, next) => {
//   try {
//     const medHistoriesList = await medHistorieseData.getMedHistory();
//     res.send(medHistoriesList);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

const medHistoryMap = {};

const getAllMedHistory = async (req, res, next) => {
	try {
		const medHistoryList = await medHistoryData.getMedHistory();
		for (const medHistory of medHistoryList) {
			medHistoryMap[medHistory.MaBenhNhan] = medHistory;
		}
		res.send(medHistoryList);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getMedHistoryByID = async (req, res, next) => {
	try {
		const medHistorylist = await medHistoryData.getMedHistory();
		for (const medHistory of medHistorylist) {
			medHistoryMap[medHistory.MaBenhNhan] = medHistory;
		}
		const medHistoryMaBenhNhan = req.params.MaBenhNhan;
		console.log("MaBenhNhan:", medHistoryMap[medHistoryMaBenhNhan]);
		const medHistory = medHistoryMap[medHistoryMaBenhNhan];

		if (!medHistory) {
			res.status(404).send("medHistory not found");
			return;
		}

		res.send(medHistory);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = {
	getAllMedHistory,
	getMedHistoryByID,
};
