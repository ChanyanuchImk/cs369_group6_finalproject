const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const otpController = require("../controllers/otpController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/otp/send", otpController.sendOtp);
router.post("/otp/verify", otpController.verifyOtp);

module.exports = router;