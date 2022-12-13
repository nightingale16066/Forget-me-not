import React from 'react';
import {Layout} from '../Layout/Layout';
import {Auth} from './Auth/Auth';
import style from './Header.module.css';
import {Logo} from './Logo/Logo';

export const Header = props => {
  console.log();
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.contaier}>
          <Logo/>
          <Auth/>
        </div>
      </Layout>
    </header>
  );
};
