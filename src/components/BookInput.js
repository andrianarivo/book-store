import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import { postBook } from '../redux/books/booksSlice';
import styles from '../styles/BookInput.module.css';
import { bookAuthors } from '../dummies';

export default function BookInput() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '', category: '' });

  const addNewBook = (e) => {
    e.preventDefault();
    if (book.title !== '') {
      toast.promise(dispatch(postBook({ item_id: uuid(), ...book })), {
        loading: 'Posting...',
        success: <b>Book saved!</b>,
        error: <b>Could not save.</b>,
      });
      setBook({ title: '', author: '', category: '' });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const randomAuthor = bookAuthors[Math.floor(Math.random() * bookAuthors.length)];
    setBook({
      ...book,
      author: randomAuthor,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`${styles.container} d-flex direction-column`}>
      <h3 className={styles.title}>Add new book:</h3>
      <form className={`${styles.form} d-flex`} onSubmit={addNewBook}>
        <input
          className={`${styles.titleInput} input`}
          type="text"
          placeholder="Book title"
          value={book.title}
          name="title"
          onChange={handleChange}
        />
        <input
          className={`${styles.categoryInput} input`}
          type="text"
          placeholder="Category"
          value={book.category}
          name="category"
          onChange={handleChange}
        />
        <button className={`${styles.button} btn-filled`} type="submit">
          Add book
        </button>
      </form>
    </div>
  );
}
