require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");
connection.end();

const app = express();

app.get("/api", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
