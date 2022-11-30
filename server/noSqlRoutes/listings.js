const express = require("express");
const router = express.Router();
const Listings = require("../noSqlModels/listing");
const Agents = require("../noSqlModels/agent");

function generateRandom(min = 1000000000, max = 9999999999) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
}

// Create Listing
router.post("/create/:id", async (req, res) => {
    const listing_id = generateRandom();
    const listing = new Listings({
        listing_id: listing_id,
        listing_type: req.body.listing_type,
        property_type: req.body.property_type,
        floor_size: req.body.floor_size,
        listed_time: req.body.listed_time,
        availability: req.body.availability,
        description: req.body.description,
        address: req.body.address,
        region: req.body.region,
        listed_price: req.body.listed_price,
        status: req.body.status,
        listed_by: req.body.listed_by,
        listing_images: req.body.listing_images,
    });

    const agent = await Agents.find({ agent_user_id: req.params.id })
        .limit(1)
        .update({
            $push: {
                created_listings: {
                    listing_id: listing_id,
                    address: req.body.address,
                    description: req.body.description,
                    listed_price: req.body.listed_price,
                    listing_images: req.body.listing_images,
                },
            },
        });

    try {
        const newListing = await listing.save();
        res.status(201).json(newListing);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all Listings
router.get("/", async (req, res) => {
    try {
        const listings = await Listings.find().select(
            "listing_type floor_size address listed_price listing_images"
        );
        res.json(listings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting all Rent Listings
router.get("/rent", async (req, res) => {
    try {
        const listings = await Listings.find({ listing_type: "rent" }).select(
            "floor_size address listed_price listing_images"
        );
        res.json(listings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting all Sale Listings
router.get("/sale", async (req, res) => {
    try {
        const listings = await Listings.find({ listing_type: "sale" }).select(
            "floor_size address listed_price listing_images"
        );
        res.json(listings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting one Listing
router.get("/:id", getListing, async (req, res) => {
    try {
        const listing = await Listings.find({
            listing_id: req.params.id,
        }).select(
            "listing_type floor_size property_type region availability address listed_by"
        );
        if (listing == null) {
            return res.status(404).json({ message: "Cannot find listing" });
        }
        res.status(200).json(listing);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Updating Listing
router.patch("/:id", getListing, async (req, res) => {
    if (req.body != null) {
        res.listing = req.body;
    }

    try {
        const updatedListing = await res.listing.save();
        res.status(200).json(updatedListing);
    } catch (err) {
        res.status(400).json({ message: res.listing });
    }
});

// Deleting Listing
router.delete("/:id", async (req, res) => {
    try {
        const listing = await Listings.find({
            listing_id: req.params.id,
        }).limit(1);
        if (listing.length === 0) {
            return res.status(404).json({ message: "Cannot find listing" });
        } else {
            const listing = await Listings.find({
                listing_id: req.params.id,
            })
                .limit(1)
                .remove();
            res.json({ message: "Deleted Listing" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Home Page Search
router.post("/search", async (req, res) => {
    try {
        const searchText = req.body.searchText;
        const searchResults = await Listings.find({
            $text: { $search: searchText },
        }).sort({ score: { $meta: "textScore" } });

        res.json(searchResults);

        console.log(searchResults);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Average by Region
router.get("/sale/regionAvg", async (req, res) => {
    try {
        const avg = await Listings.aggregate([{ $match: {} }]).group({
            _id: "$region",
            total: { $sum: "$listed_price" },
        });
        res.json(avg);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Max by Region
router.get("/sale/regionMax", async (req, res) => {
    try {
        const max = await Listings.aggregate([{ $match: {} }]).group({
            _id: "$region",
            total: { $max: "$listed_price" },
        });
        res.json(max);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Max by Region
router.get("/sale/regionMin", async (req, res) => {
    try {
        const min = await Listings.aggregate([{ $match: {} }]).group({
            _id: "$region",
            total: { $min: "$listed_price" },
        });
        res.json(min);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Sort by Price
router.post("/sortPrice", async (req, res) => {
    try {
        const order = req.body.order; // 1: asc, -1: desc

        const sortedResults = await Listings.find().sort({
            listed_price: order,
        });
        return res.json(sortedResults);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Filter by Price Range
router.post("/filterPriceRange", async (req, res) => {
    try {
        const min = req.body.min;
        const max = req.body.max;

        const filteredResults = await Listings.find({
            listed_price: { $gte: min, $lte: max },
        }).sort({ listed_price: 1 });
        return res.json(filteredResults);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Filter by region
router.post("/filterRegion", async (req, res) => {
    try {
        const region = req.body.region;
        const filteredResults = await Listings.find({ region: region });

        return res.json(filteredResults);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getListing(req, res, next) {
    let listing;
    try {
        listing = await Listings.find({ listing_id: res.body.listing }).limit(
            1
        );
        if (listing == null) {
            return res.status(404).json({ message: "Cannot find listing" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.listing = listing;
    next();
}

module.exports = router;
