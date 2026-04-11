import styles from "./style.module.css";
import Image from "next/image";
import { fetch_books_search } from "app/services/open_library/books";
import BookPlaceholder from "../../../../public/images/no_cover.png"

import { Suspense } from "react";

export default async function BooksGrid({ PathParams, }: { PathParams?: { query?: string } | string }) {
    //Support PathParams object or direct string for calling
    const query = typeof PathParams === "string" ? PathParams : PathParams?.query ?? "";
    //console.log("QUERY", query);

    const data = await fetch_books_search(query);

    //different API shapes: search.json returns {docs: []} while other endpoints may return {works: []}
    const items = (data && (data.docs ?? data.works)) || [];
    const booksList = Array.isArray(items) ? items : [];

    return (
        <div>
            {booksList.length === 0 ? (
                <div className={styles.emptyGrid}>No books found</div>
            ) : (
                <Suspense fallback={<div className={styles.emptyGrid}>Loading books...</div>}>
                <div className={styles.bookGrid} >
                    {
                    booksList.map((book: any, idx: number) => {
                        const coverId = book.cover_i ?? book.cover_edition_key ?? null;
                        const BookID = book.cover_edition_key ?? null;
    
                        const BookPage = BookID ? `https://openlibrary.org/books/${BookID}`: "https://openlibrary.org";
    
                        const imgSrc = coverId
                            ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : BookPlaceholder
                    
                        const title = book.title ?? "Untitled";
                        const ReleaseYear = book.first_publish_year ?? "N/A";
                        const bookAccess = book.ebook_access?? "unclassified";
                        const author = Array.isArray(book.author_name) ? book.author_name[0] : book.authors?.[0]?.name ?? "Unknown";
    
                        //borderColor: "#8f5e51" 
                        return (
                            <article key={book.key ?? coverId ?? idx} className={styles.bookCard}>
                                <div className={styles.Img_div}>
                                    <Image
                                        style={{ border: "2px solid",backgroundColor: "rgba(165,148,118,0.3)"
                                        }}
                                        src={imgSrc}
                                        width={146}
                                        height={220}
                                        alt={title}
                                        loading="lazy"                                     
                                    />
                                </div>
                                <section className={styles.bookDesc}>
                                <div className={styles.bookInfo}>
                                    <h4 className={styles.bookTitle}>{title}</h4>
                                    <p>by {author}</p>
                                    <p>{ReleaseYear}</p>
                                </div>
                                <div style={{width:"100%"}}>
                                    <p className={styles.bookAccess}>{bookAccess}</p>
                                    <a target="_blank" href={BookPage} className={styles.GetEbookBtt}>Get ebook</a>
                                </div>
                                </section>
                            </article>
                        );
                    })
                    }
                </div>
                </Suspense>
            )}
        </div>
    );
}