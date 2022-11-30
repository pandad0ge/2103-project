require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.MONGO_DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

const app = express();

app.use(express.json());
app.use(cors());

const listingsRouter = require("./noSqlRoutes/listings");
app.use("/api/listings", listingsRouter);

const usersRouter = require("./noSqlRoutes/users");
app.use("/api/users", usersRouter);

const agentsRouter = require("./noSqlRoutes/agents");
app.use("/api/agents", agentsRouter);

const ceaDataRouter = require("./noSqlRoutes/ceaData");
app.use("/api/ceaData", ceaDataRouter);

// app.get("/users", (req, res) => {
//     res.json(users);
// });

// app.get("/api", (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.json({ "users": ["userOne", "userTwo", "userThree"] });
// });

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
