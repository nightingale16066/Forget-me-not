/* eslint-disable no-unused-vars */
import {useDispatch} from 'react-redux';
import {getToken} from './api/useToken';
import './App.css';
import {Header} from './components/Header/Header';
import Main from './components/Main';
import {tokenRequestAction} from './store/tokenAction';
import {tokenSlice} from './store/tokenReducer';

function App() {
  const dispatch = useDispatch();
  dispatch(tokenRequestAction());

  return (
    <>
      <Header/>
      <Main/>
    </>
  );
}

export default App;
