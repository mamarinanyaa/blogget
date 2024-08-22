import style from '../Post.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as Delete} from '../img/delete.svg'

export const Content = ({title, author}) => {
  // console.log(style);
  return (
    <div className={style.content}>
        <button className={style.delete}>
          <Delete width={30} height={30}/>
        </button>
        <h2 className={style.title}>
          <a className={style.linkPost} href='#post'>{title}</a>
        </h2>
        <a className={style.linkAuthor} href='#author'>{author}</a>
      </div>
  );
};