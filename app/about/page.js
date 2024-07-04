import Navbar from '/app/component/nav';
import Footer from '/app/component/footer';
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
            About
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
          ยินดีต้อนรับสู่ Ai! เราคือทีมที่หลงใหลในเทคโนโลยี AI และมุ่งมั่นที่จะเผยแพร่ความรู้และความเข้าใจเกี่ยวกับ AI ให้กับทุกคนที่สนใจ ทางเรามุ่งมั่นที่จะเป็นที่มาของข้อมูลที่เป็นประโยชน์และแนวคิดใหม่ๆ เกี่ยวกับ AI ที่ทันสมัย
          </p>
          <p style={{ color: '#666' }}>
          บทบาทของเรา
เรามุ่งหวังที่จะเป็นแหล่งรวบรวมข้อมูลที่ครอบคลุมเกี่ยวกับ AI ทุกรูปแบบ จากการแสดงความคิดเห็นวิเคราะห์ที่ลึกซึ้งถึงเครื่องมือและเทคโนโลยีที่ล้ำหน้า

ทีมของเรา
ทีม [ชื่อทีม] ประกอบด้วยนักวิจัยและผู้เชี่ยวชาญที่มีประสบการณ์หลากหลายในฟิลด์ AI ที่พร้อมให้บริการความรู้และคำแนะนำที่มีคุณค่า
มีคำถามหรือข้อสงสัยเกี่ยวกับ AI หรือต้องการให้เราช่วยเหลือ? 
<br></br>ติดต่อเราที่ ปุ่มด้านล่าง
          </p>
          <a href="contact.html" className="btn btn-primary">
            ติดต่อเรา
          </a>
        </div>
      </div>
      <br />
      
      <Footer />
    </>
  );
}
