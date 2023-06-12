import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

export default function BookInput() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const addNewBook = (e) => {
    e.preventDefault();
    if (title !== '') {
      dispatch(addBook({ book: { id: uuid(), title } }));
      setTitle('');
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <h3>Add a new book:</h3>
      <form onSubmit={addNewBook}>
        <input type="text" value={title} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
