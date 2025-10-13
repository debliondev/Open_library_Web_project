import styles from "./style.module.css";
import Image from "next/image";

import BookGridCarousel from "../BookCarousel/BookCarousel";

  // Example static books
  /*const books = [
    { title: "Book One", author: "Author A" },
    { title: "Book Two", author: "Author B" },
    { title: "Book Three", author: "Author C" },
    { title: "Book Four", author: "Author D" },
  ];*/

  async function render_books_test(){
    const response = await fetch('http://localhost:3000/api');
    const {books} = await response.json();
    
    const books_response = books.works;

    if (books_response === undefined) {
      console.log("ERROR, there are no books")
    }
    console.log("BOOK DISPLAYED IN THE GRID:",books_response)
    
    return books_response
    /*
    return(
      <section className={styles.bookGrid}>
        {books_response.map((book:any,idx:any)=>(
          <article key={idx} className={styles.bookCard}>
            <Image src={'https://covers.openlibrary.org/b/olid/OL31754751M-M.jpg'} width={150} height={250} alt={book.title} loading="eager"/>
            <div>
              <h4 className={styles.bookTitle}>{book.title}</h4>
            </div>
          </article>
        ))}
      </section>
    )*/

    /*
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
*/

}

export async function BookGrid() {
  //{await render_books_test()}
  const books = await render_books_test();
  return (
    <section>
      <div className={styles.label}>
      <p>TRENDING BOOKS</p>
      </div>
      <BookGridCarousel books={books}/>
    </section>
  );
}


