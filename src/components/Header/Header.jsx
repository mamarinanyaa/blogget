import style from './Header.module.css';
import {Layout} from '../Layout/Layout'
import Logo from './Logo'
import Heading from './Heading'
import Search from './Search'
import Auth from './Auth'
//import PropTypes from 'prop-types';

export const Header = ({token}) => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text = 'Главная'/>
          <Search/>
          <Auth token={token}/>
        </div>
      </Layout>
    </header>
  )
}