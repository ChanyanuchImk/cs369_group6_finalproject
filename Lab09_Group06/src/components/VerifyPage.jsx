import { useNavigate } from "react-router-dom";
import styles from '../styleverify.module.css';
import idIcon from '../assets/Identification Documents.png';
import replyArrow from '../assets/Reply Arrow.png';
import idIcon1 from '../assets/Identification Documents-1.png';

function VerifyPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const agree = document.getElementById("agree").checked;

    if (!agree) {
      alert("กรุณายอมรับเงื่อนไขก่อน");
      return;
    }

    navigate("/success");
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.enTitle}>TU MARKET PLACE</h1>
        <div className={styles.back} onClick={() => navigate("/")}>กลับหน้าหลัก</div>
      </div>

      <div className={styles.contentSection}> {/* เปลี่ยนชื่อเพื่อไม่ให้ซ้ำกับ container หลัก */}
        <h2 className={styles.title}>ยืนยันตัวตน</h2>
        <p className={styles.subtitle}>อัปโหลดเอกสารด้วยบัตรประชาชน</p>

        {/* Row */}
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.label}>ด้านหน้าบัตร</div>
            <label className={styles.uploadBox}>
              <input type="file" hidden />
              <img src={idIcon} className={styles.icon} alt="front" />
              <span>คลิกเพื่ออัปโหลด</span>
            </label>
          </div>

          <div className={styles.col}>
            <div className={styles.label}>ด้านหลังบัตร</div>
            <label className={styles.uploadBox}>
              <input type="file" hidden />
              <img src={replyArrow} className={styles.icon} alt="back" />
              <span>คลิกเพื่ออัปโหลด</span>
            </label>
          </div>
        </div>

        {/* Selfie */}
        <div className={styles.selfieSection}>
          <div className={styles.label}>เซลฟี่พร้อมบัตร</div>
          <label className={`${styles.uploadBox} ${styles.big}`}>
            <input type="file" hidden />
            <img src={idIcon1} className={styles.icon} alt="selfie" />
            <span>คลิกเพื่ออัปโหลดเซลฟี่</span>
          </label>
        </div>

        {/* Consent */}
        <div className={styles.consentTitle}>ข้อตกลงความยินยอม</div>

        <div className={styles.consentBox}>
          ข้าพเจ้ายินยอมให้ TU MARKET PLACE เก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล
          เพื่อวัตถุประสงค์ในการยืนยันตัวตน ป้องกันการทุจริต และปฏิบัติตามกฎหมาย
        </div>

        <div className={styles.checkbox}>
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            ยอมรับเงื่อนไขการใช้งาน และข้อกำหนดของ TU MARKET PLACE
          </label>
        </div>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button className={styles.btnOutline} onClick={() => navigate(-1)}>ย้อนกลับ</button>
          <button className={styles.btnPrimary} onClick={handleSubmit}>
            ส่งข้อมูลยืนยัน
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyPage;