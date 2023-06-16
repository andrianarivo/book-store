import { useSelector } from 'react-redux';
import styles from '../styles/Categories.module.css';
import { selectCategories } from '../redux/store';

export default function Categories() {
  const { status } = useSelector(selectCategories);
  return (
    <div className={`${styles.container} d-flex justify-center items-center`}>
      <p>{status}</p>
    </div>
  );
}
