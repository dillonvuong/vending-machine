const mongoose = require('mongoose');

const SodaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    maxQuantity:{
        type: Number,
    }
})

module.exports = mongoose.model('Soda', SodaSchema);
