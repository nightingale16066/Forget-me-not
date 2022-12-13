import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CLIENT_ID} from '../api/const';
import {galleryRequestAsync} from '../store/gallery/galleryAction';

export const useGallery = () => {
  const gallery = useSelector(state => state.gallery.gallery);
  const loading = useSelector(state => state.gallery.loading);
  const page = useSelector(state => state.gallery.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(galleryRequestAsync());
  }, [CLIENT_ID]);

  return [gallery, loading, page];
};
