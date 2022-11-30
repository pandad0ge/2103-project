const express = require("express");
const router = express.Router();
const sha256 = require("js-sha256").sha256;
const Agents = require("../noSqlModels/agent");
const CeaData = require("../noSqlModels/ceaData");
const Listings = require("../noSqlModels/listing");
const Users = require("../noSqlModels/user");

// Create Account
router.post("/register", async (req, res) => {
    const agentCheck = await Agents.find({
        "agent_user_id": req.body.agent_user_id,
    });

    const ceaCheck = await CeaData.find({
        "agents.agent_id": req.body.agent_id,
    });

    try {
        if (agentCheck.length !== 0) {
            res.status(400).json({ message: "Agent already exists" });
        } else if (ceaCheck.length == 0) {
            res.status(400).json({ message: "Agent is not registed with CEA" });
        } else {
            const hashed_password = sha256(req.body.password);
            const agency = await CeaData.find({
                "agents.agent_id": req.body.agent_id,
            });
            const estate_agency_license_no = agency.estate_agency_no;
            const estate_agency_name = agency.estate_agency_name;

            const agent = new Agents({
                agent_user_id: req.body.agent_user_id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                contact_no: req.body.contact_no,
                agent_id: req.body.agent_id,
                password_hash: hashed_password,
                estate_license_no: estate_agency_license_no,
                estate_agency_name: estate_agency_name,
            });

            const newAgent = await agent.save();
            res.status(201).json(newAgent);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const agents = await Agents.find({
            agent_user_id: req.body.agent_user_id,
        });

        if (
            agents.length == 0 ||
            agents[0].password_hash !== sha256(req.body.password)
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

// Get all Agents
router.get("/", async (req, res) => {
    try {
        const agents = await Agents.find();
        res.json(agents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one Agent
router.get("/:id", async (req, res) => {
    try {
        const agent = await Agents.findOne({
            agent_user_id: req.params.id,
        }).select(
            "first_name last_name email contact_no estate_agency_license_no created_listings transactions"
        );
        res.json(agent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete Listing
router.patch("/:id", async (req, res) => {
    try {
        const agentCheck = await Agents.find({
            "agent_user_id": req.params.id,
        }).limit(1);
        if (agentCheck.length == 0) {
            res.status(400).json({ message: "Agent does not exist" });
        } else {
            // Removes listing from agents collection
            const agent = await Agents.find({ "agent_user_id": req.params.id })
                .limit(1)
                .update({
                    $pull: {
                        created_listings: {
                            listing_id: req.body.listing_id,
                        },
                    },
                });

            // Removes listing from listings collection
            const listing = await Listings.find({
                listing_id: req.body.listing_id,
            })
                .limit(1)
                .remove();

            // Removes listing from users collection
            const user = await Users.find({
                "saved_listing.listing_id": req.body.listing_id,
            }).update({
                $pull: {
                    saved_listing: {
                        listing_id: req.body.listing_id,
                    },
                },
            });

            res.json(agentCheck);
        }
    } catch (err) {
        console.log("here3");
        res.status(500).json({ message: err.message });
    }
});

// Get Average by Company
router.get("/sale/companyAvg", async (req, res) => {
    try {
        const avg = await Agents.aggregate([
            { $match: {} },
            { $unwind: "$transactions" },
        ]).group({
            _id: "$estate_agency_name",
            average: { $avg: "$transactions.transacted_price" },
        });
        res.json(avg);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Max by Company
router.get("/sale/companyMax", async (req, res) => {
    try {
        const max = await Agents.aggregate([
            { $match: {} },
            { $unwind: "$transactions" },
        ]).group({
            _id: "$estate_agency_name",
            max: { $max: "$transactions.transacted_price" },
        });
        res.json(max);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Max by Company
router.get("/sale/companyMin", async (req, res) => {
    try {
        const min = await Agents.aggregate([
            { $match: {} },
            { $unwind: "$transactions" },
        ]).group({
            _id: "$estate_agency_name",
            min: { $min: "$transactions.transacted_price" },
        });
        res.json(min);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
