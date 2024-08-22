import style from '../Post.module.css';
import formatDate from '../../../../../utils/formatDate';

export const Date = ({date}) => {
  //console.log(style);
  return (
    <time className={style.date} dateTime={date}>{formatDate(date)}</time>
  );
};