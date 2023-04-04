const express = require("express");
const router = express.Router();

require('../db/conn');
const Level3 =require('../models/level3Schema');

router.post("/level3", async (req, res) => {
    const { accountnumber,name, beneficiaryaccountnumber,branch } = req.body;
    if (!name ||  !accountnumber ||!beneficiaryaccountnumber||!branch ) {
      return res.status(422).json({ error: "Plz fill all the fields!" });
    }
    try {
     
        const level3 = new Level3({ name, accountnumber,beneficiaryaccountnumber,branch});
        await level3.save();
  
        res.status(201).json({ message: "user successfully completed level3" });
      
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router;