const express = require("express");
const router = express.Router();

require('../db/conn');
const Level4 =require('../models/level4Schema');
const Level3 =require('../models/level3Schema');

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

  router.post('/get-level4', async (req, res) => {
    try {
      const { accountnumber } = req.body;
      const level3 = await Level3.find({accountnumber: accountnumber});
      console.log( level3);
      return res.status(200).json({
        
        success: true,
        data: level3,
      });
  
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'server error' });
    }
  });

  module.exports = router;