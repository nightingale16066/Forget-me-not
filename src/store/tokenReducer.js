import {createSlice} from '@reduxjs/toolkit';
import {delToken, setToken} from '../api/useToken';
import {tokenRequestAction} from './tokenAction';

const initialState = {
  token: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    deleteToken: (state) => {
      delToken();
      state.token = '';
    }
  },
  extraReducers: {
    [tokenRequestAction.fulfilled.type]: (state, action) => {
      action.payload.token && setToken(action.payload.token);
      state.token = action.payload.token;
    }
  }
});

export default tokenSlice.reducer;

