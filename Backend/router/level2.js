const express = require("express");
const router = express.Router();

require('../db/conn');
const Level2 =require('../models/level2Schema');

router.post("/level2", async (req, res) => {
    const { accountnumber,beneficiaryname,beneficiaryaccountnumber,amount } = req.body;
    if (!accountnumber||! beneficiaryname ||  !beneficiaryaccountnumber || ! amount) {
      return res.status(422).json({ error: "Plz fill all the fields!" });
    }
    try {
     
        const level2 = new Level2({accountnumber,beneficiaryname,beneficiaryaccountnumber,amount  });
        await level2.save();
  
        res.status(201).json({ message: "user successfully completed level2" });
      
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router;