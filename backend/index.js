const express = require("express");
const config = require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/myRoutes");
const sql = require("mssql");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

app.use(
	cors({
		origin: ["http://localhost:1433"],
		methods: ["POST", "GET"],
		credentials: true,
	})
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", userRoutes.routes);

app.use(cookieParser());
app.use(
	session({
		secret: "secret", //secret key uased to encrypt session cookie
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: false,
			maxAge: 1000 * 60 * 60 * 24,
		}, //set cookie property
		test: "test",
	})
);

const pool = new sql.ConnectionPool(config.sql);
const poolConnect = pool.connect();

poolConnect
	.then(() => {
		console.log("Connected to the database");
	})
	.catch((err) => {
		console.error("Error connecting to the database:", err);
	});

app.get("/", (req, res) => {
	if (req.session.SDT) {
		return res.json({ valid: true, SDT: req.session.SDT });
	} else {
		return res.json({ valid: false });
	}
});

app.post("/signup", async (req, res) => {
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
		// const request = pool.request();

		const {
			HoTen = "Bệnh nhân mới",
			NgaySinh = "1990-01-01",
			...rest
		} = req.body;

		// Create Request object
		const request = new sql.Request();

		// Execute stored procedure
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
		res.status(500).json({ success: false, error: "Internal Server Error" });
	}
});

app.post("/login", async (req, res) => {
	try {
		const requiredFields = ["SDT", "MatKhau"];
		for (const field of requiredFields) {
			if (!req.body[field]) {
				return res.status(400).json({ error: `${field} is required` });
			}
		}

		const pool = await sql.connect(config.sql);
		const request = new sql.Request();

		// Execute stored procedure
		const query = `
		EXEC DangNhap
		  @UserName = '${req.body.SDT}',
		  @Password = N'${req.body.MatKhau}';
	  `;

		const result = await request.query(query);

		// Check the user role from the stored procedure result
		const userRole =
			result.recordset && result.recordset[0]
				? result.recordset[0].UserRole
				: null;
		console.log(result);
		//   const userRole = result.recordset && result.recordset[0] ? result.recordset[0].UserRole : null;
		console.log("SQL Query:", query);
		console.log("Result:", result);
		// Set the session variable
		req.session.SDT = req.body.SDT;

		// Log additional information
		console.log("SQL Query:", query);
		console.log("Result:", result);

		// Respond based on user role
		if (
			userRole === "QTV" ||
			userRole === "NHANVIEN" ||
			userRole === "NHASI" ||
			userRole === "BENHNHAN"
		) {
			res.status(200).json({
				success: true,
				message: `User ${req.body.SDT} logged in successfully as ${userRole}`,
				Login: true,
				SDT: req.session.SDT,
				role: userRole,
			});
		} else {
			res.status(401).json({ success: false, error: "Invalid credentials" });
		}
	} catch (err) {
		console.error("Error executing stored procedure:", err);
		res.status(500).json({ success: false, error: "Internal Server Error" });
	}
});

app.post("/logout", (req, res) => {
	try {
		// Destroy the session
		req.session.destroy((err) => {
			if (err) {
				console.error("Error destroying session:", err);
				res
					.status(500)
					.json({ success: false, error: "Internal Server Error" });
			} else {
				res
					.status(200)
					.json({ success: true, message: "User logged out successfully" });
			}
		});
	} catch (err) {
		console.error("Error during logout:", err);
		res.status(500).json({ success: false, error: "Internal Server Error" });
	}
});

app.listen(config.port, () => {
	console.log(`Server listening on port ${config.port}`);
});
