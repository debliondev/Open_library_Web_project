"use client"

import styles from "./style.module.css";

export default function Loader_component(){
  const skeletons = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className={styles.skeletonContainer}>
      {skeletons.map((i) => (
        <div key={i} className={styles.skeletonCard}>
          <div className={styles.skeletonImg} />
          <div className={styles.skeletonText}>
            <div className={styles.skeletonLine} />
            <div className={styles.skeletonLine} />
          </div>
        </div>
      ))}
    </div>
  );
}
