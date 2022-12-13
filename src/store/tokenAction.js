/* eslint-disable max-len */
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {CLIENT_ID, TOKEN_URL, CLIENT_SECRET, REDIRECT_URI} from '../api/const';

export const tokenRequestAction = createAsyncThunk(
  'token/fetch',
  (args, toolkit) => {
    if (!(location.search.includes('?code=') && !localStorage.getItem('token'))) return {token: localStorage.getItem('token')};

    const token = location.search.replace(/\?code=/, '');

    return axios.post(`${TOKEN_URL}`, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code: token,
      grant_type: 'authorization_code'
    }).then(({data}) => ({token: data.access_token}))
      .catch(error => ({error}));
  }
);
