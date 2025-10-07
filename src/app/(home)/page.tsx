import HomeTitleSection from "app/components/HomeTitleSection/HomeTitleSection";
import Categories from "app/components/Categories/Categories";
import BookGrid from "app/components/BookGrid/BookGrid";
import AboutSection from "app/components/AboutSection/AboutSection";


export const metadata = {
  title: 'The eBook Library app',
  description: 'Welcome to an Ebook library app made in Next JS',
  keywords: ['eBook', 'API', 'Digital library'],
};


export default function Home() {
  return (
    <main>
      <HomeTitleSection />
      <Categories />
      <BookGrid />
      <AboutSection />
    </main>
  );
}