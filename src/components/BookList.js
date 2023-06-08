import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import BookItem from './BookItem';
import BookInput from './BookInput';

export default function BookList() {
  const [books, setBooks] = useState([
    { id: uuid(), title: 'Book #1' },
    { id: uuid(), title: 'Book #2' },
    { id: uuid(), title: 'Book #3' },
  ]);

  const deleteBook = (id) => {
    setBooks((prevState) => prevState.filter((book) => book.id !== id));
  };

  const addBook = (bookTitle) => {
    const newBook = { id: uuid(), title: bookTitle };
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <BookInput onSubmit={addBook} />
      <h3>List of books:</h3>
      <ul>
        {books.map((book) => (
          <BookItem
            key={book.id}
            bookTitle={book.title}
            onDeleteClicked={() => deleteBook(book.id)}
          />
        ))}
      </ul>
    </div>
  );
}
