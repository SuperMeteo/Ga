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
            Service
          </h2>
          
          <p style={{ color: '#666' }}>
          บริการ AI ที่เรามี:

"เราให้บริการเทคโนโลยี AI ที่ทันสมัยเพื่อช่วยให้ธุรกิจของคุณเติบโตได้"<br></br><br></br>
"บริการประสาน AI ที่ปรับเข้ากับความต้องการของธุรกิจทุกประเภท"
การประยุกต์ใช้ AI:</p>
<a href="contact.html" className="btn btn-primary">
            ใช้งาน
          </a>
          <p>"ใช้เทคโนโลยี AI เพื่อเพิ่มประสิทธิภาพการทำงานของธุรกิจ"
"การประยุกต์ AI เพื่อช่วยลูกค้าให้ได้ผลลัพธ์ที่ดีที่สุด"
ความปลอดภัยของ AI:</p>
<a href="contact.html" className="btn btn-primary">
            ใช้งาน
          </a>
          <p>"การปรับใช้ AI เพื่อเพิ่มระบบความปลอดภัยให้กับข้อมูลของคุณ"
"บริการ AI ที่มีความเชี่ยวชาญในการรักษาความปลอดภัยของระบบ"
การสนับสนุนและบริการลูกค้า:</p>
<a href="contact.html" className="btn btn-primary">
            ใช้งาน
          </a>
          <p>"การพัฒนาและการสนับสนุน AI ที่ตอบสนองต่อความต้องการของลูกค้า"
"บริการลูกค้าที่มุ่งเน้นความพึงพอใจและประสิทธิภาพของระบบ AI"
          </p>
          <a href="contact.html" className="btn btn-primary">
            ใช้งาน
          </a>
         
        </div>
      </div>
      <br />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer />
    </>
  );
}
