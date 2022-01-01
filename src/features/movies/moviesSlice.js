import { createSlice } from '@reduxjs/toolkit';
import apiKey from '../../common/api/apiKey';

const initialState = {
  moviesState: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.moviesState = payload;
      //   console.log(state);
      //   console.log(payload);
    },
  },
  //   extraReducers:{}
});

export const { addMovies } = moviesSlice.actions;

export const loadMovies = (payload) => (dispatch) => {
  fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s='harry'&type=movie`)
    .then((res) => res.json())
    .then((data) => dispatch(addMovies(data)))
    .catch((err) => console.log(err));
};

export default moviesSlice.reducer;
