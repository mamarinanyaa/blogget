//import logo from './logo.svg';
import {Header} from './components/Header/Header.jsx';
import { Main } from './components/Main/Main/Main.jsx';
import { TokenContextProvider } from './context/tokenContext.jsx';
import { AuthContextProvider } from './context/authContext.jsx';

function App() {

  console.log('render app');
  return ( 
    <TokenContextProvider>
      <AuthContextProvider>
        <Header />
        <Main/>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
