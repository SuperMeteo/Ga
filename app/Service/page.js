import Navbar from '/app/component/nav';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div
          className="col-lg-6 mx-auto about"
          style={{
            backgroundColor: '#ffffff', // พื้นหลังสีขาว
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 className="text-center mb-4" style={{ color: '#333' }}>
            เกี่ยวกับ Super Boat
          </h2>
          <img
            src="img/about.png"
            alt="รูปภาพของเรือ"
            className="img-fluid profile-pic mb-4"
            style={{
              border: '2px solid #ddd', // สีขอบรูปภาพ
              padding: '5px',
              borderRadius: '10px',
            }}
          />
          <p style={{ color: '#666' }}>
            ยินดีต้อนรับสู่ Super Boat, แหล่งข้อมูลและบริการเรือที่ดีที่สุดของคุณ
            พวกเรามีพันธกิจที่จะให้ข้อมูลและบริการที่ดีที่สุดเกี่ยวกับเรือ
            เพื่อให้คุณได้ประสบการเดินเรือที่ยอดเยี่ยม
          </p>
          <p style={{ color: '#666' }}>
            ด้วยความหลงไหลในคุณภาพและนวัตกรรม เราพยายามที่จะนำเสนอข้อมูลล่าสุด
            เกี่ยวกับประเภทของเรือ ประวัติของเรือ และเคล็ดลับที่เป็นประโยชน์
            สำรวจเว็บไซต์ของเราเพื่อค้นพบโลกที่น่าทึ่งของเรือและเพิ่มความรู้ของคุณ
          </p>
          <a href="contact.html" className="btn btn-primary">
            ติดต่อเรา
          </a>
        </div>
      </div>
      <br />
    </>
  );
}
