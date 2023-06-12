import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
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
