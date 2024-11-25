//import logo from './logo.svg';
import {Header} from './components/Header/Header.jsx';
import { Main } from './components/Main/Main/Main.jsx';
import { AuthContextProvider } from './context/authContext.jsx';
import { useDispatch} from 'react-redux';
import { store } from './store/index.js';
import { updateToken } from './store/tokenReducer.js';
import { getToken } from './hooks/token.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main/>
        </>
      }/>
    </Routes>
  );
}

export default App;
