import styles from "./style.module.css"
//import BookFilters from "../bookFilters/bookFilters"
import SearchBar from "../shared/SearchBar/SearchBar"
import { BookCarousel } from "../shared/BookCarousel/BookCarousel"
import Categories from "../Categories/Categories"

import BooksGrid from "../shared/BooksGrid/BooksGrid"

export default function BookExplorationPage({
    searchParams,
}:{
    searchParams?: {q?:string}
}){
    const q = (searchParams?.q ?? "")
    return(
        <section className={styles.explorationContainer}>
            <section className={styles.mainContent}>
                <section style={{overscrollBehavior: "contain", height: "34rem", overflowY: "auto"}}>
                    <SearchBar explore_page = {true}/>
                    <Categories/>
                    <div className={styles.booksContainer}>
                        <BooksGrid PathParams={{query:q}}></BooksGrid>
                        <BookCarousel Section_title={"Horror"} subject_comp={"HORROR"} />
                        <BookCarousel Section_title={"Drama"} subject_comp={"Drama"} />
                    </div>
                </section>
            </section>
        </section>
    )
}