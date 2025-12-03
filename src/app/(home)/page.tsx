import HomeTitleSection from "app/components/HomeTitleSection/HomeTitleSection";
import Categories from "app/components/Categories/Categories";
import AboutSection from "app/components/AboutSection/AboutSection";
//import SearchBar from "app/components/shared/SearchBar/SearchBar";

import { BookCarousel } from "app/components/shared/BookCarousel/BookCarousel";

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
      </section>

      <section>
        <Categories />
        <section style={{backgroundColor: "#1a1c20", padding: "1rem 0rem"}}>
        <div>
          <BookCarousel Section_title={"Trending"} subject_comp={"trending"}/>
          <BookCarousel Section_title={"Horror"} subject_comp={"horror"}/>
          <BookCarousel Section_title={"Drama"} subject_comp={"Drama"}/>
          <BookCarousel Section_title={"Mystery"} subject_comp={"mystery"}/>
        </div>
        </section>
      </section>
      <AboutSection />
    </main>
  );
}