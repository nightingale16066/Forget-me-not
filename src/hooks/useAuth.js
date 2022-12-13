import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authRequestAsync} from '../store/auth/authAction';
import {authSlice} from '../store/auth/authSlice';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authSlice.actions.authLogout());

  return [auth, loading, clearAuth];
};
