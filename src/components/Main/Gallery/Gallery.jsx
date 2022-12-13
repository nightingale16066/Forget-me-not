/* eslint-disable no-unused-vars */
import React, {useEffect, useRef} from 'react';
// import {useGallery} from '../../../hooks/useGallery';
import Photo from './Photo';
import style from './Gallery.module.css';
import Masonry from 'react-masonry-css';
import {useDispatch, useSelector} from 'react-redux';
import {galleryRequestAsync} from '../../../store/gallery/galleryAction';

export const Gallery = props => {
  // const [gallery, loading, page] = useGallery();

  const gallery = useSelector(state => state.gallery.gallery);
  console.log('gallery: ', gallery);
  const loading = useSelector(state => state.gallery.loading);
  console.log('loading: ', loading);
  const page = useSelector(state => state.gallery.page);
  console.log('page from Gallery: ', page);

  const dispatch = useDispatch();
  const endlist = useRef(null);

  const breakpointColumnsObj = {
    default: 4,
    700: 2,
    500: 1
  };

  useEffect(() => {
    dispatch(galleryRequestAsync());
  }, []);

  useEffect(() => {
    console.log('useEffect worked');
    // if (!gallery.length) return;
    const observer = new IntersectionObserver((entries) => {
      console.log('entries: ', entries);
      entries[0].isIntersecting && dispatch(galleryRequestAsync());
      // if (entries[0].isIntersecting && page !== 1) {
      //   console.log('entries[0]: ', entries[0]);
      //   console.log('page before dispatch: ', page);
      //   dispatch(galleryRequestAsync());
      // }
    }, {
      rootMargin: '150px',
    });
    console.log('observer: ', observer);

    endlist.current && observer.observe(endlist.current);

    return () => {
      if (endlist.current) {
        observer.unobserve(endlist.current);
      }
    };
  }, [endlist.current]);

  return (
    <>
      <Masonry breakpointCols={breakpointColumnsObj}
        className={style['my-masonry-grid']}
        columnClassName={style['my-masonry-grid_column']}
      >
        {gallery.map((photo, index) => (
          <Photo photo={photo} key={index} />
        ))}
      </Masonry>
      <div ref={endlist} className={style.end}/>
      {loading ?
          <div className={style.wrapper}>
            <div>Загрузка</div>
          </div> : <></>
      }
    </>
  );
};
