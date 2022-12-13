import {
  API_URL_AUTH,
  CLIENT_ID,
  RESPONSE_TYPE,
  REDIRECT_URI,
  SCOPE,
} from './const';

const searchParams = new URLSearchParams('');

searchParams.append('client_id', CLIENT_ID);
searchParams.append('redirect_uri', REDIRECT_URI);
searchParams.append('response_type', RESPONSE_TYPE);
searchParams.append('scope', SCOPE);

export const urlAuth = `${API_URL_AUTH}${searchParams.toString()}`;
