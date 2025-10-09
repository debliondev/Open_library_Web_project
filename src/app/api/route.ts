import { testing_books_fetch } from "app/services/open_library/books";

export async function GET() {
    const books = await testing_books_fetch();
    console.log("THESE ARE THE BOOKS : ",books)
    return Response.json({books});
}