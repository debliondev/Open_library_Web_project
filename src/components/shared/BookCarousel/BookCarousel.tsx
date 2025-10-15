"use client";
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
            <Image
              src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`}
              width={170}
              height={254}
              alt={book.title}
              loading="eager"
            />
            <div>
              <h4 className={styles.bookTitle}>{book.title}</h4>
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