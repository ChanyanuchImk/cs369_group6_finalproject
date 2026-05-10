import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/HomeLogin.module.css';

export default function HomeLogin() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const handleClick = () => setDropdownOpen(false);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/', { replace: true });
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
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