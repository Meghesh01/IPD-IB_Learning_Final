const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const level6Schema = new mongoose.Schema({
    debitname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
  
});

const Level6 = mongoose.model('level6', level6Schema);

module.exports = Level6;


