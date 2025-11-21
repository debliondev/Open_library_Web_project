import BookExplorationPage from "app/components/bookExploration/bookExploration";

export default function explorer({ searchParams, }: { searchParams?: { q?: string } }) {
    const q = (searchParams?.q ?? "").toString();
    console.log("BOOK PARAMS", q);
    return (
        <main>
            <BookExplorationPage searchParams={{ q }} />
        </main>
    );
}