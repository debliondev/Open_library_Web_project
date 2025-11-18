"use client";
import { Autour_One } from "next/font/google";
import styles from "./style.module.css";
import Image from "next/image";
import { useRef } from "react";

export default function BookGridCarousel({ books }: { books: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  //src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`}

  return (
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
        {books.map((book, idx) => (
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
              <p className={styles.bookAuthor}>by {book.author_name[0]}</p>
            </div>
          </article>
        ))}
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
  );
}