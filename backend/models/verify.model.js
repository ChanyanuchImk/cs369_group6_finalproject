const mongoose = require("mongoose");

const verifySchema = new mongoose.Schema({
  verify_id: {
    type: String,
    required: true,
    unique: true
  },

  user_id: String,

  front_idcard: String,
  back_idcard: String,
  selfie_image: String,

  verify_status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Verify", verifySchema);