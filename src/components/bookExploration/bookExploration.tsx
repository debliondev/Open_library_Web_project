import styles from "./style.module.css"
import BookFilters from "../bookFilters/bookFilters"
import SearchBar from "../shared/SearchBar/SearchBar"
import { BookCarousel } from "../shared/BookCarousel/BookCarousel"
import Categories from "../Categories/Categories"

import { BookGrid } from "../shared/BookGrid/BookGrid"

export default function BookExplorationPage(){

    return(
        <section className={styles.explorationContainer}>
                <BookFilters/>
            <section className={styles.mainContent}>
                <section style={{overscrollBehavior: "contain", height: "34rem", overflowY: "auto"}}>
                    <SearchBar/>
                    <Categories/>
                    <div className={styles.booksContainer}>
                        <BookGrid subject_comp={"Horror"}/>
                        <BookCarousel Section_title={"Horror"} subject_comp={"HORROR"} />
                        <BookCarousel Section_title={"Drama"} subject_comp={"Drama"} />
                    </div>
                </section>
            </section>
        </section>
    )
}