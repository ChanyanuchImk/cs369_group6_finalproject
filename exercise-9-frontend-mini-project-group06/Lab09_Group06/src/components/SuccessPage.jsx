import { useNavigate } from "react-router-dom";
import styles from '../styleverify.module.css';
import TickMark from '../assets/Tick Box.png';

function SuccessPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.enTitle}>TU MARKET PLACE</h1>
      </div>

      {/* SUCCESS CONTENT */}
      <div className={styles.success}>
        <div className={styles.successCircle}>
          <img src={TickMark} alt="success" />
        </div>

        <h2 className={styles.successTitle}>สมัครสมาชิกสำเร็จ</h2>

        <p className={styles.successText}>
          ระบบได้รับข้อมูลของคุณเรียบร้อยแล้ว<br />
          กำลังดำเนินการตรวจสอบเอกสารยืนยันตัวตน
        </p>

        <button className={styles.btnPrimary} onClick={goHome}>
          กลับหน้าหลัก
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;