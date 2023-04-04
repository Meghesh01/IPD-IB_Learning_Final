const mongoose = require('mongoose');

const level3Schema = new mongoose.Schema({
    accountnumber: {
        type: Number,
        required: true
    },
    
    name: {
        type: String,
        required: true
    },
   
    beneficiaryaccountnumber: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    
  
})


const Level3 = mongoose.model('level3', level3Schema);

module.exports = Level3;
