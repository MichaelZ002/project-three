const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserFave =  new Schema({
    UID: {
        type: String,
        required: true
    },
    faveVids: {
        type: Array,
    }
})

export const Fave = mongoose.model("Fave", UserFave)

