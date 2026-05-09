const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  otp_id: {
    type: String,
    required: true,
    unique: true
  },

  phone: String,
  otp: String,

  verified_at: Date,

  verified: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Otp", otpSchema);