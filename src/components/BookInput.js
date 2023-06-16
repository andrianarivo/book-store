import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { postBook } from '../redux/books/booksSlice';
import styles from '../styles/BookInput.module.css';
import { getDummyAuthor } from '../dummies';

export default function BookInput() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: 'action', category: '' });

  const addNewBook = (e) => {
    e.preventDefault();
    if (book.title !== '') {
      toast.promise(dispatch(postBook({ item_id: uuid(), ...book })), {
        loading: 'Posting...',
        success: <b>Book saved!</b>,
        error: <b>Could not save.</b>,
      });
      setBook({ title: '', author: '', category: 'action' });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      author: getDummyAuthor(),
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
        <div className={`${styles.selectContainer} d-flex`}>
          <select
            name="category"
            className={`${styles.categorySelect} input`}
            value={book.category}
            onChange={handleChange}
          >
            <option value="action">action</option>
            <option value="science fiction">science fiction</option>
            <option value="economy">economy</option>
          </select>
          <FontAwesomeIcon
            className={styles.caret}
            icon={icon({ name: 'caret-down', style: 'solid' })}
            size="xl"
          />
        </div>
        <button className="btn-filled" type="submit">
          Add book
        </button>
      </form>
    </div>
  );
}
