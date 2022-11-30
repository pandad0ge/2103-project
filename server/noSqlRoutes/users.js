const express = require("express");
const router = express.Router();
const sha256 = require("js-sha256").sha256;
const Users = require("../noSqlModels/user");

// Create Account
router.post("/register", async (req, res) => {
    try {
        const userCheck = await Users.find({ "user_id": req.body.user_id });
        if (userCheck.length !== 0) {
            res.status(400).json({ message: "User already exists" });
        } else {
            const hashed_password = sha256(req.body.password);
            const user = new Users({
                user_id: req.body.user_id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                contact_no: req.body.contact_no,
                email_address: req.body.email_address,
                password_hashed: hashed_password,
            });

            const newUser = await user.save();
            res.status(201).json(newUser);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const users = await Users.find({ user_id: req.body.user_id });

        if (
            users.length == 0 ||
            users[0].password_hashed !== sha256(req.body.password)
        ) {
            res.status(400).json({ message: "Invalid login details" });
        } else {
            console.log("test2");
            res.status(200).json({ message: "Login Successful" });
        }
        console.log("test4");
    } catch (err) {
        console.log("test3");
        res.status(500).json({ message: err.message });
    }
});

// Getting account deatils
router.get("/:id", async (req, res) => {
    try {
        const users = await Users.find({ user_id: req.params.id }).select(
            "first_name last_name email_address contact_no saved_listing"
        );
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Save Listings
router.patch("/saveListing/:id", async (req, res) => {
    try {
        const userCheck = await Users.find({ "user_id": req.params.id });
        if (userCheck.length == 0) {
            res.status(400).json({ message: "User does not exist" });
        } else {
            const duplicateFlag = 0;
            if (duplicateFlag == 0) {
                for (let i = 0; i < userCheck[0].saved_listing.length; i++) {
                    if (
                        userCheck[0].saved_listing[i].listing_id ===
                        req.body.listing.listing_id
                    ) {
                        duplicateFlag = 1;
                        res.json({ message: "Already Added" });
                        break;
                    }
                }
            } else {
                const users = await Users.find({
                    user_id: req.params.id,
                }).update({
                    $push: { saved_listing: req.body.listing },
                });
                res.json(users);
            }
        }
    } catch (err) {
        console.log("here3");
        res.status(500).json({ message: err.message });
    }
});

// Remove Listings
router.patch("/removeListing/:id", async (req, res) => {
    try {
        const userCheck = await Users.find({ "user_id": req.params.id });
        if (userCheck.length == 0) {
            res.status(400).json({ message: "User does not exist" });
        } else {
            const user = await Users.find({
                "user_id": req.params.id,
            })
                .limit(1)
                .update({
                    $pull: {
                        saved_listing: {
                            listing_id: req.body.listing_id,
                        },
                    },
                });

            res.json(user);
        }
    } catch (err) {
        console.log("here3");
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
