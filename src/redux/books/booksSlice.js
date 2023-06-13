import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.bookItems.push(payload.book);
    },
    removeBook: (state, { payload }) => ({
      bookItems: state.bookItems.filter((book) => book.id !== payload.id),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
