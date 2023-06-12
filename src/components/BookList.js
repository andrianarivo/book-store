import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import BookInput from './BookInput';

export default function BookList() {
  const { bookItems } = useSelector((store) => store.books);

  return (
    <div>
      <BookInput />
      <h3>List of books:</h3>
      <ul>
        {bookItems.map((book) => (
          <BookItem key={book.id} id={book.id} title={book.title} />
        ))}
      </ul>
    </div>
  );
}
