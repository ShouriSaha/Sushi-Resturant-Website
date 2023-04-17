const mongoose = require("mongoose");

const sushiSchema = mongoose.Schema({

    name: { type: String, require },
    varients: [],
    prices: [],
    category: { type: String, require },
    image: { type: String, require },
    description: { type: String, require }
}, {
    timestamps: true,
})

const sushiModel = mongoose.model('sushis', sushiSchema);

module.exports = sushiModel