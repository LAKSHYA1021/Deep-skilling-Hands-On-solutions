import React from 'react';

const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Deep Work", author: "Cal Newport" },
  { id: 3, title: "Ikigai", author: "Héctor García" }
];

function BookDetails() {
  return (
    <div>
      <h2>📖 Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <b>{book.title}</b> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
