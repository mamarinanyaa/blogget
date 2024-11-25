import style from './Main.module.css';
import { Layout } from '../../Layout/Layout';
import { Tabs } from '../Tabs/Tabs';
import {List} from '../List/List'
import { Routes, Route } from 'react-router-dom';

//console.log(generateRandomId());

export const Main = () => {
  return (
    <main className={style.main}>
      <Layout>
        <Tabs />
        <Routes>
          <Route path='/category/:page' element={<List />}/>
        </Routes>
      </Layout>
    </main>
  )  
};