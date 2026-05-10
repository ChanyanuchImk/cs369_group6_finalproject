import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/NavbarHome.module.css';

import logo from '../assets/logo-long.png';
import icon from '../assets/profileicon.png';

export default function NavbarHome() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <img 
          src={logo} 
          alt="TU Market Place Logo" 
          className={styles.logoImage} 
        />
      </div>
      
      <div className={styles.profileWrapper} ref={dropdownRef}>
        <button className={styles.profileBtn} onClick={toggleDropdown}>
          <div className={styles.avatar}>
          <img 
              src={icon} 
              alt="Profile" 
              className={styles.profileImg} 
            />
          </div>
        </button>
        
        {dropdownOpen && (
          <div className={styles.dropdown}>
            <button onClick={() => navigate('/fav')} className={styles.dropdownItem}>
              คลังของฉัน
            </button>
            <button onClick={handleLogout} className={styles.dropdownItem}>
              ออกจากระบบ
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}