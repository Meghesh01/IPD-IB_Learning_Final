const mongoose = require('mongoose');

const level2Schema = new mongoose.Schema({
    accountnumber: {
        type: Number,
        required: true
    },
    
    beneficiaryname: {
        type: String,
        required: true
    },
    beneficiaryaccountnumber: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    
  
})
const Level2 = mongoose.model('level2', level2Schema);

module.exports = Level2;
