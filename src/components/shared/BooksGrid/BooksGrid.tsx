import styles from "./style.module.css";
import Image from "next/image";
import { fetch_books_search } from "app/services/open_library/books";

export default async function BooksGrid({ PathParams, }: { PathParams?: { query?: string } | string }) {
    //Support PathParams object or direct string for calling
    const query = typeof PathParams === "string" ? PathParams : PathParams?.query ?? "";
    console.log("QUERY", query);

    const data = await fetch_books_search(query);

    //different API shapes: search.json returns {docs: []} while other endpoints may return {works: []}
    const items = (data && (data.docs ?? data.works)) || [];
    const booksList = Array.isArray(items) ? items : [];

    return (
        <div className={styles.bookGrid}>
            {booksList.length === 0 ? (
                <div className={styles.empty}>No books found</div>
            ) : (
                booksList.map((book: any, idx: number) => {
                    const coverId = book.cover_i ?? book.cover_edition_key ?? null;
                    const imgSrc = coverId
                        ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
                        : "/images/placeholder-book.png";
                    const title = book.title ?? book.title_suggest ?? "Untitled";
                    const author = Array.isArray(book.author_name) ? book.author_name[0] : book.authors?.[0]?.name ?? "Unknown";

                    return (
                        <article key={book.key ?? coverId ?? idx} className={styles.bookCard}>
                            <div className={styles.Img_div}>
                                <Image
                                    style={{ border: "2px solid", borderColor: "#8f5e51" }}
                                    src={imgSrc}
                                    width={136}
                                    height={200}
                                    alt={title}
                                    loading="eager"
                                />
                            </div>
                            <div className={styles.book_Desc}>
                                <h4 className={styles.bookTitle}>{title}</h4>
                                <p className={styles.bookAuthor}>by {author}</p>
                            </div>
                        </article>
                    );
                })
            )}
        </div>
    );
}