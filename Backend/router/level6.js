const express = require("express");

// Router for backend
const router = express.Router();

require('../db/conn');
const Level6 = require('../models/level6Schema');


// Using async-await
router.post("/setdebitname", async (req, res) => {
  // get the data sent by user
  const { debitname,phone} = req.body;

  // Validation
  if (!debitname || !phone ) {
    // 422 - Unprocessable entity
    return res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    // check if email is present in the database
    // Await - waits for promise to return
    // find one returns entire document if email exists
    const userExist = await Level6.findOne({ phone: phone });

    if (userExist) {
      return res.status(422).json({ error: "Phone number already exists" });
    } else {
      const user = new Level6({ debitname, phone});

      await user.save();

      res.status(201).json({ message: "user registered successfully" });
      // As this is try-catch if error occurs it will execute catch
    }
  } catch (err) {
    console.log(err);
  }
});
router.post('/getdebitname', async (req, res) => {
  try {
    const { phone } = req.body;
    const userData = await Level6.findOne({phone: phone});
    console.log("Hello " + userData);
    return res.status(200).json({
      
      success: true,
      data: userData,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
