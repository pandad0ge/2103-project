const mongoose = require("mongoose");

const listingsSchema = new mongoose.Schema({
    listing_id: {
        type: Number,
        required: true,
    },
    listing_type: {
        type: String,
        required: true,
    },
    property_type: {
        type: String,
        required: true,
    },
    floor_size: {
        type: Number,
        required: true,
    },
    listed_time: {
        type: String,
        required: true,
        default: Date.now,
    },
    availability: {
        type: String,
        required: true,
        default: Date.now,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    listed_price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    listed_by: {
        agent_id: Number,
        first_name: String,
        last_name: String,
        estate_license_no: String,
        estate_agency_name: String,
    },
    listing_images: [String],
});

listingsSchema.index({ listing_id: 1 }, { unique: true });

listingsSchema.index({ region: 1 });

listingsSchema.index({
    property_type: "text",
    description: "text",
    address: "text",
    region: "text",
});

listingsSchema.virtual("name").get(function () {
    return `${this.listed_by.first_name} ${this.listed_by.last_name}`;
});

console.log(listingsSchema.indexes());

module.exports = mongoose.model("listings", listingsSchema, "listings");
