const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true
  },
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  phone: String,
  is_verified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);