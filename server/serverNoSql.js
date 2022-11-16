require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const uri =
    "mongodb+srv://dbUser:dbUserPassword@cluster0.v5laxal.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
}

connect();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/api", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
