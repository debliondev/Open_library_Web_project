"use client";

import { useRouter } from "next/navigation";
import styles from "./style.module.css";


export default function Categories() {
  // Example static categories
  const categories = ["Fiction", "Non-Fiction", "Science", "History","Fantasy","Art","Mystery"];
  const router = useRouter()

  function explore_category(category:string){
    //console.log("GO TO", {category})
    router.replace(`/explore?q=${encodeURIComponent(category)}`)
  }
  
  return (
    <section className={styles.categories}>
      {categories.map((cat, idx) => (
        <button onClick={() => explore_category(cat)} key={idx} className={styles.category}>{cat}</button>
      ))}
    </section>
  );
}
