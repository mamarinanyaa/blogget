import style from './Logo.module.css';
import logo from './img/logo.svg'
import {ReactComponent as Logotipe} from './img/logo.svg'
import { URL_LOCAL } from '../../../api/const';

export const Logo = () => {
  return <a onClick={()=>window.location.href=URL_LOCAL} className={style.link}>
      {/* <img className={style.logo} src={logo} alt="Логотип"/> */}
      <Logotipe width={60} height={60}/>
  </a>
}