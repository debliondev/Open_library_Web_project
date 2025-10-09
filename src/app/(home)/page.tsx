import HomeTitleSection from "app/components/HomeTitleSection/HomeTitleSection";
import Categories from "app/components/Categories/Categories";
import AboutSection from "app/components/AboutSection/AboutSection";
import SearchBar from "app/components/shared/SearchBar/SearchBar";

import { BookGrid } from "app/components/BookGrid/BookGrid";

export const metadata = {
  title: 'The eBook Library app',
  description: 'Welcome to an Ebook library app made in Next JS',
  keywords: ['eBook', 'API', 'Digital library'],
};


export default function Home() {
  return (
    <main>
      <HomeTitleSection/>
      <section style={{backgroundColor: "#1a1c20" }}>
      <SearchBar/>
      <Categories />
      <BookGrid />
      </section>
      <AboutSection />
    </main>
  );
}