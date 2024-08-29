'use client';

import { useState } from 'react';
import Navbar from '/app/component/nav';
import Footer from '/app/component/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Page() {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [message, setMessage] = useState(''); // เก็บข้อความแจ้งเตือน

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await res.json();

      if (res.ok) {
        // ถ้า login สำเร็จ เก็บ token ลงใน localStorage
        localStorage.setItem('token', result.token);
        console.log(result);
        
        // ตั้งค่าข้อความแจ้งเตือน
        setMessage('Login successful!');

        // เปลี่ยนไปยังหน้า http://localhost:3001/ หลังจากล็อกอินสำเร็จ โดยไม่ต้องยืนยัน
        setTimeout(() => {
          window.location.href = 'http://localhost:3001/';
        }, 1000); // รอ 1 วินาทีก่อนเปลี่ยนหน้า
      } else {
        // ตั้งค่าข้อความผิดพลาดจาก backend
        setMessage(result.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setMessage('An error occurred during login.');
    }
  };

  return (
    <>
      <Navbar />
      <br /><br /><br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            Login Form
          </div>
          <div className="card-body">
            {message && (
              <div className="alert alert-info" role="alert">
                {message}
              </div>
            )}
            <form className="row g-3" onSubmit={handleLogin}>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-person-circle"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon2">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
}
