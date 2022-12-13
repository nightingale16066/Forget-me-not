import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {CLIENT_ID, UNSPLASH_API} from '../../api/const';

export const photoRequestAsync = createAsyncThunk(
  'photo/fetch',
  (id, {getState}) => {
    const token = getState().token.token;
    const authorization = (!token) ?
      `Client-ID ${CLIENT_ID}` : `Bearer ${token}`;

    return axios(`${UNSPLASH_API}/photos/${id}`, {
      headers: {
        Authorization: authorization
      }
    })
      .then(({data}) => ({data}))
      .catch(error => ({error}));
  }
);

export const deleteLike = createAsyncThunk(
  'photo/deleteLike',
  (id, {getState}) => {
    const token = getState().token.token;
    return axios.delete(`${UNSPLASH_API}/photos/${id}/like`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        id
      }
    })
      .then(({data}) => ({data}))
      .catch(error => ({error}));
  }
);

export const likePhoto = createAsyncThunk(
  'photo/likePhoto',
  (id, {getState}) => {
    const token = getState().token.token;
    return axios.post(`${UNSPLASH_API}/photos/${id}/like`, {id}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(({data}) => ({data}))
      .catch(error => ({error}));
  }
);
