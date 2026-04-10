import styles from "./style.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"} style={{textDecoration:"none"}}>
      <span aria-label="Website Title" className={styles.HeaderTitle}>Virtual Library</span>
      </Link>

      <section className={styles.navSection}>
      <Link href={"/"} style={{textDecoration:"none"}}>
      <span aria-label="Website Title" className={styles.HeaderTitle}>Home</span>
      </Link>
      <Link href={"#AboutUS"} style={{textDecoration:"none"}}>
      <span aria-label="Website Title" className={styles.HeaderTitle}>About Us</span>
      </Link>
      <Link href={"/explore"} style={{textDecoration:"none"}}>
      <span aria-label="Website Title" className={styles.HeaderTitle}>Explore</span>
      </Link>
      <button className={styles.menuBtn} aria-label="Open menu">
        <svg viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
      </button>
      </section>
    </header>
  );
}
