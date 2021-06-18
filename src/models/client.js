const mongoose = require('mongoose')
const Schema = mongoose.Schema;

 const ClientSchema = new Schema({
    name: String,
    direction: [String]
})

module.exports = mongoose.model('clients',ClientSchema)