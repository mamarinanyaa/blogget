import style from './Comment.module.css';

export const Comment = ({data}) => {
  const {author, body} = data
  return (
    <li className={style.item}>
      {author && <h3 className={style.author} size={18} tsize={22}>{author}: </h3>}
      <p className={style.comment} size={14} tsize={18}>{body}</p>
    </li>
  );
};