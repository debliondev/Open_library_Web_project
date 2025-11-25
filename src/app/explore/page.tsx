import BookExplorationPage from "app/components/bookExploration/bookExploration";

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