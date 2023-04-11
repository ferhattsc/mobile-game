import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk('data/register', async params => {
  console.log('paramss', params);
  let response;
  try {
    response = await axios.post('http://localhost:5001/auth/register', params);
    console.log('responseee', response);
  } catch (err) {
    console.log('errorr', err);
  }
  return response.data;
});
export const login = createAsyncThunk('data/login', async params => {
  let response;
  try {
    response = await axios.post('http://localhost:5001/auth/login', params);
  } catch (err) {
    console.log('errorr', err);
  }
  return response.data;
});

export const dataSlice = createSlice({
  name: 'data',
  initialState: {},
  reducers: {
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    setResetSelectedFilter: (state, action) => {
      state.selectedFilter = {id: 1, name: 'All'};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.locations = action.payload;
    },
  },
});

export const {setSelectedFilter, setResetSelectedFilter} = dataSlice.actions;

export default dataSlice.reducer;
