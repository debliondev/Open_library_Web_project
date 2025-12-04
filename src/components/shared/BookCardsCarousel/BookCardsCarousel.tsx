"use client";
//import { Autour_One } from "next/font/google";

import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import Image from "next/image";
import { Suspense, use, useRef } from "react";

export default function BookCardsCarousel({ books,subject_carousel }: { books: any[],subject_carousel: string }) {
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

  function searchBook(BookID:string){
    const BookPage = BookID ? `https://openlibrary.org/books/${BookID}`: "https://openlibrary.org";
    window.open(BookPage,"_blank")
  }

  const router = useRouter()
  function explore_subject(subject:string){
    router.replace(`/explore?q=${encodeURIComponent(subject)}`)
  }
  //src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`}

  //borderColor:"#8f5e51"
  return (
    <section>
      <Suspense>
        <div className={styles.SeeMoreButton}>
        <button onClick={()=> explore_subject(subject_carousel)}>See more
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
          </svg>
        </button>
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
        <div ref={scrollRef} className={styles.bookCardsContainer}>
          {bookList.length === 0 ?(
            <div>Error, no books were found</div>
          ):(
            bookList.map((book: any, idx: number) => (
            <article key={idx} className={styles.bookCard} onClick={()=> searchBook(book.cover_edition_key)}>
              <div className={styles.Img_div}>
              <Image style={{border:"2px solid" }}
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                width={136}
                height={200}
                alt={book.title ?? "Book cover"}
                loading="eager"
              />
              </div>
              <section className={styles.bookDesc}>
                <div className={styles.Desc_Container}>
                  <h4 className={styles.bookTitle}>{book.title}</h4>
                  <p className={styles.bookAuthor}>by {book?.author_name?.[0] ?? "Error: Unknown Author"}</p>
                </div>
                <div style={{marginTop:"1rem"}}>
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
      </Suspense>
    </section>
  );
}