import {createSlice} from '@reduxjs/toolkit';
import {galleryRequestAsync} from './galleryAction';

const initialState = {
  gallery: [],
  loading: false,
  error: '',
  page: 1,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  extraReducers: {
    [galleryRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [galleryRequestAsync.fulfilled.type]: (state, action) => {
      console.log('action in gallerySlice: ', action);
      //  ? action.payload.page + 1 : state.page
      state.page += 2;
      console.log('state.page: ', state.page);
      state.loading = false;
      state.error = '';
      state.gallery.push(...action.payload.data);
    },
    [galleryRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.gallery = [];
    },
  }
});

export default gallerySlice.reducer;
