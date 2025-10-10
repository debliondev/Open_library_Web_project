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
      <HomeTitleSection/>
      <section style={{backgroundColor: "#1a1c20", padding: "0.5rem 0"}}>
      <SearchBar/>
      <Categories />
      <BookGrid />
      <BookGrid />
      </section>
      <AboutSection />
    </main>
  );
}