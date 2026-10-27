import BookExplorationPage from "app/components/bookExploration/bookExploration";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default async function explorer({ searchParams, }: { searchParams?: { q?: string } }) {
    //const q = (searchParams?.q ?? "").toString();
    const findParams = await searchParams

    const q = (findParams?.q ?? "").toString();

    console.log("BOOK PARAMS", q);
    return (
        <main>
            <BookExplorationPage searchParams={{ q }} />
        </main>
    );
}