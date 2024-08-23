import style from './Search.module.css';
import { ReactComponent as SearchIcon} from './img/search.svg'

export const Search = () => {
  return <form className={style.form}>
      <input className={style.search} type='search'/>
      <button className={style.button}>
        <SearchIcon width={30} height={30}/>
      </button>
  </form>
}