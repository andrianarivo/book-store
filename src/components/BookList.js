import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookItem from './BookItem';
import BookInput from './BookInput';
import { selectBooks } from '../redux/store';
import { getBooks } from '../redux/books/booksSlice';
import styles from '../styles/BookList.module.css';

export default function BookList() {
  const {
    bookItems, loading, error, errMsg,
  } = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={`${styles.info} container d-flex justify-center items-center`}>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.info} container d-flex justify-center items-center`}>
        <h3>An error occurred:</h3>
        <pre>{errMsg}</pre>
      </div>
    );
  }

  return (
    <div className="container">
      <ul className={`${styles.bookList} d-flex direction-column`}>
        {bookItems.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            author={book.author}
            category={book.category}
            title={book.title}
            progress={book.progress}
            currentChapter={book.currentChapter}
          />
        ))}
      </ul>
      <hr className={styles.separator} />
      <BookInput />
    </div>
  );
}
