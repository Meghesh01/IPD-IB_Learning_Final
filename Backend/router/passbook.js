const express = require("express");
const router = express.Router();

require('../db/conn');
const Passbook =require('../models/passbookSchema');

router.post('/passbookentry', async (req, res) => {
    try {
      const { username, creditmoney, debitmoney} = req.body;
      const passbook = await Passbook.create({
        id: await Passbook.countDocuments() + 1,
        username,
        creditmoney,
        debitmoney,
      });
      res.status(201).json(passbook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  router.get('/getpassbook', async (req, res) => {
    try {
      const passbookEntries = await Passbook.find({});
      res.status(200).json(passbookEntries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  module.exports = router;