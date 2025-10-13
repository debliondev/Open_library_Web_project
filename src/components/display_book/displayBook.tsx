import styles from './style.module.css';

export default function DisplayBook(){
    return(
    <aside className={styles.book_display}>
        <section>
            <h1>Title</h1>
        </section>
        <section>
            <p>Description testing</p>
        </section>
    </aside>
    )
}

