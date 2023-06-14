import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DEL_BOOK, GET_BOOKS, POST_BOOK } from '../api';

const initialState = {
  bookItems: [],
  getStatus: {
    error: false,
    errMsg: '',
    loading: true,
  },
  delStatus: {
    error: false,
    errMsg: '',
    loading: false,
  },
  postStatus: {
    error: false,
    errMsg: '',
    loading: false,
  },
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
        getStatus: {
          loading: true,
          errMsg: '',
          error: false,
        },
      }))
      .addCase(getBooks.fulfilled, (state, action) => {
        const ids = Object.keys(action.payload);
        const values = Object.values(action.payload).map((item) => item[0]);
        const books = [];
        for (let i = 0; i < values.length; i += 1) {
          books.push({ id: ids[i], ...values[i] });
        }
        return {
          ...state,
          bookItems: books,
          getStatus: {
            loading: false,
            errMsg: '',
            error: false,
          },
        };
      })
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        getStatus: {
          loading: false,
          errMsg: action.payload,
          error: true,
        },
      }))
      // POST BOOK
      .addCase(postBook.pending, (state) => ({
        ...state,
        postStatus: {
          loading: true,
          errMsg: '',
          error: false,
        },
      }))
      .addCase(postBook.fulfilled, (state, action) => ({
        ...state,
        bookItems: [...state.bookItems, action.payload],
        postStatus: {
          loading: false,
          errMsg: '',
          error: false,
        },
      }))
      .addCase(postBook.rejected, (state, action) => ({
        ...state,
        postStatus: {
          loading: false,
          errMsg: action.payload,
          error: true,
        },
      }))
      // DEL BOOK
      .addCase(delBook.pending, (state) => ({
        ...state,
        delStatus: {
          loading: true,
          errMsg: '',
          error: false,
        },
      }))
      .addCase(delBook.fulfilled, (state, action) => {
        const books = state.bookItems.filter((book) => book.id !== action.payload);
        return {
          ...state,
          bookItems: books,
          delStatus: {
            loading: false,
            errMsg: '',
            error: false,
          },
        };
      })
      .addCase(delBook.rejected, (state, action) => ({
        ...state,
        delStatus: {
          loading: false,
          errMsg: action.payload,
          error: true,
        },
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
