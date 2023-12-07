const mongoose = require('mongoose')
const demoschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },


})

module.exports = mongoose.model('demodetails', demoschema)