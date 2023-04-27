const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    points:{
        type:Number,
        default:0
    },
    money:{
        type:Number,
        default:10000
    },
    accountNumber: {
        type: String,
        unique: true
    },
  
});

userSchema.pre("save", async function (next) {
    if (!this.accountNumber) {
      // Generate 10-digit account number
      let newAccountNumber = generateAccountNumber();
      // Ensure account number is unique
      while (await User.exists({ accountNumber: newAccountNumber })) {
        newAccountNumber = generateAccountNumber();
      }
      this.accountNumber = newAccountNumber;
    }
    next();
  });
  
  function generateAccountNumber() {
    return Math.floor(Math.random() * 9000000000 + 1000000000).toString();
  }
// Hashing password
// Call this method when save method is called
// userSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         // 12 - number of rounds
//         this.password = await bcrypt.hash(this.password, 12);
       
//     }
//     next()
// });

// Generating token
// userSchema.methods.generateAuthToken = async function () {
//     try {
//         let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

const User = mongoose.model('users', userSchema);

module.exports = User;


