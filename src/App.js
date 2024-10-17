//import logo from './logo.svg';
import {Header} from './components/Header/Header.jsx';
import { Main } from './components/Main/Main/Main.jsx';
import { TokenContextProvider } from './context/tokenContext.jsx';
import { AuthContextProvider } from './context/authContext.jsx';
import {Provider} from 'react-redux';
import { store } from './store/index.js';

function App() {
  return (
    <Provider store={store}>
        <AuthContextProvider>
          <Header />
          <Main/>
        </AuthContextProvider>
    </Provider>
  );
}

export default App;
