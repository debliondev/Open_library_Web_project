import styles from "./style.module.css";

import { fetch_books_search } from "app/services/open_library/books";

import Image from "next/image";


async function render_books(searchQuery:string){
    const books = await fetch_books_search(searchQuery);

    const books_response = books.docs;
    //console.log("RESPONSE",books_response.length)
    if (books_response === undefined) {
      console.log("ERROR, there are no books")
    }
    return books_response
}

export async function BookGrid({searchQuery}:{searchQuery?:string}){
    const input = searchQuery ?? "trending";
    const books = await render_books(input);
    return(
        <section className={styles.bookGrid}>
            {books.map((book:any, idx:number) => (
          <article key={idx} className={styles.bookCard}>
            <div className={styles.Img_div}>
            <Image style={{border:"2px solid",borderColor:"#8f5e51" }}
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              width={136}
              height={200}
              alt={book.title}
              loading="eager"
            />
            </div>
            <div className={styles.book_Desc}>
              <h4 className={styles.bookTitle}>{book.title}</h4>
              <p className={styles.bookAuthor}>by {book?.author_name?.[0] ?? "Error: Unknown Author"}</p>
            </div>
          </article>
        ))}
        </section>
    )
}
