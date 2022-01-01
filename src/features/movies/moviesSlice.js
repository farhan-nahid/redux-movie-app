import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import apiKey from '../../common/api/apiKey';

const initialState = {
  moviesState: [],
  status: 'idle',
  error: '',
};

export const loadMovieAsync = createAsyncThunk('books/loadBookAsync', async () => {
  const response = await axios.get(`https://www.omdbapi.com?apikey=${apiKey}&s='harry'&type=movie`);
  return response.data;
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadMovieAsync.pending, (state, action) => {
      state.status = 'Pending';
    });
    builder.addCase(loadMovieAsync.fulfilled, (state, { payload }) => {
      state.moviesState = payload;
      state.status = 'Success';
    });
    builder.addCase(loadMovieAsync.rejected, (state, { error: { message } }) => {
      state.status = 'Rejected';
      state.error = message;
    });
  },
  //   extraReducers:{}
});

export const { addMovies } = moviesSlice.actions;

// export const loadMovies = (payload) => (dispatch) => {
//   fetch(`https://www.omdbapi.com?apikey=${apiKey}&s='harry'&type=movie`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       dispatch(addMovies(data));
//     })
//     .catch((err) => console.log(err));
// };

export default moviesSlice.reducer;
