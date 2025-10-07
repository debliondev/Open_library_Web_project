import styles from "./style.module.css";
import SearchBar from "../shared/SearchBar/SearchBar";

export default function HomeTitleSection() {
  return (
    <section className={styles.titleSection} aria-labelledby="main-title">
      <h1 id="main-title">Virtual Library</h1>
      <h2 className={styles.subtitle}>Explore thousands of books and resources</h2>
      <SearchBar/>
    </section>
  );
}
