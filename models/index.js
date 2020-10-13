const mongoose = require ('mongoose');
const Schema = mongoose.Schema


// Create Scheama and model

const Project3Scema = new Schema({
    url: String, 
})

const LinkDB = mongoose.model('project3', Project3Scema)

module.exports = linkDB 

