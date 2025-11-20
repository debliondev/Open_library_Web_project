import styles from "./style.module.css";
//import Image from "next/image";

import { testing_books_fetch } from "app/services/open_library/books";

import BookCardsCarousel from "../BookCardsCarousel/BookCardsCarousel";

  async function render_books_test(subject_parameter:string){
    try{
      console.log("PARAMETER", subject_parameter)
  
      if(!subject_parameter){
        console.log("Error: No subject parameter provided")
        return[];
      }
  
      const books = await testing_books_fetch(subject_parameter);
  
      const books_response = books.docs;
      console.log("RESPONSE",books_response.length)
  
      if (books_response === undefined) {
        console.log("ERROR, there are no books")
      }
      return books_response

    }catch(err){
      console.log("Error Fetching the Books:", err)
      return [];
    }

}

export async function BookCarousel({subject_comp,Section_title}:{subject_comp: string; Section_title?: string}) {
  //{await render_books_test()}
  const books = await render_books_test(subject_comp);
  console.log("SUBJECT",subject_comp)
  return (
    <section className={styles.bookGrid_container}>
      <BookCardsCarousel books={books ?? []}/>
      <div className={styles.label}>
      <p>{Section_title}</p>
      </div>
    </section>
  );
}


