const express = require("express");
const router = express.Router();

require('../db/conn');
const Level1 =require('../models/level1Schema');

router.post("/level1", async (req, res) => {
    const { username, password } = req.body;
    if (!username ||  !password ) {
      return res.status(422).json({ error: "Plz fill all the fields!" });
    }
    try {
      const userExist = await Level1.findOne({ username: username });
      if (userExist) {
        return res.status(422).json({ error: "Username already exist" });
      } else {
        const level1 = new Level1({ username, password});
        await level1.save();
  
        res.status(201).json({ message: "user successfully completed level1" });
      }
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router;