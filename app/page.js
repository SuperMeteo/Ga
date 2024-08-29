// fsdfdsfsfdstesttest
import Navbar from '../app/component/nav';
import Footer from '../app/component/footer';
export default function Home() {
  return (
   <>
      <Navbar />

      <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/f1.jpg" width="1920" height="1080" alt="Description" alt="..."></img>
        </div>
      </div>
      </div>
      <br></br><br></br>  

    <div class="card-group">
  <div class="card">
    <img src="/img/q1.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Ai ปัญญาประดิษฐ์</h5>
      <p class="card-text">โปรแกรมคอมพิวเตอร์ที่มีฟังก์ชันที่สามารถทำงานได้เหมือนกับมนุษย์ และสามารถเลียนแบบการทำกิจกรรมของมนุษย์ได้ เช่น การเรียนรู้ การวางแผน และการแก้ไขปัญหาต่างๆ เป็นตัวช่วยมนุษย์ในการคิด ซึ่งจะเน้นไปในเรื่องของการประมวลผล และวิเคราะห์ข้อมูลต่างๆ</p>
    </div>
  </div>
  <div class="card">
    <img src="/img/q2.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">AI จะครองโลกแทนมนุษย์…แน่หรือ</h5>
      <p class="card-text">AI จะครองโลกแทนมนุษย์ไหม ปัญญาประดิษฐ์จะทำอะไรกับมนุษย์บ้าง ผลกระทบ และความกังวลมีอะไรบ้าง ขอเชิญทุกท่านนั่งลงอย่างใจเย็นรวบรวมสมาธิ แล้วเพลิดเพลินกับบทความที่ให้สาระและการเคลื่อนไหวในโลก Big Data ไปกับเรา</p>
    </div>
  </div>
  <div class="card">
    <img src="/img/q3.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">5 ประโยชน์ของระบบ AI กับการประยุกต์ใช้ในธุรกิจ</h5>
      <p class="card-text">1. AI ช่วยให้การทำ Personalized Marketing แม่นยำมากขึ้น · 2. สำรวจพฤติกรรมลูกค้าผ่านระบบ Facial Recognition · 3. Robotics อนาคตแห่งการขนส่งสินค้า · 4. AI ตัวช่วยจัดการปัญหาคลังสินค้า.</p>
    </div>
  </div>
</div>
    <br></br><br></br><br></br><br></br>
    <Footer />
   </>
  );
}
