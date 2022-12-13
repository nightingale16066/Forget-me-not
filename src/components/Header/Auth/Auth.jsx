import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {urlAuth} from '../../../api/auth';
import {useAuth} from '../../../hooks/useAuth';
import {tokenSlice} from '../../../store/tokenReducer';
import style from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/login.svg';
import Loader from '../../../UI/Loader';

export const Auth = props => {
  const dispatch = useDispatch();
  const [isExitBtn, setIsExitBtn] = useState(false);
  const [auth, loading, clearAuth] = useAuth();

  const handleExit = () => {
    dispatch(tokenSlice.actions.deleteToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (<Loader/>) : (auth && auth.name) ? (
        <>
          <div>{auth.name}</div>
          <button className={style.btn}
            onClick={() => setIsExitBtn(!isExitBtn)}>
            <img className={style.img}
              src={auth.profileImage}
              title={auth.name}
              alt={`Avatar ${auth.name}`}
            />
          </button>
          {isExitBtn &&
            <button onClick={handleExit}
              className={style.logout}>Выйти</button>}
        </>
      ) :
        <a className={style.authLink} href={urlAuth}>
          <AuthIcon className={style.svg}/>
        </a>
      }
    </div>
  );
};
