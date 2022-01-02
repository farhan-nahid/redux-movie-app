import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import apiKey from '../../common/api/apiKey';
import baseURL from '../../common/api/movieApi';

const initialState = {
  moviesState: [],
  seriesState: [],
  episodeState: [],
  detailsState: {},
  status: 'idle',
  error: '',
};

export const loadMovieAsync = createAsyncThunk('movies/loadMovieAsync', async () => {
  const response = await axios.get(`${baseURL}?apikey=${apiKey}&s='black'&type=movie`);
  return response.data;
});

export const loadSeriesAsync = createAsyncThunk('movies/loadSeriesAsync', async () => {
  const response = await axios.get(`${baseURL}?apikey=${apiKey}&s='action'&type=series`);
  return response.data;
});

export const loadEpisodeAsync = createAsyncThunk('movies/loadEpisodeAsync', async () => {
  const response = await axios.get(`${baseURL}?apikey=${apiKey}&t=Game of Thrones&Season=1`);
  return response.data;
});

export const loadDetailsAsync = createAsyncThunk('movies/loadDetailsAsync', async (id) => {
  const response = await axios.get(`${baseURL}?apikey=${apiKey}&i=${id}&Plot=full`);
  return response.data;
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removePrevDetail: (state) => {
      state.detailsState = {};
    },
  },
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
    builder.addCase(loadSeriesAsync.pending, (state, action) => {
      state.status = 'Pending';
    });
    builder.addCase(loadSeriesAsync.fulfilled, (state, { payload }) => {
      state.seriesState = payload;
      state.status = 'Success';
    });
    builder.addCase(loadSeriesAsync.rejected, (state, { error: { message } }) => {
      state.status = 'Rejected';
      state.error = message;
    });
    builder.addCase(loadEpisodeAsync.pending, (state, action) => {
      state.status = 'Pending';
    });
    builder.addCase(loadEpisodeAsync.fulfilled, (state, { payload }) => {
      state.episodeState = payload;
      state.status = 'Success';
    });
    builder.addCase(loadEpisodeAsync.rejected, (state, { error: { message } }) => {
      state.status = 'Rejected';
      state.error = message;
    });
    builder.addCase(loadDetailsAsync.pending, (state, action) => {
      state.status = 'Pending';
    });
    builder.addCase(loadDetailsAsync.fulfilled, (state, { payload }) => {
      state.detailsState = payload;
      state.status = 'Success';
    });
    builder.addCase(loadDetailsAsync.rejected, (state, { error: { message } }) => {
      state.status = 'Rejected';
      state.error = message;
    });
  },
});

export const { removePrevDetail } = moviesSlice.actions;

export default moviesSlice.reducer;
