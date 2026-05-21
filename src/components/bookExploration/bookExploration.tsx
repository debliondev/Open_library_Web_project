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
                <section style={{overscrollBehavior: "contain", height: "36rem", overflowY: "auto"}} className={styles.searchSection}>
                    <section style={{margin:"0rem 1rem 1rem 1rem"}}>
                    <SearchBar explore_page = {true}/>
                    </section>
                    <Categories/>
                        <BooksGrid PathParams={{query:q}}></BooksGrid>
                </section>
                    <div className={styles.booksContainer}>
                        <BookCarousel Section_title={"Horror"} subject_comp={"HORROR"} />
                        <BookCarousel Section_title={"Drama"} subject_comp={"Drama"} />
                    </div>
            </section>
        </section>
    )
}