"use client";

import styles from './style.module.css';
import { useState } from 'react';

export default function BookFilters() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    return(
        <section className={styles.filters}>
            <button className={styles.toggleBtn}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Hide filters" : "Show filters"}
            >
            {sidebarOpen ? "⮜" : "⮞"}
            </button>
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed}`}>
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
        
        </section>
    )

}
