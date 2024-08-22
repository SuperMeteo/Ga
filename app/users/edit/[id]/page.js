'use client';
import { useEffect, useState } from 'react';
import Navbar from '/app/component/nav';
import Footer from '/app/component/footer';

export default function Page({ params }) {
  const { id } = params;
  const [items, setItems] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
        if (data.length > 0) {
          const user = data[0];
          setFirstName(user.firstname);
          setLastName(user.lastname);
          setUserName(user.username);
          setPassWord(user.password);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'POST ', // เปลี่ยนจาก 'POST' เป็น 'PUT' สำหรับการอัปเดตข้อมูล
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, username, password }),
      });
  
      if (!res.ok) {
        throw new Error('Failed to update data');
      }
  
      const result = await res.json();
      console.log('Update result:', result);
  
      // รีเฟรชข้อมูลหลังการอัปเดต
      getUsers();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  

  return (
    <>
      <Navbar />
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            Edit Form {JSON.stringify(items)}
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                  <input
                    type="text"
                    id="lastname"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success"><i className="bi bi-box-arrow-right"></i> Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
