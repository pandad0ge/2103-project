require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const { json } = require("express");
const app = express();

const users = [];

app.use(express.json());
app.use(cors());
// let db = mysql.createConnection(process.env.DATABASE_URL);
// console.log("Connected to PlanetScale!");

const db = mysql.createConnection({
	host: "localhost",
	user: "sqluser",
	password: "password",
	database: "2103db",
});

db.connect((err) => {
	if (err) {
		console.log("Database Connection Failed", err);
		return;
	}
	console.log("Connected to Database");
});

app.get("/api", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(5000, () => {
	console.log("Server started on port 5000");
});

app.get("/users", (req, res) => {
	res.json(users);
});

app.post("/agent/home/api/createlisting", (req, res) => {
	console.log(req.query);

	if (Object.keys(req.query).length === 0) return;

	let professorAgentId = "1";

	let query1 = `INSERT INTO listing
    (listing_type,
    property_type,
    floor_size,
    listed_date,
    availability,
    description,
    address,
    region,
    listed_price,
    status,
    listed_by)
    VALUES (?, ?, ?, CURDATE(), ?, ?, ?, ?, ?, 1, ${professorAgentId});`;

	let selectLatestQuery =
		"SELECT * FROM listing ORDER BY listing_id DESC LIMIT 1";

	let query2 = `INSERT INTO listingimage
    (listing_id, image_link) VALUES (?, ?);`;

	try {
		db.query(
			query1,
			[
				req.query.listing_type,
				req.query.property_type,
				req.query.floor_size,
				req.query.availability,
				req.query.description,
				req.query.address,
				req.query.region,
				req.query.listed_price,
				req.query.status,
			],
			(error, rows, fields) => {
				if (error) return res.json({ error: error });
			}
		);

		db.query(selectLatestQuery, (error, rows, fields) => {
			if (error) return res.json({ error: error });
			// console.log(rows);
			db.query(
				query2,
				[rows[0]["listing_id"], req.query.image_link],
				(error, rows, fields) => {
					if (error) return res.json({ error: error });
				}
			);
		});

		res.status(201).send();
	} catch {
		res.status(500).send();
	}
});

app.get("/user/home/api/searchlisting", (req, res) => {
	console.log(req.query);

	if (
		req.query.address === undefined ||
		req.query.listing_type === undefined
	) {
		return;
	}

	if (Object.keys(req.query).length === 0) return;

	// This query will be used to select columns
	let query = `SELECT L.floor_size, L.property_type, L.region, L.address,
                L.listed_price, L.description, L.listing_type,
                A.first_name, A.last_name, A.contact_no,
                I.image_link
                FROM listing AS L
                INNER JOIN agentaccount AS A
                ON L.listed_by = A.agent_user_id
                INNER JOIN listingimage AS I
                ON L.listing_id = I.listing_id
                WHERE L.address LIKE ?
                AND L.listing_type = ?
                ORDER BY listed_date;`;

	try {
		db.query(
			query,
			[`%${req.query.address}%`, req.query.listing_type],
			(err, rows, fields) => {
				if (err) throw err;
				res.json(rows);
			}
		);
	} catch (err) {
		console.log(err);
	}
});

app.get("/user/home/api/listing", (req, res) => {
	// This query will be used to select columns
	let query = `SELECT L.floor_size, L.property_type, L.region, L.address, 
                L.listed_price, L.description, L.listing_type,
                A.first_name, A.last_name, A.contact_no,
                I.image_link
                FROM listing AS L
                INNER JOIN agentaccount AS A
                ON L.listed_by = A.agent_user_id
                INNER JOIN listingimage AS I
                ON L.listing_id = I.listing_id
                ORDER BY listed_date
                DESC LIMIT 3;`;

	try {
		db.query(query, (err, rows) => {
			if (err) throw err;
			res.json(rows);
		});
	} catch (err) {
		console.log(err);
	}
});

app.get("/user/home/api/sale", (req, res) => {
	// This query will be used to select columns
	let query = `SELECT L.floor_size, L.property_type, L.region, L.address, L.listed_price, L.description,
                A.first_name, A.last_name, A.contact_no,
                I.image_link
                FROM listing AS L
                INNER JOIN agentaccount AS A
                ON L.listed_by = A.agent_user_id
                INNER JOIN listingimage AS I
                ON L.listing_id = I.listing_id
                WHERE L.listing_type = "sale"
                ORDER BY listed_date;`;

	try {
		db.query(query, (err, rows) => {
			if (err) throw err;
			res.json(rows);
		});
	} catch (err) {
		console.log(err);
	}
});

app.get("/user/home/api/rent", (req, res) => {
	// This query will be used to select columns
	let query = `SELECT L.floor_size, L.property_type, L.region, L.address, L.listed_price, L.description,
                A.first_name, A.last_name, A.contact_no,
                I.image_link
                FROM listing AS L
                INNER JOIN agentaccount AS A
                ON L.listed_by = A.agent_user_id
                INNER JOIN listingimage AS I
                ON L.listing_id = I.listing_id
                WHERE L.listing_type = "rent"
                ORDER BY listed_date;`;

	try {
		db.query(query, (err, rows) => {
			if (err) throw err;
			res.json(rows);
		});
	} catch (err) {
		console.log(err);
	}
});

app.post("/users/register", async (req, res) => {
	try {
		console.log(req.body);

		const hashedPassword = await bcrypt.hash(req.body.password, 10);

		db.query(
			`INSERT INTO useraccount (user_id, first_name, last_name, contact_no, email_address, password_hash) VALUES
            (?,?,?,?,?,?)`,
			[
				req.body.userId,
				req.body.fName,
				req.body.lName,
				req.body.contactNo,
				req.body.email,
				hashedPassword,
			],
			(error, results) => {
				if (error) return res.json({ error: error });
			}
		);
		res.status(201).send();
	} catch {
		res.status(500).send();
	}
});

app.post("/users/login", async (req, res) => {
	// This query will be used to select columns
	let query = `SELECT * FROM useraccount WHERE user_id = ${req.body.userId}`;

	try {
		db.query(query, (err, rows) => {
			if (err) throw err;
			bcrypt.compare(
				req.body.password,
				rows[0].password_hash,
				(err, result) => {
					console.log(result);
				}
			);

			// console.log(rows);

			// try {
			//     if ( await bcrypt.compare(req.body.password, rows[0].password_hash)) {
			//         res.send("Success");
			//     } else {
			//         res.send("Not Allowed");
			//     }
			// } catch {
			//     res.status(500).send();
			// }
		});
	} catch (err) {
		console.log(err);
	}

	// console.log("results");
	// const user = users.find((user) => user.name === req.body.name);
	// if (user == null) {
	//     return res.status(400).send("Cannot find user");
	// }
});
