import PropTypes from 'prop-types';

export default function BookItem(props) {
  const { bookTitle, onDeleteClicked } = props;
  return (
    <li>
      <div>
        <p>{bookTitle}</p>
        <button type="button" onClick={onDeleteClicked}>Delete</button>
      </div>
    </li>
  );
}

BookItem.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  onDeleteClicked: PropTypes.func.isRequired,
};
