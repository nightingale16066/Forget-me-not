import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {CLIENT_ID} from '../api/const';
import {photoRequestAsync} from '../store/photo/photoAction';

export const usePhoto = id => {
  const photoInfo = useSelector(state => state.photo.photoInfo);
  const loading = useSelector(state => state.photo.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photoRequestAsync(id));
  }, []);

  return [photoInfo, loading];
};
