const mongoose = require('mongoose');

const level4Schema = new mongoose.Schema({
    accountnumber: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    beneficiaryaccountnumber: {
        type: Number,
        required: true
    },
    
  
})



const Level4 = mongoose.model('level4', level4Schema);

module.exports = Level4;

