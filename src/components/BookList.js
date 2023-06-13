import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import BookInput from './BookInput';
import { selectBooks } from '../redux/store';

export default function BookList() {
  const { bookItems } = useSelector(selectBooks);

  return (
    <div>
      <BookInput />
      <h3>List of books:</h3>
      <ul>
        {bookItems.map((book) => (
          <BookItem key={book.id} id={book.id} author={book.author} title={book.title} />
        ))}
      </ul>
    </div>
  );
}
