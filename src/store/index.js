import {configureStore} from '@reduxjs/toolkit';
import tokenReducer from './tokenReducer';
import authReducer from './auth/authSlice';
import photoReducer from './photo/photoSlice';
import galleryReducer from './gallery/gallerySlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    gallery: galleryReducer,
    photo: photoReducer,
  }
});
