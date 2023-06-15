import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { delBook } from '../redux/books/booksSlice';
import styles from '../styles/BookItem.module.css';
import 'react-circular-progressbar/dist/styles.css';

export default function BookItem(props) {
  const dispatch = useDispatch();
  const {
    id, title, author, category, progress, currentChapter,
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
      <div className="d-flex items-center">
        <div className={styles.progress}>
          <CircularProgressbar
            strokeWidth={5}
            value={progress}
            styles={buildStyles({
              strokeLinecap: 'butt',
              pathColor: '#379cf6',
              trailColor: '#e8e8e8',
            })}
          />
        </div>
        <div className={styles.progressDetails}>
          <p className={styles.progressText}>
            {progress}
            %
          </p>
          <p className={styles.completed}>completed</p>
        </div>
      </div>
      <div>{currentChapter}</div>
    </li>
  );
}

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  currentChapter: PropTypes.string.isRequired,
};
