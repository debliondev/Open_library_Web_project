import styles from "./style.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search books..." aria-label="Search books" />
      <svg viewBox="0 0 24 24" className={styles.icon}><circle cx="11" cy="11" r="8" stroke="#5973bf" strokeWidth="2" fill="none"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#5973bf" strokeWidth="2"/></svg>
    </div>
  );
}
