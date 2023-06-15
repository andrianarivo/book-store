import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { delBook } from '../redux/books/booksSlice';
import styles from '../styles/BookItem.module.css';

export default function BookItem(props) {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;

  const handleDelete = () => {
    toast.promise(dispatch(delBook(id)), {
      loading: 'Deleting...',
      success: <b>Book deleted!</b>,
      error: <b>Could not delete.</b>,
    });
  };

  return (
    <li className={styles.bookItem}>
      <div>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <div className={styles.actions}>
          <button className="btn-unstyled" type="button" onClick={() => {}}>
            comments
          </button>
          <div
            style={{
              borderRight: '1px solid #e8e8e8',
            }}
          />
          <button className="btn-unstyled" type="button" onClick={handleDelete}>
            remove
          </button>
          <div
            style={{
              borderRight: '1px solid #e8e8e8',
            }}
          />
          <button className="btn-unstyled" type="button" onClick={() => {}}>
            edit
          </button>
        </div>
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
