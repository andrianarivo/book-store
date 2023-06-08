import PropTypes from 'prop-types';
import { useState } from 'react';

export default function BookInput(props) {
  const [title, setTitle] = useState('');
  const { onSubmit } = props;
  const addNewBook = (e) => {
    e.preventDefault();
    if (title !== '') {
      onSubmit(title);
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

BookInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
