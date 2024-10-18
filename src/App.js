//import logo from './logo.svg';
import {Header} from './components/Header/Header.jsx';
import { Main } from './components/Main/Main/Main.jsx';
import { TokenContextProvider } from './context/tokenContext.jsx';
import { AuthContextProvider } from './context/authContext.jsx';
import {Provider, useDispatch} from 'react-redux';
import { store } from './store/index.js';
import { useEffect } from 'react';
import { updateToken } from './store/tokenReducer.js';
import { getToken } from './hooks/token.js';

function App() {
  // useEffect(()=>{
  //   localStorage.setItem('bearer', '')
  // }
  // )
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    
      <AuthContextProvider>
        <Header />
        <Main/>
      </AuthContextProvider>

  );
}

export default App;
