const mongoose = require('mongoose');


const creatorSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
    },
    userName: {
        type: String,
        unique: true,

    },
    profileUrl: {
        type: String,
    },
    profession: {
        type: String,
    }
})
module.exports = mongoose.model('creators', creatorSchema)