import styles from "./style.module.css"
import BookFilters from "../bookFilters/bookFilters"
import SearchBar from "../shared/SearchBar/SearchBar"
import { BookGrid } from "../shared/BookGrid/BookGrid"

export default function BookExplorationPage(){

    return(
        <section className={styles.explorationContainer}>
                <BookFilters/>
            <section className={styles.mainContent}>
                <SearchBar/>
                <BookGrid/>
                <BookGrid/>
                <BookGrid/>
            </section>
        </section>
    )
}