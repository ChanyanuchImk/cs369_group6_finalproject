import { useNavigate } from "react-router-dom";
import styles from '../styles/styleverify.module.css';

import TickMark from '../assets/Tick Box.png';

function SuccessPage() {
  const navigate = useNavigate();

  // ===== GO HOME =====
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>

      {/* SUCCESS CONTENT */}
      <div className={styles.success}>

        {/* ICON */}
        <div className={styles.successCircle}>
          <img
            src={TickMark}
            alt="success"
          />
        </div>

        {/* TITLE */}
        <h2 className={styles.successTitle}>
          สมัครสมาชิกสำเร็จ
        </h2>

        {/* TEXT */}
        <p className={styles.successText}>
          ระบบได้รับข้อมูลของคุณเรียบร้อยแล้ว
          <br />
          กำลังดำเนินการตรวจสอบเอกสารยืนยันตัวตน
        </p>

        {/* BUTTON */}
        <button
          className={styles.btnPrimary}
          onClick={goHome}
        >
          กลับหน้าหลัก
        </button>

      </div>
    </div>
  );
}

export default SuccessPage;