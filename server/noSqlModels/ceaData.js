const mongoose = require("mongoose");

const ceaDataSchema = new mongoose.Schema({
    estate_agency_license_no: {
        type: String,
        required: true,
    },
    estate_agency_name: {
        type: String,
        required: true,
    },
    estate_agency_address: {
        type: String,
        required: true,
    },
    email_address: {
        type: String,
        required: true,
    },
    year_incorporated: {
        type: Number,
        required: true,
    },
    agents: [
        {
            agent_id: String,
            agent_name: String,
            registration_start_date: String,
            registration_end_date: String,
            estate_agency_license_no: String,
        },
    ],
});

module.exports = mongoose.model("ceaData", ceaDataSchema, "cea_data");
