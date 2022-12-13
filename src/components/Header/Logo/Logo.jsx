import React from 'react';
// import style from './Logo.module.css';
import {ReactComponent as LogoIcon} from './img/logo.svg';
import {Link} from 'react-router-dom';

export const Logo = props => {
  console.log();
  return (
    <Link to={'/'}>
      <LogoIcon width={60} height={60}/>
    </Link>
  );
};
