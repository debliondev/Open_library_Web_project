"use client";

import { useRouter } from "next/navigation";
import { useInView } from "app/hooks/useInView";
import styles from "./style.module.css";


export default function Categories() {
  const categories = ["Fiction", "Non-Fiction", "Science", "History","Fantasy","Art","Mystery"];
  const router = useRouter()

  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.3 });

  function explore_category(category:string){
    router.replace(`/explore?q=${encodeURIComponent(category)}`)
  }
  
  return (
    <section ref={sectionRef} className={styles.categories}>
      {categories.map((cat, idx) => (
        <button
          onClick={() => explore_category(cat)}
          key={idx}
          className={`${styles.category}${isInView ? " animate-fadeInUp" : ""}`}
          style={{
            opacity: isInView ? undefined : 0,
            animationDelay: isInView ? `${idx * 80}ms` : "0s",
          }}
        >
          {cat}
        </button>
      ))}
    </section>
  );
}
