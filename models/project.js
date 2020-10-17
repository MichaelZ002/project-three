const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserProject =  new Schema({
    UID: {
        type: String,
        required: true
    },
    vidID: {
        type: Array,
    },
    materials:{
        type: String
    },

    notes: {
        type: String 
    }
    
})

const Project = mongoose.model("Projects", UserProject);

module.exports = Project;
