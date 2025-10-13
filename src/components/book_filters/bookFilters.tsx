import styles from './style.module.css';


export default function BookFilters() {

    return(
        <aside className={styles.filters}>
            <section>
                <h3>Categories</h3>
                <ul>
                    <li>Fiction</li>
                    <li>Horror</li>
                    <li>Fantasy</li>
                    <li>Others</li>
                    <li>Cook</li>
                </ul>
            </section>
            <section>
                <h3>Type of Book</h3>
                <ul>
                    <li>Available</li>
                    <li>borrow</li>
                </ul>
            </section>
            <section>
                <h3>Rating</h3>
            </section>
            <button>Filter</button>
        </aside>
    )

}
