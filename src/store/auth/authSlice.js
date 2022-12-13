import {createSlice} from '@reduxjs/toolkit';
import {authRequestAsync} from './authAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogout: (state) => {
      state.data = {};
    }
  },
  extraReducers: {
    [authRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [authRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    },
    [authRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.data = {};
    },
  }
});

export default authSlice.reducer;
