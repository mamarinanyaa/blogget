//import logo from './logo.svg';
import {Header} from './components/Header/Header.jsx';
import { Main } from './components/Main/Main/Main.jsx';
import { useToken } from './hooks/useToken.js';

function App() {
  
  const [token] = useToken('');
  console.log('render app');
  return (
  <>
    <Header token={token}/>
    <Main/>
  </>
  );
}

export default App;
