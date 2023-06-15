import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DEL_BOOK, GET_BOOKS, POST_BOOK } from '../api';
import { bookChapters } from '../../dummies';

const initialState = {
  bookItems: [],
  error: false,
  errMsg: '',
  loading: true,
};

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const resp = await axios.get(GET_BOOKS);
    return resp.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const postBook = createAsyncThunk('books/postBook', async (book, thunkAPI) => {
  try {
    await axios.post(POST_BOOK, book);
    return { id: book.item_id, ...book };
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const delBook = createAsyncThunk('books/delBook', async (id, thunkAPI) => {
  try {
    await axios.delete(`${DEL_BOOK}/${id}`);
    return id;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

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
  extraReducers: (builder) => {
    builder
      // GET BOOKS
      .addCase(getBooks.pending, (state) => ({
        ...state,
        loading: true,
        errMsg: '',
        error: false,
      }))
      .addCase(getBooks.fulfilled, (state, action) => {
        const ids = Object.keys(action.payload);
        const values = Object.values(action.payload).map((item) => item[0]);
        const books = [];
        for (let i = 0; i < values.length; i += 1) {
          const randomChapter = bookChapters[Math.floor(Math.random() * bookChapters.length)];
          books.push({
            id: ids[i],
            currentChapter: randomChapter,
            ...values[i],
          });
        }
        return {
          ...state,
          bookItems: books,
          loading: false,
          errMsg: '',
          error: false,
        };
      })
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        loading: false,
        errMsg: action.payload,
        error: true,
      }))
      // POST BOOK
      .addCase(postBook.pending, (state) => ({
        ...state,
      }))
      .addCase(postBook.fulfilled, (state, action) => ({
        ...state,
        bookItems: [...state.bookItems, action.payload],
      }))
      .addCase(postBook.rejected, (state) => ({
        ...state,
      }))
      // DEL BOOK
      .addCase(delBook.pending, (state) => ({
        ...state,
      }))
      .addCase(delBook.fulfilled, (state, action) => {
        const books = state.bookItems.filter((book) => book.id !== action.payload);
        return {
          ...state,
          bookItems: books,
        };
      })
      .addCase(delBook.rejected, (state) => ({
        ...state,
      }));
  },
});

export default booksSlice.reducer;
