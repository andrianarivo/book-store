import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import styles from '../styles/BookInput.module.css';

export default function BookInput() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '' });

  const addNewBook = (e) => {
    e.preventDefault();
    if (book.title !== '') {
      dispatch(addBook({ book: { id: uuid(), ...book } }));
      setBook({ title: '', author: '' });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>Add a new book:</h3>
      <form className={styles.form} onSubmit={addNewBook}>
        <label htmlFor="title">
          Book Title:
          <input type="text" value={book.title} name="title" onChange={handleChange} />
        </label>
        <label htmlFor="author">
          Author:
          <input type="text" value={book.author} name="author" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
