import { useNavigate } from 'react-router-dom';
import styles from '../styles/NavbarHome.module.css';

import logo from '../assets/logo-long.png';

export default function NavbarHome() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      
      {/* LOGO */}
      <div
        className={styles.navLogo}
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={logo}
          alt="TU MARKET PLACE"
          className={styles.logoImage}
        />
      </div>

      {/* ACTION BUTTONS */}
      <div className={styles.navActions}>
        <button
          className={styles.loginBtn}
          onClick={() => navigate('/login')}
        >
          เข้าสู่ระบบ
        </button>

        <button
          className={styles.registerBtn}
          onClick={() => navigate('/register')}
        >
          สมัครสมาชิก
        </button>
      </div>

    </nav>
  );
}