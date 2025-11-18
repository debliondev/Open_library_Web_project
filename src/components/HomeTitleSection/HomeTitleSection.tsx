import styles from "./style.module.css";

import Image from "next/image";
import background_library from  "../../../public/images/library_stock_image.jpg"

export default function HomeTitleSection() {
  return (
    <section className={styles.titleSection} aria-labelledby="main-title">
      <h1 id="main-title">Virtual Library</h1>
      <h2 className={styles.subtitle}>Explore thousands of books and resources</h2>
          <Image 
          src={background_library}
          alt="Library background"
          fill = {true}
          style={{ objectFit: "cover", zIndex: -1, opacity: 0.36,borderBottom: "2px solid transparent", boxShadow: "0 5px 10px rgba(255, 255, 255, 0.4)" }}
          priority={true}
          />
    </section>
  )
}
