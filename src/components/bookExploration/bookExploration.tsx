import styles from "./style.module.css"
import BookFilters from "../bookFilters/bookFilters"
import SearchBar from "../shared/SearchBar/SearchBar"
import { BookGrid } from "../shared/BookGrid/BookGrid"
import Categories from "../Categories/Categories"

import { Book_VGrid } from "../shared/BookVerticalGrid/BookVerticalGrid"

export default function BookExplorationPage(){

    return(
        <section className={styles.explorationContainer}>
                <BookFilters/>
            <section className={styles.mainContent}>
                <section style={{overscrollBehavior: "contain", height: "34rem", overflowY: "auto"}}>
                    <SearchBar/>
                    <Categories/>
                    <div className={styles.booksContainer}>
                        <Book_VGrid subject_comp={"Horror"}/>
                        <BookGrid Section_title={"Fantasia"} subject_comp={"fantasy"}></BookGrid>
                        <BookGrid Section_title={"Horror"} subject_comp={"HORROR"} />
                        <BookGrid Section_title={"Drama"} subject_comp={"Drama"} />
                    </div>
                </section>
            </section>
        </section>
    )
}