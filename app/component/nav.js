// app/components/Nav.js
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-gradient py-3">
        <div className="container-fluid mx-auto">
          <a className="navbar-brand">
          <Link href="/"> <img src="/img/1.png" className={`d-block ${styles.logo}`} alt="logo" /> </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"> {/* ใช้ justify-content-center เพื่อจัดให้เนื้อหาอยู่ตรงกลาง */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="nav-link"><i className="bi bi-send"></i> Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link"><i className="bi bi-send"></i> About</Link>
              </li>
              <li className="nav-item">
                <Link href="/Service" className="nav-link"><i className="bi bi-send"></i> Service</Link>
              </li>
              <li className="nav-item">
                <Link href="/Contact" className="nav-link"><i className="bi bi-send"></i> Contact</Link>
              </li>
            </ul>
            </div>
            <button className="btn btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#loginmodal" onClick="redirectToOtherPage()">
              <i className="bi bi-file-lock"></i> SignIn
            </button>
            <button className="btn btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#loginmodal" onClick="redirectToOtherPage()">
              <i className="bi bi-file-lock"></i> SignUp
            </button>
          
        </div>
      </nav>
    </>
  );
}
