import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/HomeLogin.module.css';

function showToast(message) {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    background: #C8892B;
    color: #fff;
    padding: 12px 28px;
    border-radius: 8px;
    font-size: 1rem;
    z-index: 9999;
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

  const requireLogin = () => {
    showToast('กรุณาเข้าสู่ระบบหรือลงทะเบียนก่อน');
    setTimeout(() => navigate('/login'), 1800);
  };

  return (
    <div className={styles.homeContainer}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          ตลาดขายของมือสอง<br />
          สำหรับ<span className={styles.highlight}>นักศึกษา</span>
        </h1>

        <div className={styles.heroActions}>
          <button 
            className={styles.btnPrimary} 
            onClick={() => navigate('/marketplace')}
          >
            เลือกซื้อสินค้า
          </button>

          <button 
            className={styles.btnSecondary} 
            onClick={() => navigate('/products')}
          >
            ลงขายสินค้า
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}