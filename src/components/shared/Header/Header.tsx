import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <span aria-label="Website Title" style={{ fontWeight: 600 }}>Website Title</span>
      <button className={styles.menuBtn} aria-label="Open menu">
        <svg viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
      </button>
    </header>
  );
}
