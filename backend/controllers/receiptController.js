// "use strict";
// const receiptData = require("../data/receipts");
// const getReceipt = async (req, res, next) => {
//   try {
//     const receiptlist = await receiptData.getReceipt();
//     res.send(receiptlist);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

"use strict";
const receiptData = require("../data/receipts");

const config = require("../config");
const sql = require("mssql");

const getReceipt = async (req, res, next) => {
	try {
		const receiptlist = await receiptData.getReceipt();
		res.send(receiptlist);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = {
	getReceipt,
};
