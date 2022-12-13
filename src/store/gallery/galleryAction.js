import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {UNSPLASH_API} from '../../api/const';
import {CLIENT_ID} from '../../api/const';

export const galleryRequestAsync = createAsyncThunk(
  'gallery/fetch',
  (page, {getState}) => {
    const token = getState().token.token;
    const pageInGalleryRequest = getState().gallery.page;
    console.log('pageInGalleryRequest: ', pageInGalleryRequest);
    console.log('token from galleryrequestAsync: ', token);
    const authorization = (!token) ?
      `Client-ID ${CLIENT_ID}` : `Bearer ${token}`;
    const url = `&&page=${pageInGalleryRequest}`;

    return axios(`${UNSPLASH_API}/photos?per_page=30${url}`, {
      headers: {
        Authorization: authorization
      }
    })
      .then(({data}) => ({data, page}))
      .catch(error => ({error}));
  }
);
