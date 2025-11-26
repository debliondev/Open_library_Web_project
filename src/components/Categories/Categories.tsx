"use client";

import styles from "./style.module.css";


export default function Categories() {
  // Example static categories
  const categories = ["Fiction", "Non-Fiction", "Science", "History"];
  function explore_category(value:string){
    console.log("GO TO", {value})
  }
  
  return (
    <section className={styles.categories}>
      {categories.map((cat, idx) => (
        <button onClick={() => explore_category(cat)} key={idx} className={styles.category}>{cat}</button>
      ))}
    </section>
  );
}
