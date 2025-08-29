interface Book {
    title: string;
    author: string;
}

export function GET(request: Request) {
    const body: Book[] = [
        {
            title: "Test Driven Design",
            author: "Kent Beck"
        },
        {
            title: "Clean Code",
            author: "Uncle Bob"
        }
    ];
    return new Response(JSON.stringify(body), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}