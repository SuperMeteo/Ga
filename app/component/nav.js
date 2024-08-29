'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user')); // ดึงข้อมูลผู้ใช้

    if (token && user) {
      setIsLoggedIn(true);
      setUsername(user.username); // ตั้งค่าชื่อผู้ใช้
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // ลบข้อมูลผู้ใช้
    setIsLoggedIn(false);
    setUsername('');
    window.location.href = '/login'; // เปลี่ยนเส้นทางไปยังหน้า Login
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          <img src="/img/2.png" className={styles.logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${styles.togglerIcon}`}></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${styles.navCollapse}`} id="navbarSupportedContent">
          <ul className={`navbar-nav mb-2 mb-lg-0 ${styles.navbarNav}`}>
            <li className="nav-item">
              <Link href="/" className={`nav-link ${styles.navLink}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${styles.navLink}`}>About</Link>
            </li>
            <li className="nav-item">
              <Link href="/Service" className={`nav-link ${styles.navLink}`}>Services</Link>
            </li>
            <li className="nav-item">
              <Link href="/Contact" className={`nav-link ${styles.navLink}`}>Contact</Link>
            </li>
          </ul>
          <div className={styles.buttons}>
            {isLoggedIn ? (
              <>
                <span className="navbar-text me-3">Welcome, {username}</span>
                <button onClick={handleLogout} className="btn btn-outline-danger">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="btn btn-outline-primary">Login</Link>
                <Link href="/signup" className="btn btn-outline-primary">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
