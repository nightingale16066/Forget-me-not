import {createSlice} from '@reduxjs/toolkit';
import {deleteLike, likePhoto, photoRequestAsync} from './photoAction';

const initialState = {
  photoInfo: {},
  loading: false,
  error: ''
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  extraReducers: {
    [photoRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [photoRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.photoInfo = action.payload.data;
    },
    [photoRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.photoInfo = {};
    },
    [deleteLike.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.photoInfo = action.payload.data.photo;
    },
    [deleteLike.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [likePhoto.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.photoInfo = action.payload.data.photo;
    },
    [likePhoto.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
  }
});

export default photoSlice.reducer;
