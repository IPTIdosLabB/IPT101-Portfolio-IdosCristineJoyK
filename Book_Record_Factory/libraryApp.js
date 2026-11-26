
// Importing from bookModule.js
import { books, formatBookStatus } from './bookModule.js';

// Function to display book
function displayBook(book, index) {

    console.log("===== BOOK RECORD FACTORY =====");

    console.log(`----- BOOK ${index} -----`);

    console.log("Title:", book.title);
    console.log("Author:", book.author);
    console.log("Year:", book.year);

    // Calling Function
    console.log(formatBookStatus(book, "Available"));

    // Calling Method
    console.log("Book Label:", book.getBookLabel());
}

displayBook(books[0], 1);
displayBook(books[1], 2);
displayBook(books[2], 3);
