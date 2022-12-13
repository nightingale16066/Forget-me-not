/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import style from './PhotoPage.module.css';
import Loader from '../../../UI/Loader';
import {CLIENT_ID} from '../../../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteLike, likePhoto, photoRequestAsync} from '../../../store/photo/photoAction';
import {ReactComponent as Heart} from '../Gallery/Photo/img/heart-red.svg';
import {ReactComponent as BlankHeart} from '../Gallery/Photo/img/heart-blank.svg';
import {getDate} from '../Gallery/Photo/Photo';


export const PhotoPage = props => {
  const {id} = useParams();
  const photoInfo = useSelector(state => state.photo.photoInfo);
  const loading = useSelector(state => state.photo.loading);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  const handleLike = () => {
    if (!token) return;
    dispatch(likePhoto(id));
  };

  const handleUnlike = () => {
    if (!token) return;
    dispatch(deleteLike(id));
  };

  useEffect(() => {
    dispatch(photoRequestAsync(id));
  }, [dispatch]);

  return (
    <>
      {
        loading ?
          <div className={style.containerLoader}>
            <Loader/>
          </div> :
          <div className={style.container}>
            {Object.keys(photoInfo).length &&
              <>
                <div onClick={handleReturn} className={style.btn}>Go back</div>
                <div className={style.photo__container}>
                  <img src={photoInfo.urls.small}
                    alt={photoInfo.description} />
                </div>
                <div className={style.photoInfo}>
                  <a href={photoInfo.user.links.html} className={style.useInfo} target='_blank' rel="noreferrer">
                    <img src={photoInfo.user.profile_image.small} className={style.useInfoImg} alt={photoInfo.user.name} />
                    <div>{photoInfo.user.name}</div>
                  </a>
                  <div>Published: {getDate(photoInfo.created_at)}</div>
                  <div className={style.likes}>
                    <div className={style.likeBtn}>
                      {
                        photoInfo.liked_by_user ? <Heart onClick={handleUnlike} width={20} height={20}/> :
                          <BlankHeart onClick={handleLike} width={20} height={20}/>
                      }
                    </div>
                    <div className={style.like}>{photoInfo.likes}</div>
                  </div>
                </div>
              </>
            }
          </div>
      }
    </>
  );
};
