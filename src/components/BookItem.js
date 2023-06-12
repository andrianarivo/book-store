import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function BookItem(props) {
  const dispatch = useDispatch();
  const { id, title } = props;

  const handleDelete = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <li>
      <div>
        <p>{title}</p>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
