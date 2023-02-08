const mongoose = require('mongoose')


const donationSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    Fromcreator: {
        type: String,

    },
    amount: {
        type: Number
    },
    currency: {
        type: String
    },
    message: {
        type: String
    },
    Tocreator: {
        type: String
    }
})
module.exports = mongoose.model('donation', donationSchema)