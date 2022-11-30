const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    user_id: {
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
    contact_no: {
        type: Number,
        required: true,
    },
    email_address: {
        type: String,
        required: true,
    },
    password_hashed: {
        type: String,
        required: true,
    },
    saved_listing: [
        {
            listing_id: String,
            date_saved: String,
            listing_type: String,
            property_type: String,
            floor_size: Number,
            listed_time: String,
            availability: String,
            description: String,
            address: String,
            region: String,
            listed_price: Number,
            status: String,
            listed_by: {
                agent_id: String,
                agent_first_name: String,
                agent_last_name: String,
                estate_license_no: String,
                estate_agency_name: String,
                contact_no: Number,
            },
            listing_images: [String],
        },
    ],
});

module.exports = mongoose.model("users", usersSchema);
