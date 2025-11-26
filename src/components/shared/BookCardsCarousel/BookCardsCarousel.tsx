"use client";
import { Autour_One } from "next/font/google";
import styles from "./style.module.css";
import Image from "next/image";
import { useRef } from "react";

export default function BookCardsCarousel({ books }: { books: any[] }) {
  const scrollRef = useRef<HTMLDivElement| null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      //const scrollAmount = 300;
      const scrollAmount = Math.round(scrollRef.current.clientWidth * 0.6) || 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const bookList = Array.isArray(books) ? books : [];

  //src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`}

  return (
    <section>
      <div>
      <button>See more</button>
      </div>
    <section className={styles.Carousel}>
        <div className={styles.scrollButtonContainer}>
        <button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className={styles.scrollButton}
        >
          &#8592;
        </button>
        </div>
      <div ref={scrollRef} className={styles.bookGrid}>
        {bookList.length === 0 ?(
          <div>Error, no books were found</div>
        ):(
          bookList.map((book: any, idx: number) => (
          <article key={idx} className={styles.bookCard}>
            <div className={styles.Img_div}>
            <Image style={{border:"2px solid",borderColor:"#8f5e51" }}
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              width={136}
              height={200}
              alt={book.title ?? "Book cover"}
              loading="eager"
            />
            </div>
            <section className={styles.book_Desc}>
              <div style={{marginBottom:"1rem"}}>
                <h4 className={styles.bookTitle}>{book.title}</h4>
                <p className={styles.bookAuthor}>by {book?.author_name?.[0] ?? "Error: Unknown Author"}</p>
              </div>
              <div>
                <p className={styles.bookAccess}>{book?.ebook_access ?? "unclassified"}</p>
              </div>
            </section>
          </article>
        ))
        )}
      </div>
        <div className={styles.scrollButtonContainer}>
        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className={styles.scrollButton}
        >
          &#8594;
        </button>
        </div>
    </section>
    </section>
  );
}