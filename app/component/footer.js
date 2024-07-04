// app/components/Footer.js
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <p>Stay updated with the latest in artificial intelligence.</p>
      </footer>
    </>
  );
}
