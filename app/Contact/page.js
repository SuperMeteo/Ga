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
            Contact
          </h2>
          
       
          <p style={{ color: '#666' }}>
          Email : ai@Ai.com
          <br></br>
          Email : Ai2@ai.com
          </p>
          <p style={{ color: '#666' }}>
           เบอร์โทร : 841111158
          </p>
          
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
