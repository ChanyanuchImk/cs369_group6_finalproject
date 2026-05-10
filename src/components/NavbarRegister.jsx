import { useNavigate } from 'react-router-dom';
import styles from '../styles/NavbarHome.module.css';

import logo from '../assets/logo-long.png';

export default function NavbarBack({ showBackButton = true }) {

  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>

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

      {showBackButton && (
        <div className={styles.navActions}>
          <button
            className={styles.backHomeBtn}
            onClick={() => navigate('/')}
          >
            กลับสู่หน้าหลัก
          </button>
        </div>
      )}

    </nav>
  );
}