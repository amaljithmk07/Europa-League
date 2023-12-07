const mongoose = require('mongoose')
const europaschema = new mongoose.Schema({

    
    name_of_the_club: {
        type: String,
        required: true
    },
    coach_name: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },

})

module.exports = mongoose.model('details', europaschema)