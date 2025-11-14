import styles from "./style.module.css";
//import Image from "next/image";

import { testing_books_fetch } from "app/services/open_library/books";

import BookGridCarousel from "../BookCarousel/BookCarousel";

  async function render_books_test(subject_parameter:string){
    console.log("PARAMETER", subject_parameter)
    const books = await testing_books_fetch(subject_parameter);
    //const {books} = await response.json();
    //const books_response = books.works;
    const books_response = books.docs;
    console.log("RESPONSE",books_response.length)

    if (books_response === undefined) {
      console.log("ERROR, there are no books")
    }
    //console.log("BOOK DISPLAYED IN THE GRID:",books_response)
    
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
}

export async function BookGrid({subject_comp,Section_title}) {
  //{await render_books_test()}
  const books = await render_books_test(subject_comp);
  console.log("SUBJECT",subject_comp)
  return (
    <section className={styles.bookGrid_container}>
      <BookGridCarousel books={books}/>
      <div className={styles.label}>
      <p>{Section_title}</p>
      </div>
    </section>
  );
}


