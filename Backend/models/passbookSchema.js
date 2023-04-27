const mongoose = require('mongoose');

const passbookSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    creditmoney: {
        type: Number,
        default:0
    },
    debitmoney: {
        type: Number,
        required: true
    },
    
});


const Passbook = mongoose.model('passbook', passbookSchema);

module.exports = Passbook;

