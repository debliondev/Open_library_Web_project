import styles from "./style.module.css";

export default function BookGrid() {
  // Example static books
  const books = [
    { title: "Book One", author: "Author A" },
    { title: "Book Two", author: "Author B" },
    { title: "Book Three", author: "Author C" },
    { title: "Book Four", author: "Author D" },
  ];

  return (
    <section className={styles.bookGrid}>
      {books.map((book, idx) => (
        <div key={idx} className={styles.bookCard}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
      <button className={styles.moreBooksBtn}>More Books</button>
    </section>
  );
}
