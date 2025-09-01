interface Book {
    title: string;
    author: string;
}

let books: Book[] = [
    {
        title: "Test Driven Design",
        author: "Kent Beck"
    },
    {
        title: "Clean Code",
        author: "Uncle Bob"
    }
];

export function GET() {
    return new Response(JSON.stringify(books), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export async function POST(request: Request) {
    const newBook: Book = await request.json();
    books.push(newBook);
    return new Response(JSON.stringify(newBook), {
        status: 201,
        headers: {
            "Content-Type": "application/json"
        }
    });
}