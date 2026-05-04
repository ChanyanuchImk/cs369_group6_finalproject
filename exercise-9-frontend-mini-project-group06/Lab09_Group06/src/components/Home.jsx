import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style.module.css';

// ฟังก์ชันแสดง Toast แจ้งเตือน
function showToast(message) {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
    background: #C8892B; color: #fff; padding: 12px 28px;
    border-radius: 8px; font-size: 1rem; z-index: 9999;
    box-shadow: 0 4px 16px rgba(0,0,0,0.4);
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/home-login', { replace: true });
    }
  }, [navigate]);

  const goToLogin    = () => navigate('/login');
  const goToRegister = () => navigate('/register');

  const handleShop = () => {
    showToast('กรุณาเข้าสู่ระบบหรือลงทะเบียนก่อน');
    setTimeout(goToLogin, 1800);
  };

  const handleSell = () => {
    showToast('กรุณาเข้าสู่ระบบหรือลงทะเบียนก่อน');
    setTimeout(goToLogin, 1800);
  };

  return (
    <div className={styles.container}>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>TU Market Place</div>
        <div className={styles.navActions}>
          <button className={styles.btnOutline} onClick={goToLogin}>เข้าสู่ระบบ</button>
          <button className={styles.btnGold}    onClick={goToRegister}>สมัครสมาชิก</button>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          ตลาดขายของมือสอง<br />
          สำหรับ<span className={styles.white}>นักศึกษา</span>
        </h1>
        <div className={styles.heroActions}>
          <button className={styles.btnHeroGold}    onClick={handleShop}>เลือกซื้อสินค้า</button>
          <button className={styles.btnHeroOutline} onClick={handleSell}>ลงขายสินค้า</button>
        </div>
      </section>
    </div>
  );
}