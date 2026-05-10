import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/styles.module.css";

export default function VerifyPhone({ onBack }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [timer, setTimer] = useState(0);

  const navigate = useNavigate();

  // ===== SEND OTP =====
  const sendOTP = () => {
    if (!phone) {
      alert("กรุณากรอกเบอร์โทร");
      return;
    }

    const randomOtp = Math.floor(
      100000 + Math.random() * 900000
    );

    setGeneratedOtp(randomOtp);
    setTimer(60);

    alert("OTP: " + randomOtp);
  };

  // ===== TIMER =====
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  // ===== VERIFY =====
  const verifyOTP = () => {
    if (parseInt(otp) === generatedOtp) {
      navigate("/verify");
    } else {
      alert("OTP ไม่ถูกต้อง");
    }
  };

  return (
    <div className={styles.container}>

      {/* CONTENT */}
      <div className={styles.contentSection}>

        <h2 className={styles.title}>
          ยืนยันเบอร์โทรศัพท์
        </h2>

        {/* PHONE */}
        <div className={styles.formGroup}>
          <label>เบอร์โทรศัพท์</label>

          <div className={styles.row}>

            <input
              className={styles.input}
              placeholder="09x-xxx-xxxx"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />

            <button
              className={styles.sendOtpButton}
              onClick={sendOTP}
              disabled={timer > 0}
            >
              {timer > 0
                ? `รอ ${timer}s`
                : "ส่ง OTP"}
            </button>

          </div>
        </div>

        {/* OTP */}
        <div className={styles.formGroup}>
          <label>รหัส OTP</label>

          <input
            className={styles.input}
            placeholder="กรอก OTP"
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value)
            }
          />
        </div>

        {/* BUTTONS */}
        <div className={styles.buttons}>

          <button
            className={styles.btnOutline}
            onClick={onBack}
          >
            ย้อนกลับ
          </button>

          <button
            className={styles.btnPrimary}
            onClick={verifyOTP}
          >
            ยืนยัน
          </button>

        </div>
      </div>
    </div>
  );
}