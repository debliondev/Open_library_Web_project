import styles from "./style.module.css";

import Image from "next/image";
import background_library from  "../../../public/images/library_stock_image.jpg"

import SearchBar from "../shared/SearchBar/SearchBar";

export default function HomeTitleSection() {
  return (
    <section className={styles.titleSection} aria-labelledby="main-title">
      <h1 id="main-title">Virtual Library</h1>
      <h2 className={styles.subtitle}>Explore thousands of books and resources</h2>
          <Image 
          src={background_library}
          alt="Library background"
          fill = {true}
          priority={true}
          className={styles.Image_style}
          />
        <div className={styles.SearchContainer}>
        <SearchBar></SearchBar>
        </div>
    </section>
  )
}
