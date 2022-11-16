require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

let db = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");

const users = [];

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users/register", async (req, res) => {
    try {
        console.log(req.body);

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        db.query(
            `INSERT INTO UserAccounts (user_id, first_name, last_name, contact_no, email_address, password_hash) VALUES
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
    db.connect((err) => {
        if (err) {
            console.log("Database Connection Failed", err);
            return;
        }

        console.log("Connected to Database");

        // This query will be used to select columns
        let query = `SELECT * FROM UserAccounts WHERE user_id = ${req.body.userId}`;

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
        } catch {
            console.log("test");
        }
    });

    // console.log("results");
    // const user = users.find((user) => user.name === req.body.name);
    // if (user == null) {
    //     return res.status(400).send("Cannot find user");
    // }
});

app.get("/api", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});