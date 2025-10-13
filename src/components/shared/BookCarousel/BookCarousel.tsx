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
    <div style={{ position: "relative" }}>
      <button
        aria-label="Scroll left"
        onClick={() => scroll("left")}
        style={{
          position: "absolute",
          left: 0,
          top: "40%",
          zIndex: 2,
          background: "#305045",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "2.5rem",
          height: "2.5rem",
          cursor: "pointer",
        }}
      >
        &#8592;
      </button>
      <div ref={scrollRef} className={styles.bookGrid}>
        {books.map((book, idx) => (
          <article key={idx} className={styles.bookCard}>
            <Image
              src={"https://covers.openlibrary.org/b/olid/OL31754751M-M.jpg"}
              width={150}
              height={250}
              alt={book.title}
              loading="eager"
            />
            <div>
              <h4 className={styles.bookTitle}>{book.title}</h4>
            </div>
          </article>
        ))}
      </div>
      <button
        aria-label="Scroll right"
        onClick={() => scroll("right")}
        style={{
          position: "absolute",
          right: 0,
          top: "40%",
          zIndex: 2,
          background: "#305045",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "2.5rem",
          height: "2.5rem",
          cursor: "pointer",
        }}
      >
        &#8594;
      </button>
    </div>
  );
}