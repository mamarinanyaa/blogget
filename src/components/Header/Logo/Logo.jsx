import style from './Logo.module.css';
import logo from './img/logo.svg'

export const Logo = () => {
  return <a className={style.link}>
      <img className={style.logo} src={logo} alt="Логотип"/>
  </a>
}