import HomeTitleSection from "app/components/HomeTitleSection/HomeTitleSection";
import Categories from "app/components/Categories/Categories";
//import AboutSection from "app/components/AboutSection/AboutSection";


import { BookCarousel } from "app/components/shared/BookCarousel/BookCarousel";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Home() {
  return (
    <main>
      <section style={{paddingTop:"1rem"}}>
      <HomeTitleSection/>
      </section>

      <Categories />
      <section style={{backgroundColor: "#1a1c20"}}>
        <section>
        <div style={{backgroundColor: "#1a1c20"}}>
          <BookCarousel Section_title={"Trending"} subject_comp={"trending"}/>
          <BookCarousel Section_title={"Horror"} subject_comp={"horror"}/>
          <BookCarousel Section_title={"Drama"} subject_comp={"Drama"}/>
          <BookCarousel Section_title={"Mystery"} subject_comp={"mystery"}/>
        </div>
        </section>
      </section>
      {/*<AboutSection />*/}
    </main>
  );
}