import React from 'react';
import style from './Photo.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as Heart} from './img/heart-red.svg';
import {Link} from 'react-router-dom';

export const getDate = (date) => new Date(date).toLocaleDateString();


export const Photo = ({photo}) => {
  console.log();
  return (
    <div className={style.container}>
      <div>
        <a href={photo.user.links.html}
          target="_blank" className={style.userInfo} rel="noreferrer">
          <img src={photo.user.profile_image.small}
            alt={photo.user.name} className={style.userImage}/>
          <div className={style.userName}>{photo.user.name}</div>
        </a>
      </div>
      <Link to={`/photo/${photo.id}`}>
        <img src={photo.urls.small} className={style.image}
          alt={photo.description}
        />
      </Link>
      <div className={style.likes}>
        <Heart width={40} height={40}/>
        <div className={style.like}>{photo.likes}</div>
      </div>
      <div className={style.date}>{getDate(photo.created_at)}</div>
    </div>
  );
};

Photo.propTypes = {
  photo: PropTypes.object,
};
