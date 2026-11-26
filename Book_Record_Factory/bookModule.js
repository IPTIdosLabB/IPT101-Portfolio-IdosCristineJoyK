// Book Records
export const books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,

        // Book Method
        getBookLabel() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },

    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        year: 1997,

        // Book Method
        getBookLabel() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },

    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupery",
        year: 1943,

        // Book Method
        getBookLabel() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    }
];

// Helper Function
export function formatBookStatus(book, status) {
    return `Book: ${book.title} | Author: ${book.author} | Year: ${book.year} | Status: ${status}`;
}
