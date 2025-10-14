import styles from "./style.module.css"
import BookFilters from "../bookFilters/bookFilters"
import SearchBar from "../shared/SearchBar/SearchBar"
import { BookGrid } from "../shared/BookGrid/BookGrid"

export default function BookExplorationPage(){
    return(
        <section>
            <BookFilters/>
            <section>
            <SearchBar/>
            <BookGrid></BookGrid>
            <BookGrid></BookGrid>
            <BookGrid></BookGrid>
            </section>
        </section>
    )
}