const express = require("express");

// Router for backend
const router = express.Router();

require('../db/conn');
const Passbook = require('../models/passbookSchema');

// Add a new entry
router.post("/passbook", async (req, res) => {
  try {
    const { name, debitMoney } = req.body;

    const lastEntry = await Passbook.findOne({}, {}, { sort: { id: -1 } });

    const newEntry = new Passbook({
      id: lastEntry ? lastEntry.id + 1 : 1,
      name,
      debitMoney,
      amount: lastEntry ? lastEntry.amount - debitMoney : 20000 - debitMoney,
    });

    await newEntry.save();

    res.status(200).json(newEntry);
  } catch (error) {
    console.error("Hello",error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get all entries
router.get("/passbook", async (req, res) => {
  try {
    const passbook = await Passbook.find({});

    res.status(200).json(passbook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get balance
router.get('/get-balance', async (req, res) => {
  try {
    const latestEntry = await Passbook.findOne().sort({ _id: -1 }).select('id amount -_id');
    const { id, amount } = latestEntry || { id: 0, amount: 20000 };
    res.json({ id, amount });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;