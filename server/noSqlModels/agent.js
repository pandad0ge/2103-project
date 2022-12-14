const mongoose = require("mongoose");

const agentsSchema = new mongoose.Schema({
    agent_user_id: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact_no: {
        type: Number,
        required: true,
    },
    password_hash: {
        type: String,
        required: true,
    },
    agent_id: {
        type: String,
    },
    estate_license_no: {
        type: String,
    },
    estate_agency_name: {
        type: String,
    },
    transactions: [
        {
            listing_id: String,
            transacted_price: Number,
            transacted_date: String,
            address: String,
            description: String,
        },
    ],
    created_listings: [
        {
            listing_id: String,
            address: String,
            description: String,
            listed_price: Number,
            listing_images: [String],
        },
    ],
});

module.exports = mongoose.model("agents", agentsSchema, "agents");
