const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserFave =  new Schema({
    UID: {
        type: String,
        required: true
    },
    faveVids: {
        type: Array,
    },
    title: {
        type: String
    },
    details: {
        type: String
    },
    vidDate: {
        type: String
    },
    youtuber: {
        type: String
    },

})

const Fave = mongoose.model("Fave", UserFave)

module.exports = Fave;



