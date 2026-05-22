import styles from "./style.module.css";

import Image from "next/image";
import background_library from  "../../../public/images/library_stock_image.jpg"
import { Suspense } from "react";

import SearchBar from "../shared/SearchBar/SearchBar";

export default function HomeTitleSection() {
  return (
    <section className={styles.titleSection} aria-labelledby="main-title">
      <h1 id="main-title" className="animate-fadeInUp" style={{animationDelay: "0.1s"}}>Virtual Library</h1>
      <h2 className={`${styles.subtitle} animate-fadeInUp`} style={{animationDelay: "0.25s"}}>Explore thousands of books and resources</h2>
        <div className={styles.ImgContainer}>
          <Image 
          src={background_library}
          alt="Library background"
          fill = {true}
          className={styles.Image_style}
          preload = {true}
          />
        </div>
        <div className={`${styles.SearchContainer} animate-fadeInUp`} style={{animationDelay: "0.4s"}}>
        <Suspense>
          <SearchBar></SearchBar>
        </Suspense>
        </div>
    </section>
  )
}
