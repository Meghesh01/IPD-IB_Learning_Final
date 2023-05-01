const mongoose = require('mongoose');

const passbookSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  date: { type: Date, default: Date.now },
  debitMoney: Number,
  amount: { type: Number, default: 20000 },
});

const Passbook = mongoose.model('Passbook', passbookSchema);

// Export the Passbook model
module.exports = Passbook;



