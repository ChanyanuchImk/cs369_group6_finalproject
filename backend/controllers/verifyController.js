const Verify = require("../models/verify.model");

// ส่งเอกสารขอยืนยันตัวตน
exports.submitVerify = async (req, res) => {
  try {
    const { user_id, front_idcard, back_idcard, selfie_image } = req.body;
    if (!user_id) return res.status(400).json({ message: "กรุณาระบุ user_id" });

    // เช็คว่า user นี้เคยส่งคำขอที่ pending อยู่แล้วหรือยัง
    const existing = await Verify.findOne({ user_id, verify_status: "pending" });
    if (existing) {
      return res.status(400).json({ message: "มีคำขอยืนยันตัวตนที่รอดำเนินการอยู่แล้ว" });
    }

    const verifyData = {
      verify_id: "VERIFY-" + Date.now(),
      user_id,
      front_idcard,
      back_idcard,
      selfie_image,
      verify_status: "pending",
    };

    const verify = new Verify(verifyData);
    const newVerify = await verify.save();
    res.status(201).json(newVerify);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ดูสถานะการยืนยันตัวตนของ user
exports.getVerifyStatus = async (req, res) => {
  try {
    const verify = await Verify.findOne({ user_id: req.params.userId }).sort({ createdAt: -1 });
    if (!verify) return res.status(404).json({ message: "ไม่พบข้อมูลการยืนยันตัวตน" });
    res.json(verify);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin อนุมัติหรือปฏิเสธคำขอ
exports.updateVerifyStatus = async (req, res) => {
  try {
    const { verify_status } = req.body;
    const allowedStatus = ["approved", "rejected"];

    if (!allowedStatus.includes(verify_status)) {
      return res.status(400).json({ message: "สถานะไม่ถูกต้อง (approved หรือ rejected เท่านั้น)" });
    }

    const updated = await Verify.findOneAndUpdate(
      { verify_id: req.params.id },
      { verify_status },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "ไม่พบคำขอยืนยันตัวตน" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};