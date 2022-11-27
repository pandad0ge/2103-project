require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const { json } = require("express");
const app = express();
var sha256 = require('js-sha256');

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

app.get("/users/home/api/searchlisting", (req, res) => { });

app.post("/api/searchlisting", (req, res) => {
    console.log(req.body);
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

app.get("/user/profile/api/user", (req, res) => {
    let query =
    `SELECT L.floor_size, L.property_type, L.region, L.address, L.listed_price, L.description, L.listing_type,
    A.first_name, A.last_name, A.contact_no,
    I.image_link,
    U.first_name AS user_first_name, U.last_name AS user_last_name, U.email_address AS user_email_address, U.contact_no AS user_contact_no
    FROM listing AS L
    INNER JOIN agentaccount AS A
    ON L.listed_by = A.agent_user_id
    INNER JOIN listingimage AS I
    ON L.listing_id = I.listing_id
    INNER JOIN savedlisting  AS S
    ON L.listing_id = S.listing_id
    INNER JOIN useraccount AS U 
    ON S.user_id = U.user_id
    WHERE S.user_id = '10';`;

    try {
        db.query(query, (err, rows) => {
            if (err) throw err;
            res.json(rows);
        });
    } catch (err) {
        console.log(err);
    }
});


app.get("/agent/profile/api/agent", (req, res) => {
    let query =
    `SELECT L.floor_size, L.property_type, L.region, L.address, L.listed_price, L.description, L.listing_type,
    A.first_name, A.last_name, A.contact_no, A.email_address,
    I.image_link,
    AG.agent_id,
    AC.estate_agency_license_no
    FROM listing AS L
    INNER JOIN agentaccount AS A
    ON L.listed_by = A.agent_user_id
    INNER JOIN listingimage AS I
    ON L.listing_id = I.listing_id
    INNER JOIN agent AS AG
    ON A.agent_id = AG.agent_id
    INNER JOIN agency AS AC
    ON AG.estate_agency_license_no = AC.estate_agency_license_no
    WHERE A.agent_user_id = '154';`;

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

        const hashedPassword = sha256(req.body.password);

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
