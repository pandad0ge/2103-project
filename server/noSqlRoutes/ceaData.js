const express = require("express");
const router = express.Router();
const CeaData = require("../noSqlModels/ceaData");

// Get Agent (To check if agent is authorised by CEA)
router.get("/:id", async (req, res) => {
    try {
        const agent = await CeaData.find({ "agents.agent_id": req.params.id });

        res.json(agent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new CEA Data
router.post("/", async (req, res) => {
    const agencyData = new CeaData({
        estate_agency_license_no: req.body.estate_agency_license_no,
        estate_agency_name: req.body.estate_agency_name,
        estate_agency_address: req.body.estate_agency_address,
        email_address: req.body.email_address,
        year_incorporated: req.body.year_incorporated,
        agents: req.body.agents,
    });

    try {
        const newAgencyData = await agencyData.save();
        res.status(201).json(newAgencyData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
