const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
    materials:{
        type: String
    },

    notes: {
        type: String 
    }
    
})

const Fave = mongoose.model("Fave", UserFave);

module.exports = Fave;
