import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from '../Layout/Layout';
import Gallery from './Gallery';
import PhotoPage from './PhotoPage';
// import style from './Main.module.css';

export const Main = props => {
  console.log();
  return (
    <main>
      <Layout>
        <Routes>
          <Route path='/' element={<Gallery/>}/>
          <Route path='/photo/:id' element={<PhotoPage/>}/>
          <Route path='*' element={<>Error 404</>}/>
        </Routes>
      </Layout>
    </main>
  );
};
