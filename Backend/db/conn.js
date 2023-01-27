const mongoose = require('mongoose');

// This is done to secure databse username and password
const DB = process.env.DATABASE;

// Connecting database
mongoose.connect(DB).then(() => {
    console.log(`Connection successful`)
}).catch((err) => {console.log(`No connection`)});