const express = require("express");
const router = express.Router();
const verifyController = require("../controllers/verifyController");

router.post("/", verifyController.submitVerify);
router.get("/:userId", verifyController.getVerifyStatus);
router.put("/:id", verifyController.updateVerifyStatus);

module.exports = router;