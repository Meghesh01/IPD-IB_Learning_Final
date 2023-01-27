const express = require("express");

// Router for backend
const router = express.Router();

require('../db/conn');
const User = require('../models/userSchema');


// Using async-await
router.post("/register", async (req, res) => {
  // get the data sent by user
  const { name, email, phone, city, state, dob } = req.body;

  // Validation
  if (!name || !email || !phone || !city || !state || !dob) {
    // 422 - Unprocessable entity
    return res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    // check if email is present in the database
    // Await - waits for promise to return
    // find one returns entire document if email exists
    const userExist = await User.findOne({ phone: phone });

    if (userExist) {
      return res.status(422).json({ error: "Phone number already exists" });
    } else {
      const user = new User({ name, email, phone, city, state, dob});

      await user.save();

      res.status(201).json({ message: "user registered successfully" });
      // As this is try-catch if error occurs it will execute catch
    }
  } catch (err) {
    console.log(err);
  }
});
router.post('/get-mainpage', async (req, res) => {
  try {
    const { phone } = req.body;
    const userData = await User.findOne({phone: phone});
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

// login route
router.post("/login", async (req, res) => {
  try {
    const { phone } = req.body;
    // Validation
    if (!phone ) {
      // 422 - Unprocessable entity
      return res.status(422).json({ error: "Please fill all the fields" });
    }

    const userLogin = await User.findOne({ phone: phone });
    console.log(userLogin);

    if (userLogin) {
      res.json({ message: "user signed in sucessfully" });

    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
