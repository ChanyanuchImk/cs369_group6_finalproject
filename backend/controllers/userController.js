const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// สมัครสมาชิก
exports.register = async (req, res) => {
  try {
    const { firstname, lastname, username, email, password, phone } = req.body;

    // เช็คว่า email หรือ username ซ้ำไหม
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: "email หรือ username นี้ถูกใช้งานแล้ว" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      ...req.body,
      user_id: "USER-" + Date.now(),
      password: hashedPassword,
    };

    const user = new User(userData);
    const newUser = await user.save();

    // ไม่ส่ง password กลับไป
    const { password: _, ...userWithoutPassword } = newUser.toObject();
    res.status(201).json(userWithoutPassword);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// เข้าสู่ระบบ
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "ไม่พบผู้ใช้งาน" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "รหัสผ่านไม่ถูกต้อง" });

    const token = jwt.sign(
      { user_id: user.user_id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const { password: _, ...userWithoutPassword } = user.toObject();
    res.json({ token, user: userWithoutPassword });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ดึงข้อมูล user ตาม ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ user_id: req.params.id }).select("-password");
    if (!user) return res.status(404).json({ message: "ไม่พบผู้ใช้งาน" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// แก้ไขข้อมูล user
exports.updateUser = async (req, res) => {
  try {
    // ไม่ให้แก้ password ผ่าน route นี้
    const { password, ...updateData } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { user_id: req.params.id },
      updateData,
      { new: true }
    ).select("-password");

    if (!updatedUser) return res.status(404).json({ message: "ไม่พบผู้ใช้งาน" });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};