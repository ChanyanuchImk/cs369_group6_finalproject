const Otp = require("../models/otp.model");

// ส่ง OTP (สร้าง OTP และบันทึกลง DB)
exports.sendOtp = async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ message: "กรุณาระบุเบอร์โทรศัพท์" });

    // สร้าง OTP 6 หลัก
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    const otpData = {
      otp_id: "OTP-" + Date.now(),
      phone,
      otp: otpCode,
      verified: false,
    };

    const otp = new Otp(otpData);
    await otp.save();

    // TODO: เชื่อมต่อ SMS provider เพื่อส่ง OTP จริงๆ เช่น Twilio, DTAC, True Move
    console.log(`OTP for ${phone}: ${otpCode}`);

    res.status(201).json({ message: "ส่ง OTP เรียบร้อยแล้ว", otp_id: otpData.otp_id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ยืนยัน OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) return res.status(400).json({ message: "กรุณาระบุ phone และ OTP" });

    // หา OTP ล่าสุดของเบอร์นี้ที่ยังไม่ verified
    const otpRecord = await Otp.findOne({ phone, otp, verified: false }).sort({ createdAt: -1 });
    if (!otpRecord) return res.status(400).json({ message: "OTP ไม่ถูกต้องหรือหมดอายุแล้ว" });

    // อัปเดตสถานะเป็น verified
    otpRecord.verified = true;
    otpRecord.verified_at = new Date();
    await otpRecord.save();

    res.json({ message: "ยืนยัน OTP สำเร็จ" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};