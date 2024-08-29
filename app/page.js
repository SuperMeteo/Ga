'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // ใช้ useRouter แทน useNavigate
import Navbar from '../app/component/nav';
import Footer from '../app/component/footer';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // ใช้ useRouter แทน useNavigate

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/login'); // เปลี่ยนเส้นทางไปยังหน้า Login
  };

  return (
   <>
      <Navbar />
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/f1.jpg" width="1920" height="1080" alt="Description" />
          </div>
        </div>
      </div>
      <br /><br />

      <div className="card-group">
        <div className="card">
          <img src="/img/q1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ai ปัญญาประดิษฐ์</h5>
            <p className="card-text">โปรแกรมคอมพิวเตอร์ที่มีฟังก์ชันที่สามารถทำงานได้เหมือนกับมนุษย์...</p>
          </div>
        </div>
        <div className="card">
          <img src="/img/q2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">AI จะครองโลกแทนมนุษย์…แน่หรือ</h5>
            <p className="card-text">AI จะครองโลกแทนมนุษย์ไหม ปัญญาประดิษฐ์จะทำอะไรกับมนุษย์บ้าง...</p>
          </div>
        </div>
        <div className="card">
          <img src="/img/q3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">5 ประโยชน์ของระบบ AI กับการประยุกต์ใช้ในธุรกิจ</h5>
            <p className="card-text">1. AI ช่วยให้การทำ Personalized Marketing แม่นยำมากขึ้น...</p>
          </div>
        </div>
      </div>

      {isLoggedIn && (
        <div className="text-center mt-4">
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      )}

      <br /><br /><br /><br /><br />
      <Footer />
   </>
  );
}
