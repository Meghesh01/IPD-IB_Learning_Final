const express = require("express");
const router = express.Router();

require('../db/conn');
const Level4 =require('../models/level4Schema');

router.post("/level4", async (req, res) => {
    const { accountnumber,amount,beneficiaryaccountnumber} = req.body;
    if (! accountnumber||  !amount || !beneficiaryaccountnumber ) {
      return res.status(422).json({ error: "Plz fill all the fields!" });
    }
    try {
     
        const level4 = new Level4({ accountnumber,amount,beneficiaryaccountnumber});
        await level4.save();
  
        res.status(201).json({ message: "user successfully completed level4" });
    
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router;