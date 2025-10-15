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
                <Categories/>
                <div style={{marginTop: "2rem"}}>
                <BookGrid/>
                <BookGrid/>
                <BookGrid/>
                </div>
            </section>
        </section>
    )
}