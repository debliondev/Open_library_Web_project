import styles from "./style.module.css"
import BookFilters from "../bookFilters/bookFilters"
import SearchBar from "../shared/SearchBar/SearchBar"
import { BookGrid } from "../shared/BookGrid/BookGrid"
import Categories from "../Categories/Categories"

export default function BookExplorationPage(){

    return(
        <section className={styles.explorationContainer}>
                <BookFilters/>
            <section className={styles.mainContent}>
                    <SearchBar/>
                <section style={{overscrollBehavior: "contain", height: "30rem", overflowY: "auto"}}>
                    <Categories/>
                    <div className={styles.booksContainer}>
                    <BookGrid/>
                    <BookGrid/>
                    <BookGrid/>
                    </div>
                </section>
            </section>
        </section>
    )
}