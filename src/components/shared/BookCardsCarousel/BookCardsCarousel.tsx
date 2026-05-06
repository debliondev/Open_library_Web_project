"use client";
//import { Autour_One } from "next/font/google";

import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import Image from "next/image";
import { Suspense, use, useRef } from "react";

import BookPlaceholder from "../../../../public/images/no_cover.png"

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
    <section className={styles.CarouselContainer}>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 19V5"/><path d="m13 6-6 6 6 6"/><path d="M7 12h14"/></svg>
          </button>
          </div>
        <div ref={scrollRef} className={styles.bookCardsContainer}>
          {bookList.length === 0 ?(
            <div className={styles.emptyCardsCarousel}>Server Error, no books to be displayed</div>
          ):(
            bookList.map((book: any, idx: number) => {
              const coverID = book.cover_edition_key ?? null;
              const imgSrc = coverID ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`: BookPlaceholder;

              return(
              <article key={idx} className={styles.bookCard} onClick={()=> searchBook(book.cover_edition_key)}>
                <div className={styles.Img_div}>
                <Image style={{/*backgroundColor: "rgba(165,148,118,0.3)"*/ }}
                  src={imgSrc}
                  width={180}
                  height={260}
                  alt={book.title ?? "Book cover"}
                  loading="lazy"
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
              )
            })
          )}
        </div>
          <div className={styles.scrollButtonContainer}>
          <button
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className={styles.scrollButton}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 12H3"/><path d="m11 18 6-6-6-6"/><path d="M21 5v14"/></svg>
          </button>
          </div>
      </section>
      </Suspense>
    </section>
  );
}