import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {UNSPLASH_API} from '../../api/const';

export const authRequestAsync = createAsyncThunk(
  'auth/fetch',
  (data, {getState}) => {
    const token = getState().token.token;

    if (!token) {
      return {};
    }

    return axios(`${UNSPLASH_API}me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      // eslint-disable-next-line max-len
      .then(({data: {name, profile_image: profileImage}}) => ({name, profileImage: profileImage.medium}))
      .catch(error => ({error}));
  }
);
