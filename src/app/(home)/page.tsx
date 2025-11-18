import HomeTitleSection from "app/components/HomeTitleSection/HomeTitleSection";
import Categories from "app/components/Categories/Categories";
import AboutSection from "app/components/AboutSection/AboutSection";
import SearchBar from "app/components/shared/SearchBar/SearchBar";

import { BookGrid } from "app/components/shared/BookGrid/BookGrid";

export const metadata = {
  title: 'The eBook Library app',
  description: 'Welcome to an Ebook library app made in Next JS',
  keywords: ['eBook', 'API', 'Digital library'],
};


export default function Home() {
  return (
    <main>
      <section style={{paddingTop:"1rem"}}>
      <HomeTitleSection/>
      <SearchBar/>
      </section>

      <section style={{backgroundColor: "#1a1c20", paddingBottom:"0.5rem"}}>
      <Categories />
      <div>
        <BookGrid Section_title={"Trending"} subject_comp={"trending"}/>
        <BookGrid Section_title={"Horror"} subject_comp={"HORROR"}/>
        <BookGrid Section_title={"Drama"} subject_comp={"Drama"}/>
        <BookGrid Section_title={"Mystery"} subject_comp={"mystery"}/>
      </div>
      </section>
      <AboutSection />
    </main>
  );
}