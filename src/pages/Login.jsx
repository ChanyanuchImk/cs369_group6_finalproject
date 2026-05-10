import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { showToast } from '../utils';

import parcelIcon from '../assets/logos_parcel-icon.png';

import styles from '../styles/Login.module.css';

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  // ===== CHECK LOGIN =====
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/home-login', { replace: true });
    }
  }, [navigate]);

  // ===== LOGIN =====
  const handleLogin = () => {
    if (!user.trim() || !pass.trim()) {
      showToast('กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');

    showToast('เข้าสู่ระบบสำเร็จ!');

    setTimeout(() => {
      navigate('/home-login');
    }, 1500);
  };

  // ===== ENTER =====
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.loginCard}>

        {/* LEFT */}
        <div className={styles.loginIllustration}>
          <img
            src={parcelIcon}
            alt="box"
            className={styles.boxImg}
          />
        </div>

        {/* RIGHT */}
        <div className={styles.loginFormSide}>

          <h2 className={styles.loginTitle}>
            เข้าสู่ระบบ
          </h2>

          {/* USERNAME */}
          <div className={styles.formGroup}>
            <label>
              ชื่อผู้ใช้งาน / อีเมล
            </label>

            <input
              type="text"
              placeholder="ชื่อผู้ใช้หรืออีเมล"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          {/* PASSWORD */}
          <div className={styles.formGroup}>
            <label>
              รหัสผ่าน
            </label>

            <input
              type="password"
              placeholder="รหัสผ่าน"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          {/* BUTTON */}
          <button
            className={styles.btnLogin}
            onClick={handleLogin}
          >
            เข้าสู่ระบบ
          </button>

        </div>
      </div>
    </main>
  );
}