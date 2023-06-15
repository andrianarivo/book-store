import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookItem from './BookItem';
import BookInput from './BookInput';
import { selectBooks } from '../redux/store';
import { getBooks } from '../redux/books/booksSlice';

export default function BookList() {
  const {
    bookItems, getStatus, postStatus, delStatus,
  } = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (getStatus.loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (getStatus.error) {
    return (
      <div>
        <h3>An error occurred:</h3>
        <pre>{getStatus.errMsg}</pre>
      </div>
    );
  }

  return (
    <div>
      <BookInput />
      <p>{postStatus.loading ? 'Posting...' : ''}</p>
      <p>{delStatus.loading ? 'Deleting...' : ''}</p>
      <pre>{postStatus.error ? postStatus.errMsg : ''}</pre>
      <pre>{delStatus.error ? delStatus.errMsg : ''}</pre>
      <h3>List of books:</h3>
      <ul>
        {bookItems.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            author={book.author}
            category={book.category}
            title={book.title}
          />
        ))}
      </ul>
    </div>
  );
}
