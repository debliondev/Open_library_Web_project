import styles from "./style.module.css";

export default function Categories() {
  // Example static categories
  const categories = ["Fiction", "Non-Fiction", "Science", "History"];
  return (
    <section className={styles.categories}>
      {categories.map((cat, idx) => (
        <span key={idx} className={styles.category}>{cat}</span>
      ))}
    </section>
  );
}
