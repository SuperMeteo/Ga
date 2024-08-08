// app/components/Nav.js
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <>
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
          </div>
          <div className={styles.buttons}>
          <Link href="/signup" className="btn btn-outline-primary">Sign In</Link>   
          <Link href="/signup" className="btn btn-outline-primary">Sign Up</Link>
</div>  
        </div>
      </nav>
    </>
  );
}
