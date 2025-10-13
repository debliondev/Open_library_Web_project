import SearchBar from "app/components/shared/SearchBar/SearchBar"
import BookFilters from "app/components/book_filters/bookFilters"
import { BookGrid } from "app/components/shared/BookGrid/BookGrid"
import DisplayBook from "app/components/display_book/displayBook"

export default function explorer(){

    return(
        <main>
            <section>
                    <BookFilters/>
                    
                <section style={{margin: "1rem"}} >
                <SearchBar/>
                <BookGrid/>
                <BookGrid/>
                <BookGrid/>
                </section>
            </section>
        </main>
    )
}