import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/booksSlice';

export default function BookItem(props) {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;

  const handleDelete = () => {
    dispatch(delBook(id));
  };

  return (
    <li>
      <div>
        <p>
          Title:
          {title}
        </p>
        <p>
          Author:
          {author}
        </p>
        <p>
          Category:
          {category}
        </p>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
